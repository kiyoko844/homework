const kitchenVisual = document.querySelector(".kitchen-section__visual");
const kitchenImage = kitchenVisual?.querySelector(
	".kitchen-section__image img",
);

if (
	kitchenVisual &&
	kitchenImage &&
	window.matchMedia("(hover: hover)").matches
) {
	kitchenVisual.addEventListener("mousemove", (event) => {
		const rect = kitchenVisual.getBoundingClientRect();

		const x = (event.clientX - rect.left) / rect.width - 0.5;
		const y = (event.clientY - rect.top) / rect.height - 0.5;

		kitchenImage.style.transform = `
			scale(1.09)
			translate(${x * 10}px, ${y * 10}px)
		`;
	});

	kitchenVisual.addEventListener("mouseleave", () => {
		kitchenImage.style.transform = "scale(1.04) translate(0, 0)";
	});
}
