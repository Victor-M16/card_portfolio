// @ts-check
import { defineConfig, envField } from "astro/config";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";

// Canonical URL used for sitemap, RSS and social previews. Set SITE_URL once
// you have a custom domain; on Vercel it falls back to the production domain.
const site =
  process.env.SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:4321");

export default defineConfig({
  site,
  // Every page is pre-rendered to static HTML; only the contact action runs
  // as a Vercel serverless function.
  output: "static",
  adapter: vercel(),
  integrations: [react(), mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  env: {
    schema: {
      RESEND_API_KEY: envField.string({ context: "server", access: "secret", optional: true }),
      CONTACT_TO_EMAIL: envField.string({
        context: "server",
        access: "secret",
        default: "vcmjimapemba@gmail.com",
      }),
      CONTACT_FROM_EMAIL: envField.string({
        context: "server",
        access: "secret",
        default: "Portfolio Contact <onboarding@resend.dev>",
      }),
    },
  },
  markdown: {
    shikiConfig: { theme: "github-dark-dimmed" },
  },
});
