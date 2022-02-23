import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte({
    compilerOptions: {
      customElement: true
    }
  })],
  build: {
    target: ["es2015", "esnext"],
    lib: {
      entry: "src/index.ts",
      name: "sussy-components",
      fileName: (format) => `sussy-components.${format}.js`
    }
  }
})