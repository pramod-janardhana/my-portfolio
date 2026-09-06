# Documentation workflow (required every task)

This repo keeps its standards in `docs/`. Follow this loop for **every** change request:

**Before making changes (pre-step):**
1. Read `docs/CONVENTIONS.md` and `docs/PROJECT_STRUCTURE.md` before editing code.
2. Make your changes follow those conventions. If a request conflicts with them,
   flag the conflict to the user instead of silently diverging.

**After making changes (post-step):**
3. Check whether your change affected anything the docs describe — e.g. added/
   removed/renamed a file, component, route, token, or convention.
4. If so, update the relevant doc in `docs/` in the **same** change so code and
   docs never drift. If nothing the docs cover changed, leave them untouched.
5. Keep docs concise and accurate; don't document one-off details.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
