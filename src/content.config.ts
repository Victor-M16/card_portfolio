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
    }),
});

export const collections = { blog };
