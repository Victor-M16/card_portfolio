# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal portfolio and blog for Victor Mjimapemba. Astro 7 + TypeScript (strict) + Tailwind CSS 4, deployed on Vercel via `@astrojs/vercel`. Pages are pre-rendered (`output: "static"`); the only on-demand code is the contact form's Astro Action. React 19 is used only for the contact form island. There is no test suite.

## Commands

```bash
npm run dev       # http://localhost:4321 (drafts visible)
npm run build     # static pages + Vercel function into .vercel/output and dist/
npm run check     # astro check (types for .astro/.ts/.tsx)
npm run lint      # eslint flat config incl. jsx-a11y rules
npm run format    # prettier (astro + tailwind class sorting plugins)
npm run verify    # lint + format:check + check + build — run before pushing
```

`astro sync` regenerates `.astro/` types after changing `content.config.ts` or `astro.config.mjs` env schema.

## Architecture

- **Pages** (`src/pages/`): `index.astro` composes the section components in order; `blog/index.astro`, `blog/[...slug].astro`, `blog/tags/[tag].astro`, `rss.xml.ts`, `404.astro`. All wrap `layouts/BaseLayout.astro`, which owns `<head>` (via `components/SEO.astro`: canonical, Open Graph, Twitter), the navbar, footer, and loads `scripts/reveal.ts` and `scripts/tilt.ts`.
- **Content is data-driven.** Portfolio content lives in typed modules in `src/data/` (`experiences`, `projects`, `technologies`, `services`, `site`). Edit those, not the components. Images are imported there from `src/assets/` as `ImageMetadata` and rendered with `astro:assets` `<Image>`/`getImage` so they get resized/converted to WebP. `testimonials.ts` is kept but not rendered.
- **Blog** is a content collection defined in `src/content.config.ts` (glob loader over `src/content/blog/**/*.{md,mdx}`, zod schema incl. `draft`, `tags`, optional `cover` image). Always fetch posts through `getPosts()` in `src/lib/blog.ts` — it filters drafts out of production builds and sorts newest-first; RSS, tag pages, the post pages and `LatestPosts` all rely on it. A post's `cover` doubles as its OG image.
- **Contact form**: `components/ContactForm.tsx` (React island, `client:visible`) calls the `contact` action in `src/actions/index.ts`, which validates with zod, drops honeypot (`website`) submissions, and posts to the Resend REST API with `fetch`. Env vars are declared with `envField` in `astro.config.mjs` and read from `astro:env/server` (`RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`). Without a key the action returns a friendly error. Astro's built-in CSRF check rejects cross-origin form POSTs, so test with an `Origin` header when using curl.
- **Animations are CSS + tiny vanilla scripts, not Framer Motion.** Add `data-reveal` (optionally `="left"` and `data-reveal-delay="ms"`) to fade an element in on scroll, and `data-tilt` for the hover tilt. The hidden initial state is gated on the `.js` class set inline in `<head>`, so content is visible without JS, and everything respects `prefers-reduced-motion`. Logo carousels use `components/Marquee.astro` (CSS keyframes, list rendered twice, copy `aria-hidden`).
- **Styling**: theme tokens (`primary`, `secondary`, `tertiary`, `black-100/200`, `white-100`, `gold`, `shadow-card`, `xs` breakpoint) and custom utilities (`section-sub`, `section-head`, `*-gradient`, `text-gradient-*`) are defined in `src/styles/global.css` with Tailwind 4's `@theme`/`@utility` — there is no `tailwind.config.js`. Blog bodies use `@tailwindcss/typography` (`prose`).
- **Imports** use the `@/*` → `src/*` alias.
- **Site URL** for canonical/RSS/sitemap comes from `SITE_URL`, else Vercel's `VERCEL_PROJECT_PRODUCTION_URL`, else localhost.
- **Static files**: `public/hero.mp4` is a compressed copy of `archive/introvid-original.mp4` (see `archive/README.md`). `favicon.png`, `apple-touch-icon.png` and `og-default.jpg` were generated from `src/assets/victorsmile.jpg`. `archive/` holds unused assets (old 3D models) and is excluded from lint, format and type-check; don't delete assets — the owner wants them kept.
