# VLabs — Developer Portfolio

React + Vite portfolio for **Vishwarajsinh Chudasama**.

**Live site:** https://Vlabs99.github.io/VLabs/

---

## Local development

```bash
npm install
npm run dev
```

Open **http://localhost:5173/VLabs/** (same base path as GitHub Pages).

## Test production build locally

```bash
npm run build
npm run preview
```

Open **http://localhost:4173/VLabs/**

---

## Deploy to GitHub Pages (simple static hosting)

### Prerequisites

- GitHub repo named **`VLabs`** (must match the Vite `base` path)
- Git installed and repo connected to GitHub

### One-time GitHub settings

1. Open your repo on GitHub → **Settings** → **Pages**
2. Under **Build and deployment** → **Source**, choose **Deploy from a branch**
3. **Branch:** `gh-pages` → folder **`/ (root)`** → **Save**
4. Do **not** use GitHub Actions for Pages (workflow removed)

### Deploy (every update)

From the project folder:

```bash
npm install
npm run deploy
```

This will:

1. Run `npm run build` (TypeScript + Vite with `base: '/VLabs/'`)
2. Verify `dist/` has correct asset paths
3. Push `dist/` contents to the **`gh-pages`** branch

Wait 1–3 minutes, then visit:

**https://Vlabs99.github.io/VLabs/**

### Troubleshooting blank white page

| Cause | Fix |
|--------|-----|
| Repo name is not `VLabs` | Rename repo to `VLabs` or change `base` in `vite.config.ts` |
| Pages source is `main` branch | Switch to **`gh-pages`** branch, root folder |
| Old deploy cache | Hard refresh: **Ctrl+Shift+R** |
| JS/CSS 404 in DevTools | Re-run `npm run deploy`; check Network tab for `/VLabs/assets/` |
| Wrong URL | Use **/VLabs/** with trailing slash |

### If your GitHub username or repo name differs

Edit `vite.config.ts`:

```ts
base: '/YourRepoName/',
```

And `homepage` in `package.json` to match.
