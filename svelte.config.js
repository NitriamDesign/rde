import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { sitemapWrapAdapter } from 'sveltekit-static-sitemap';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    // Wrap the static adapter with sitemap generation
    adapter: sitemapWrapAdapter(adapter()),

    prerender: {
      crawl: true, // Prerender all pages
      origin: 'https://www.rde-usa.com'
    },
  },

  preprocess: vitePreprocess(),
};

export default config;
