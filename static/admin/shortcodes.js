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

  function shortcodePattern(name) {
    return new RegExp(
      "\\{\\{[%<] " +
        name +
        "([\\s\\S]*?)[%>]\\}\\}([\\s\\S]*?)\\{\\{[%<] \\/" +
        name +
        " [%>]\\}\\}",
    );
  }

  function selfClosingPattern(name) {
    return new RegExp("\\{\\{[%<] " + name + "([\\s\\S]*?)[%>/]\\}\\}");
  }

  function dualFormPattern(name) {
    return new RegExp(
      "\\{\\{[%<] " +
        name +
        "([\\s\\S]*?)(?:\\/[%>]\\}\\}|[%>]\\}\\}([\\s\\S]*?)\\{\\{[%<] \\/" +
        name +
        " [%>]\\}\\})",
    );
  }

  CMS.registerEditorComponent({
    id: "highlight",
    label: "Highlight",
    fields: [
      {
        name: "type",
        label: "Type",
        widget: "select",
        options: ["important", "tip", "confusion", "inofficial"],
      },
      {
        name: "body",
        label: "Content",
        widget: "markdown",
        editor_components: ["button", "float-image", "highlight", "image"],
      },
    ],
    pattern: shortcodePattern("highlight"),
    fromBlock: function (match) {
      return { type: match[1].trim(), body: match[2].trim() };
    },
    toBlock: function (data) {
      return (
        "{{% highlight " +
        data.type +
        " %}}\n" +
        data.body +
        "\n{{% /highlight %}}"
      );
    },
    toPreview: function (data) {
      return (
        "<blockquote><strong>[" +
        data.type +
        "]</strong> " +
        data.body +
        "</blockquote>"
      );
    },
  });

  CMS.registerEditorComponent({
    id: "expander",
    label: "Expander",
    fields: [
      { name: "title", label: "Title", widget: "string" },
      {
        name: "variant",
        label: "Variant",
        widget: "select",
        options: [{ label: "None", value: "" }, "border", "info"],
        required: false,
      },
      {
        name: "body",
        label: "Content",
        widget: "markdown",
        editor_components: ["button", "float-image", "highlight", "image"],
      },
    ],
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
    toBlock: function (data) {
      var tag =
        '{{% expander "' +
        data.title +
        '"' +
        (data.variant ? " " + data.variant : "") +
        " %}}";
      return tag + "\n\n" + data.body + "\n\n{{% /expander %}}";
    },
    toPreview: function (data) {
      return (
        "<details><summary>" +
        data.title +
        "</summary>" +
        data.body +
        "</details>"
      );
    },
  });

  CMS.registerEditorComponent({
    id: "fip-validity",
    label: "FIP Validity Badge",
    fields: [
      {
        name: "type",
        label: "Type",
        widget: "select",
        options: ["fip-coupon", "fip-reduced-ticket", "fip-global-fare"],
      },
      {
        name: "status",
        label: "Status",
        widget: "select",
        options: ["valid", "invalid"],
      },
      {
        name: "subtitle",
        label: "Subtitle",
        widget: "string",
        required: false,
      },
      {
        name: "text",
        label: "Additional Text",
        widget: "string",
        required: false,
      },
      {
        name: "disable_dialog",
        label: "Disable info dialog",
        widget: "boolean",
        default: false,
        required: false,
      },
    ],
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
    toBlock: function (data) {
      var params = 'type="' + data.type + '" status="' + data.status + '"';
      if (data.subtitle) params += ' subtitle="' + data.subtitle + '"';
      if (data.text) params += ' text="' + data.text + '"';
      if (data.disable_dialog) params += " disable_dialog=true";
      return "{{< fip-validity " + params + " >}}";
    },
    toPreview: function (data) {
      return (
        "<span>[FIP: " +
        data.type +
        " \u2014 " +
        data.status +
        (data.subtitle ? ", " + data.subtitle : "") +
        "]</span>"
      );
    },
  });

  CMS.registerEditorComponent({
    id: "train-category",
    label: "Train Category",
    fields: [
      { name: "id", label: "ID (anchor)", widget: "string" },
      { name: "title", label: "Title", widget: "string" },
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
      },
      {
        name: "fip_accepted",
        label: "FIP accepted",
        widget: "boolean",
        default: true,
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
      },
      {
        name: "route_overview_url",
        label: "Route overview URL",
        widget: "string",
        required: false,
      },
      {
        name: "additional_information_url",
        label: "Additional information URL",
        widget: "string",
        required: false,
      },
      {
        name: "body",
        label: "Description",
        widget: "markdown",
        editor_components: ["button", "float-image", "highlight", "image"],
      },
    ],
    pattern: shortcodePattern("train-category"),
    fromBlock: function (match) {
      var p = parseHugoParams(match[1]);
      var rr = p.reservation_required;
      if (rr === true) rr = "true";
      else if (rr === false) rr = "false";
      else rr = String(rr || "false");
      var rp = p.reservation_possible;
      if (rp === true) rp = "true";
      else if (rp === false) rp = "false";
      else rp = String(rp || "false");
      return {
        id: String(p.id || ""),
        title: String(p.title || ""),
        type: String(p.type || "regional"),
        fip_accepted: p.fip_accepted !== false,
        reservation_required: rr,
        reservation_possible: rp,
        route_overview_url: String(p.route_overview_url || ""),
        additional_information_url: String(p.additional_information_url || ""),
        body: match[2].trim(),
      };
    },
    toBlock: function (data) {
      var lines = [
        "{{% train-category",
        '    id="' + data.id + '"',
        '    title="' + data.title + '"',
        '    type="' + data.type + '"',
        "    fip_accepted=" + data.fip_accepted,
        "    reservation_required=" + data.reservation_required,
        "    reservation_possible=" + data.reservation_possible,
      ];
      if (data.route_overview_url)
        lines.push('    route_overview_url="' + data.route_overview_url + '"');
      if (data.additional_information_url)
        lines.push(
          '    additional_information_url="' +
            data.additional_information_url +
            '"',
        );
      lines.push("%}}");
      lines.push("");
      lines.push(data.body);
      lines.push("");
      lines.push("{{% /train-category %}}");
      return lines.join("\n");
    },
    toPreview: function (data) {
      return (
        "<div><strong>[" +
        data.title +
        " (" +
        data.type +
        ")]</strong> FIP: " +
        data.fip_accepted +
        "<br>" +
        data.body +
        "</div>"
      );
    },
  });

  CMS.registerEditorComponent({
    id: "booking",
    label: "Booking",
    fields: [
      {
        name: "id",
        label: "Booking Platform",
        widget: "relation",
        collection: "booking",
        search_fields: ["title"],
        value_field: "{{slug}}",
        display_fields: ["title"],
      },
      {
        name: "subtitle",
        label: "Subtitle",
        widget: "string",
        required: false,
      },
      {
        name: "classes_first",
        label: "1st class reservation costs (overwrite)",
        widget: "string",
        required: false,
      },
      {
        name: "classes_second",
        label: "2nd class reservation costs (overwrite)",
        widget: "string",
        required: false,
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
      },
      {
        name: "body",
        label: "Additional info",
        widget: "markdown",
        required: false,
        editor_components: ["button", "float-image", "highlight", "image"],
      },
    ],
    pattern: dualFormPattern("booking"),
    fromBlock: function (match) {
      var p = parseHugoParams(match[1]);
      return {
        id: p.id ? String(p.id) + "/index" : "",
        subtitle: String(p.subtitle || ""),
        classes_first: String(p["classes.first"] || ""),
        classes_second: String(p["classes.second"] || ""),
        fip_50:
          p.fip_50 === true
            ? "true"
            : p.fip_50 === false
              ? "false"
              : String(p.fip_50 || ""),
        fip_75:
          p.fip_75 === true
            ? "true"
            : p.fip_75 === false
              ? "false"
              : String(p.fip_75 || ""),
        fip_global_fare:
          p.fip_global_fare === true
            ? "true"
            : p.fip_global_fare === false
              ? "false"
              : String(p.fip_global_fare || ""),
        reservations:
          p.reservations === true
            ? "true"
            : p.reservations === false
              ? "false"
              : String(p.reservations || ""),
        body: match[2] ? match[2].trim() : "",
      };
    },
    toBlock: function (data) {
      var params = 'id="' + (data.id || "").replace(/\/index$/, "") + '"';
      if (data.subtitle) params += ' subtitle="' + data.subtitle + '"';
      if (data.classes_first)
        params += ' classes.first="' + data.classes_first + '"';
      if (data.classes_second)
        params += ' classes.second="' + data.classes_second + '"';
      if (data.fip_50) params += " fip_50=" + data.fip_50;
      if (data.fip_75) params += " fip_75=" + data.fip_75;
      if (data.fip_global_fare)
        params += " fip_global_fare=" + data.fip_global_fare;
      if (data.reservations) params += " reservations=" + data.reservations;
      if (data.body && data.body.trim()) {
        return (
          "{{% booking " + params + " %}}\n" + data.body + "\n{{% /booking %}}"
        );
      }
      return "{{% booking " + params + " /%}}";
    },
    toPreview: function (data) {
      return (
        "<div>[Booking: " +
        data.id +
        (data.subtitle ? " \u2014 " + data.subtitle : "") +
        "]</div>"
      );
    },
  });

  CMS.registerEditorComponent({
    id: "booking-section",
    label: "Booking Section",
    fields: [
      {
        name: "section",
        label: "Section",
        widget: "select",
        options: ["fip_50", "fip_global_fare", "reservations"],
      },
      {
        name: "body",
        label: "Content",
        widget: "markdown",
        editor_components: ["button", "float-image", "highlight", "image"],
      },
    ],
    pattern: shortcodePattern("booking-section"),
    fromBlock: function (match) {
      var sectionMatch = match[1].match(/"(\w+)"/);
      return {
        section: sectionMatch ? sectionMatch[1] : "",
        body: match[2].trim(),
      };
    },
    toBlock: function (data) {
      return (
        '{{% booking-section "' +
        data.section +
        '" %}}\n' +
        data.body +
        "\n{{% /booking-section %}}"
      );
    },
    toPreview: function (data) {
      return (
        "<div><strong>[Booking Section: " +
        data.section +
        "]</strong><br>" +
        data.body +
        "</div>"
      );
    },
  });

  CMS.registerEditorComponent({
    id: "button",
    label: "Button",
    fields: [
      { name: "destination", label: "URL", widget: "string" },
      { name: "text", label: "Button text", widget: "string" },
    ],
    pattern: selfClosingPattern("button"),
    fromBlock: function (match) {
      var p = parseHugoParams(match[1]);
      return {
        destination: String(p.destination || ""),
        text: String(p.text || ""),
      };
    },
    toBlock: function (data) {
      return (
        '{{< button destination="' +
        data.destination +
        '" text="' +
        data.text +
        '" >}}'
      );
    },
    toPreview: function (data) {
      return '<a href="' + data.destination + '">' + data.text + "</a>";
    },
  });

  CMS.registerEditorComponent({
    id: "identify-operator",
    label: "Identify Operator",
    fields: [
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
      },
      {
        name: "body",
        label: "Additional info",
        widget: "markdown",
        required: false,
        editor_components: ["button", "float-image", "highlight", "image"],
      },
    ],
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
    toBlock: function (data) {
      var sources = Array.isArray(data.sources)
        ? data.sources
            .map(function (s) {
              return String(s).replace(/\/index$/, "");
            })
            .join(",")
        : String(data.sources || "").replace(/\/index$/, "");
      var open = sources
        ? '{{< identify-operator sources="' + sources + '"'
        : "{{< identify-operator";
      if (data.body && data.body.trim()) {
        return open + " >}}\n" + data.body + "\n{{< /identify-operator >}}";
      }
      return open + " />}}";
    },
    toPreview: function (data) {
      var sources = Array.isArray(data.sources)
        ? data.sources
            .map(function (s) {
              return String(s).replace(/\/index$/, "");
            })
            .join(", ")
        : String(data.sources || "").replace(/\/index$/, "");
      return (
        "<div>[Identify Operator" + (sources ? ": " + sources : "") + "]</div>"
      );
    },
  });

  CMS.registerEditorComponent({
    id: "satellite",
    label: "Satellite Notice",
    fields: [
      {
        name: "body",
        label: "Additional info",
        widget: "markdown",
        required: false,
        editor_components: ["button", "float-image", "highlight", "image"],
      },
    ],
    pattern: dualFormPattern("satellite"),
    fromBlock: function (match) {
      return { body: match[2] ? match[2].trim() : "" };
    },
    toBlock: function (data) {
      if (data.body && data.body.trim()) {
        return "{{% satellite %}}\n" + data.body + "\n{{% /satellite %}}";
      }
      return "{{% satellite /%}}";
    },
    toPreview: function (data) {
      return (
        "<div>[Satellite Notice" +
        (data.body ? ": " + data.body : "") +
        "]</div>"
      );
    },
  });

  CMS.registerEditorComponent({
    id: "dialog",
    label: "Dialog",
    fields: [
      { name: "id", label: "Dialog ID (anchor)", widget: "string" },
      { name: "title", label: "Title", widget: "string" },
      {
        name: "body",
        label: "Content",
        widget: "markdown",
        editor_components: ["button", "float-image", "highlight", "image"],
      },
    ],
    pattern: shortcodePattern("dialog"),
    fromBlock: function (match) {
      var p = parseHugoParams(match[1]);
      return {
        id: String(p.id || ""),
        title: String(p.title || ""),
        body: match[2].trim(),
      };
    },
    toBlock: function (data) {
      return (
        '{{% dialog\n  id="' +
        data.id +
        '"\n  title="' +
        data.title +
        '"\n%}}\n' +
        data.body +
        "\n{{% /dialog %}}"
      );
    },
    toPreview: function (data) {
      return (
        "<details><summary>" +
        data.title +
        "</summary>" +
        data.body +
        "</details>"
      );
    },
  });

  CMS.registerEditorComponent({
    id: "float-image",
    label: "Float Image",
    fields: [
      { name: "src", label: "Image", widget: "image" },
      { name: "alt", label: "Alt text", widget: "string" },
      { name: "caption", label: "Caption", widget: "string", required: false },
      {
        name: "width",
        label: "Width (CSS)",
        widget: "string",
        default: "50%",
        required: false,
      },
      {
        name: "position",
        label: "Position",
        widget: "select",
        options: ["right", "left"],
        default: "right",
      },
      {
        name: "body",
        label: "Surrounding text",
        widget: "markdown",
        required: false,
        editor_components: ["button", "float-image", "highlight", "image"],
      },
    ],
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
    toBlock: function (data) {
      var lines = [
        "{{% float-image",
        '  src="' + data.src + '"',
        '  alt="' + data.alt + '"',
      ];
      if (data.caption) lines.push('  caption="' + data.caption + '"');
      if (data.width) lines.push('  width="' + data.width + '"');
      if (data.position) lines.push('  position="' + data.position + '"');
      lines.push("%}}");
      if (data.body) lines.push(data.body);
      lines.push("{{% /float-image %}}");
      return lines.join("\n");
    },
    toPreview: function (data) {
      return (
        '<figure style="float:' +
        data.position +
        ";width:" +
        data.width +
        '"><img src="' +
        data.src +
        '" alt="' +
        data.alt +
        '"/>' +
        (data.caption ? "<figcaption>" + data.caption + "</figcaption>" : "") +
        "</figure>" +
        (data.body || "")
      );
    },
  });

  CMS.registerEditorComponent({
    id: "wip",
    label: "Work in Progress",
    fields: [],
    pattern: selfClosingPattern("wip"),
    fromBlock: function () {
      return {};
    },
    toBlock: function () {
      return "{{< wip >}}";
    },
    toPreview: function () {
      return "<div>[Work in Progress]</div>";
    },
  });

  CMS.registerEditorComponent({
    id: "fip-validity-comparison",
    label: "FIP Validity Comparison",
    fields: [],
    pattern: selfClosingPattern("fip-validity-comparison"),
    fromBlock: function () {
      return {};
    },
    toBlock: function () {
      return "{{< fip-validity-comparison >}}";
    },
    toPreview: function () {
      return "<div>[FIP Validity Comparison Table]</div>";
    },
  });

  CMS.registerRemarkPlugin({ settings: { bullet: "-", emphasis: "_" } });
})();
