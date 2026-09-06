# Project Structure

```
app/                     Next.js App Router: routes, layout, global styles
  layout.tsx             Root layout — fonts, metadata, theme init script
  page.tsx               Home page (the design-doc single page)
  globals.css            Design tokens (CSS vars) + base styles + animations
  work/[slug]/page.tsx   Case-study deep-dive pages (SSG via generateStaticParams)

public/                  Static assets served at the site root (e.g. resume.pdf)
  .nojekyll              Tells GitHub Pages to serve the `_next/` folder

.github/workflows/
  deploy.yml             CI: build static export and publish to GitHub Pages

components/              Reusable UI. All components are default exports
  Badge.tsx              Monospace status/label pill (default | success)
  Card.tsx               Elevated bordered surface (polymorphic via `as`)
  ExternalLink.tsx       Anchor that always opens safely in a new tab
  StatTile.tsx           Metric tile (value over label) for <dl> grids
  TagList.tsx            <ul> of monospace tech-stack chips
  SectionHeading.tsx     Numbered §nn heading (stacked or inline)
  ContentsRail.tsx       Sticky scroll-spy nav + mobile menu (client)
  CaseStudies.tsx        Master-detail case-study browser (client)
  DeploymentCard.tsx     Company card: collapsible role timeline + projects (client)
  SystemDiagram.tsx      Interactive request-path SVG diagram (client)
  ReviewCard.tsx         Expandable recommendation/feedback card (client)
  Reveal.tsx             Reveal-on-scroll wrapper (client)
  ThemeToggle.tsx        Dark/light toggle (client)

lib/
  portfolio/             SINGLE SOURCE OF TRUTH for all content + types
    index.ts             Barrel — re-exports every section (import from here)
    profile.ts           profile
    metrics.ts           metrics
    principles.ts        Principle + principles ("Principles" / how I work)
    stack.ts             StackGroup + stack
    experience.ts        Role/CompanyProject/Company + experience
    case-studies.ts      CaseStudy + caseStudies
    recommendations.ts   Recommendation + recommendations
    milestones.ts        milestones
    education.ts         education + Certification/certifications
    navigation.ts        sections (contents rail)
    system-diagram.ts    DiagramNode + systemDiagram

docs/                    This documentation
```

## Layering

Data flows in one direction: `lib/portfolio` → pages → components.

- **`lib/portfolio/`** holds content split by section, each file owning its data
  and the types that describe it. `index.ts` is a barrel re-exporting everything,
  so consumers always import from `@/lib/portfolio` (never a section file).
  No JSX, no styling.
- **`app/`** composes sections and passes data down. Pages are Server Components.
- **`components/`** are presentational and reusable. Only the ones that need
  browser APIs or state are marked `"use client"`.

## Routing

- `/` — home, statically prerendered.
- `/work/[slug]` — one page per entry in `caseStudies`, generated at build time
  through `generateStaticParams`; unknown slugs call `notFound()`.

## Theming

- Tokens are defined as RGB triplets in `app/globals.css` under `:root` (dark)
  and `.light`. Tailwind maps them to color utilities in `tailwind.config.ts`.
- An inline script in `layout.tsx` applies the saved theme before paint to avoid
  a flash; `<html>` uses `suppressHydrationWarning`.
