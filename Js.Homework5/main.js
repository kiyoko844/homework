// Задача 1.
// Создайте переменные с корректными именами, чтобы сохранить следующую информацию:
// 1. firstName – имя (строка)
// 2. lastName – фамилия (строка)
// 3. isStudent – является ли учеником курса (булево значение)

// Задача 2.
// 1. Объявите переменную age с числовым значением возраста студента.
// 2. Объявите переменную currentYear и присвойте ей значение текущего года (например, 2025).
// 3. Используя age и currentYear вычислите год рождения студента, запишите результат в переменную birthYear.

// Задача 3.
// Выведите в консоли сообщение в таком формате:
// Меня зовут [firstName] [lastName], мне [age] лет. Я ученик/ученица курса: [isStudent].

// 1.

/* const firstName = "Vadim";
const lastName = "Khatmullin";
let isStudent = true;

// 2.

let age = 22;
let currentYear = 2026;
let birthYear = currentYear - age;

console.log(birthYear);

// 3.

console.log(
	"Меня зовут " +
		firstName +
		" " +
		lastName +
		"," +
		" мне" +
		" " +
		age +
		" лет.",
	"Я ученик курса: " + isStudent,
);

console.log(
	`Меня зовут ${firstName} ${lastName}, мне ${age} лет. Я ученик курса: ${isStudent}`,
); */

// Задача 4.
// Какое значение будет у переменной result?
// let a = '123';
// let b = +'456';
// let c = Number('789');
// let d = Boolean(0);
// let e = Boolean(' ');
// let result = a + b + c + d + e;

// 4.

/* 		123 + 456 = 123456
		123456 + 789 = 123456789
		123456789false
		123456789falsetrue
 */

// 05.08
// Задача 1.
// Напишите условие, которое будет проверять чётное ли число, используйте оператор if.

/* let number = 8;

if (number % 2 === 0) {
	console.log("Число чётное");
} else {
	console.log("Число нечётное");
} */

// Задача 2.
// 1. Объявите переменную age с числовым значением.
// 2. С помощью тернарного оператора (вложенного, если нужно) присвойте переменной discount значение скидки:
//    2.1. Если age меньше 18 – скидка 10%.
//    2.2. Если age от 18 до 65 (включительно) – скидка 20%.
//    2.3. Если age больше 65 – скидка 30%.
// 3. Выведите значение discount в консоль.
// 4. *Дополнительное задание: перепишите задачу на switch-case.

/* const userAge = 20; */

/* let userDiscount = userAge < 18 ? 10 : userAge <= 65 ? 20 : 30;

console.log(userDiscount); */

/* let switchDiscount;

switch (true) {
	case userAge < 18:
		switchDiscount = 10;
		break;

	case userAge <= 65:
		switchDiscount = 20;
		break;

	default:
		switchDiscount = 30;
}

console.log(switchDiscount); */

// Задача 3.
// 1. Объявите переменные username и password.
//    Допустимые варианты имени пользователя — это "admin" или "user", а пароль должен быть равен "123456".
// 2. Если выполняется условие:
//     (username равен "admin" или "user") и пароль равен "123456"
//     то выведите сообщение "Доступ разрешен", иначе — "Доступ запрещен".
// 3. Используйте prompt для ввода имени пользователя и пароля.

/* const username = prompt("Введите имя пользователя");
const password = prompt("Введите пароль");

if ((username === "admin" || username === "user") && password === "123456") {
	alert("Доступ разрешен");
} else {
	alert("Доступ запрещен");
} */

// *Задача 4.
// Создайте программу, которая рассчитывает стоимость доставки посылки, основываясь на весе и типе доставки. Программа должна запрашивать у пользователя данные с помощью prompt и выводить результат через alert.

// 1. Ввод данных:
//    1.1. Запросите у пользователя вес посылки (в килограммах).
//    1.2. Запросите у пользователя тип доставки. Допустимые варианты:
//        "Стандарт"
//        "Экспресс"
//        "Премиум"

/* const parcelWeight = Number(prompt("Введите вес посылки"));
const selectedDeliveryType = prompt("Введите тип доставки");

let parcelBaseCost;

if (parcelWeight <= 0) {
	alert("Некорректный вес посылки");
} else if (parcelWeight < 1) {
	parcelBaseCost = 5;
} else if (parcelWeight <= 5) {
	parcelBaseCost = 10;
} else {
	parcelBaseCost = 15;
}

let deliveryCoefficient;

switch (selectedDeliveryType) {
	case "Стандарт":
		deliveryCoefficient = 1;
		break;

	case "Экспресс":
		deliveryCoefficient = 1.5;
		break;

	case "Премиум":
		deliveryCoefficient = 2;
		break;

	default:
		deliveryCoefficient = 1;
		console.log("Неверный тип доставки");
}

const totalDeliveryCost = parcelBaseCost * deliveryCoefficient;

alert(`Итоговая стоимость доставки: $${totalDeliveryCost}`); */

// 3. Расчёт базовой стоимости доставки:
//    3.1. Определите базовую стоимость в зависимости от веса посылки:
//        Если вес меньше 1 кг, базовая стоимость — 5$.
//        Если вес от 1 кг до 5 кг (включительно), базовая стоимость — 10$.
//        Если вес больше 5 кг, базовая стоимость — 15$.

//    Для определения базовой стоимости можно использовать конструкцию if...else или тернарный оператор.

/* const packageWeight = 3;
let deliveryBaseCost;

if (packageWeight < 1) {
	deliveryBaseCost = 5;
} else if (packageWeight <= 5) {
	deliveryBaseCost = 10;
} else {
	deliveryBaseCost = 15;
}

console.log(`Базовая стоимость доставки: $${deliveryBaseCost}`); */

// 4. Определение коэффициента по типу доставки:
//     Используйте конструкцию switch-case для назначения коэффициента:
//        "Стандарт": коэффициент 1
//        "Экспресс": коэффициент 1.5
//        "Премиум": коэффициент 2

/* const currentDeliveryType = "Экспресс";

let currentCoefficient;

switch (currentDeliveryType) {
	case "Стандарт":
		currentCoefficient = 1;
		break;

	case "Экспресс":
		currentCoefficient = 1.5;
		break;

	case "Премиум":
		currentCoefficient = 2;
		break;

	default:
		console.log("Неизвестный тип доставки");
}
 */

// 08.08.26

// Задача 1.
// Напишите цикл, который выводит числа от 1 до 20, но пропускает те числа, которые делятся на 4 без остатка.

/* let number = 1;

while (number <= 20) {
	if (number % 4 === 0) {
		number++;
		continue;
	}

	console.log(number);
	number++;
} */

// Задача 2.
// С помощью цикла for вычислите факториал числа (произведение всех чисел от 1 до заданного числа). Используйте prompt для получение начального значения.

/* const number1 = Number(prompt("Введите число"));
let factorial = 1;

for (let i = 1; i <= number1; i++) {
	factorial = factorial * i;
}

console.log(factorial); */

// *Задача 3.
// Выведите в консоль шахматную доску размером 8x8, где символы чередуются (например, # и пробел). Начинайте с # в первой ячейке первой строки.

/* for (let i = 1; i <= 8; i++) {
	let row = "";

	for (let j = 1; j <= 8; j++) {
		if (i % 2 === 0) {
			if (j % 2 === 0) {
				row = row + " Ч";
			} else {
				row = row + " Б";
			}
		} else {
			if (j % 2 === 0) {
				row = row + " Б";
			} else {
				row = row + " Ч";
			}
		}
	}

	console.log(row);
} */

// Задача 1.
// Напишите функцию calculateFinalPrice, которая принимает базовую цену товара, процент скидки и налоговую ставку. Функция должна вычислять скидку, затем прибавлять налог и возвращать итоговую цену.

/* const calculateFinalPrice = (price, discount, tax) => {
	const discountAmount = (price * discount) / 100;
	const priceAfterDiscount = price - discountAmount;
	const taxAmount = (tax * priceAfterDiscount) / 100;
	return priceAfterDiscount + taxAmount;
};

const result = calculateFinalPrice(100, 10, 20);
console.log(result); */

// Пример работы:
// console.log(calculateFinalPrice(100, 10, 0.2)); // 108
// console.log(calculateFinalPrice(100, 10, 0)); // 90

// Задача 2.
// Напишите функцию checkAccess, которая принимает имя пользователя и пароль. Если имя пользователя равно "admin" и пароль равен "123456", функция должна возвращать строку "Доступ разрешен", иначе — "Доступ запрещен".

/* const checkAccess = (username, password) => {
	if (username === "admin" && password === "123456") {
		return "Доступ разрешен";
	} else {
		return "Доступ запрещен";
	}
};

const result_ = checkAccess("admin", "123456");
console.log(result_); */

// Задача 3.
// Напишите функцию getTimeOfDay, которая принимает текущее время (число от 0 до 23) и возвращает строку:
// "Ночь" (с 0 до 5 часов),
// "Утро" (с 6 до 11 часов),
// "День" (с 12 до 17 часов),
// "Вечер" (с 18 до 23 часов).
// Если введённое значение не попадает в этот диапазон, возвращайте `"Некорректное время"`.

/* const getTimeOfDay = (hour) => {
	if (hour >= 0 && hour <= 5) {
		return "Ночь";
	} else if (hour >= 6 && hour <= 11) {
		return "Утро";
	} else if (hour >= 12 && hour <= 17) {
		return "День";
	} else if (hour >= 18 && hour <= 23) {
		return "Вечер";
	} else {
		return "Некорректное время";
	}
};

const resultTime = getTimeOfDay(12);
console.log(resultTime); */

// Задача 4.
// Напишите функцию findFirstEven, которая принимает два числа start и end и находит первое чётное число в указанном диапазоне.
// Если чётного числа в этом диапазоне нет, функция должна вернуть "Чётных чисел нет".

/* const findFirstEven = (start, end) => {
	for (let i = start; i <= end; i++) {
		if (i % 2 === 0) {
			return i;
		}
	}
	return "Чётных чисел нет";
};

const resultFirst = findFirstEven(9, 9);
console.log(resultFirst);
 */
// Пример работы:
// console.log(findFirstEven(1, 10)); // 2
// console.log(findFirstEven(9, 9)); // "Чётных чисел нет"

/* const car = {
	brand: "BMW",
	year: 2024,

	newYear: () => {
		car.year++;
	},
};

car.newYear();

console.log(car.year); */
/* 
const user = {
	name: "Vadim",
	age: 25,
	birthday: () => {
		user.age++;
	},
};

user.birthday();
console.log(user.age);
 */

/* const product = {
	name: "iPhone",
	price: 1000,
	discount: () => {
		product.price = 900;
	},
};

product.discount();

console.log(product.price); */

/* const user = {
	name: "Vadim",
	age: 25,
	showInfo: function () {
		console.log(this.name, this.age);
	},
};

user.showInfo(); */

/* const user = {
	name: "Vadim",
	age: 25,
	birthday: function () {
		this.age++;
	},
};
user.birthday();
user.birthday();

console.log(user.age); */

/* const user = {
	name: "Vadim",
	age: 25,
	showInfo: function () {
		this.age++;
		console.log(this.name, this.age);
	},
};

user.showInfo();
user.showInfo(); */

/* const user = {
	name: "Vadim",
	age: 25,

	checkAge: function () {
		if (this.age >= 18) {
			console.log("Совершеннолетний");
		} else {
			console.log("Несовершеннолетний");
		}
	},
};

user.checkAge(); */

/* const user = {
	name: "Vadim",
	age: 25,
	birthday: function () {
		this.age++;
		if (this.age >= 18) {
			console.log("Совершеннолетний");
		} else {
			console.log("Несовершеннолетний");
		}
	},
};

user.birthday(); */

/* const user = {
	name: "Vadim",
	age: 17,

	birthday: function () {
		this.age++;
		if (this.age >= 18) {
			console.log("Совершеннолетний");
		} else {
			console.log("Несовершеннолетний");
		}
	},
};

user.birthday(); */

/* const user = {
	name: "Vadim",
	age: 17,

	birthday: function () {
		this.age++;
		console.log(this.name, this.age);
		if (this.age >= 18) {
			console.log("Совершеннолетний");
		} else {
			console.log("Несовершеннолетний");
		}
	},
};

user.birthday(); */

/* const product = {
	name: "iPhone",
	price: 1000,

	sell: function () {
		this.price -= 100;
		console.log(this.name, this.price);
	},
};

product.sell();
product.sell(); */

/* const product = {
	name: "iPhone",
	price: 1000,

	discount: function () {
		this.price -= (this.price * 20) / 100;
		console.log(this.name, this.price);
	},
};
product.discount();
 */

/* const product = {
	name: "Laptop",
	price: 2000,

	discount: function () {
		this.price -= (this.price * 10) / 100;
		console.log(this.name, this.price);
	},
};

product.discount(); */

/* const product = {
	name: "Phone",
	price: 500,

	discount: function () {
		this.price -= (this.price * 30) / 100;
		console.log(this.name, this.price);
	},
};
product.discount(); */

/* const car = {
	brand: "BMW",
	model: "X5",
	year: 2024,
};

for (const key in car) {
	console.log(key, car[key]);
} */

/* const user = {
	name: "Vadim",
	age: 25,
	city: "Frankfurt",
};

for (const key in user) {
	console.log(key, user[key]);
} */

/* const product = {
	name: "iPhone",
	price: 1000,
	brand: "Apple",
};

for (const key in product) {
	console.log(key);
}
 */

/* const product = {
	name: "iPhone",
	price: 1000,
	brand: "Apple",
};

for (const key in product) {
	if (typeof product[key] === "string") {
		console.log(product[key]);
	}
} */

/* const product = {
	name: "iPhone",
	price: 1000,
	brand: "Apple",
	stock: 25,
};

for (const key in product) {
	if (typeof product[key] === "number") {
		console.log(product[key]);
	}
}
 */

/* const user = {
	name: "Vadim",
	age: 25,
	city: "Frankfurt",
	score: 100,
};

for (const key in user) {
	if (user[key] >= 30) {
		console.log(user[key]);
	}
} */

/* const user = {
	name: "Vadim",
	age: 25,
	city: "Frankfurt",
	score: 100,
	experience: 5,
};

for (const key in user) {
	if (user[key] > 20) {
		console.log(user[key]);
	}
} */

/* const user = {
	name: "Vadim",
	age: 25,
	city: "Frankfurt",
	score: 100,
	experience: 5,
};

for (const key in user) {
	if (user[key] < 30) {
		console.log(user[key]);
	}
} */

/* const user = {
	name: "Vadim",
	age: 25,
	city: "Frankfurt",
	score: 100,
	experience: 5,
};

for (const key in user) {
	if (user[key] >= 10 && user[key] <= 50) {
		console.log(user[key]);
	}
}
 */

/* const product = {
	name: "iPhone",
	price: 1000,
	discount: 20,
	stock: 15,
};

for (const key in product) {
	if (product[key] >= 10 && product[key] <= 100) {
		console.log(product[key]);
	}
} */

/* const user = {
	name: "Vadim",
	age: 25,
	city: "Frankfurt",
	score: 100,
	experience: 5,
};

for (const key in user) {
	if (user[key] > 20) {
		console.log(key);
	}
} */

/* const user = {
	name: "Vadim",
	age: 25,
	city: "Frankfurt",
	score: 100,
	experience: 5,
};

for (const key in user) {
	if (user[key] > 20) {
		console.log(key, user[key]);
	}
} */

/* const product = {
	name: "Laptop",
	price: 2000,
	discount: 15,
	stock: 8,
	rating: 4.8,
};

for (const key in product) {
	if (product[key] > 10) {
		console.log(product[key]);
	}
}
 */

/* const product = {
	name: "Laptop",
	price: 2000,
	discount: 15,
	stock: 8,
	rating: 4.8,
};

for (const key in product) {
	if (product[key] < 20) {
		console.log(key);
	}
} */

/* const product = {
	name: "Laptop",
	price: 2000,
	discount: 15,
	stock: 8,
	rating: 50,
};

for (const key in product) {
	if (
		typeof product[key] === "number" &&
		product[key] >= 10 &&
		product[key] <= 100
	) {
		console.log(key, product[key]);
	}
} */

/* const user = {
	name: "Vadim",
	age: 25,
	city: "Frankfurt",
	score: 100,
};

for (const key in user) {
	if (user[key] > 20) {
		console.log(key);
	}
}
 */

/* 
const user = {
	name: "Vadim",
	age: 25,
	city: "Frankfurt",
	score: 100,
	experience: 5,
};

for (const key in user) {
	if (typeof user[key] === "number") {
		console.log(user[key]);
	}
}  */

/* const product = {
	name: "Laptop",
	price: 2000,
	discount: 15,
	stock: 8,
	rating: 50,
};

for (const key in product) {
	if (
		typeof product[key] === "number" &&
		product[key] >= 10 &&
		product[key] <= 100
	) {
		console.log(product[key]);
	}
} */

// Задача 1.
// Создайте объект person с несколькими свойствами, содержащими информацию о вас. Затем выведите значения этих свойств в консоль.

const person = {
	name: "Vadim",
	age: 22,
	city: "Ufa",
	studies: "Java",
	work: "web-developer",
};

for (const key in person) {
	console.log(key, person[key]);
}

// Задача 2.
// Создайте функцию isEmpty, которая проверяет является ли переданный объект пустым. Если объект пуст - верните true, в противном случае false.

function isEmpty(object) {
	for (const key in object) {
		return false;
	}

	return true;
}
console.log(isEmpty({}));

// Задача 3.
// Создайте объект task с несколькими свойствами: title, description, isCompleted.
// Напишите функцию cloneAndModify(object, modifications), которая с помощью оператора spread создает копию объекта и применяет изменения из объекта modifications.
// Затем с помощью цикла for in выведите все свойства полученного объекта.

const task = {
	title: "Добрый день",
	description: "Я начинающий веб-разработчик",
	isCompleted: true,
};

const modifications = {
	isCompleted: false,
};

const cloneAndModify = function (object, modifications) {
	const clone = {
		...object,
		...modifications,
	};
	return clone;
};

const result = cloneAndModify(task, modifications);

for (const key in result) {
	console.log(key, result[key]);
}

// Задача 4.
// Создайте функцию callAllMethods, которая принимает объект и вызывает все его методы.

// Пример использования:
// const myObject = {
//     method1() {
//         console.log('Метод 1 вызван');
//     },
//     method2() {
//         console.log('Метод 2 вызван');
//     },
//     property: 'Это не метод'
// };
// callAllMethods(myObject);

const myObject = {
	method1() {
		console.log("Метод 1 вызван");
	},
	method2() {
		console.log("Метод 2 вызван");
	},
	property: "Это не метод",
};

function callAllMethods(object) {
	for (const key in object) {
		if (typeof object[key] === "function") {
			object[key]();
		}
	}
}

callAllMethods(myObject);
