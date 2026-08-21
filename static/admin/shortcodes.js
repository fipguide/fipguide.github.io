(function () {
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

  function selfClosingPattern(name) {
    return new RegExp(
      "\\{\\{[%<] " + name + "(?![\\w-])([\\s\\S]*?)[%>/]\\}\\}",
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
      out.push(
        field.name + "=" + (spec.bare ? String(value) : '"' + value + '"'),
      );
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
      options: ["important", "tip", "confusion", "inofficial"],
      param: { positional: true, required: true },
    },
    {
      name: "body",
      label: "Content",
      widget: "markdown",
      editor_components: ["button", "float-image", "highlight", "image"],
    },
  ];

  CMS.registerEditorComponent({
    id: "highlight",
    label: "Highlight",
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
  });

  CMS.registerEditorComponent({
    id: "highlight-raw",
    label: "Highlight",
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
      options: [{ label: "None", value: "" }, "border", "info"],
      required: false,
      param: { positional: true },
    },
    {
      name: "body",
      label: "Content",
      widget: "markdown",
      editor_components: ["button", "float-image", "highlight-raw", "image"],
    },
  ];

  CMS.registerEditorComponent({
    id: "expander",
    label: "Expander",
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
  });

  var fipValidityFields = [
    {
      name: "type",
      label: "Type",
      widget: "select",
      options: [
        "fip-coupon",
        "fip-reduced-ticket",
        "fip-global-fare",
        "additional",
      ],
      param: { required: true },
    },
    {
      name: "status",
      label: "Status",
      widget: "select",
      options: ["valid", "invalid", "unknown"],
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
        "highspeed",
        "regional",
        "subway",
        "sleeper",
        "funicular",
        "bus",
        "ship",
        "tram",
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
      editor_components: ["button", "float-image", "highlight-raw", "image"],
    },
  ];

  CMS.registerEditorComponent({
    id: "train-category",
    label: "Train Category",
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
      get_value: function (props) {
        return String(props.value || "")
          .replace(/\/index$/, "")
          .trim();
      },
      href: "#/collections/booking/entries/{value}/index",
      label_template: "Edit the Booking Platform \u201c{value}\u201d \u2192",
      empty_hint: "Select a booking platform above to edit it.",
    },
    {
      name: "subtitle",
      label: "Subtitle",
      widget: "string",
      required: false,
      param: {},
    },
    {
      name: "classes.first",
      label: "1st class reservation costs (overwrite)",
      widget: "string",
      required: false,
      param: {},
    },
    {
      name: "classes.second",
      label: "2nd class reservation costs (overwrite)",
      widget: "string",
      required: false,
      param: {},
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
      editor_components: ["button", "float-image", "image"],
    },
  ];

  CMS.registerEditorComponent({
    id: "booking",
    label: "Booking",
    fields: bookingFields,
    pattern: dualFormPattern("booking"),
    fromBlock: function (match) {
      var p = parseHugoParams(match[1]);
      var rawId = p.id ? String(p.id) : "";
      return {
        id: rawId ? rawId + "/index" : "",
        booking_data_link: rawId,
        subtitle: String(p.subtitle || ""),
        "classes.first": String(p["classes.first"] || ""),
        "classes.second": String(p["classes.second"] || ""),
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
  });

  var bookingSectionFields = [
    {
      name: "section",
      label: "Section",
      widget: "select",
      options: ["fip_50", "fip_global_fare", "reservations"],
      param: { positional: true, quote: true, required: true },
    },
    {
      name: "body",
      label: "Content",
      widget: "markdown",
      editor_components: ["button", "float-image", "highlight-raw", "image"],
    },
  ];

  CMS.registerEditorComponent({
    id: "booking-section",
    label: "Booking Section",
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
      editor_components: ["button", "float-image", "highlight", "image"],
    },
  ];

  CMS.registerEditorComponent({
    id: "identify-operator",
    label: "Identify Operator",
    fields: identifyOperatorFields,
    pattern: dualFormPattern("identify-operator"),
    fromBlock: function (match) {
      var p = parseHugoParams(match[1] || "");
      return {
        sources: p.sources
          ? p.sources.split(",").map(function (s) {
              return s.trim() + "/index";
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
  });

  var satelliteFields = [
    {
      name: "body",
      label: "Additional info",
      widget: "markdown",
      required: false,
      editor_components: ["button", "float-image", "image"],
    },
  ];

  CMS.registerEditorComponent({
    id: "satellite",
    label: "Satellite Notice",
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
      editor_components: ["button", "float-image", "highlight", "image"],
    },
  ];

  CMS.registerEditorComponent({
    id: "dialog",
    label: "Dialog",
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
      options: ["right", "left"],
      default: "right",
      param: {},
    },
    {
      name: "body",
      label: "Surrounding text",
      widget: "markdown",
      required: false,
      editor_components: ["button", "float-image", "highlight", "image"],
    },
  ];

  CMS.registerEditorComponent({
    id: "float-image",
    label: "Float Image",
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
  });

  CMS.registerEditorComponent({
    id: "wip",
    label: "Work in Progress",
    fields: [],
    pattern: selfClosingPattern("wip"),
    fromBlock: function () {
      return {};
    },
    toBlock: makeToBlock("wip", { bracket: "<", fields: [], bodyMode: "none" }),
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
      editor_components: ["button", "float-image", "highlight", "image"],
    },
  ];

  CMS.registerEditorComponent({
    id: "update",
    label: "Update",
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
      editor_components: ["button", "float-image", "highlight", "image"],
    },
  ];

  CMS.registerEditorComponent({
    id: "column",
    label: "Column",
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
  });

  var columnsFields = [
    {
      name: "body",
      label: "Content",
      widget: "markdown",
      editor_components: ["column"],
    },
  ];

  CMS.registerEditorComponent({
    id: "columns",
    label: "Columns",
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
  });

  var fipValidityTableFields = [
    {
      name: "type",
      label: "Type",
      widget: "select",
      options: ["fip-coupon", "fip-reduced-ticket"],
      param: { required: true },
    },
    {
      name: "validity_data_link",
      label: "FIP Validity Table",
      widget: "cms-edit-link",
      get_value: function (props) {
        var slug = props.entry ? props.entry.get("slug") : null;
        return slug ? String(slug).replace(/\/[^/]+$/, "") : "";
      },
      href: "#/collections/fip-validity/entries/{value}/validity",
      label_template:
        "Edit the FIP Validity Table for \u201c{value}\u201d \u2192",
      empty_hint: "Save this page first to link its FIP Validity Table.",
    },
  ];

  CMS.registerEditorComponent({
    id: "fip-validity-table",
    label: "FIP Validity Table",
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
  });

  CMS.registerRemarkPlugin({ settings: { bullet: "-", emphasis: "_" } });
})();
