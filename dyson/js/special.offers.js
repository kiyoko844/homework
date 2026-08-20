export default function SpecialOffers() {
	const list = document.querySelector(".special-offers__list");
	const items = document.querySelectorAll(".special-offers__item");
	const prevButton = document.querySelector(".swipe__button--prev");
	const nextButton = document.querySelector(".swipe__button--next");
	const counter = document.querySelector(".swipe__text");

	if (!list || !items.length || !prevButton || !nextButton || !counter) {
		return;
	}

	const itemsPerPage = 3;
	const totalPages = Math.ceil(items.length / itemsPerPage);

	let currentPage = 1;

	function render() {
		const start = (currentPage - 1) * itemsPerPage;
		const end = start + itemsPerPage;

		items.forEach((item, index) => {
			item.style.display = index >= start && index < end ? "" : "none";
		});

		counter.textContent = `${currentPage} из ${totalPages}`;

		prevButton.disabled = currentPage === 1;
		nextButton.disabled = currentPage === totalPages;
	}

	prevButton.addEventListener("click", () => {
		if (currentPage > 1) {
			currentPage--;
			render();
		}
	});

	nextButton.addEventListener("click", () => {
		if (currentPage < totalPages) {
			currentPage++;
			render();
		}
	});

	render();

	const minusButton = document.querySelector(".special-offers__counter-minus");
	const plusButton = document.querySelector(".special-offers__counter-plus");
	const counterNumber = document.querySelector(
		".special-offers__counter-number",
	);

	let count = 1;

	plusButton.addEventListener("click", function () {
		count = count + 1;
		counterNumber.textContent = count;
	});

	minusButton.addEventListener("click", function () {
		if (count > 1) {
			count = count - 1;
			counterNumber.textContent = count;
		}
	});

	items.forEach((item) => {
		const minusButton = item.querySelector(".special-offers__counter-minus");
		const plusButton = item.querySelector(".special-offers__counter-plus");
		const counterNumber = item.querySelector(".special-offers__counter-number");

		let count = 1;

		plusButton.addEventListener("click", () => {
			count++;
			counterNumber.textContent = count;

			if (count > 1) {
				minusButton.classList.add("is-active");
			}
		});

		minusButton.addEventListener("click", () => {
			if (count > 1) {
				count--;
				counterNumber.textContent = count;
			}

			if (count === 1) {
				minusButton.classList.remove("is-active");
			}
		});
	});
}
