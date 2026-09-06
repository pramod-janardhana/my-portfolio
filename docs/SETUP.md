# Setup & Run

## Prerequisites

- **Node.js** 20 or newer (Next.js 16 requires a modern LTS).
- **npm** (ships with Node).

Check your versions:

```bash
node -v
npm -v
```

## Install

```bash
npm install
```

> If your npm registry blocks certain package versions, install against a local
> cache (the folder is gitignored):
>
> ```bash
> npm install --cache ./.npm-cache
> ```

## Run in development

```bash
npm run dev
```

Then open http://localhost:3000. The dev server hot-reloads on save.

> Note: the script is `npm run dev` — `npm dev` is not a valid command.

## Build & run production

```bash
npm run build   # create an optimized, statically prerendered build
npm run start   # serve the production build (defaults to :3000)
```

> The project is configured for **static export** (`output: "export"` in
> `next.config.mjs`), so `npm run build` also emits a fully static site to `out/`.

## Deploy (GitHub Pages)

The site deploys automatically to GitHub Pages as a **project site**
(`https://pramod-janardhana.github.io/portfolio/`, repo name `portfolio`).

- Push to `main` triggers `.github/workflows/deploy.yml`, which runs
  `npm ci && npm run build` and publishes `out/` to Pages.
- One-time repo setup: **Settings → Pages → Build and deployment → Source =
  "GitHub Actions"**.
- Config that makes this work (in `next.config.mjs`): `output: "export"`,
  `trailingSlash: true`, `basePath: "/portfolio"`, and
  `env.NEXT_PUBLIC_BASE_PATH` (used to prefix raw anchors that `<Link>` doesn't
  handle, e.g. the résumé link). Plus `public/.nojekyll` so `_next/` is served.
- `metadataBase` in `app/layout.tsx` includes the `/portfolio` subpath.
- If the repo is ever renamed, update `basePath` and `metadataBase` to match
  (or drop both for a root `*.github.io` site).
- Put deployable static files (e.g. `resume.pdf`) in `public/`; reference them
  through `NEXT_PUBLIC_BASE_PATH` so the subpath is applied.

## Lint

```bash
npm run lint
```

## Available scripts

| Script          | What it does                                  |
| --------------- | --------------------------------------------- |
| `npm run dev`   | Start the dev server on port 3000             |
| `npm run build` | Production build (SSG)                         |
| `npm run start` | Serve the production build                      |
| `npm run lint`  | Run ESLint                                     |

## Editing content

All site content lives in `lib/portfolio/` (import from `@/lib/portfolio`) —
edit the section files there, not in components.
See [CONVENTIONS.md](./CONVENTIONS.md) and [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md).
