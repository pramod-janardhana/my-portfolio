# Backend Engineer Portfolio

A clean, dark, developer-focused personal website built with **Next.js 15**, **React 19**, **TypeScript**, and **Tailwind CSS**.

## Features

- Single-page layout: Hero, About, Skills, Experience, Projects, Contact
- Fully responsive with a mobile nav
- Scroll-reveal animations (respects `prefers-reduced-motion`)
- All content lives in one file — [lib/data.ts](lib/data.ts) — so you never touch the components
- SEO metadata + Open Graph tags derived from your profile
- Zero external UI libraries; just Tailwind

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Customize

1. **Content** — edit [lib/data.ts](lib/data.ts): name, role, socials, about, skills, experience, projects.
2. **Colors / theme** — tweak the palette in [tailwind.config.ts](tailwind.config.ts) under `theme.extend.colors`.
3. **Resume** — drop a `resume.pdf` into a `public/` folder (create it) and it'll be linked from the nav.

## Build & deploy

```bash
npm run build
npm start
```

Deploys out of the box on **Vercel** — push to a Git repo and import it, no config needed.

## Project structure

```
app/
  layout.tsx      # fonts, metadata, html shell
  page.tsx        # section composition
  globals.css     # base styles, grid + reveal helpers
components/        # Nav, Hero, About, Skills, Experience, Projects, Contact, Footer
lib/data.ts       # <-- edit your content here
```
