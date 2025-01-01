import { defineConfig } from "astro/config";
import markdoc from "@astrojs/markdoc";
import keystatic from "@keystatic/astro";

import tailwind from "@astrojs/tailwind";
import alpinejs from "@astrojs/alpinejs";

import react from "@astrojs/react";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
	integrations: [react(), markdoc(), keystatic(), tailwind(), alpinejs()],

	// prefetch: {
	// 	prefetchAll: true,
	// },
	output: "hybrid",

	adapter: netlify({
		// imageCDN: true,
	}),
	prefetch: {
		prefetchAll: true,
		defaultStrategy: "viewport",
	},
});
