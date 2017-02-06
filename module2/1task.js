console.clear();
function alert(message){
	var $parent = $('<div>').appendTo('body').addClass('box').css({
		'width' : '200px',
		'height': '75px',
		'margin': 'auto',
		'padding': '50px',
		'border-radius': '50px',
		'background' : '#F08080'
	});
	$('<p>').appendTo($parent).text(message).css({  'text-align' : 'center'});
	setTimeout(function(){$($parent).fadeOut()},3000); 
	return alert;
}


alert('Merry Christmas');

//Переопределить встроенную функцию alert: при вызове alert('message') на страницу добавляется стилизованный блок с текстом, через три секунды блок исчезает.