# VLabs — Futuristic Developer Portfolio

A premium black-themed developer portfolio for **VLabs**, showcasing advanced Android, AI, and realtime communication systems. Built with React, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- Premium dark / futuristic aesthetic with glassmorphism & glowing UI
- 3D visual elements and gradient lighting
- Smooth scroll-reveal animations
- Fully responsive mobile layout
- Featured project: **VChat** (realtime Android messenger)
- APK download button
- Screenshot & video gallery placeholders
- All sections: Hero, About, Skills, VChat, Gallery, Future Projects, Tech Stack, Contact

## Tech Stack

- [React 18](https://react.dev/)
- [Vite 6](https://vite.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 3](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide React](https://lucide.dev/) (icons)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Install & Run

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build

```bash
npm run build
npm run preview
```

## Project Structure

```
vlabs-portfolio/
├── public/
│   ├── favicon.svg
│   ├── downloads/          # Place vchat.apk here
│   └── screenshots/        # App screenshots
├── src/
│   ├── components/         # UI sections
│   ├── data/               # Content & config
│   ├── hooks/              # Scroll reveal hook
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css           # Global styles & utilities
├── index.html
├── tailwind.config.js
├── vite.config.ts
└── package.json
```

## Customization

### APK Download

1. Place your built APK at `public/downloads/vchat.apk`
2. The download links use `/downloads/vchat.apk` (configured in `src/data/content.ts`)

### Screenshots & Videos

1. Add images to `public/screenshots/`
2. Update `src/components/Gallery.tsx` to use `<img src="/screenshots/..." />` instead of placeholders

### Contact & Social Links

Edit `src/data/content.ts`:

- `socialLinks` — GitHub, LinkedIn, Twitter, email URLs
- `APK_DOWNLOAD_URL` — APK path
- Skills, projects, and copy

### Branding

- Colors: `tailwind.config.js` (`neon`, `void`, `abyss`)
- Fonts: Orbitron (display), Inter (body), JetBrains Mono — loaded in `index.html`

## VChat Tech Stack (Featured Project)

| Technology            | Purpose              |
|-----------------------|----------------------|
| Java                  | Android development  |
| Firebase Firestore    | Realtime database    |
| Firebase Auth         | Authentication       |
| Firebase Storage      | Media files          |
| Android Studio        | IDE & build          |

## License

Private — © VLabs. All rights reserved.
