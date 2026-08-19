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
            if (
              event.button !== 0 ||
              event.metaKey ||
              event.ctrlKey ||
              event.shiftKey ||
              event.altKey
            ) {
              return;
            }
            event.preventDefault();
            window.location.hash = href;
            window.location.reload();
          },
        },
        label,
      ),
    );
  }

  CMS.registerWidget("cms-edit-link", CmsEditLinkControl, CmsEditLinkControl);

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
