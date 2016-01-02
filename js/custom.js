jQuery(document).ready(function($) {

	$(".ts-left-sidebar").sidebar({
		onHidden:function(){
			$('.ui.sticky').sticky('refresh');
		}
	}).sidebar("attach events", ".ts-sidebar-trigger", "trigger");

	// $(".ts-left-sidebar").sidebar('setting', 'transition', 'overlay').sidebar("attach events", ".ts-sidebar-trigger", "trigger");

	$('.ui.sticky').sticky({
	    context: '.ts-main-container',
	    offset: 84,
	    pushing: true
	  });

	$('.ui.accordion').accordion();

	$('.ui.dropdown').dropdown();

});