import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://ideas-blog.vercel.app',
  integrations: [mdx()],
  output: 'static'
});
