const menuHero = document.querySelector(".restaurant-menu__hero");
const menuHeroImage = document.querySelector(
	".restaurant-menu__hero-image img",
);

if (menuHero && menuHeroImage) {
	let ticking = false;

	const updateHero = () => {
		const rect = menuHero.getBoundingClientRect();
		const viewportHeight = window.innerHeight;

		if (rect.bottom > 0 && rect.top < viewportHeight) {
			const progress =
				(viewportHeight - rect.top) / (viewportHeight + rect.height);

			const offset = (progress - 0.5) * 18;

			menuHeroImage.style.transform = `scale(1.04) translateY(${offset}px)`;
		}

		ticking = false;
	};

	window.addEventListener(
		"scroll",
		() => {
			if (!ticking) {
				window.requestAnimationFrame(updateHero);
				ticking = true;
			}
		},
		{ passive: true },
	);

	updateHero();
}
