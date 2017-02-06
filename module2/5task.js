
var $parent = $("<ul>").appendTo('body');
var firtsName = '';
var lastName = '';
var user = {};
while(firtsName !== null){
	firtsName = prompt('Введите имя');
	lastName = prompt('Введите фамилию');
	user = createUser(firtsName, lastName);
	$('<li>'+ user.fullName + '</li>').appendTo($parent);
}
function createUser(firtsName, lastName) {
	return {
		firtsName: firtsName,
		lastName: lastName,
		fullName: firtsName + ' ' + lastName
	}
};