(function($) {
	$.fn.gallery = function(options) {
		var defaults = {
			active: 0
		};
		
		options = $.extend({},defaults, options);

		var goRight = function() {

			var nextElem = this.find('.active').next();

			var index = nextElem.length ? nextElem.index() : 0;

			this.children().removeClass('active').eq(index).addClass('active')
		};

		var goLeft = function() {

			var nextElem = this.find('.active').prev();

			var index = nextElem.length ? nextElem.index() : this.children().length - 1;

			this.children().removeClass('active').eq(index).addClass('active')	
		};

		return this.each(function() {

			var $gallery = $(this);

			var $items = $gallery.children();

			var maxHeight = 0;

			$gallery.children().each(function(i, item) {

				if ($(item).height() > maxHeight) maxHeight = $(item).height();

			});

			$gallery.addClass('gallery').height(maxHeight);

			$items.addClass('gallery-item');

			$items.eq(options.active).addClass('active');

			$gallery.attr('tabindex', 0);

			$gallery.on('keyup', function(event) {

				switch (event.which){
					case 39: goRight.call($gallery); break;
					case 37: goLeft.call($gallery); break;
				}
			});

/*
			$items.on('click', function() {

				$('.active')
					.removeClass('active')
					.next()
					.addClass('active');
				});*/
			});
	}
})(jQuery);