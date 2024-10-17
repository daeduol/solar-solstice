import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from "astro/config";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  site: 'http://daeduol.github.io/solar-solstice/',
  base: '/solar-solstice',
  output: 'hybrid',
  adapter: node({
    mode: "standalone"
  }),
  integrations: [tailwind(), mdx()],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
    routing: {
      prefixDefaultLocale: false
    }
  }
});
