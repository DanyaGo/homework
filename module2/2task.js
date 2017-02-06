function getMin(){
	var arr = [];
	var min = Math.min.apply(null, arr);
	while(ask !== null){
		var ask = prompt('','');
		if(ask !== null){
			arr.push(ask);
			if (min > ask) {
				min = ask;

			}
		}}
		return alert('Минимальное число: ' + min); }
		getMin();

/*Написать функцию, которая запускает окно prompt, требующее ввести число. Prompt всплывает до тех пор, пока пользователь не нажмет Отмена.
Все значения, которые пользователь ввел, запоминаются в массив. Функция возвращает наименьшее из них.*/