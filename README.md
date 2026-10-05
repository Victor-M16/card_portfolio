# Victor Mjimapemba: Portfolio & Blog

My personal site: who I am, what I've built, and a blog where I write about it.

Built with [Astro](https://astro.build), TypeScript and Tailwind CSS, and deployed on [Vercel](https://vercel.com). Pages are pre-rendered to static HTML. The only server code is the contact form, which runs as a Vercel function and sends email through [Resend](https://resend.com).

## Getting started

Requires Node.js 22.12+ (production uses Node 24).

```bash
npm install
cp .env.example .env   # then fill in RESEND_API_KEY to test the contact form
npm run dev            # http://localhost:4321
```

| Command          | What it does                                         |
| ---------------- | ---------------------------------------------------- |
| `npm run dev`    | Dev server with hot reload. Draft posts are visible. |
| `npm run build`  | Production build (static pages + Vercel function).   |
| `npm run check`  | Type-checks `.astro`, `.ts` and `.tsx` files.        |
| `npm run lint`   | ESLint, including accessibility rules.               |
| `npm run format` | Formats everything with Prettier.                    |
| `npm run verify` | Lint, format check, type check and build in one go.  |

## Writing a blog post

Add a Markdown (`.md`) or MDX (`.mdx`) file to `src/content/blog/`. The file name becomes the URL. See [`src/content/blog/writing-a-post.md`](src/content/blog/writing-a-post.md) for the frontmatter fields and a cheat sheet. Posts with `draft: true` only show up in `npm run dev`.

Every post gets its own page, tag pages, an entry in the RSS feed (`/rss.xml`) and the sitemap, and social preview tags so links look good when shared.

## Updating portfolio content

Content lives in typed data files in `src/data/`: experience, projects, tech skills, services, and site-wide settings like nav links. Images go in `src/assets/` and are imported from those files, which lets Astro resize and convert them automatically.

## Deploying to Vercel

1. Import the repository in Vercel. The Astro preset is detected automatically.
2. In **Project → Settings → Environment Variables**, add `RESEND_API_KEY` (create one at [resend.com/api-keys](https://resend.com/api-keys)).
3. Optional: `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL` (needs a domain verified in Resend) and `SITE_URL` once you have a custom domain. See [`.env.example`](.env.example).

Without a verified domain, Resend's shared `onboarding@resend.dev` sender can only deliver to the email address on your Resend account, so sign up to Resend with the address you want messages delivered to.

## History

This started as a React + three.js portfolio built from a YouTube tutorial. The last version of that is the `master` branch as of commit `5e03f46`. Unused 3D models and the original hero video are kept in [`archive/`](archive/).

## License

MIT
