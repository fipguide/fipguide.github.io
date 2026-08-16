(function () {
  function toPlain(value) {
    if (value && typeof value.toJS === "function") {
      return value.toJS();
    }
    return value || null;
  }

  function makeSelectFieldConfig(options) {
    var config = { options: options, multiple: false, required: false };
    return {
      get: function (key, defaultValue) {
        return Object.prototype.hasOwnProperty.call(config, key)
          ? config[key]
          : defaultValue;
      },
      has: function (key) {
        return Object.prototype.hasOwnProperty.call(config, key);
      },
    };
  }

  var SelectControl = CMS.getWidget("select").control;

  function FipValiditySelectControl(props) {
    var groups = props.entry
      ? toPlain(props.entry.getIn(["data", "groups"]))
      : null;
    groups = groups || [];
    var groupType = props.field ? props.field.get("group_type") : null;
    if (groupType) {
      groups = groups.filter(function (group) {
        return !group.type || group.type === groupType;
      });
    }
    var options = groups.map(function (group) {
      return { label: group.name, value: group.name };
    });
    return h(SelectControl, {
      field: makeSelectFieldConfig(options),
      value: props.value || null,
      forID: props.forID,
      classNameWrapper: props.classNameWrapper,
      onChange: props.onChange,
      setActiveStyle: props.setActiveStyle,
      setInactiveStyle: props.setInactiveStyle,
    });
  }

  function FipValiditySelectPreview(props) {
    return h("span", {}, props.value || "\u2014");
  }

  CMS.registerWidget(
    "fip-validity-select",
    FipValiditySelectControl,
    FipValiditySelectPreview,
  );

  function FipValidityLinkControl(props) {
    var slug = props.entry ? props.entry.get("slug") : null;
    var issuerSlug = slug ? slug.replace(/\/[^/]+$/, "") : null;
    if (!issuerSlug) {
      return h(
        "p",
        { className: "o-fip-validity-widget__info" },
        "Save this page first to link its FIP Validity Table.",
      );
    }
    var href = "#/collections/fip-validity/entries/" + issuerSlug + "/validity";
    return h(
      "p",
      { className: "o-fip-validity-widget__info" },
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
        "Edit the FIP Validity Table for \u201c" + issuerSlug + "\u201d \u2192",
      ),
    );
  }

  CMS.registerWidget(
    "fip-validity-link",
    FipValidityLinkControl,
    FipValidityLinkControl,
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
