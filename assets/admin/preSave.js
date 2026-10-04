import CMS from "@sveltia/cms";
import * as prettier from "prettier/standalone";
import * as markdownPlugin from "prettier/plugins/markdown";

function isMapLike(value) {
  return (
    value !== null &&
    typeof value === "object" &&
    typeof value.get === "function" &&
    typeof value.set === "function"
  );
}

function convertEscapedNewlinesInTables(markdown) {
  // Workaround for https://github.com/facebook/lexical/issues/9323

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

async function formatBodyField(data) {
  if (!isMapLike(data)) {
    return data;
  }

  var body = data.get("body");
  if (typeof body !== "string" || !body.trim()) {
    return data;
  }

  var formattedBody = await formatMarkdown(body);
  return formattedBody === body ? data : data.set("body", formattedBody);
}

CMS.registerEventListener({
  name: "preSave",
  handler: async function (args) {
    try {
      var entry = args.entry;
      var data = entry.get("data");
      var formattedData = await formatBodyField(data);
      return formattedData !== data ? entry.set("data", formattedData) : entry;
    } catch (error) {
      console.error("[preSave] handler failed:", error);
      return args.entry;
    }
  },
});
