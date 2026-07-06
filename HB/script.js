/* ===========================
   SCROLL ANIMATIONS
=========================== */

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add("active");
			}
		});
	},
	{ threshold: 0.15 },
);

sections.forEach((sec) => observer.observe(sec));

/* ===========================
   ACCORDION
=========================== */

const headers = document.querySelectorAll(".accordion-header");

headers.forEach((btn) => {
	btn.addEventListener("click", () => {
		const content = btn.nextElementSibling;

		const isOpen = content.style.maxHeight;

		document.querySelectorAll(".accordion-content").forEach((c) => {
			c.style.maxHeight = null;
		});

		if (!isOpen) {
			content.style.maxHeight = content.scrollHeight + "px";
		}
	});
});

/* ===========================
   HEARTS ON CLICK
=========================== */

document.addEventListener("click", (e) => {
	const heart = document.createElement("div");

	heart.classList.add("heart");

	heart.innerHTML = "❤️";

	heart.style.left = e.clientX + "px";

	heart.style.top = e.clientY + "px";

	document.body.appendChild(heart);

	setTimeout(() => heart.remove(), 1500);
});

/* ===========================
   LIGHTBOX GALLERY
=========================== */

const images = document.querySelectorAll(".gallery-grid img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImage");
const closeLightbox = document.getElementById("closeLightbox");

images.forEach((img) => {
	img.addEventListener("click", () => {
		lightbox.style.display = "flex";
		lightboxImg.src = img.src;
	});
});

closeLightbox.addEventListener("click", () => {
	lightbox.style.display = "none";
});

lightbox.addEventListener("click", (e) => {
	if (e.target === lightbox) {
		lightbox.style.display = "none";
	}
});

/* ===========================
   MUSIC PLAYER
=========================== */

const musicBtn = document.getElementById("musicButton");
const music = document.getElementById("music");

let playing = false;

musicBtn.addEventListener("click", () => {
	if (!playing) {
		music.play();
		musicBtn.innerHTML = "⏸ Пауза";
	} else {
		music.pause();
		musicBtn.innerHTML = "🎵 Музыка";
	}

	playing = !playing;
});

/* ===========================
   CELEBRATION BUTTON (CONFETTI)
=========================== */

const celebrate = document.getElementById("celebrate");

celebrate.addEventListener("click", () => {
	for (let i = 0; i < 80; i++) {
		createConfetti();
	}
});

function updateTimer() {
	const startDate = new Date("2003-12-03T00:00:00");
	const now = new Date();

	let years = now.getFullYear() - startDate.getFullYear();
	let months = now.getMonth() - startDate.getMonth();
	let days = now.getDate() - startDate.getDate();

	if (days < 0) {
		months--;
		const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
		days += prevMonth.getDate();
	}

	if (months < 0) {
		years--;
		months += 12;
	}

	document.getElementById("days").innerHTML = years;
	document.getElementById("hours").innerHTML = months;
	document.getElementById("minutes").innerHTML = days;
	document.getElementById("seconds").innerHTML = "❤";
}

function randomColor() {
	const colors = ["#ff4f9d", "#ff77b7", "#ffd1e8", "#ffb6c1", "#fff"];

	return colors[Math.floor(Math.random() * colors.length)];
}

/* ===========================
   FLOWER PARTICLES (CANVAS)
=========================== */

const canvas = document.getElementById("flowers");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let flowers = [];

for (let i = 0; i < 50; i++) {
	flowers.push({
		x: Math.random() * canvas.width,
		y: Math.random() * canvas.height,
		r: Math.random() * 6 + 2,
		d: Math.random() * 1 + 0.5,
	});
}

function drawFlowers() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	ctx.fillStyle = "rgba(255,105,180,0.7)";

	flowers.forEach((f) => {
		ctx.beginPath();

		ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);

		ctx.fill();
	});

	updateFlowers();
}

function updateFlowers() {
	flowers.forEach((f) => {
		f.y += f.d;

		f.x += Math.sin(f.y * 0.01);

		if (f.y > canvas.height) {
			f.y = -10;
			f.x = Math.random() * canvas.width;
		}
	});
}

function animate() {
	drawFlowers();

	requestAnimationFrame(animate);
}

animate();

/* ===========================
   TIMER
=========================== */

const startDate = new Date("2010-01-01").getTime();
// можно заменить на дату рождения ребенка/семьи

function updateTimer() {
	const now = new Date().getTime();

	const diff = now - startDate;

	const days = Math.floor(diff / (1000 * 60 * 60 * 24));

	const hours = Math.floor(diff / (1000 * 60 * 60));

	const minutes = Math.floor(diff / (1000 * 60));

	const seconds = Math.floor(diff / 1000);

	document.getElementById("days").innerText = days;
	document.getElementById("hours").innerText = hours;
	document.getElementById("minutes").innerText = minutes;
	document.getElementById("seconds").innerText = seconds;
}

setInterval(updateTimer, 1000);
updateTimer();

/* ===========================
   RESIZE FIX
=========================== */

window.addEventListener("resize", () => {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
});
