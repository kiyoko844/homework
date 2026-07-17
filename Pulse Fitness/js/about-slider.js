export const aboutSlider = () => {
	const slider = new Swiper(".about__slider", {
		direction: "vertical",
		slidesPerView: 1,
		speed: 700,
		loop: false,
	});

	const buttons = document.querySelectorAll(".about__pagination-button");

	buttons.forEach((button, index) => {
		button.addEventListener("click", () => {
			slider.slideTo(index);
		});
	});

	slider.on("slideChange", () => {
		buttons.forEach((btn) =>
			btn.classList.remove("about__pagination-button--active"),
		);

		buttons[slider.activeIndex].classList.add(
			"about__pagination-button--active",
		);
	});
};
