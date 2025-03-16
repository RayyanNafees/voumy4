import { defineConfig } from "astro/config";
import markdoc from "@astrojs/markdoc";
import keystatic from "@keystatic/astro";

import tailwindcss from "@tailwindcss/vite";
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
		alpinejs({
			entrypoint: "/src/alpine",
		}),
		keystaticAdmin(),
		partytown({
			forward: ["dataLayer.push", "fbq"],
			config: { debug: true },
		}),
	],

	output: "static",
	adapter: netlify(),
	prefetch: {
		prefetchAll: true,
		defaultStrategy: "viewport",
	},
	vite: {
		plugins: [tailwindcss()],
	},
});
