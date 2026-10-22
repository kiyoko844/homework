const bookingModal = document.querySelector("[data-booking-modal]");
const bookingOpen = document.querySelector("[data-booking-open]");
const bookingClose = document.querySelectorAll("[data-booking-close]");

const bookingForm = document.querySelector(".booking-form");
const bookingSuccess = document.querySelector("[data-booking-success]");
const successClose = document.querySelector("[data-success-close]");

const confirmDate = document.querySelector("[data-confirm-date]");
const confirmTime = document.querySelector("[data-confirm-time]");
const confirmGuests = document.querySelector("[data-confirm-guests]");

const openBooking = () => {
	bookingModal?.classList.add("is-open");
	document.body.classList.add("booking-is-open");
};

const closeBooking = () => {
	bookingModal?.classList.remove("is-open");
	document.body.classList.remove("booking-is-open");
};

bookingOpen?.addEventListener("click", openBooking);

bookingClose.forEach((button) => {
	button.addEventListener("click", closeBooking);
});

bookingForm?.addEventListener("submit", (event) => {
	event.preventDefault();

	const formData = new FormData(bookingForm);

	const date = formData.get("date");
	const time = formData.get("time");
	const guests = formData.get("guests");

	if (!date || !time || !guests) {
		return;
	}

	const dateObject = new Date(`${date}T12:00:00`);

	const formattedDate = dateObject
		.toLocaleDateString("en-GB", {
			weekday: "short",
			day: "2-digit",
			month: "short",
		})
		.toUpperCase();

	confirmDate.textContent = formattedDate;
	confirmTime.textContent = time;
	confirmGuests.textContent = `${guests} ${Number(guests) === 1 ? "GUEST" : "GUESTS"}`;

	bookingForm.classList.add("is-hidden");

	setTimeout(() => {
		bookingSuccess.classList.add("is-visible");
	}, 150);

	bookingForm.reset();
});

successClose?.addEventListener("click", () => {
	bookingSuccess.classList.remove("is-visible");

	setTimeout(() => {
		bookingForm.classList.remove("is-hidden");
		closeBooking();
	}, 350);
});

document.addEventListener("keydown", (event) => {
	if (event.key !== "Escape") {
		return;
	}

	if (bookingSuccess?.classList.contains("is-visible")) {
		bookingSuccess.classList.remove("is-visible");

		setTimeout(() => {
			bookingForm?.classList.remove("is-hidden");
			closeBooking();
		}, 350);

		return;
	}

	closeBooking();
});
