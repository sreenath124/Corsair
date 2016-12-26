$(document).ready(function(){
	var backstory_top = $('.backstory').offset().top;



	$(document).scroll(function() {
		if($(this).scrollTop()>= backstory_top) {
			//console.log("hi");
			$('#btn_fixed').removeClass('btn_hidden').addClass('btn_visible');
		}
		else{
			$('#btn_fixed').removeClass('btn_visible').addClass('btn_hidden');
		}
	});


	$('.menu_button').click(function(e){
		$('.menu_items').addClass('menu_expand');
		$('html, body').addClass('no_scroll');

	});
	$('#close_button').on('click', function() {
		$('.menu_items').removeClass('menu_expand');
		$('html, body').removeClass('no_scroll');
	});

	$('.select').on('click', function() {
		$('html, body').animate({scrollTop: $('.backstory').offset().top}, 'slow');
	});
	$('.expand_map_btn').on('click', function() {
		$('.map').addClass('expand_map');
		$('.close_map').addClass('close_map_visible');
	});
	$('.close_map').on('click', function() {
		$('.map').removeClass('expand_map');
		$('.close_map').removeClass('close_map_visible');
	});

	
	$('.carousel').carousel({
        interval: 5000 //changes the speed
    });
	$('.carousel').on('slide.bs.carousel', function(){
		$('#prev_slide').show();
	});
	

});