import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  root: "assets/admin",
  base: "./",
  build: {
    outDir: resolve(__dirname, "static/admin"),
    emptyOutDir: true,
  },
});
