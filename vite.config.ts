import { defineConfig } from "vite";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

// PROJECT BEACON
// Build path: index.html -> src/main.tsx -> AppRouter -> Layout -> pages.
// Vite owns bundling, React Fast Refresh, Tailwind v4, and the "@" -> src alias.
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  assetsInclude: ["**/*.svg", "**/*.csv"],
});
