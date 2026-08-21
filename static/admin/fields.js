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

  var NumberControl = CMS.getFieldType("number").control;

  function CmsNumberWithUsageControl(props) {
    var field = props.field;
    var template = field.get("template");
    var value = props.value;

    var text = template.replace(/\{value\}/g, String(value ?? ""));

    return h(
      "div",
      {},
      h(NumberControl, {
        field: { name: field.get("name") },
        value: value,
        forID: props.forID,
        onChange: props.onChange,
      }),
      h("p", { className: "o-cms-display__info" }, text),
    );
  }

  CMS.registerFieldType(
    "cms-number-with-usage",
    CmsNumberWithUsageControl,
    CmsNumberWithUsageControl,
  );

  var SelectControl = CMS.getFieldType("select").control;

  function FipValiditySelectControl(props) {
    var groups = props.entry ? props.entry.getIn(["data", "groups"]) : null;
    groups = groups && typeof groups.toJS === "function" ? groups.toJS() : [];
    var groupType = props.field ? props.field.get("group_type") : null;
    if (groupType) {
      groups = groups.filter(function (group) {
        return !group.type || group.type === groupType;
      });
    }
    var options = groups
      .filter(function (group) {
        return !!group.name;
      })
      .map(function (group) {
        return { label: group.name, value: group.name };
      });

    return h(SelectControl, {
      field: { name: props.field.get("name"), options },
      value: props.value,
      forID: props.forID,
      onChange: props.onChange,
    });
  }

  function FipValiditySelectPreview(props) {
    return h("span", {}, props.value || "\u2014");
  }

  CMS.registerFieldType(
    "fip-validity-select",
    FipValiditySelectControl,
    FipValiditySelectPreview,
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
