#!/usr/bin/env node
/**
 * Validates dist/ output before GitHub Pages deploy.
 */
import { readFileSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'

const dist = resolve(process.cwd(), 'dist')
const indexPath = resolve(dist, 'index.html')
const base = '/VLabs/'

const errors = []

if (!existsSync(indexPath)) {
  errors.push('dist/index.html is missing — run npm run build first')
} else {
  const html = readFileSync(indexPath, 'utf8')

  if (!html.includes(`${base}assets/`)) {
    errors.push(`index.html must reference assets under ${base}assets/`)
  }
  if (!html.includes('id="root"')) {
    errors.push('index.html is missing #root mount point')
  }
  if (html.includes('src="/src/main.tsx"')) {
    errors.push('index.html still points to dev entry /src/main.tsx')
  }
}

for (const file of ['profile.jpeg', '.nojekyll', 'favicon.svg']) {
  if (!existsSync(resolve(dist, file))) {
    errors.push(`dist/${file} is missing`)
  }
}

if (errors.length) {
  console.error('GitHub Pages build check failed:\n')
  errors.forEach((e) => console.error(`  ✗ ${e}`))
  process.exit(1)
}

console.log('GitHub Pages build check passed ✓')
console.log(`  Base path: ${base}`)
console.log('  dist/ is ready to deploy')
