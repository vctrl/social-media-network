import vue from '@vitejs/plugin-vue';
import path from 'path';
import { defineConfig } from 'vite';

// Documentation: https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: { '@': path.resolve(__dirname, 'src') },
  },
  server: {
    port: 3000,
  },
});
