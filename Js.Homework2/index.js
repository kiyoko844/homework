// Переменные var, let, const

/* let y = 12 + 10;
y = y + 5;

console.log(y); */

// Корректные имена
/* let name;
let _;
let $;
let user123;
 */
// Некорректные имена
// let 123user; // ошибка: начинается с цифры
// let my-variable; // ошибка: содержит дефис

// camelCase
// PascalCase
// snake_case
// UPPER_SNAKE_CASE

/* let userName = "Alex";
let userAge = "30";

const USER_JOB = "programmer";

console.log(userName, userAge, USER_JOB); */

// Типы данных
// 1. Number
// 2. String
// 3. Boolean
// 4. Undefined
// 5. Null
// 6. Bigint
// 7. Object
// 8. Symbol

/* const sum = 10 + 5.2;
const str = "строка" + sum;

let x = 123;

x = "Hello, world!";

console.log(x);
 */

/* let city = "Уфа";
let profession = "Frontend developer";

console.log(city);
console.log(profession);

let name = "Vadim";
let age = 22;

console.log("My name is " + name + ", I'm " + age + " years old."); */

/* let country = "Russia";

let city = "Ufa";

console.log("I live in " + city + ", " + country); */

/* let price = 1500;
let quantity = 3;

let total = price * quantity;

console.log("Total price: " + total); */

/* let width = 8;
let height = 5;

let area = width * height;

console.log("Area: " + area); */

/* let temperature = 25;

if (temperature > 20) {
	console.log("It is warm");
} else {
	console.log("It is cold");
} */

/* let score = 75;

if (score >= 60) {
	console.log("You passed the exam");
} else {
	console.log("You failed the exam");
} */

/*     const name = "Vadim";
    const age = 22;
    const isStudent = true;

    console.log("My name is " + name);
    console.log("I am " + age + " years old");
    console.log("I am a student: " + isStudent); */

/* let age = 22;

if (age >= 18) {
	console.log("You can enter");
} else {
	console.log("You cannot enter");
} */

/* const product = "MacBook";
const price = 105000;

if (price > 100000) {
	console.log("This is an expensive product");
} else {
	console.log("This is an affordable product");
} */

/* const name = "Vadim";
const age = 22;
const country = "Russia";

console.log(
	"My name is " + name + ", I am " + age + " years old, I live in " + country,
); */

/* const price = 500;
const quantity = 4;
let total = price * quantity;

console.log(total); */

/* const temperature = 15;

if (temperature > 20) {
	console.log("Warm weather");
} else {
	console.log("Cold weather");
} */
/* 
const password = "12345";

if (password === "12345") {
	console.log("Access granted");
} else {
	console.log("Access denied");
} */

/* 
	Меня зовут Vadim, мне 22 года, я живу в Ufa, моя профессия Frontend developer */

/* const name = "Vadim";
	const age = 22;
	const city = "Ufa";
	const profession = "Frontend developer";

	console.log(
		`Меня зовут ${name}, мне ${age} года, я живу в ${city}, моя профессия ${profession}`,
	); */

/* const experience = 1;

		if (experience >= 1) {
			console.log("You can apply for this job");
		} else {
			console.log("You need more experience");
		} */

/* const activeTab = 2;

if (activeTab === 1) {
	console.log("Show first content");
} else if (activeTab === 2) {
	console.log("Show second content");
} else {
	console.log("Show third content");
} */

// 1.
/* const firstName = "Vadim";
let age = 22;
const isFrontendDeveloper = false;

console.log(
	`My name is ${firstName}. I am ${age} years old. Frontend developer: ${isFrontendDeveloper}`,
); */

// 2.
/* 
const score = 85;
if (score >= 60) {
	console.log("You passed!");
} else {
	console.log("You failed!");
} */

// 1.
/* const temperature = 25;

if (temperature > 20) {
	console.log("Warm weather");
} else {
	console.log("Cold weather");
}

// 2.

const isOnline = true;

const online = isOnline ? "Online" : "Offline";

console.log(online);

// 3.

const role = "admin";

switch (role) {
	case "admin":
		console.log("Full access");
		break;

	case "user":
		console.log("Limited access");
		break;

	case "guest":
		console.log("Guest access");
		break;

	default:
		console.log("Unknown role");
} */

/* const weather = "дождь";

if (weather === "дождь") {
	console.log("Остаемся дома");
} else {
	console.log("Идем гулять");
} */

/* const temperature = 30;

if (temperature < 0) {
	console.log("На улице холодно");
} else if (temperature > 0 && temperature <= 20) {
	console.log("Хорошая погода");
} else {
	console.log("Слишком жарко");
}
 */

/* const weather = "дождь";

if (weather === "дождь") {
	console.log("Остаемся дома");
} else if (weather === "солнечно") {
	console.log("Идем гулять");
} else if (weather === "облачно") {
	console.log("Идем гулять, но берем с собой зонт");
} else {
	console.log("Что-то странное с погодой");
} */
/* 
const weather = "дождь";

switch (weather) {
	case "дождь":
		console.log("Остаемся дома");
		break;
	case "солнечно":
		console.log("Идем гулять");
		break;
	case "облачно":
		console.log("Идем гулять, но берем с собой зонт");
		break;
	default:
		console.log("Что-то странное с погодой");
}

const ADMIN = "admin";
const MODERATOR = "moderator";

const role = ADMIN;

switch (role) {
	case "admin":
	case "moderator":
		console.log("Есть права");
		break;
	default:
		console.log("Прав нет");
}

let number = 8;

if (number % 2 === 0) {
	console.log("Число чётное");
} else {
	console.log("Число нечётное");
}

if (number % 2 === 1) {
	console.log("Число нечётное");
} else {
	console.log("Число чётное");
} */

/* const age = 20;
let discount;

switch (true) {
	case age < 18:
		discount = 10;
		break;
	case age <= 65:
		discount = 20;
		break;
	default:
		discount = 30;
}

console.log(discount);

const weight = 3;
let baseCost;

if (weight < 1) {
	baseCost = 5;
} else if (weight > 5) {
	baseCost = 10;
} else {
	baseCost = 15;
}

console.log(`Базовая стоимость доставки: $${baseCost}`);

const temperature = 25;

if (temperature < 0) {
	console.log("Мороз");
} else if (temperature <= 25) {
	console.log("Прохладно");
} else {
	console.log("Тепло");
}

 */

/* const weight = Number(prompt("Введите вес посылки"));
const deliveryType = prompt("Введите тип доставки");
let baseCost;

if (weight < 1) {
	baseCost = 5;
} else if (weight <= 5) {
	baseCost = 10;
} else {
	baseCost = 15;
}

let coefficient;

switch (deliveryType) {
	case "Стандарт":
		coefficient = 1;
		break;

	case "Экспресс":
		coefficient = 1.5;
		break;

	case "Премиум":
		coefficient = 2;
		break;
	default:
		coefficient = 1;
		console.log("Тип доставки не верный, выбран стандарт");
}

const finalCost = baseCost * coefficient;

alert(`Итоговая стоимость доставки: $${finalCost}`); */
