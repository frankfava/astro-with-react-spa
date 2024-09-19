import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
	integrations: [
		tailwind({
			// Example: Allow writing nested CSS declarations alongside Tailwind's syntax
			nesting: true,
		}),
		react()
	],
	output: 'server',
	adapter: node({
		mode: 'standalone'
	})
});