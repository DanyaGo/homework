(function($) {
	jQuery.fn.myTabs = function(options) {

		var createTabs = function() {
			tabs = this;
			i = 0;

			showPage = function(i) {
				$('.showTabs').children('div').hide();
				$('.showTabs').children('div').eq(i).show();
				$(tabs).children('ul').children('li').children('a').removeClass('active');
				$(tabs).children('ul').children('li').children('a').eq(i).addClass('active');

			}

			showPage();

			$(tabs).children('ul').children('li').children('a').each(function(index, element) {
				$(element).attr('data-page', i);
				i++;
			});

			$(tabs).children('ul').children('li').children('a').click(function() {
				showPage(parseInt($(this).attr('data-page')));
			});
		};
		return this.each(createTabs);
	};
	
})(jQuery);