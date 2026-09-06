# Conventions — Dos and Don'ts

Patterns this codebase follows. Keep new code consistent with them.

## Content & data

- **Do** keep all copy, metrics, and lists in `lib/portfolio/` — it is the single
  source of truth. Each section has its own file; edit the relevant one.
- **Do** import content from the barrel `@/lib/portfolio` (its `index.ts`), never
  from an individual section file — this keeps the import surface stable.
- **Do** add an exported `type` next to the data it describes in the same section
  file, and re-export it from `index.ts` (e.g. `CaseStudy`, `Recommendation`).
- **Do** add a new section as its own file plus a re-export line in `index.ts`.
- **Don't** hardcode content (labels, copy, node data, links) inside components.
  If a component needs data, pass it as props or read it from `lib/portfolio`.
- **Don't** leave unused fields on data objects — remove them when they stop
  being referenced.

## Server vs client components

- **Do** keep pages and components as Server Components by default.
- **Do** add `"use client"` only when a component needs state, effects, refs, or
  browser APIs (see `ContentsRail`, `ReviewCard`, `SystemDiagram`, `ThemeToggle`).
- **Don't** mark a component `"use client"` just because it renders interactive
  markup — push the client boundary to the smallest leaf that needs it.

## Components & reuse

- **Do** reuse the shared primitives instead of re-writing their markup:
  `Card`, `Badge`, `TagList`, `StatTile`, `SectionHeading`, `ExternalLink`.
- **Do** use `default` exports for components (matches every existing file).
- **Do** type props inline and provide sensible defaults for optional props.
- **Don't** duplicate a repeated Tailwind pattern (bordered cards, stack chips,
  status pills) more than once — extract or use an existing primitive.
- **Don't** over-abstract: only create a primitive when the pattern actually
  repeats.

## Styling

- **Do** style with Tailwind utilities and the semantic token colors
  (`bg`, `elev`, `card`, `line`, `fg`, `muted`, `accent`, `success`).
- **Do** define new tokens as RGB triplets in `globals.css` for **both** `:root`
  and `.light`, then map them in `tailwind.config.ts`.
- **Don't** use raw hex colors or Tailwind's default palette (e.g. `slate-800`)
  in components — always go through the tokens so the theme toggle works.
- **Don't** put a single value in two places. When a number drives both JS and
  CSS (e.g. clamp lines in `ReviewCard`), derive one from the other.

## Links

- **Do** use `ExternalLink` for any link leaving the site — it applies
  `target="_blank"` and `rel="noreferrer"` consistently.
- **Do** use Next.js `<Link>` for internal navigation.
- **Don't** hand-write `<a target="_blank">` without `rel="noreferrer"`.

## Accessibility

- **Do** use semantic elements (`figure`/`figcaption`, `dl`/`dt`/`dd`,
  `blockquote`, `nav`, `header`, `footer`).
- **Do** make custom interactive elements keyboard-operable: `role`, `tabIndex`,
  `onKeyDown` (Enter/Space), focus-visible styles, and appropriate `aria-*`
  (see `SystemDiagram`).
- **Do** honor `prefers-reduced-motion` for any new animation.
- **Don't** ship mouse-only interactions or controls without accessible labels.

## Routing & metadata

- **Do** generate static params for dynamic routes and call `notFound()` for
  unknown entries.
- **Do** add `generateMetadata` for pages that need a distinct title/description.
- **Don't** introduce runtime data fetching — the site is static by design.

## Quality gate

- **Do** run `npm run build` before considering a change done; it must compile
  and typecheck clean with no ESLint errors.
- **Don't** commit unused imports, dead code, or leftover mockups.
