import { defineConfig } from "astro/config";
import markdoc from "@astrojs/markdoc";
import keystatic from "@keystatic/astro";

import tailwind from "@astrojs/tailwind";
import alpinejs from "@astrojs/alpinejs";

import react from "@astrojs/react";

import netlify from "@astrojs/netlify";

import keystaticAdmin from "./src/integrations/keystatic-admin";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
	integrations: [
		react(),
		markdoc({
			allowHTML: true,
			// ignoreIndentation:
		}),
		keystatic(),
		tailwind(),
		alpinejs({
			entrypoint: "/src/alpine",
		}),
		keystaticAdmin(),
		partytown({
			forward: ["dataLayer.push", "fbq"],
            config: { debug: true },
		}),
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
		defaultStrategy: "viewport",
	},
});
