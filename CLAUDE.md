# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Package manager: `npm` (lockfile is `package-lock.json`).

- `npm run dev` — Next.js dev server on port **3000**
- `npm run build` — production build
- `npm run start` — serve the production build on port 3000
- `npm run lint` — `next lint` (extends `next/core-web-vitals`)
- `npm test` — run Vitest once (jsdom)
- `npm run test:watch` — Vitest watch mode
- Run a single test file: `npx vitest run src/path/to/file.test.ts`
- Filter by test name: `npx vitest run -t "partial name"`

Tests live next to source as `*.test.ts(x)` / `*.spec.ts(x)`. Global setup is [src/test/setup.ts](src/test/setup.ts) (imports `@testing-library/jest-dom`, stubs `matchMedia`).

## Architecture

Single-page marketing site for **trinos.ai** built with **Next.js 15 (App Router) + React 18 + TypeScript + Tailwind + shadcn/ui**. Originally scaffolded by Lovable as a Vite app; migrated to Next.js for SEO and deployability.

### Routing & entry

App Router lives at [src/app/](src/app/):
- [src/app/layout.tsx](src/app/layout.tsx) — root layout. Wires `next/font` (Inter + Sora as CSS variables `--font-inter` / `--font-sora`), exposes site `metadata` (used for `<title>`, OG tags, `metadataBase: 'https://trinos.ai'`), and renders `<Providers>`.
- [src/app/providers.tsx](src/app/providers.tsx) — **client component** that mounts `QueryClientProvider`, `TooltipProvider`, and both toasters (`Toaster` from `ui/toaster` and Sonner). Anything that needs React context belongs here.
- [src/app/page.tsx](src/app/page.tsx) — homepage; composes the section components from `src/components/site/` top-to-bottom.
- [src/app/not-found.tsx](src/app/not-found.tsx) — 404 page.
- [src/app/globals.css](src/app/globals.css) — Tailwind layers + brand CSS variables; imported by the root layout.

To add a new page, create `src/app/<segment>/page.tsx` (App Router file-based routing). No central route table.

### Component layout

- [src/components/ui/](src/components/ui/) — shadcn/ui primitives (Radix-based). All marked `"use client"` because they use hooks/Radix internals. Configured via [components.json](components.json) (style: default, base color: slate, CSS variables, no RSC). Add new primitives via the shadcn CLI; they land here.
- [src/components/site/](src/components/site/) — page sections specific to the marketing site. These are server components by default; only [Header.tsx](src/components/site/Header.tsx) is `"use client"` (uses `useState`/`useEffect` for scroll + mobile menu).
- [src/hooks/](src/hooks/) — `use-mobile`, `use-toast`. Both client.
- [src/lib/utils.ts](src/lib/utils.ts) — the `cn()` helper (clsx + tailwind-merge). Use it for all conditional className composition.
- [src/assets/](src/assets/) — static images imported via the `@/assets/*` alias. Next.js processes these as `StaticImageData` and they must be rendered with `<Image>` from `next/image` (never `<img>`).

### Styling system

Tailwind is **fully driven by CSS variables** defined in [src/app/globals.css](src/app/globals.css) under `:root`. Brand tokens (`--primary`, `--primary-glow`, `--primary-deep`, `--surface-soft`, `--surface-tint`, `--surface-dark`, etc.) are HSL triples consumed by [tailwind.config.ts](tailwind.config.ts) as `hsl(var(--token))`. When adding colors, add the variable in `globals.css` AND extend it in `tailwind.config.ts` — don't hardcode hex values in components.

Custom utilities/components in `globals.css`:
- `.container-px` — standard horizontal page padding
- `.tile`, `.chip`, `.link-arrow` — recurring visual patterns; reuse rather than re-implementing
- `.bg-gradient-{primary,hero,tile,cta,dark}`, `.shadow-{soft,card,glow}`, `.text-balance`
- Animations: `animate-float-slow`, `animate-fade-up`, `animate-marquee`

Fonts: Inter (body, `font-sans`) and Sora (display, headings — `font-display`) loaded via `next/font/google` in `layout.tsx`. They're exposed as CSS variables and consumed in `globals.css`'s `body` and `h1–h4` rules.

### Server vs. client components

Default to **server components**. Add `"use client"` only when a file uses hooks, browser APIs, event handlers, or Radix primitives. The current split:
- All `src/components/ui/*` files: client.
- `src/components/site/Header.tsx`: client (scroll/menu state).
- All other `src/components/site/*`: server.
- `src/app/providers.tsx`: client.
- `src/app/page.tsx`, `src/app/layout.tsx`, `src/app/not-found.tsx`: server.

### Path alias

`@/*` → `src/*` (configured in [tsconfig.json](tsconfig.json) and [vitest.config.ts](vitest.config.ts)). Always import via `@/...` rather than relative paths beyond one level.

### TypeScript config notes

[tsconfig.json](tsconfig.json) is intentionally lenient: `strict: false`, `strictNullChecks: false`, `noImplicitAny: false`, `noUnusedLocals: false`, `noUnusedParameters: false`. ESLint also disables `@typescript-eslint/no-unused-vars` and `@next/next/no-img-element`. Don't tighten these without checking with the user — existing code relies on the loose settings.

### Testing

Vitest is configured separately from Next ([vitest.config.ts](vitest.config.ts)) with `jsdom`, globals, and the `@/*` alias. Tests don't go through the Next bundler — they run directly under Vitest's transform. That's fine for unit tests of pure components/utilities, but anything depending on Next runtime APIs (`next/font`, `next/image` at runtime, server components) won't work in this setup; mock or stub those.
