import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';


/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    // Wrap the static adapter with sitemap generation
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: null,
      precompress: false,
      strict: false
    }),
  },

  preprocess: vitePreprocess(),
};

export default config;
