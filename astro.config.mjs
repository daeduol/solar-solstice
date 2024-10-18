import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from "astro/config";

import deno from '@deno/astro-adapter';

// https://astro.build/config
export default defineConfig({
	output: 'server',
	adapter: deno(),
	}),
	integrations: [tailwind(), mdx()],
	i18n: {
		defaultLocale: 'en',
		locales: ['en', 'es'],
		routing: {
			prefixDefaultLocale: false,
		},
	},
});
