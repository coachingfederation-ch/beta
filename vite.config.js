import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: '.',
  base: './',
  server: {
    port: 5173,
    host: true,
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        findACoach: resolve(__dirname, 'find-a-coach.html'),
        forOrganisations: resolve(__dirname, 'for-organisations.html'),
        forCoaches: resolve(__dirname, 'for-coaches.html'),
        insights: resolve(__dirname, 'insights.html'),
        events: resolve(__dirname, 'events.html'),
        about: resolve(__dirname, 'about.html'),
      },
    },
  },
  optimizeDeps: {
    exclude: ['@electric-sql/pglite'],
  },
});
