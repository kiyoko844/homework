const cellarVisual = document.querySelector(".cellar-section__visual");
const cellarImage = cellarVisual?.querySelector(".cellar-section__image img");

if (
	cellarVisual &&
	cellarImage &&
	window.matchMedia("(hover: hover)").matches
) {
	cellarVisual.addEventListener("mousemove", (event) => {
		const rect = cellarVisual.getBoundingClientRect();

		const x = (event.clientX - rect.left) / rect.width - 0.5;
		const y = (event.clientY - rect.top) / rect.height - 0.5;

		cellarImage.style.transform = `
			scale(1.085)
			translate(${x * 8}px, ${y * 8}px)
		`;
	});

	cellarVisual.addEventListener("mouseleave", () => {
		cellarImage.style.transform = "scale(1.04) translate(0, 0)";
	});
}

const wineItems = document.querySelectorAll(".wine-item");

if (wineItems.length && window.matchMedia("(hover: hover)").matches) {
	wineItems.forEach((item) => {
		item.addEventListener("mouseenter", () => {
			wineItems.forEach((otherItem) => {
				if (otherItem !== item) {
					otherItem.style.opacity = "0.35";
				}
			});
		});

		item.addEventListener("mouseleave", () => {
			wineItems.forEach((otherItem) => {
				otherItem.style.opacity = "";
			});
		});
	});
}
