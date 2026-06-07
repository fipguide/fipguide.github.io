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
      { name: "body", label: "Content", widget: "markdown" },
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
      { name: "body", label: "Content", widget: "markdown" },
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
      return tag + "\n" + data.body + "\n{{% /expander %}}";
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
    pattern: /\{\{< fip-validity ([\s\S]*?)>\}\}/,
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
        options: ["highspeed", "regional", "sleeper", "bus"],
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
        widget: "boolean",
        default: false,
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
      { name: "body", label: "Description", widget: "markdown" },
    ],
    pattern: shortcodePattern("train-category"),
    fromBlock: function (match) {
      var p = parseHugoParams(match[1]);
      var rr = p.reservation_required;
      if (rr === true) rr = "true";
      else if (rr === false) rr = "false";
      else rr = String(rr || "false");
      return {
        id: String(p.id || ""),
        title: String(p.title || ""),
        type: String(p.type || "regional"),
        fip_accepted: p.fip_accepted !== false,
        reservation_required: rr,
        reservation_possible: p.reservation_possible === true,
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
      lines.push(data.body);
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
      { name: "id", label: "Booking page ID", widget: "string" },
      {
        name: "subtitle",
        label: "Subtitle",
        widget: "string",
        required: false,
      },
      {
        name: "body",
        label: "Additional info (optional)",
        widget: "markdown",
        required: false,
      },
    ],
    pattern:
      /\{\{% booking ([\s\S]*?)(?:\/%\}\}|%\}\}([\s\S]*?)\{\{% \/booking %\}\})/,
    fromBlock: function (match) {
      var p = parseHugoParams(match[1]);
      return {
        id: String(p.id || ""),
        subtitle: String(p.subtitle || ""),
        body: match[2] ? match[2].trim() : "",
      };
    },
    toBlock: function (data) {
      var params = 'id="' + data.id + '"';
      if (data.subtitle) params += ' subtitle="' + data.subtitle + '"';
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
      { name: "body", label: "Content", widget: "markdown" },
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
    pattern: /\{\{< button ([\s\S]*?)>\}\}/,
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
        label: "Sources (comma-separated IDs)",
        widget: "string",
        required: false,
      },
    ],
    pattern: /\{\{< identify-operator(?:\s+sources="([^"]*)")?\s*\/?>\}\}/,
    fromBlock: function (match) {
      return { sources: match[1] || "" };
    },
    toBlock: function (data) {
      if (data.sources) {
        return '{{< identify-operator sources="' + data.sources + '" />}}';
      }
      return "{{< identify-operator />}}";
    },
    toPreview: function (data) {
      return (
        "<div>[Identify Operator" +
        (data.sources ? ": " + data.sources : "") +
        "]</div>"
      );
    },
  });

  CMS.registerEditorComponent({
    id: "satellite",
    label: "Satellite Notice",
    fields: [
      {
        name: "body",
        label: "Additional info (optional)",
        widget: "markdown",
        required: false,
      },
    ],
    pattern:
      /\{\{% satellite(?:\s*\/%\}\}|\s*%\}\}([\s\S]*?)\{\{% \/satellite %\}\})/,
    fromBlock: function (match) {
      return { body: match[1] ? match[1].trim() : "" };
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
      { name: "body", label: "Content", widget: "markdown" },
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
      { name: "src", label: "Image filename", widget: "string" },
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
    id: "icon",
    label: "Icon",
    fields: [{ name: "name", label: "Icon name", widget: "string" }],
    pattern: /\{\{[<%] icon "([^"]*)" [%>]\}\}/,
    fromBlock: function (match) {
      return { name: match[1] };
    },
    toBlock: function (data) {
      return '{{< icon "' + data.name + '" >}}';
    },
    toPreview: function (data) {
      return "<span>[icon: " + data.name + "]</span>";
    },
  });

  CMS.registerEditorComponent({
    id: "wip",
    label: "Work in Progress",
    fields: [],
    pattern: /\{\{< wip >\}\}/,
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
    pattern: /\{\{< fip-validity-comparison >\}\}/,
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
})();
