import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      modules: path.resolve(__dirname, 'src/modules'),
      src: path.resolve(__dirname, 'src'),
      services: path.resolve(__dirname, 'src/services'),
    },
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: false,
  },
});
