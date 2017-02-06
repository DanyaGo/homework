 function myTooltip(target_items, name){
 	var defaults = {
 		active: 0
 	};
 	
// target_items — переменная, которую мы определяем, вызывая скрипт
$(target_items).each(function(i){

	$("body").append("<div class='"+name+"' id='"+name+i+"'><p>"+$(this).attr('title')+"</p></div>");
	
	var my_tooltip = $("#"+name+i);
	$('.tooltip').css({
		left: 0,
	});

	$(this).removeAttr("title").mouseover(function(){

		my_tooltip.css({opacity:0.8, display:"none"}).fadeIn(400);
	})

	.mousemove(function(kmouse){

		my_tooltip.css({left:kmouse.pageX+15, top:kmouse.pageY+15});
	})
	.mouseout(function(){

		my_tooltip.fadeOut(400);

	});
});
};



















/*(function($) {
	jQuery.fn.toolTips = function(targetItems, name) {

		$(targetItems).each(function(i) {

			$('body')
			.append("<div class = ' "+ name +"' id= '"+ name + i +"'><p>" + $(this)
				.attr('title')+"</p></div>").css({
					'background-color' : 'blue'
				});

			var myTooltip = $("#" + name + i);

			$(this).removeAttr("title").mouseover(function() {

				myTooltip.css({opacity: 0.8, display : 'none'}).fadeIn(200);

			}).mousemove(function(kmouse) {

				myTooltip.css({left:kmouse.pageX+15, top:kmouse.pageY+15});

			}).mouseout(function() {

				myTooltip.fadeOut(500);
			});
		});
	}
})(jQuery);*/