import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const rewriteSlashToIndexHtml = () => {
  return {
    name: "rewrite-slash-to-index-html",
    apply: "serve",
    enforce: "post",
    configureServer(server) {
      // rewrite / as index.html
      server.middlewares.use("/", (req, _, next) => {
        if (req.url === "/") {
          req.url = "/index.html";
        }
        next();
      });
    },
  };
};
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  appType: "mpa", // disable history fallback
  plugins: [rewriteSlashToIndexHtml()],
});
