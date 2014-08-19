/*
 * jQuery Accordion Plugin v1.0.0
 * by iashraf (http://github.com/iashraf)
 * Last updated: 19 Aug 2014
 * ------
 * OPTIONS:
 * speed: >0 | The speed (in msecs) that the animation runs
 * defaultPane: >1 | The pane which should be opened by default
 */
$.fn.accordion = function(options){

	var accordion = this;

	var settings = $.extend({
		speed: 150,
		defaultPane: 0
	}, options);

	if (accordion.length > 0) {

		// hide all panes on load
		$(".accordion_content", accordion).hide();

		// open the default pane
		if (settings.defaultPane > 0) {
			$(".accordion_item", accordion).eq(settings.defaultPane-1).find(".accordion_content").stop(true,true).slideDown(0, function(){
				$(this).parent().addClass("open");
			});
		}

		// open the correct pane when clicked
		$(".accordion_header", accordion).click(function(){

			var pane = $(this).parent();

			if (!pane.hasClass("open")) {

				$(".accordion_content", accordion).stop(true,true).slideUp(settings.speed, function(){
					$(".accordion_item", accordion).removeClass("open");
				});

				$(".accordion_content", pane).stop(true,true).slideDown(settings.speed, function(){
					pane.addClass("open");
				});

			}

		});

	}

};