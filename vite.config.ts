import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'

/**
 * GitHub Pages project site URL:
 * https://<username>.github.io/VLabs/
 *
 * Repo name MUST be "VLabs" (case-sensitive in URL).
 */
export default defineConfig({
  base: '/VLabs/',
  plugins: [
    react(),
    {
      name: 'github-pages',
      closeBundle() {
        const dist = resolve(__dirname, 'dist')
        const index = resolve(dist, 'index.html')
        if (existsSync(index)) {
          copyFileSync(index, resolve(dist, '404.html'))
        }
      },
    },
  ],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    sourcemap: false,
  },
})
