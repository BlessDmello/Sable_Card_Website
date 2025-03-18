import react from "@vitejs/plugin-react";
import tailwind from "tailwindcss";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  publicDir: "./public", // Ensure the public directory is included
  base: "./",
  css: {
    postcss: {
      plugins: [tailwind()],
    },
  },
});
