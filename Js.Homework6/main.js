// Задание 1.
// Дан массив пользователей:
const users = [
	{ name: "Alex", age: 24, isAdmin: false },
	{ name: "Bob", age: 13, isAdmin: false },
	{ name: "John", age: 31, isAdmin: true },
	{ name: "Jane", age: 20, isAdmin: false },
];

users.push(
	{ name: "Ann", age: 19, isAdmin: false },
	{ name: "Jack", age: 43, isAdmin: true },
);

console.log(users);

// Задание 2.
// Используя массив пользователей users из предыдущего задания, напишите функцию getUserAverageAge(users), которая возвращает средний возраст пользователей.

function getUserAverageAge(users) {
	let sum = 0;
	let count = 0;
	users.forEach(function (user) {
		sum += user.age;
		count++;
	});
	return sum / count;
}

const result = getUserAverageAge(users);
console.log(result);

// Задание 3.
// Используя массив пользователей users из предыдущего задания, напишите функцию getAllAdmins(users), которая возвращает массив всех администраторов.

function getAllAdmins(users) {
	let results = [];

	users.forEach(function (user) {
		if (user.isAdmin) {
			results.push(user);
		}
	});
	return results;
}

const results = getAllAdmins(users);
console.log(results);

// Задание 4.
// Напишите функцию first(arr, n), которая возвращает первые n элементов массива. Если n == 0, возвращается пустой массив [], если n == undefined, то возвращается массив с первым элементом.

function first(arr, n) {
	if (n === 0) {
		return [];
	} else if (n === undefined) {
		return [arr[0]];
	}
	return arr.slice(0, n);
}

const numbers = [10, 20, 30, 40, 50];

console.log(first(numbers, 0));
console.log(first(numbers, 1));
console.log(first(numbers, 2));
console.log(first(numbers, 3));
console.log(first(numbers, 4));
console.log(first(numbers, 5));
