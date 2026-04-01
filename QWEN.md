# ovd-breakfast — Лендинг меню завтраков «Очень вкусные дела»

## Project Overview

**Astro 5** лендинг для кафе с меню завтраков в стиле Neon-Glow. Высокопроизводительная статическая страница с Bento-сеткой блюд, оптимизированными изображениями и интерактивным Lightbox.

### Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | Astro 5.18.1 (SSG) |
| **Styling** | Tailwind CSS 3.4 + @astrojs/tailwind |
| **Language** | TypeScript 5.9 |
| **Images** | Astro Assets (оптимизация, lazy loading) |
| **UI Pattern** | Bento Grid |

### Visual Identity

- **Primary Accent:** Neon Pink `#EB00FF`
- **Background:** Deep Dark `#0A0A0A` / `#120318`
- **Effects:** Glow shadows, glassmorphism cards
- **Typography:** Inter (body), Script (headings)

---

## Building and Running

### Development

```bash
npm run dev
```

Starts dev server at `http://localhost:4321` with hot reload.

### Production Build

```bash
npm run build    # Build to ./dist
npm run preview  # Preview production build
```

---

## Project Structure

```
ovd-breakfast/
├── public/
│   └── favicon.svg           # Site favicon
├── src/
│   ├── assets/images/        # Dish images (SVG placeholders)
│   ├── components/
│   │   ├── BentoGrid.astro   # Menu grid layout
│   │   ├── HeroSection.astro # Neon header
│   │   ├── Lightbox.astro    # Image modal
│   │   └── MenuCard.astro    # Dish card component
│   ├── data/
│   │   └── menu.json         # Menu data (8 items)
│   ├── layouts/
│   │   ├── BaseLayout.astro  # HTML shell
│   │   └── Layout.astro      # Page layout with CSS
│   ├── pages/
│   │   └── index.astro       # Home page
│   └── styles/
│       └── global.css        # Global styles + animations
├── astro.config.mjs          # Astro config (Tailwind integration)
├── tailwind.config.mjs       # Tailwind theme (colors, shadows)
├── tsconfig.json             # TypeScript config (Astro strict)
└── package.json
```

---

## Data Structure

Menu items stored in `src/data/menu.json`:

```json
{
  "id": 1,
  "title": "Бенедикт с лососем",
  "description": "Нежное яйцо пашот на бриоши...",
  "price": "550₽",
  "image": "/src/assets/images/benedict.jpg",
  "bentoSize": "large"
}
```

**bentoSize options:**
- `small` — 1x1 cell
- `medium` — 2x1 cells
- `large` — 2x2 cells

---

## Components

### HeroSection
- Neon-pink glowing title "Очень вкусные дела"
- Subtitle "Меню завтраков"
- Decorative background blur effect

### MenuCard
- Optimized images with `loading="lazy"`
- Gradient overlay for text readability
- Glassmorphism price badge
- Hover scale + glow effect

### BentoGrid
- Responsive grid: `grid-cols-1 md:grid-cols-4`
- Auto-rows for consistent sizing
- Maps menu items to cards

### Lightbox
- Full-screen image modal
- Click card to open
- ESC key / backdrop click to close
- Scroll lock when open

---

## Development Conventions

### TypeScript
- Strict mode via `astro/tsconfigs/strict`
- Type-safe props in Astro components

### Styling
- Tailwind CSS utility classes
- Custom theme in `tailwind.config.mjs`
- CSS animations in `global.css`
- Dark theme by default

### Code Style
- Astro components with frontmatter
- Functional component structure
- Semantic HTML (section, article, h1-h3)

---

## Key Configuration Files

### `astro.config.mjs`
```js
import tailwind from '@astrojs/tailwind';
export default defineConfig({
  integrations: [tailwind()],
});
```

### `tailwind.config.mjs`
- Custom colors: `brand-pink`, `brand-dark`, `brand-purple`
- Glow shadows: `glow`, `glow-strong`, `glow-text`

### `tsconfig.json`
- Extends `astro/tsconfigs/strict`
- Path aliases for `@/*`

---

## Deployment

Build static output and deploy to any static hosting:

```bash
npm run build
# Deploy ./dist to Vercel, Netlify, Cloudflare Pages, etc.
```

---

## Resources

- [Astro Docs](https://docs.astro.build)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Astro Image Component](https://docs.astro.build/en/guides/images/)
