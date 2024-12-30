import { defineConfig } from "astro/config";
import markdoc from "@astrojs/markdoc";
import keystatic from "@keystatic/astro";

import vercel from "@astrojs/vercel";
import tailwind from "@astrojs/tailwind";
import alpinejs from "@astrojs/alpinejs";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
	integrations: [markdoc(), keystatic(), tailwind(), alpinejs(), react()],
	output: "hybrid",
	prefetch: {
		prefetchAll: true,
	},
	adapter: vercel(),
});
