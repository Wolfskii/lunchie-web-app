import postcss from './postcss.config.js'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'build'
  },
  base: '/',
  plugins: [svelte()],
  css: {
    postcss
  }
})
