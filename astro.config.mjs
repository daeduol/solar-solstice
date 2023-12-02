
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from "astro/config";
import astroI18next from "astro-i18next";

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind(), mdx()],
    experimental: {
        i18n: {
            defaultLocale: "en",
            locales: ["en","es"],
            routing: {
                prefixDefaultLocale: false
            }
        }
    }
});
