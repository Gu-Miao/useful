import { fileURLToPath, URL } from 'node:url'
import babel from '@rolldown/plugin-babel'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'

import { defineConfig } from 'vite'
import { createHtmlPlugin } from 'vite-plugin-html'

function joinPath(path: string) {
  return fileURLToPath(new URL(path, import.meta.url))
}

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    createHtmlPlugin({ minify: true }),
  ],
  server: { open: false, port: 8025 },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'
          }
        },
      },
    },
  },
  resolve: { alias: { '@': joinPath('src') } },
})
