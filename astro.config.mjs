import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import { SITE_METADATA } from "./src/consts.ts";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: SITE_METADATA.siteUrl,
  integrations: [mdx(), sitemap(), tailwind(), svelte()]
});