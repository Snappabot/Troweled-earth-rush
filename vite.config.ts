import { defineConfig } from 'vite';

export default defineConfig({
  base: process.env.BASE_URL || './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true
  },
  server: {
    port: 3000,
    host: true
  }
});
