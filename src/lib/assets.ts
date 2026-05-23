/**
 * Resolve public asset URLs for GitHub Pages (base: /VLabs/) and local dev.
 */
export function assetUrl(path: string): string {
  const base = import.meta.env.BASE_URL
  const normalized = path.replace(/^\//, '')
  return `${base}${normalized}`
}
