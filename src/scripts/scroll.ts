document.addEventListener("DOMContentLoaded", () => {
	// Back to top
	window.addEventListener("scroll", () => {
		const backToTopButton = document.querySelector(".back-top") as HTMLElement;
		if (window.scrollY > 100) {
			backToTopButton.style.display = "block";
		} else {
			backToTopButton.style.display = "none";
		}
	});
	const scrollSmooth = document.querySelector(".back-top") as HTMLElement
	
	scrollSmooth.addEventListener("click", (e) => {
		e.preventDefault();
		// Smooth scroll to the top
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	});
});
