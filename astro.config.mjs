import { defineConfig } from "astro/config";
import markdoc from "@astrojs/markdoc";
import keystatic from "@keystatic/astro";

import tailwind from "@astrojs/tailwind";
import alpinejs from "@astrojs/alpinejs";

import react from "@astrojs/react";

import keystaticAdmin from "./src/integrations/keystatic-admin";

import vercel from "@astrojs/vercel/serverless";

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

    adapter: vercel(),
    prefetch: {
        prefetchAll: true,
        defaultStrategy: "viewport",
    },
});
