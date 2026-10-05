---
title: "How to write a post (delete me)"
description: "A cheat sheet for writing posts on this blog. It's a draft, so it never ships to production."
pubDate: 2026-10-05
tags: ["meta"]
draft: true
---

This post is a **draft**, so it shows up in `npm run dev` but is left out of production builds, the RSS feed, and the sitemap.

## Publishing a new post

1. Create a file in `src/content/blog/`. The file name becomes the URL: `lucy-launch.md` → `/blog/lucy-launch/`.
2. Add the frontmatter at the top (copy it from this file).
3. Write in Markdown. Use `.mdx` instead of `.md` if you want to drop components into a post.
4. Set `draft: false` (or remove the line), commit, and push. Vercel builds and publishes it.

## Frontmatter fields

| Field         | Required | Notes                                                            |
| ------------- | -------- | ---------------------------------------------------------------- |
| `title`       | yes      | Shown on the page and in link previews.                          |
| `description` | yes      | One or two sentences. Used in previews, RSS, and search results. |
| `pubDate`     | yes      | `YYYY-MM-DD`. Posts are sorted by this.                          |
| `updatedDate` | no       | Shown as "Updated …" when set.                                   |
| `tags`        | no       | e.g. `["lucy", "lemonade-systems"]`. Each tag gets its own page. |
| `cover`       | no       | Image path relative to the post, e.g. `./lucy/cover.png`.        |
| `coverAlt`    | no       | Describe the cover image for screen readers.                     |
| `draft`       | no       | `true` keeps it out of production.                               |

A post with a `cover` uses it as its social preview image, so links shared on LinkedIn, X, or WhatsApp show it.

## Images

Put images next to the post (for example `src/content/blog/lucy/diagram.png`) and reference them relatively:

```md
![The Lucy architecture](./lucy/diagram.png)
```

They're resized and converted to modern formats automatically.

## Code

Fenced code blocks are syntax-highlighted:

```python
def hello(name: str) -> str:
    return f"Hello, {name}!"
```
