// 1. Завершите метод, который принимает логическое значение и возвращает "Yes"строку для true, или "No"строку для false.

function boolToWord(bool) {
	if (bool) {
		return "Yes";
	} else {
		return "No";
	}
}

console.log(boolToWord(true));
/* console.log(boolToWord(false)); */

// 2. Создайте функцию, которая возвращает массив целых чисел от n до 1, где n>0.

/* Пример: n=5-->[5,4,3,2,1] */

const reverseSeq = (n) => {
	const result = [];

	for (let i = n; i >= 1; i--) {
		result.push(i);
	}

	return result;
};

console.log(reverseSeq(5));

// 3. Напишите функцию bmi, которая вычисляет индекс массы тела (bmi = вес / рост² ) .
/* Если ИМТ <= 18,5, вернуть "Недостаточный вес".
Если ИМТ <= 25,0, вернуть "Нормальный"
Если ИМТ <= 30,0, вернуть "Избыточный вес".
Если ИМТ > 30, вернуть "Ожирение". */

function bmi(weight, height) {
	const bmi = weight / height ** 2;
	if (bmi <= 18.5) {
		return "Недостаточный вес";
	} else if (bmi <= 25.0) {
		return "Нормальный";
	} else if (bmi < 30.0) {
		return "Избыточный вес";
	} else {
		return "Ожирение";
	}
}

console.log(bmi(50, 1.7));
/* console.log(bmi(70, 1.7));
console.log(bmi(80, 1.7));
console.log(bmi(100, 1.7)); */

// 4. Функция голов Месси.
/* ЛаЛига
Кубок короля
Чемпионы
Завершите функцию, чтобы получить общее количество его голов во всех трех лигах.
Примечание: введенные данные всегда будут корректными.  */

function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
	return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

console.log(goals(10, 5, 7));
/* console.log(goals(20, 10, 5)); */

// 5.Удалить первый и последний символ
/* Задача
Ваша задача — написать функцию, которая удаляет первый и последний символы строки. Вам дан один параметр — исходная строка.

Важно: Ваша функция должна обрабатывать строки, состоящие из любых length ≥ 2символов. Для строк, содержащих ровно 2символов, возвращайте пустую строку. */

function removeChar(str) {
	return str.slice(1, -1);
}

console.log(removeChar("Hello"));

// 6. Напишите функцию, которая вычисляет среднее арифметическое чисел в заданном массиве.
/* Примечание: Пустые массивы должны возвращать 0. */

function findAverage(array) {
	if (array.length === 0) {
		return 0;
	}
	let sum = 0;
	for (let i = 0; i < array.length; i++) {
		sum += array[i];
	}

	return sum / array.length;
}

console.log(findAverage([1, 2, 3, 4]));
/* console.log(findAverage([10, 20, 30]));
console.log(findAverage([])); */

// 7. Дано число месяца от 1 до 12, верните число, обозначающее квартал года, к которому он относится, в виде целого числа.
/* Например: 2-й месяц (февраль) относится к первому кварталу; 6-й месяц (июнь) — ко второму кварталу; а 11-й месяц (ноябрь) — к четвертому кварталу.
Ограничение: 1 <= month <= 12 */

function quarterOf(month) {
	if (month >= 1 && month <= 3) {
		return 1;
	} else if (month >= 4 && month <= 6) {
		return 2;
	} else if (month >= 7 && month <= 9) {
		return 3;
	} else return 4;
}

console.log(quarterOf(1));

// 8. Реализуйте функцию, которая преобразует заданное логическое значение в его строковое представление.
/* Примечание: Будут предоставлены только корректные данные. */

function booleanToString(b) {
	if (b === true) {
		return "true";
	} else return "false";
}

// 9. Эта функция должна проверить, factor является ли множителем base.
/* Верните деньги, true если это имеет значение, или false если нет.
О факторах
Множители — это числа, которые можно перемножить, чтобы получить другое число.
2 и 3 являются делителями числа 6, потому что:2 * 3 = 6
Множитель можно найти, разделив числа. Если остаток равен 0, то число является множителем.
%В большинстве языков программирования для проверки остатка от деления можно использовать оператор деления по модулю ( ).
Например, число 2 не является делителем числа 7, потому что:7 % 2 = 1
Примечание: base— неотрицательное число, factor— положительное число. */

function checkForFactor(base, factor) {
	if (base % factor === 0) {
		return true;
	} else {
		return false;
	}
}

console.log(checkForFactor(10, 2));

// 10. Дополните функцию суммы квадратов так, чтобы она возводила в квадрат каждое переданное ей число, а затем суммировала результаты.

function squareSum(numbers) {
	let sum = 0;
	for (let i = 0; i < numbers.length; i++) {
		sum += numbers[i] ** 2;
	}
	return sum;
}

console.log(squareSum([1, 2, 3]));
