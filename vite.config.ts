import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte({
    compilerOptions: {
      customElement: true
    }
  })],
  
  build: {
    sourcemap: true,
    minify: true,
    lib: {
      entry: "src/index.ts",
      formats: ["es"],
      name: "sussy-components",
      fileName: () => `sussy-components.js`
    },
  }
})