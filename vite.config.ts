import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import eslint from '@nabla/vite-plugin-eslint'
import { createHtmlPlugin } from 'vite-plugin-html'
import { fileURLToPath, URL } from 'node:url'

function joinPath(path: string) {
  return fileURLToPath(new URL(path, import.meta.url))
}

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    react(),
    eslint({
      eslintOptions: {
        cacheLocation: joinPath('node_modules/.eslintcache'),
      },
    }),
    createHtmlPlugin({
      minify: true,
    }),
  ],
  resolve: {
    alias: {
      '@': joinPath('src'),
    },
  },
})
