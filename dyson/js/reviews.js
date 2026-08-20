export default function Reviews() {
	const moreLink = document.querySelector(".reviews__more-link");
	const hiddenReviews = document.querySelectorAll(".review--hidden");
	const moreText = document.querySelector(".reviews__more-text");
	const moreIcon = document.querySelector(".reviews__more-icon");

	if (!moreLink || !hiddenReviews.length) {
		return;
	}

	moreLink.addEventListener("click", (event) => {
		event.preventDefault();

		const isHidden = hiddenReviews[0].classList.contains("review--hidden");

		hiddenReviews.forEach((review) => {
			review.classList.toggle("review--hidden");
		});

		if (isHidden) {
			moreText.textContent = "Скрыть отзывы";
			moreIcon.classList.add("reviews__more-icon--up");
		} else {
			moreText.textContent = "Показать еще";
			moreIcon.classList.remove("reviews__more-icon--up");
		}
	});
}
