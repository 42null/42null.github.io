import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { join } from "path";
import { quasar, transformAssetUrls } from '@quasar/vite-plugin';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: { transformAssetUrls },
    }),
    quasar({
      sassVariables: './src/assets/scss/styles/quasar-variables.scss',
    })
  ],
  base: "./",
  resolve: {
    alias: {
      "@": join(__dirname, "src"),
    },
  },
  define: { "process.env": {} },
});
