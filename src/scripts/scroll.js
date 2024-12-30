document.addEventListener("DOMContentLoaded", () => {
	// Back to top
	window.addEventListener("scroll", () => {
		const backToTopButton = document.querySelector(".back-top");
		if (window.scrollY > 100) {
			backToTopButton.style.display = "block";
		} else {
			backToTopButton.style.display = "none";
		}
	});
	document.querySelector(".back-top").addEventListener("click", (e) => {
		e.preventDefault();
		// Smooth scroll to the top
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	});
});
