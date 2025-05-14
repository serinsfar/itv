import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react({ jsxRuntime: 'classic' }), nodePolyfills()],
  resolve: {
    alias: {
      'source-map-js': 'source-map',
    },
  },
  server: {
    host: true, // ← this allows access from other devices
    fs: {
      cachedChecks: false,
    },
  },
  build: {
    outDir: 'dist',
  },
});
