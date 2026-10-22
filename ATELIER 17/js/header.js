const header = document.getElementById("header");

const menu = document.getElementById("siteMenu");
const menuButton = document.getElementById("menuButton");
const menuClose = document.getElementById("menuClose");
const menuBackdrop = document.getElementById("menuBackdrop");

const menuLinks = document.querySelectorAll("#menuLinks a");

const searchButton = document.getElementById("searchButton");
const searchInput = document.getElementById("menuSearch");
const searchResults = document.getElementById("menuSearchResults");

const sections = [
	{
		id: "top",
		name: "HOME",
	},
	{
		id: "menu",
		name: "THE MENU",
	},
	{
		id: "table",
		name: "THE TABLE",
	},
	{
		id: "cellar",
		name: "THE CELLAR",
	},
	{
		id: "kitchen",
		name: "THE KITCHEN",
	},
	{
		id: "reservation",
		name: "RESERVATION",
	},
];

let lastScroll = window.scrollY;
let ticking = false;

const openMenu = () => {
	if (!menu) return;

	menu.classList.add("is-open");
	document.body.classList.add("menu-is-open");

	menuButton?.setAttribute("aria-expanded", "true");
};

const closeMenu = () => {
	if (!menu) return;

	menu.classList.remove("is-open");
	document.body.classList.remove("menu-is-open");

	menuButton?.setAttribute("aria-expanded", "false");
};

const toggleMenu = () => {
	if (!menu) return;

	if (menu.classList.contains("is-open")) {
		closeMenu();
	} else {
		openMenu();
	}
};

const scrollToSection = (id) => {
	const section = document.getElementById(id);

	if (!section) return;

	closeMenu();

	history.replaceState(null, "", `#${id}`);

	section.scrollIntoView({
		behavior: "smooth",
		block: "start",
	});
};

const renderSearchResults = (query = "") => {
	if (!searchResults) return;

	const value = query.trim().toLowerCase();

	if (!value) {
		searchResults.innerHTML = "";
		searchResults.classList.remove("is-visible");
		return;
	}

	const filteredSections = sections.filter((section) =>
		section.name.toLowerCase().includes(value),
	);

	if (!filteredSections.length) {
		searchResults.innerHTML = `
			<div class="menu-search-empty">
				NO RESULTS
			</div>
		`;

		searchResults.classList.add("is-visible");

		return;
	}

	searchResults.innerHTML = filteredSections
		.map(
			(section, index) => `
				<a
					href="#${section.id}"
					class="menu-search-result"
					data-search-section="${section.id}"
				>
					<span>${String(index + 1).padStart(2, "0")}</span>
					<strong>${section.name}</strong>
					<i>↗</i>
				</a>
			`,
		)
		.join("");

	searchResults.classList.add("is-visible");

	searchResults.querySelectorAll("[data-search-section]").forEach((link) => {
		link.addEventListener("click", (event) => {
			event.preventDefault();

			const sectionId = link.dataset.searchSection;

			if (searchInput) {
				searchInput.value = "";
			}

			searchResults.innerHTML = "";
			searchResults.classList.remove("is-visible");

			scrollToSection(sectionId);
		});
	});
};

menuButton?.addEventListener("click", toggleMenu);

menuClose?.addEventListener("click", closeMenu);

menuBackdrop?.addEventListener("click", closeMenu);

menuLinks.forEach((link) => {
	link.addEventListener("click", (event) => {
		event.preventDefault();

		const href = link.getAttribute("href");

		if (!href || !href.startsWith("#")) {
			return;
		}

		const sectionId = href.slice(1);

		scrollToSection(sectionId);
	});
});

searchInput?.addEventListener("input", () => {
	renderSearchResults(searchInput.value);
});

searchButton?.addEventListener("click", () => {
	openMenu();

	requestAnimationFrame(() => {
		searchInput?.focus();
	});
});

document.addEventListener("keydown", (event) => {
	if (event.key === "Escape") {
		closeMenu();
		return;
	}

	if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
		event.preventDefault();

		openMenu();

		requestAnimationFrame(() => {
			searchInput?.focus();
		});
	}
});

window.addEventListener("scroll", () => {
	if (ticking) return;

	window.requestAnimationFrame(() => {
		const currentScroll = window.scrollY;

		if (currentScroll <= 20) {
			header?.classList.remove("is-hidden");
		} else if (currentScroll > lastScroll) {
			header?.classList.add("is-hidden");
		} else {
			header?.classList.remove("is-hidden");
		}

		lastScroll = currentScroll;
		ticking = false;
	});

	ticking = true;
});
