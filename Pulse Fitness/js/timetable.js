export const timetable = () => {
	const tabs = document.querySelectorAll(".timetable__button");

	tabs.forEach((tab) => {
		tab.addEventListener("click", () => {
			tabs.forEach((button) => {
				button.classList.remove("timetable__button--active");
			});
			tab.classList.add("timetable__button--active");
		});
	});
};
