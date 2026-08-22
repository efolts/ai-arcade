import { defineConfig } from "vite";

export default defineConfig({
  base: "./",
  build: {
    outDir: "../the-signal",
    emptyOutDir: true,
    assetsDir: "assets",
    target: "es2018",
    sourcemap: false,
  },
});
