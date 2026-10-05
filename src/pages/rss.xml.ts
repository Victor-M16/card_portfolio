import rss from "@astrojs/rss";
import type { APIRoute } from "astro";
import { site } from "@/data/site";
import { getPosts } from "@/lib/blog";

export const GET: APIRoute = async (context) => {
  const posts = await getPosts();
  return rss({
    title: `${site.name} | Blog`,
    description: site.description,
    site: context.site ?? context.url.origin,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      categories: post.data.tags,
      link: `/blog/${post.id}/`,
    })),
  });
};
