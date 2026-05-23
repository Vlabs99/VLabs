import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'

/** GitHub Pages project site: https://<user>.github.io/VLabs/ */
const base = '/VLabs/'

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'gh-pages-404',
      closeBundle() {
        const index = resolve(__dirname, 'dist/index.html')
        const notFound = resolve(__dirname, 'dist/404.html')
        if (existsSync(index)) {
          copyFileSync(index, notFound)
        }
      },
    },
  ],
  base,
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
  },
  preview: {
    port: 4173,
    strictPort: true,
  },
})
