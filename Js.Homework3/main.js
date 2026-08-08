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

let number = 1;

while (number <= 20) {
	if (number % 4 === 0) {
		number++;
		continue;
	}

	console.log(number);
	number++;
}

// Задача 2.
// С помощью цикла for вычислите факториал числа (произведение всех чисел от 1 до заданного числа). Используйте prompt для получение начального значения.

const number1 = Number(prompt("Введите число"));
let factorial = 1;

for (let i = 1; i <= number1; i++) {
	factorial = factorial * i;
}

console.log(factorial);

// *Задача 3.
// Выведите в консоль шахматную доску размером 8x8, где символы чередуются (например, # и пробел). Начинайте с # в первой ячейке первой строки.
