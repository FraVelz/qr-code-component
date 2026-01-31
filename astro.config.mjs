// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output:'static',
  base:'/qr-code-component/',
  site:'https://fravelz.github.io/qr-code-component/',

  vite: {
    plugins: [tailwindcss()]
  }
});