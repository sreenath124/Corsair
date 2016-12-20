$(document).ready(function(){
	$('.select').on('click', function() {
		$('html, body').animate({scrollTop: $('.backstory').offset().top}, 'slow');
	});
	$('.expand_map_btn').on('click', function() {
		$('.map').addClass('expand_map');
	});
	$('.close').on('click', function() {
		$('.map').removeClass('expand_map');
	});
});