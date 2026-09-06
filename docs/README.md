# Project Documentation

Conventions and structure for the portfolio codebase. Read these before adding
features so contributions stay consistent with the existing patterns.

- [SETUP.md](./SETUP.md) — install, run, build, and available scripts.
- [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md) — where things live and why.
- [CONVENTIONS.md](./CONVENTIONS.md) — dos and don'ts for writing code here.

## Stack at a glance

- **Next.js (App Router)** + **React 19** + **TypeScript** (strict).
- **Tailwind CSS v3** with CSS-variable design tokens (`darkMode: "class"`).
- Static-first: the site is fully prerendered (SSG).
