(function () {
  function CmsEditLinkControl(props) {
    var field = props.field;
    var getValue = field.get("get_value");
    var hrefTemplate = field.get("href");
    var labelTemplate = field.get("label_template");
    var emptyHint = field.get("empty_hint");

    var value = String(getValue(props) || "");

    if (!value) {
      return h("p", { className: "o-cms-edit-link__info" }, emptyHint);
    }

    var href = hrefTemplate.replace(/\{value\}/g, value);
    var label = labelTemplate.replace(/\{value\}/g, value);
    return h(
      "p",
      { className: "o-cms-edit-link__info" },
      h(
        "a",
        {
          href: href,
          onClick: function (event) {
            event.preventDefault();
            if (
              event.metaKey ||
              event.ctrlKey ||
              event.shiftKey ||
              event.button === 1
            ) {
              window.open(href, "_blank");
              return;
            }
            window.location.hash = href;
          },
          onAuxClick: function (event) {
            event.preventDefault();
            if (event.button === 1) {
              window.open(href, "_blank");
            }
          },
        },
        label,
      ),
    );
  }

  CMS.registerFieldType(
    "cms-edit-link",
    CmsEditLinkControl,
    CmsEditLinkControl,
  );

  function CmsNumberWithUsageControl(props) {
    var field = props.field;
    var template = field.get("template");
    var value = props.value;

    var text = template.replace(/\{value\}/g, String(value ?? ""));

    return h(
      "div",
      {},
      h("input", {
        id: props.forID,
        className: props.classNameWrapper,
        type: "number",
        value: value ?? "",
        onChange: function (event) {
          var raw = event.target.value;
          props.onChange(raw === "" ? undefined : Number(raw));
        },
      }),
      h("p", { className: "o-cms-display__info" }, text),
    );
  }

  CMS.registerFieldType(
    "cms-number-with-usage",
    CmsNumberWithUsageControl,
    CmsNumberWithUsageControl,
  );

  CMS.registerEventListener({
    name: "preSave",
    handler: function (data) {
      var entry = data && data.entry;
      if (!entry || entry.get("collection") !== "fip-validity") {
        return undefined;
      }
      var operators = entry.getIn(["data", "operators"]);
      if (!operators || typeof operators.sortBy !== "function") {
        return undefined;
      }
      var sortedOperators = operators.sortBy(function (value, key) {
        return key;
      });
      return entry.get("data").set("operators", sortedOperators);
    },
  });
})();
