import { defineConfig } from "vite";

export default defineConfig({
  base: "./",
  build: {
    outDir: "../channel-surfer",
    emptyOutDir: true,
    assetsDir: "assets",
    target: "es2018",
    sourcemap: false,
    chunkSizeWarningLimit: 800,
  },
  server: {
    host: "127.0.0.1",
    port: 5173,
  },
});
