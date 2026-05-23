# VLabs — Developer Portfolio

React + Vite portfolio for **Vishwarajsinh Chudasama** (VLabs).

## Local development

```bash
npm install
npm run dev
```

Open **http://localhost:5173/VLabs/** (base path matches GitHub Pages).

## Production build

```bash
npm run build
npm run preview:gh-pages
```

Preview at **http://localhost:4173/VLabs/**

## GitHub Pages deployment

This project is configured for a **project site** at:

`https://<username>.github.io/VLabs/`

### Setup (one time)

1. Push this repo to GitHub as **`VLabs`** (repo name must match the base path).
2. Go to **Settings → Pages → Build and deployment**.
3. Set **Source** to **GitHub Actions**.
4. Push to `main` (or run the workflow manually).

The workflow in `.github/workflows/deploy.yml` builds `dist/` and deploys automatically.

### Why the blank screen happened

GitHub Pages serves the app from `/VLabs/`, not `/`. Assets must use that base path. This repo sets:

- `vite.config.ts` → `base: '/VLabs/'`
- `src/lib/assets.ts` → `assetUrl()` for public files (profile photo, APK, etc.)
- `index.html` → `%BASE_URL%` for favicon

### Changing the repo name

If your GitHub repo is not named `VLabs`, update `base` in `vite.config.ts` to match:

```ts
base: '/your-repo-name/'
```
