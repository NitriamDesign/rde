import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { sitemapWrapAdapter } from 'sveltekit-static-sitemap';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    // Wrap the static adapter with sitemap generation
    adapter: sitemapWrapAdapter(
      adapter({
        // default options are shown. On some platforms
        // these options are set automatically — see below
        pages: 'build',
        assets: 'build',
        fallback: undefined,
        precompress: false,
        strict: true
      })
    ),
  },

  preprocess: vitePreprocess(),
};

export default config;
