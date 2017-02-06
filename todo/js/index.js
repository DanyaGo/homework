$(function() {
	function printTask(data, id, target) {
		var label = '<span class="label label-default">new</span>';

		var $title = $('<span>')
			.text(data.title)
			.attr('data-toggle', 'collapse')
			.attr('data-target', '#description_' + id);

		var $description = $('<div>')
			.addClass('collapse')
			.attr('id', 'description_' + id)
			.text(data.description);

		var $actions = $('<div class="actions">');
		$actions.append('<a href="#" class="edit-btn"><span class="glyphicon glyphicon-pencil"></span></a> ')
		$actions.append('<a href="#" class="remove-btn"><span class="glyphicon glyphicon-remove"></span></a>')

		var newItem =
		$('<li>')
			.attr('data-id', id)
			.append($title)
			// .append(' ')
			// .append(label)
			.append($description)
			.append($actions)
			.addClass('list-group-item')
			.appendTo(target);
	}

	$('body').on('click', '.remove-btn', function(event) {
		event.preventDefault();

		var $parent = $(this).parents('li');
		var taskID = $parent.data('id');

		localStorage.removeItem(taskID);
		$parent.remove();

	});

	$('body').on('click', '.edit-btn', function(event) {
		var $formEditTask = $('#formEditTask');
		$formEditTask.modal('show');

		var $parent = $(this).parents('li');
		var taskID = $parent.data('id');

		var item = JSON.parse(localStorage.getItem(taskID));

		$('#edit-task-title').val(item.title);
		$('#edit-task-description').val(item.description);
		$('#edit-task-status').val(item.status);
		$('#edit-task-id').val(taskID);
	});

	$('#edit-task-btn').on('click', function() {
		var $formEditTask = $('#formEditTask');

		var data = {
			title: $('#edit-task-title').val(),
			description: $('#edit-task-description').val(),
			status: +$('#edit-task-status').val()
		};

		var taskID = $('#edit-task-id').val();
		localStorage.removeItem(taskID);
		localStorage.setItem(taskID, JSON.stringify(data));

		var $item = $('[data-id="' + taskID + '"]');

		$item.remove();
		printTask(data, taskID, $('[data-status="' + data.status + '"] .list-group'));

		$formEditTask.modal('hide');
	});

	$('#add-task-btn').on('click', function() {
		var data = {
			title: $('#add-task-title').val() || 'New task',
			description: $('#add-task-description').val(),
			status: 1
		};

		var id = Math.random().toString(36).substr(2, 8);

		localStorage.setItem(id, JSON.stringify(data));

		printTask(data, id, $('[data-status="' + data.status + '"] .list-group'));

		$('#formAddTask').modal('hide');

		$('#formAddTask form [name]').val('');
	});

	var allTasks = [];
	for (var key in localStorage) {
		if ( localStorage.hasOwnProperty(key) ) {
			var obj = $.extend({}, JSON.parse(localStorage[key]), {id: key});
			allTasks.push(obj);
		}
	}

	var todoTasks = allTasks.filter(function(item) {
		return item.status == 1;
	});

	var progressTasks = allTasks.filter(function(item) {
		return item.status == 2;
	});

	var doneTasks = allTasks.filter(function(item) {
		return item.status == 3;
	});

	todoTasks.forEach(function(item) {
		printTask(item, item.id, $('#todo .list-group'));
	});

	progressTasks.forEach(function(item) {
		printTask(item, item.id, $('#progress .list-group'));
	});

	doneTasks.forEach(function(item) {
		printTask(item, item.id, $('#done .list-group'));
	});
});