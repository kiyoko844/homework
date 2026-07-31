export const advantages = () => {
	const tabs = document.querySelectorAll(".advantages__tab");
	const panels = document.querySelectorAll(".advantages__panel");
	/* 
	console.log(tabs[0]);
	console.log(tabs[1]);
	console.log(tabs[2]); */

	/* 	tabs[0].addEventListener("click", () => {
		console.log("OUR STORY clicked");
	});
	tabs[1].addEventListener("click", () => {
		console.log("APPROACH clicked");
	});
	tabs[2].addEventListener("click", () => {
		console.log("OUR PLAN clicked");
	});

	console.log(tabs.length); */

	tabs.forEach((tab, index) => {
		tab.addEventListener("click", () => {
			tabs.forEach((button) => {
				button.classList.remove("advantages__tab--active");
			});
			tab.classList.add("advantages__tab--active");
			panels.forEach((panel) => {
				panel.classList.remove("advantages__panel--active");
			});
			panels[index].classList.add("advantages__panel--active");
		});
	});
};
