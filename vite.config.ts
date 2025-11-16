import react from "@vitejs/plugin-react-swc";
import path from "path";
import { defineConfig } from "vite";
import generateSitemap from "vite-plugin-pages-sitemap";

// Si vite-plugin-pages-sitemap n'a pas de types, ajoute dans src/globals.d.ts
// declare module 'vite-plugin-pages-sitemap';

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    // plugins dev si nécessaire
    {
      name: "generate-sitemap",
      closeBundle() {
        generateSitemap({
          hostname: "https://talla-ndiaye.dev",
          readable: true,
        });
      },
    },
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
