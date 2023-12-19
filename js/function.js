"use strict";

(function($){

/*toggle nav-switch*/
$('.nav-switch').on('click', function(event){
	$(this).toggleClass('active');
	$('.nav-wrap').slideToggle(400);
	event.preventDefault();
});	

/*set background image*/
$('.set-bg').each(function(){
	var bg = $(this).data('setbg');
	$(this).css('background-image', 'url(' + bg + ')');
});

})(jQuery);