function parseHugoParams(str) {
  var result = {};
  var re = /([\w.]+)=(?:"([^"]*)"|(\S+))/g;
  var m;
  while ((m = re.exec(str)) !== null) {
    var val = m[2] !== undefined ? m[2] : m[3];
    if (val === "true") val = true;
    else if (val === "false") val = false;
    result[m[1]] = val;
  }
  return result;
}

function shortcodePattern(name, bracket) {
  var open = bracket || "[%<]";
  var close = bracket === "%" ? "%" : bracket === "<" ? ">" : "[%>]";
  return new RegExp(
    "\\{\\{" +
      open +
      " " +
      name +
      "(?![\\w-])([\\s\\S]*?)" +
      close +
      "\\}\\}([\\s\\S]*?)\\{\\{" +
      open +
      " \\/" +
      name +
      " " +
      close +
      "\\}\\}",
  );
}

function selfClosingPattern(name, options) {
  options = options || {};
  var paramsCapture = options.inline ? "([^\\n]*?)" : "([\\s\\S]*?)";
  return new RegExp(
    "\\{\\{[%<] " + name + "(?![\\w-])" + paramsCapture + "[%>/]\\}\\}",
  );
}

function dualFormPattern(name) {
  return new RegExp(
    "\\{\\{[%<] " +
      name +
      "(?![\\w-])([\\s\\S]*?)(?:\\/[%>]\\}\\}|[%>]\\}\\}([\\s\\S]*?)\\{\\{[%<] \\/" +
      name +
      " [%>]\\}\\})",
  );
}

function renderParamList(fields, data) {
  var out = [];
  (fields || []).forEach(function (field) {
    var spec = field.param;
    if (!spec) return;
    var value = data[field.name];
    if (spec.transform) value = spec.transform(value, data);
    if (!spec.required && !value) return;
    if (spec.positional) {
      out.push(spec.quote ? '"' + value + '"' : String(value));
      return;
    }
    var paramName = spec.name || field.name;
    out.push(paramName + "=" + (spec.bare ? String(value) : '"' + value + '"'));
  });
  return out;
}

function renderInlineOpen(bracket, name, params, closer) {
  var paramsStr = params.join(" ");
  var close =
    closer === "slash"
      ? bracket === "%"
        ? "/%}}"
        : "/>}}"
      : bracket === "%"
        ? "%}}"
        : ">}}";
  return (
    "{{" +
    bracket +
    " " +
    name +
    (paramsStr ? " " + paramsStr : "") +
    " " +
    close
  );
}

function renderMultilineOpen(bracket, name, params, opts) {
  opts = opts || {};
  var pad = "    ";
  var headParams = opts.firstInline ? params.slice(0, 1) : [];
  var restParams = opts.firstInline ? params.slice(1) : params;
  var close =
    opts.closer === "slash"
      ? bracket === "%"
        ? "/%}}"
        : "/>}}"
      : bracket === "%"
        ? "%}}"
        : ">}}";
  var header =
    "{{" +
    bracket +
    " " +
    name +
    (headParams.length ? " " + headParams.join(" ") : "");
  var lines = [header].concat(
    restParams.map(function (p) {
      return pad + p;
    }),
  );
  return lines.join("\n") + "\n" + close;
}

function makeToBlock(name, cfg) {
  var bracket = cfg.bracket || "%";
  var bodyMode = cfg.bodyMode || "none";
  var bodySep = cfg.bodySeparator || "\n";
  var closeTag =
    "{{" + bracket + " /" + name + " " + (bracket === "%" ? "%}}" : ">}}");

  function openTag(params, closer) {
    var wrap = cfg.multiline && params.length > (cfg.multilineThreshold || 0);
    if (wrap) {
      return renderMultilineOpen(bracket, name, params, {
        firstInline: cfg.firstInline,
        closer: closer,
      });
    }
    return renderInlineOpen(bracket, name, params, closer);
  }

  return function (data) {
    var params = renderParamList(cfg.fields, data);

    if (bodyMode === "none") {
      return openTag(params, "plain");
    }

    var body = String(data[cfg.bodyField || "body"] || "");

    if (bodyMode === "dual") {
      if (!body.trim()) return openTag(params, "slash");
      return openTag(params, "plain") + bodySep + body + bodySep + closeTag;
    }

    var open = openTag(params, "plain");

    if (bodyMode === "optionalPaired") {
      return open + "\n" + (body ? body + "\n" : "") + closeTag;
    }

    return open + bodySep + body + bodySep + closeTag;
  };
}

var highlightFields = [
  {
    name: "type",
    label: "Type",
    widget: "select",
    options: [
      { label: "Important", value: "important" },
      { label: "Tip", value: "tip" },
      { label: "Confusion", value: "confusion" },
      { label: "Inofficial", value: "inofficial" },
    ],
    param: { positional: true, required: true },
  },
  {
    name: "body",
    label: "Content",
    widget: "markdown",
    editor_components: ["button", "float-image", "highlight", "icon", "image"],
  },
];

CMS.registerEditorComponent({
  id: "highlight",
  label: "Highlight",
  icon: "stylus_highlighter",
  fields: highlightFields,
  pattern: shortcodePattern("highlight", "%"),
  fromBlock: function (match) {
    return { type: match[1].trim(), body: match[2].trim() };
  },
  toBlock: makeToBlock("highlight", {
    fields: highlightFields,
    bodyMode: "required",
    bodySeparator: "\n",
  }),
  toPreview: function () {
    return "";
  },
});

CMS.registerEditorComponent({
  id: "highlight-raw",
  label: "Highlight",
  icon: "stylus_highlighter",
  fields: highlightFields,
  pattern: shortcodePattern("highlight", "<"),
  fromBlock: function (match) {
    return { type: match[1].trim(), body: match[2].trim() };
  },
  toBlock: makeToBlock("highlight", {
    bracket: "<",
    fields: highlightFields,
    bodyMode: "required",
    bodySeparator: "\n",
  }),
  toPreview: function () {
    return "";
  },
});

var expanderFields = [
  {
    name: "title",
    label: "Title",
    widget: "string",
    param: { positional: true, quote: true, required: true },
  },
  {
    name: "variant",
    label: "Variant",
    widget: "select",
    options: [
      { label: "None", value: "" },
      { label: "Border", value: "border" },
      { label: "Info", value: "info" },
    ],
    required: false,
    param: { positional: true },
  },
  {
    name: "body",
    label: "Content",
    widget: "markdown",
    editor_components: [
      "button",
      "float-image",
      "highlight-raw",
      "icon",
      "image",
    ],
  },
];

CMS.registerEditorComponent({
  id: "expander",
  label: "Expander",
  icon: "arrow_drop_down_circle",
  fields: expanderFields,
  pattern: shortcodePattern("expander"),
  fromBlock: function (match) {
    var titleMatch = match[1].match(/"([^"]*)"/);
    var rest = match[1].replace(/"[^"]*"/, "").trim();
    var variantMatch = rest.match(/^(\w+)/);
    return {
      title: titleMatch ? titleMatch[1] : "",
      variant: variantMatch ? variantMatch[1] : "",
      body: match[2].trim(),
    };
  },
  toBlock: makeToBlock("expander", {
    fields: expanderFields,
    bodyMode: "required",
    bodySeparator: "\n\n",
  }),
  toPreview: function () {
    return "";
  },
});

var fipValidityFields = [
  {
    name: "type",
    label: "Type",
    widget: "select",
    options: [
      { label: "FIP Coupon", value: "fip-coupon" },
      { label: "FIP Reduced Ticket", value: "fip-reduced-ticket" },
      { label: "FIP Global Fare", value: "fip-global-fare" },
      { label: "Additional", value: "additional" },
    ],
    param: { required: true },
  },
  {
    name: "status",
    label: "Status",
    widget: "select",
    options: [
      { label: "Valid", value: "valid" },
      { label: "Invalid", value: "invalid" },
      { label: "Unknown", value: "unknown" },
    ],
    param: { required: true },
  },
  {
    name: "subtitle",
    label: "Subtitle",
    widget: "string",
    required: false,
    param: {},
  },
  {
    name: "text",
    label: "Additional Text",
    widget: "string",
    required: false,
    param: {},
  },
  {
    name: "disable_dialog",
    label: "Disable info dialog",
    widget: "boolean",
    default: false,
    required: false,
    param: { bare: true },
  },
];

CMS.registerEditorComponent({
  id: "fip-validity",
  label: "FIP Validity Badge",
  icon: "verified",
  fields: fipValidityFields,
  pattern: selfClosingPattern("fip-validity"),
  fromBlock: function (match) {
    var p = parseHugoParams(match[1]);
    return {
      type: p.type || "fip-coupon",
      status: p.status || "valid",
      subtitle: p.subtitle || "",
      text: p.text || "",
      disable_dialog: p.disable_dialog === true,
    };
  },
  toBlock: makeToBlock("fip-validity", {
    bracket: "<",
    fields: fipValidityFields,
    bodyMode: "none",
  }),
  toPreview: function () {
    return "";
  },
});

var trainCategoryFields = [
  {
    name: "id",
    label: "ID (anchor)",
    widget: "string",
    param: { required: true },
  },
  {
    name: "title",
    label: "Title",
    widget: "string",
    param: { required: true },
  },
  {
    name: "type",
    label: "Type",
    widget: "select",
    options: [
      { label: "Highspeed", value: "highspeed" },
      { label: "Regional", value: "regional" },
      { label: "Subway", value: "subway" },
      { label: "Sleeper", value: "sleeper" },
      { label: "Funicular", value: "funicular" },
      { label: "Bus", value: "bus" },
      { label: "Ship", value: "ship" },
      { label: "Tram", value: "tram" },
    ],
    param: { required: true },
  },
  {
    name: "fip_accepted",
    label: "FIP accepted",
    widget: "select",
    options: [
      { label: "No", value: "false" },
      { label: "Yes", value: "true" },
      { label: "Partially", value: "partially" },
      { label: "Unknown", value: "unknown" },
    ],
    default: "true",
    param: { bare: true, required: true },
  },
  {
    name: "reservation_required",
    label: "Reservation required",
    widget: "select",
    options: [
      { label: "No", value: "false" },
      { label: "Yes", value: "true" },
      { label: "Partially", value: "partially" },
    ],
    default: "false",
    param: { bare: true, required: true },
  },
  {
    name: "reservation_possible",
    label: "Reservation possible",
    widget: "select",
    options: [
      { label: "No", value: "false" },
      { label: "Yes", value: "true" },
      { label: "Partially", value: "partially" },
    ],
    default: "false",
    param: { bare: true, required: true },
  },
  {
    name: "route_overview_url",
    label: "Route overview URL",
    widget: "string",
    required: false,
    param: {},
  },
  {
    name: "additional_information_url",
    label: "Additional information URL",
    widget: "string",
    required: false,
    param: {},
  },
  {
    name: "body",
    label: "Description",
    widget: "markdown",
    editor_components: [
      "button",
      "float-image",
      "highlight-raw",
      "icon",
      "image",
    ],
  },
];

CMS.registerEditorComponent({
  id: "train-category",
  label: "Train Category",
  icon: "train",
  fields: trainCategoryFields,
  pattern: shortcodePattern("train-category"),
  fromBlock: function (match) {
    var p = parseHugoParams(match[1]);
    return {
      id: String(p.id || ""),
      title: String(p.title || ""),
      type: String(p.type || "regional"),
      fip_accepted: String(p.fip_accepted ?? true),
      reservation_required: String(p.reservation_required || "false"),
      reservation_possible: String(p.reservation_possible || "false"),
      route_overview_url: String(p.route_overview_url || ""),
      additional_information_url: String(p.additional_information_url || ""),
      body: match[2].trim(),
    };
  },
  toBlock: makeToBlock("train-category", {
    fields: trainCategoryFields,
    bodyMode: "required",
    bodySeparator: "\n\n",
    multiline: true,
  }),
  toPreview: function () {
    return "";
  },
});

var bookingFields = [
  {
    name: "id",
    label: "Booking Platform",
    widget: "relation",
    collection: "booking",
    search_fields: ["title"],
    value_field: "{{slug}}",
    display_fields: ["title"],
    param: {
      required: true,
      transform: function (v) {
        return String(v || "").replace(/\/index$/, "");
      },
    },
  },
  {
    name: "booking_data_link",
    label: "Booking Platform Link",
    widget: "cms-edit-link",
    static: true,
    href: "#/collections/booking",
    label_template: "Manage Booking Platforms \u2192",
  },
  {
    name: "subtitle",
    label: "Subtitle",
    widget: "string",
    required: false,
    param: {},
  },
  {
    name: "classes_first",
    label: "1st class reservation costs (overwrite)",
    widget: "string",
    required: false,
    param: { name: "classes.first" },
  },
  {
    name: "classes_second",
    label: "2nd class reservation costs (overwrite)",
    widget: "string",
    required: false,
    param: { name: "classes.second" },
  },
  {
    name: "fip_50",
    label: "FIP 50 (override)",
    widget: "select",
    required: false,
    options: [
      { label: "Default", value: "" },
      { label: "Hide", value: "nil" },
      { label: "Yes", value: "true" },
      { label: "No", value: "false" },
    ],
    default: "",
    param: { bare: true },
  },
  {
    name: "fip_75",
    label: "FIP 75 (override)",
    widget: "select",
    required: false,
    options: [
      { label: "Default", value: "" },
      { label: "Hide", value: "nil" },
      { label: "Yes", value: "true" },
      { label: "No", value: "false" },
    ],
    default: "",
    param: { bare: true },
  },
  {
    name: "fip_global_fare",
    label: "FIP Global Fare (override)",
    widget: "select",
    required: false,
    options: [
      { label: "Default", value: "" },
      { label: "Hide", value: "nil" },
      { label: "Yes", value: "true" },
      { label: "No", value: "false" },
    ],
    default: "",
    param: { bare: true },
  },
  {
    name: "reservations",
    label: "Reservations (override)",
    widget: "select",
    required: false,
    options: [
      { label: "Default", value: "" },
      { label: "Hide", value: "nil" },
      { label: "Yes", value: "true" },
      { label: "No", value: "false" },
    ],
    default: "",
    param: { bare: true },
  },
  {
    name: "fee",
    label: "Fee (override)",
    widget: "string",
    required: false,
    hint: 'Overwrites the booking fee text, e.g. "5 %". Leave empty to use the booking platform default.',
    param: {},
  },
  {
    name: "body",
    label: "Additional info",
    widget: "markdown",
    required: false,
    editor_components: ["button", "float-image", "icon", "image"],
  },
];

CMS.registerEditorComponent({
  id: "booking",
  label: "Booking",
  icon: "confirmation_number",
  fields: bookingFields,
  pattern: dualFormPattern("booking"),
  fromBlock: function (match) {
    var p = parseHugoParams(match[1]);
    var rawId = p.id ? String(p.id) : "";
    return {
      id: rawId,
      booking_data_link: rawId,
      subtitle: String(p.subtitle || ""),
      classes_first: String(p["classes.first"] || ""),
      classes_second: String(p["classes.second"] || ""),
      fip_50: String(p.fip_50 ?? ""),
      fip_75: String(p.fip_75 ?? ""),
      fip_global_fare: String(p.fip_global_fare ?? ""),
      reservations: String(p.reservations ?? ""),
      fee: String(p.fee || ""),
      body: match[2] ? match[2].trim() : "",
    };
  },
  toBlock: makeToBlock("booking", {
    fields: bookingFields,
    bodyMode: "dual",
    bodySeparator: "\n",
    multiline: true,
    firstInline: true,
    multilineThreshold: 1,
  }),
  toPreview: function () {
    return "";
  },
});

var bookingSectionFields = [
  {
    name: "section",
    label: "Section",
    widget: "select",
    options: [
      { label: "FIP 50", value: "fip_50" },
      { label: "FIP 75", value: "fip_75" },
      { label: "FIP Global Fare", value: "fip_global_fare" },
      { label: "Reservations", value: "reservations" },
    ],
    param: { positional: true, quote: true, required: true },
  },
  {
    name: "body",
    label: "Content",
    widget: "markdown",
    editor_components: [
      "button",
      "float-image",
      "highlight-raw",
      "icon",
      "image",
    ],
  },
];

CMS.registerEditorComponent({
  id: "booking-section",
  label: "Booking Section",
  icon: "transit_ticket",
  fields: bookingSectionFields,
  pattern: shortcodePattern("booking-section"),
  fromBlock: function (match) {
    var sectionMatch = match[1].match(/"(\w+)"/);
    return {
      section: sectionMatch ? sectionMatch[1] : "",
      body: match[2].trim(),
    };
  },
  toBlock: makeToBlock("booking-section", {
    fields: bookingSectionFields,
    bodyMode: "required",
    bodySeparator: "\n",
  }),
  toPreview: function () {
    return "";
  },
});

var buttonFields = [
  {
    name: "destination",
    label: "URL",
    widget: "string",
    param: { required: true },
  },
  {
    name: "text",
    label: "Button text",
    widget: "string",
    param: { required: true },
  },
];

CMS.registerEditorComponent({
  id: "button",
  label: "Button",
  icon: "highlight_mouse_cursor",
  fields: buttonFields,
  pattern: selfClosingPattern("button"),
  fromBlock: function (match) {
    var p = parseHugoParams(match[1]);
    return {
      destination: String(p.destination || ""),
      text: String(p.text || ""),
    };
  },
  toBlock: makeToBlock("button", {
    bracket: "<",
    fields: buttonFields,
    bodyMode: "none",
  }),
  toPreview: function () {
    return "";
  },
});

var identifyOperatorFields = [
  {
    name: "sources",
    label: "Sources",
    widget: "relation",
    collection: "identify-operator",
    search_fields: ["title"],
    value_field: "{{slug}}",
    display_fields: ["title"],
    multiple: true,
    required: false,
    param: {
      transform: function (value) {
        var arr = Array.isArray(value) ? value : value ? [value] : [];
        return arr
          .map(function (s) {
            return String(s).replace(/\/index$/, "");
          })
          .join(",");
      },
    },
  },
  {
    name: "body",
    label: "Additional info",
    widget: "markdown",
    required: false,
    editor_components: ["button", "float-image", "highlight", "icon", "image"],
  },
];

CMS.registerEditorComponent({
  id: "identify-operator",
  label: "Identify Operator",
  icon: "search",
  fields: identifyOperatorFields,
  pattern: dualFormPattern("identify-operator"),
  fromBlock: function (match) {
    var p = parseHugoParams(match[1] || "");
    return {
      sources: p.sources
        ? p.sources.split(",").map(function (s) {
            return s.trim();
          })
        : [],
      body: match[2] ? match[2].trim() : "",
    };
  },
  toBlock: makeToBlock("identify-operator", {
    bracket: "<",
    fields: identifyOperatorFields,
    bodyMode: "dual",
    bodySeparator: "\n",
  }),
  toPreview: function () {
    return "";
  },
});

var satelliteFields = [
  {
    name: "body",
    label: "Additional info",
    widget: "markdown",
    required: false,
    editor_components: ["button", "float-image", "icon", "image"],
  },
];

CMS.registerEditorComponent({
  id: "satellite",
  label: "Satellite Notice",
  icon: "satellite_alt",
  fields: satelliteFields,
  pattern: dualFormPattern("satellite"),
  fromBlock: function (match) {
    return { body: match[2] ? match[2].trim() : "" };
  },
  toBlock: makeToBlock("satellite", {
    fields: satelliteFields,
    bodyMode: "dual",
    bodySeparator: "\n",
  }),
  toPreview: function () {
    return "";
  },
});

var dialogFields = [
  {
    name: "id",
    label: "Dialog ID (anchor)",
    widget: "string",
    param: { required: true },
  },
  {
    name: "title",
    label: "Title",
    widget: "string",
    param: { required: true },
  },
  {
    name: "body",
    label: "Content",
    widget: "markdown",
    editor_components: ["button", "float-image", "highlight", "icon", "image"],
  },
];

CMS.registerEditorComponent({
  id: "dialog",
  label: "Dialog",
  icon: "open_in_browser",
  fields: dialogFields,
  pattern: shortcodePattern("dialog"),
  fromBlock: function (match) {
    var p = parseHugoParams(match[1]);
    return {
      id: String(p.id || ""),
      title: String(p.title || ""),
      body: match[2].trim(),
    };
  },
  toBlock: makeToBlock("dialog", {
    fields: dialogFields,
    bodyMode: "required",
    bodySeparator: "\n",
    multiline: true,
  }),
  toPreview: function () {
    return "";
  },
});

var floatImageFields = [
  { name: "src", label: "Image", widget: "image", param: { required: true } },
  {
    name: "alt",
    label: "Alt text",
    widget: "string",
    param: { required: true },
  },
  {
    name: "caption",
    label: "Caption",
    widget: "string",
    required: false,
    param: {},
  },
  {
    name: "width",
    label: "Width (CSS)",
    widget: "string",
    default: "50%",
    required: false,
    param: {},
  },
  {
    name: "position",
    label: "Position",
    widget: "select",
    options: [
      { label: "Right", value: "right" },
      { label: "Left", value: "left" },
    ],
    default: "right",
    param: {},
  },
  {
    name: "body",
    label: "Surrounding text",
    widget: "markdown",
    required: false,
    editor_components: ["button", "icon", "image"],
  },
];

CMS.registerEditorComponent({
  id: "float-image",
  label: "Float Image",
  icon: "format_image_left",
  fields: floatImageFields,
  pattern: shortcodePattern("float-image"),
  fromBlock: function (match) {
    var p = parseHugoParams(match[1]);
    return {
      src: String(p.src || ""),
      alt: String(p.alt || ""),
      caption: String(p.caption || ""),
      width: String(p.width || "50%"),
      position: String(p.position || "right"),
      body: match[2].trim(),
    };
  },
  toBlock: makeToBlock("float-image", {
    fields: floatImageFields,
    bodyMode: "optionalPaired",
    multiline: true,
  }),
  toPreview: function () {
    return "";
  },
});

CMS.registerEditorComponent({
  id: "wip",
  label: "Work in Progress",
  icon: "construction",
  fields: [],
  pattern: selfClosingPattern("wip"),
  fromBlock: function () {
    return {};
  },
  toBlock: makeToBlock("wip", { bracket: "<", fields: [], bodyMode: "none" }),
  toPreview: function () {
    return "";
  },
});

var iconFields = [
  {
    name: "name",
    label: "Icon Name",
    widget: "string",
    hint: 'Name of a Material Symbols icon, e.g. "help". See https://fonts.google.com/icons?icon.set=Material+Symbols for available names.',
    param: { positional: true, quote: true, required: true },
  },
];

CMS.registerEditorComponent({
  id: "icon",
  label: "Icon",
  icon: "add_reaction",
  mode: "dialog",
  summary: "Icon {{name}}",
  fields: iconFields,
  pattern: selfClosingPattern("icon", { inline: true }),
  fromBlock: function (match) {
    var titleMatch = match[1].match(/"([^"]*)"/);
    return { name: titleMatch ? titleMatch[1] : "" };
  },
  toBlock: makeToBlock("icon", {
    bracket: "<",
    fields: iconFields,
    bodyMode: "none",
  }),
  toPreview: function () {
    return "";
  },
});

CMS.registerEditorComponent({
  id: "footnote-reference",
  label: "Footnote Reference",
  icon: "asterisk",
  mode: "dialog",
  summary: "Footnote [^{{id}}]",
  fields: [
    {
      name: "id",
      label: "Number",
      widget: "cms-number-with-usage",
      template:
        "You need to add the footnote with number {value} at the bottom of the page if it doesn't exist yet.",
      required: true,
    },
  ],
  pattern: /\[\^([^\]]+)\](?!:)/,
  fromBlock: function (match) {
    return { id: String(match[1] || "") };
  },
  toBlock: function (data) {
    return "[^" + (data.id || "") + "]";
  },
  toPreview: function () {
    return "";
  },
});

var updateFields = [
  {
    name: "date",
    label: "Date",
    widget: "datetime",
    date_format: "YYYY-MM-DD",
    time_format: false,
    param: { required: true },
  },
  {
    name: "body",
    label: "Content",
    widget: "markdown",
    editor_components: ["button", "float-image", "highlight", "icon", "image"],
  },
];

CMS.registerEditorComponent({
  id: "update",
  label: "Update",
  icon: "update",
  fields: updateFields,
  pattern: shortcodePattern("update"),
  fromBlock: function (match) {
    var p = parseHugoParams(match[1]);
    return { date: String(p.date || ""), body: match[2].trim() };
  },
  toBlock: makeToBlock("update", {
    fields: updateFields,
    bodyMode: "required",
    bodySeparator: "\n",
  }),
  toPreview: function () {
    return "";
  },
});

var columnFields = [
  {
    name: "width",
    label: "Width (CSS)",
    widget: "string",
    param: { required: true },
  },
  {
    name: "body",
    label: "Content",
    widget: "markdown",
    editor_components: ["button", "float-image", "highlight", "icon", "image"],
  },
];

CMS.registerEditorComponent({
  id: "column",
  label: "Column",
  icon: "vertical_split",
  fields: columnFields,
  pattern: shortcodePattern("column"),
  fromBlock: function (match) {
    var p = parseHugoParams(match[1]);
    return { width: String(p.width || ""), body: match[2].trim() };
  },
  toBlock: makeToBlock("column", {
    fields: columnFields,
    bodyMode: "required",
    bodySeparator: "\n",
  }),
  toPreview: function () {
    return "";
  },
});

var columnsFields = [
  {
    name: "body",
    label: "Content",
    widget: "markdown",
    editor_components: ["column", "icon"],
  },
];

CMS.registerEditorComponent({
  id: "columns",
  label: "Columns",
  icon: "view_column",
  fields: columnsFields,
  pattern: shortcodePattern("columns"),
  fromBlock: function (match) {
    return { body: match[2].trim() };
  },
  toBlock: makeToBlock("columns", {
    fields: columnsFields,
    bodyMode: "required",
    bodySeparator: "\n",
  }),
  toPreview: function () {
    return "";
  },
});

var fipValidityTableFields = [
  {
    name: "type",
    label: "Type",
    widget: "select",
    options: [
      { label: "FIP Coupon", value: "fip-coupon" },
      { label: "FIP Reduced Ticket", value: "fip-reduced-ticket" },
    ],
    param: { required: true },
  },
  {
    name: "validity_data_link",
    label: "FIP Validity Table",
    widget: "cms-edit-link",
    get_value: function () {
      var match = window.location.hash.match(
        /#\/collections\/application\/entries\/([^/]+)/,
      );
      return match ? match[1] : "";
    },
    href: "#/collections/fip-validity/entries/{value}/validity",
    label_template:
      "Edit the FIP Validity Table for \u201c{value}\u201d \u2192",
    empty_hint: "Save this page first to link its FIP Validity Table.",
  },
];

var footnoteFields = [
  {
    name: "id",
    label: "Number",
    widget: "cms-number-with-usage",
    template:
      "You can use the footnote by adding footnote reference with number {value} in the text editor.",
    param: { required: true },
  },
  {
    name: "name",
    label: "Source Name",
    widget: "string",
    param: { required: true },
  },
  {
    name: "link",
    label: "Link",
    widget: "string",
    param: { required: true },
  },
];

CMS.registerEditorComponent({
  id: "footnote",
  label: "Footnote",
  icon: "inbox_text_asterisk",
  fields: footnoteFields,
  pattern: /^\[\^([^\]]+)\]: \[([^\]]*)\]\(([^)]*)\)$/,
  fromBlock: function (match) {
    var num = Number(match[1]);
    var id = Number.isNaN(num) ? match[1] : num;
    return {
      id: id,
      name: String(match[2] || ""),
      link: String(match[3] || ""),
    };
  },
  toBlock: function (data) {
    return (
      "[^" +
      (data.id ?? "") +
      "]: [" +
      (data.name || "") +
      "](" +
      (data.link || "") +
      ")"
    );
  },
  toPreview: function () {
    return "";
  },
});

CMS.registerEditorComponent({
  id: "fip-validity-table",
  label: "FIP Validity Table",
  icon: "table",
  fields: fipValidityTableFields,
  pattern: selfClosingPattern("fip-validity-table"),
  fromBlock: function (match) {
    var p = parseHugoParams(match[1]);
    return { type: p.type || "fip-coupon" };
  },
  toBlock: makeToBlock("fip-validity-table", {
    bracket: "<",
    fields: fipValidityTableFields,
    bodyMode: "none",
  }),
  toPreview: function () {
    return "";
  },
});
