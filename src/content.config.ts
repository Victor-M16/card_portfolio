import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      tags: z.array(z.string()).default([]),
      /** Cover image, relative to the post file. Also used as the social preview. */
      cover: image().optional(),
      coverAlt: z.string().optional(),
      /** Drafts show up in `npm run dev` but are left out of production builds. */
      draft: z.boolean().default(false),
      /** Pinned to the top of the blog page and the home page. RSS and older/newer links stay in date order. */
      featured: z.boolean().default(false),
    }),
});

/**
 * Chapters of a novel, one file per chapter, under src/content/books/<book>/.
 * The text is the manuscript exactly as written: these files are excluded from
 * Prettier and must never be edited by tooling. Ids are "<book>/<slug>"; the
 * slug part is the chapter URL (chapter-1 … epilogue).
 */
const chapters = defineCollection({
  loader: glob({
    base: "./src/content/books",
    pattern: "**/*.md",
    // "<book>/<slug>", e.g. "book-two/chapter-1", so chapters of different books never collide.
    generateId: ({ entry, data }) => `${entry.split("/")[0]}/${String(data.slug)}`,
  }),
  schema: z.object({
    title: z.string(),
    order: z.number().int().positive(),
  }),
});

export const collections = { blog, chapters };
