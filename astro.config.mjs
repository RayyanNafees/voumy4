import { defineConfig, sharpImageService } from "astro/config";
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
	output: "server",

	adapter: netlify(),
	image: {
		service: sharpImageService(),
	},
});
