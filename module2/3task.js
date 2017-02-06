 function avg() {
 	var sum = 0;

 	for (var i = 0; i < arguments[i]; i++ ) sum += arguments[i];
 		return sum == 0 ? sum : sum / arguments.length;
 }
 console.log( avg(2, 2) );
 console.log( avg(1, 5, 78, 6) );

//Напишите функцию, которая рассчитывает среднее арифметическое из всех переданных параметров,количество которых не ограничено.