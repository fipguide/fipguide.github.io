import CMS from "@sveltia/cms";
import * as Prettier from "prettier/standalone";
import * as markdownPlugin from "prettier/plugins/markdown";
import * as yamlPlugin from "prettier/plugins/yaml";

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

CMS.registerCustomFormat("frontmatter", "md", {
  toFile: async function (data, { serialize }) {
    var content = await serialize(data);
    var formatted = await Prettier.format(content, {
      parser: "markdown",
      plugins: [markdownPlugin, yamlPlugin],
    });
    var withBreaks = convertEscapedNewlinesInTables(formatted);
    return withBreaks.replace(/\n+$/, "") + "\n";
  },
});

CMS.registerCustomFormat("yaml", "yaml", {
  toFile: async function (data, { serialize }) {
    var content = await serialize(data);
    var formatted = await Prettier.format(content, {
      parser: "yaml",
      plugins: [yamlPlugin],
    });
    return formatted.replace(/\n+$/, "") + "\n";
  },
});
