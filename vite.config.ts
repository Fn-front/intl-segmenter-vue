import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tsConfigPaths from "vite-tsconfig-paths";
import { fileURLToPath, URL } from "url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), tsConfigPaths()],
  server: {
    port: 5000
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
})
