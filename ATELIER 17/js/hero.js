const hero = document.querySelector(".hero");
const scene = document.querySelector(".hero__scene");
const image = document.querySelector(".hero__image");
const title = document.querySelector(".hero__title");

if (hero && scene && image && title) {
	let mouseX = 0;
	let mouseY = 0;

	let currentImageX = 0;
	let currentImageY = 0;

	let currentTitleX = 0;
	let currentTitleY = 0;

	const desktop = () => window.innerWidth > 768;

	window.addEventListener("mousemove", (event) => {
		if (!desktop()) {
			return;
		}

		mouseX = (event.clientX / window.innerWidth - 0.5) * 2;
		mouseY = (event.clientY / window.innerHeight - 0.5) * 2;
	});

	function animate() {
		currentImageX += (mouseX * 18 - currentImageX) * 0.035;
		currentImageY += (mouseY * 14 - currentImageY) * 0.035;

		currentTitleX += (mouseX * -10 - currentTitleX) * 0.045;
		currentTitleY += (mouseY * -7 - currentTitleY) * 0.045;

		if (desktop()) {
			image.style.transform = `
				translate3d(
					${currentImageX}px,
					${currentImageY}px,
					0
				)
			`;

			title.style.transform = `
				translate3d(
					calc(-50% + ${currentTitleX}px),
					calc(-50% + ${currentTitleY}px),
					0
				)
			`;
		} else {
			image.style.transform = "none";
			title.style.transform = "translate(-50%, -50%)";
		}

		requestAnimationFrame(animate);
	}

	window.addEventListener(
		"scroll",
		() => {
			if (!desktop()) {
				return;
			}

			const progress = Math.min(window.scrollY / window.innerHeight, 1);

			image.style.opacity = Math.max(0.35, 1 - progress * 0.45);

			title.style.opacity = Math.max(0, 1 - progress * 1.4);
		},
		{ passive: true },
	);

	window.addEventListener("load", () => {
		hero.classList.add("is-loaded");
	});

	animate();
}
