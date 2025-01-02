document.addEventListener("astro:page-load", () => {
	// Add smooth scroll functionality to all links with hash
	const links = document.querySelectorAll<HTMLAnchorElement>(
		'a[href^="#"]',
	) as NodeListOf<HTMLAnchorElement>;

	for (const anchor of links)
		anchor.addEventListener("click", (event: MouseEvent) => {
			event.preventDefault();
			const targetId = (event.currentTarget as HTMLAnchorElement).getAttribute(
				"href",
			) as string;
			const target = document.querySelector(targetId) as HTMLElement;
			const offset = 80; // Adjust offset as needed
			const targetPosition =
				target.getBoundingClientRect().top + window.scrollY - offset;
			window.scrollTo({
				top: targetPosition,
				behavior: "smooth",
			});
		});
});
