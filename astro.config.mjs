import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
// import vue from "@astrojs/vue";

// https://astro.build/config
import compressor from "astro-compressor";

// https://astro.build/config
export default defineConfig({
  site: 'https://astro-spotify-maxtrix',
  integrations: [
    mdx(), 
    sitemap(), 
    // vue(), 
    compressor()
  ]
});