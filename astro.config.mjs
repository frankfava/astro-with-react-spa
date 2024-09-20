import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
	integrations: [
		react(),
		tailwind({
			// Example: Allow writing nested CSS declarations alongside Tailwind's syntax
			nesting: true,
		})
	],
	output: 'server',
	adapter: netlify()
});