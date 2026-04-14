# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev              # Next.js dev server (localhost:3000) with Turbopack
pnpm build            # Production Next.js build
pnpm typecheck        # TypeScript type-check (no emit)
pnpm lint             # ESLint
pnpm format           # Prettier (writes in place)

pnpm storybook        # Storybook dev server (localhost:6006)
pnpm build-storybook  # Static Storybook build

pnpm vitest           # Run story tests via Vitest + Playwright (headless Chromium)
```

Node is at `C:\Program Files\nodejs\`; pnpm at `C:\Users\steve\AppData\Roaming\npm\`. Neither is on the default bash PATH — prefix commands with:
```bash
export PATH="/c/Users/steve/AppData/Roaming/npm:/c/Program Files/nodejs:$PATH"
```

## Architecture

**Purpose:** Living component library and visual reference for a custom Shadcn UI theme (preset `b1buhyDWfQ`). No `src/` directory — everything lives at the project root.

```
app/                  # Next.js App Router
  globals.css         # Tailwind directives + all CSS custom properties (theme vars)
  layout.tsx          # Loads Google Fonts, applies font CSS variable classes to <html>
  page.tsx            # Single-page component gallery (client component)
components/
  ui/                 # All ~55 Shadcn components (do not hand-edit; use shadcn CLI)
  theme-provider.tsx  # next-themes wrapper
stories/              # One *.stories.tsx per component (CSF3 format)
.storybook/
  main.ts             # Storybook config; stories glob: ../stories/**
  preview.tsx         # Global CSS import + decorator that applies fonts/dark mode
lib/utils.ts          # cn() helper (clsx + tailwind-merge)
hooks/use-mobile.ts   # useIsMobile hook
```

## Git workflow

Commit and push to GitHub regularly throughout any work session — after each logical unit of change (a new story, a bug fix, a config tweak). Never batch everything into one commit at the end.

```bash
git add <files>
git commit -m "Short description of what changed and why"
git push
```

Commit messages should say *what* changed and *why*, not just restate the diff. Push after every commit so progress is never lost locally.

## Key conventions

**Theme:** Tailwind CSS 4 with CSS custom properties defined in `app/globals.css`. No `tailwind.config.ts` — configuration is done via CSS. The `@custom-variant dark (&:is(.dark *))` pattern means dark mode is class-based (`.dark` on a parent).

**Fonts:** Three fonts loaded via `next/font/google` in `app/layout.tsx` — Roboto (`--font-heading`), Source Sans 3 (`--font-sans`), Geist Mono (`--font-mono`). They are replicated in `.storybook/preview.tsx` and applied to `document.body` so portal components (Dialog, Sheet, etc.) inherit them.

**Path alias:** `@/*` maps to the project root (e.g. `@/components/ui/button`).

**Adding components:** Use the Shadcn CLI, not manual edits:
```bash
pnpm dlx shadcn@latest add <component-name>
```

**Story structure:** Every story file exports a `Meta` default and named `StoryObj` exports. Components that use Radix portals (DropdownMenu, Tooltip, etc.) need `modal={false}` or a `TooltipProvider` decorator — see existing stories for the pattern. Portal-rendered content inherits theme from `document.body` (handled in `preview.tsx`), not from the story's wrapper `div`.

**Lucide icons:** Version 1.x — `Github` was removed; use `GitFork` instead. Check exports before using unfamiliar icon names.

**Resizable panels:** `react-resizable-panels` v4 uses `orientation` (not `direction`) on `ResizablePanelGroup`.
