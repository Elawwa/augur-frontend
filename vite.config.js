import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",  // Vercel will deploy the contents of this directory
    emptyOutDir: true,  // Clears old files before each build
  },
});
