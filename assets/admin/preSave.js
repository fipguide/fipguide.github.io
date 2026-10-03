import CMS from "@sveltia/cms";
import { Map as ImmutableMap, List as ImmutableList } from "immutable";
import * as prettier from "prettier/standalone";
import * as markdownPlugin from "prettier/plugins/markdown";

function isMarkdownFieldKey(key) {
  return key === "body" || key === "de" || key === "en" || key === "fr";
}

function convertEscapedNewlinesInTables(markdown) {
  return markdown
    .split("\n")
    .map(function (line) {
      var trimmed = line.trim();
      if (trimmed.startsWith("|") && trimmed.endsWith("|")) {
        return line.replace(/(?:\\n)+/g, "<br>");
      }
      return line;
    })
    .join("\n");
}

async function formatMarkdown(markdown) {
  try {
    var formatted = await prettier.format(markdown, {
      parser: "markdown",
      plugins: [markdownPlugin],
    });
    var withBreaks = convertEscapedNewlinesInTables(formatted);
    return withBreaks.replace(/\n+$/, "");
  } catch (error) {
    console.error("[preSave] prettier.format failed:", error);
    return markdown;
  }
}

async function formatMarkdownFieldsInValue(value) {
  if (ImmutableMap.isMap(value)) {
    var entries = Array.from(value.entries());
    var result = value;
    for (var i = 0; i < entries.length; i++) {
      var key = entries[i][0];
      var val = entries[i][1];
      if (isMarkdownFieldKey(key) && typeof val === "string" && val.trim()) {
        result = result.set(key, await formatMarkdown(val));
      } else {
        var formattedVal = await formatMarkdownFieldsInValue(val);
        if (formattedVal !== val) {
          result = result.set(key, formattedVal);
        }
      }
    }
    return result;
  }

  if (ImmutableList.isList(value)) {
    var items = value.toArray();
    var changed = false;
    var newItems = [];
    for (var j = 0; j < items.length; j++) {
      var newItem = await formatMarkdownFieldsInValue(items[j]);
      if (newItem !== items[j]) {
        changed = true;
      }
      newItems.push(newItem);
    }
    return changed ? ImmutableList(newItems) : value;
  }

  return value;
}

CMS.registerEventListener({
  name: "preSave",
  handler: async function (args) {
    try {
      var entry = args.entry;
      var data = entry.get("data");
      var formattedData = await formatMarkdownFieldsInValue(data);
      var updatedEntry =
        formattedData !== data ? entry.set("data", formattedData) : entry;

      var i18n = updatedEntry.get("i18n");
      if (i18n) {
        var locales = Array.from(i18n.keys());
        for (var i = 0; i < locales.length; i++) {
          var locale = locales[i];
          var localeData = i18n.getIn([locale, "data"]);
          if (localeData) {
            var formattedLocaleData =
              await formatMarkdownFieldsInValue(localeData);
            if (formattedLocaleData !== localeData) {
              updatedEntry = updatedEntry.setIn(
                ["i18n", locale, "data"],
                formattedLocaleData,
              );
            }
          }
        }
      }

      return updatedEntry;
    } catch (error) {
      console.error("[preSave] handler failed:", error);
      return args.entry;
    }
  },
});
