import { defineConfig } from "astro/config";
import markdoc from "@astrojs/markdoc";
import keystatic from "@keystatic/astro";

import tailwind from "@astrojs/tailwind";
import alpinejs from "@astrojs/alpinejs";

import react from "@astrojs/react";

import netlify from "@astrojs/netlify";

import keystaticAdmin from "./src/integrations/keystatic-admin";

// https://astro.build/config
export default defineConfig({
	integrations: [
		react(),
		markdoc({
			allowHTML:true,
			// ignoreIndentation:
		}),
		keystatic(),
		tailwind(),
		alpinejs(),
		keystaticAdmin(),
	],

	// prefetch: {
	// 	prefetchAll: true,
	// },
	output: "hybrid",

	adapter: netlify({
		// imageCDN: true,
	}),
	prefetch: {
		prefetchAll: true,
		defaultStrategy: "hover",
	},
});
