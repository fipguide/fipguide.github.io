import { defineConfig } from "vite";
import { resolve } from "path";
import { readFileSync, writeFileSync } from "fs";

const branch = process.env.FIPGUIDE_BRANCH || "main";

function cmsConfigBranchPlugin() {
  return {
    name: "cms-config-branch",
    closeBundle() {
      const configPath = resolve(__dirname, "static/admin/config.yml");
      const content = readFileSync(configPath, "utf-8");
      writeFileSync(
        configPath,
        content.replace(/^(\s*branch:\s*).+$/m, `$1${branch}`),
      );
    },
  };
}

export default defineConfig({
  root: "assets/admin",
  base: "./",
  publicDir: resolve(__dirname, "assets/admin/static"),
  plugins: [cmsConfigBranchPlugin()],
  build: {
    outDir: resolve(__dirname, "static/admin"),
    emptyOutDir: true,
  },
});
