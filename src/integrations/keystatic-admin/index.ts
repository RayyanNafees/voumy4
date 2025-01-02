import type { AstroIntegration } from "astro";
import svg from "./icon.svg";
export default () =>
	({
		name: "keystatic-admin",
		hooks: {
			"astro:config:setup": ({ addDevToolbarApp }) => {
				addDevToolbarApp({
					id: "keystatic-admin",
					name: "Keystatic Admin UI",
					icon: svg,
					entrypoint: new URL("./entry.ts", import.meta.url).toString(),
				});
			},
		},
	}) as AstroIntegration;
