import { defineToolbarApp } from "astro/toolbar";

export default defineToolbarApp({
	init(_, app) {
		app.onToggled(() => {
			window.open("/keystatic", "_blank");
		});
	},
});
