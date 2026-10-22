const tableSection = document.querySelector(".table-section");
const tableVisual = document.querySelector(".table-section__visual");
const tableImage = document.querySelector(".table-section__image img");
const tableStamp = document.querySelector(".table-section__stamp");

if (tableSection && tableVisual && tableImage && tableStamp) {
	const isDesktop = () => window.innerWidth > 700;

	let targetX = 0;
	let targetY = 0;

	let currentX = 0;
	let currentY = 0;

	tableVisual.addEventListener("mousemove", (event) => {
		if (!isDesktop()) {
			return;
		}

		const rect = tableVisual.getBoundingClientRect();

		const x = (event.clientX - rect.left) / rect.width - 0.5;
		const y = (event.clientY - rect.top) / rect.height - 0.5;

		targetX = x * 12;
		targetY = y * 10;
	});

	tableVisual.addEventListener("mouseleave", () => {
		targetX = 0;
		targetY = 0;
	});

	function animate() {
		currentX += (targetX - currentX) * 0.04;
		currentY += (targetY - currentY) * 0.04;

		if (isDesktop()) {
			tableImage.style.transform = `scale(1.08) translate3d(${currentX}px, ${currentY}px, 0)`;

			tableStamp.style.transform = `translate3d(
					calc(-50% - ${currentX * 0.45}px),
					calc(-50% - ${currentY * 0.45}px),
					0
				)`;
		} else {
			tableImage.style.transform = "scale(1.04)";
			tableStamp.style.transform = "translate(-50%, -50%)";
		}

		requestAnimationFrame(animate);
	}

	const revealItems = document.querySelectorAll(".table-detail");

	if ("IntersectionObserver" in window) {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add("is-visible");
						observer.unobserve(entry.target);
					}
				});
			},
			{
				threshold: 0.15,
			},
		);

		revealItems.forEach((item) => {
			observer.observe(item);
		});
	} else {
		revealItems.forEach((item) => {
			item.classList.add("is-visible");
		});
	}

	animate();
}
