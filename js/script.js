
$(document).ready(function() {


	//row_hover
	$('.rooms__section_table > .row').hover(function () {
		var pTop = $(this).position().top -3;
		$('#float_hover').css('top', pTop).show();
	});
	
	
	/* Every time the window is scrolled ... */
	$(window).scroll( function(){

		/* Check the location of each desired element */
		$('.hideme').each( function(i){

			var bottom_of_object = $(this).position().top + $(this).outerHeight();
			var bottom_of_window = $(window).scrollTop() + $(window).height();
			/* If the object is completely visible in the window, fade it it */
			if( bottom_of_window > bottom_of_object ){

				$(this).animate({'opacity':'1'},1500);

			}

		}); 

	});

});

$(document).ready(function() {

	/* Every time the window is scrolled ... */
	$(window).scroll( function(){

		/* Check the location of each desired element */
		$('.slide_to_left').each( function(i){

			var bottom_of_object = $(this).position().top + $(this).outerHeight();
			var bottom_of_window = $(window).scrollTop() + $(window).height();
			/* If the object is completely visible in the window, fade it it */
			if( bottom_of_window > bottom_of_object ){

				$(this).addClass('slide_left')

			}

		}); 

	});

});

$(document).ready(function() {

	/* Every time the window is scrolled ... */
	$(window).scroll( function(){

		/* Check the location of each desired element */
		$('.slide_to_right').each( function(i){

			var bottom_of_object = $(this).position().top + $(this).outerHeight();
			var bottom_of_window = $(window).scrollTop() + $(window).height();
			/* If the object is completely visible in the window, fade it it */
			if( bottom_of_window > bottom_of_object ){

				$(this).addClass('slide_right')

			}

		}); 

	});

});

$(document).ready(function() {

	/* Every time the window is scrolled ... */
	$(window).scroll( function(){

		/* Check the location of each desired element */
		$('.slide_to_top').each( function(i){

			var bottom_of_object = $(this).position().top + $(this).outerHeight();
			var bottom_of_window = $(window).scrollTop() + $(window).height();
			/* If the object is completely visible in the window, fade it it */
			if( bottom_of_window > bottom_of_object ){

				$(this).addClass('slide_top')

			}

		}); 

	});

});

$(document).ready(function() {

	/* Every time the window is scrolled ... */
	$(window).scroll( function(){

		/* Check the location of each desired element */
		$('.slide_to_bot').each( function(i){

			var bottom_of_object = $(this).position().top + $(this).outerHeight();
			var bottom_of_window = $(window).scrollTop() + $(window).height();
			/* If the object is completely visible in the window, fade it it */
			if( bottom_of_window > bottom_of_object ){

				$(this).addClass('slide_bot')

			}

		}); 

	});

});




$(document).ready(function () {
	//slide_slider
	$('.slide_from').click(function(){
			$('.slide_that').toggleClass('slide_lefts').toggleClass('flex_show');
		
	});
	
	
	



	//animation
	$('.room__about').addClass('slide_top');
	$('.room__info').addClass('slide_bot');
	//slider_hover
	$('.owl-prev').hover(function () {
		if ($(this).hover) {
			$('.fa-angle-left').toggleClass('angle_hover');
		}
	});
	$('.owl-next').hover(function () {
		if ($(this).hover) {
			$('.fa-angle-right').toggleClass('angle_hover');
		}
	});

	//header-scroll
	var header = $('.header__main');
	$(window).scroll(function () {
		var top = $(this).scrollTop();
		if (top > 10) {
			header.addClass('header__small');
		} else {
			header.removeClass('header__small');
		}
	});

	//mob-menu
	$('.header__open').click(function () {
		$(this).fadeOut(300);
		$('.header__close').fadeIn(300).addClass('ib');
		$('.header__nav').addClass('header__on').removeClass('move_away').addClass('move_left_header').fadeIn(400);
		$('.blackout').fadeIn(400);
	});
	$('.header__close').click(function () {
		$(this).fadeOut(300);
		$('.header__nav').removeClass('move_left_header').addClass('move_away').fadeOut(400);
		$('.header__open').fadeIn(300).addClass('ib');
		$('.blackout').fadeOut(400);
	});


	//fancbyox
	$(".fancybox").fancybox();


	//rooms_slider
	$(".rooms_slider").owlCarousel({
		autoPlay: 5000,
		stopOnHover: true,
		navigation: true,
		paginationSpeed: 1000,
		goToFirstSpeed: 2000,
		singleItem: true,
		transitionStyle: "fade",
		responsive: true,
		autoHeight: true
	});

	//gal__slider
	$(".gal__slider").owlCarousel({
		autoPlay: 5000,
		stopOnHover: true,
		navigation: true,
		paginationSpeed: 1000,
		goToFirstSpeed: 2000,
		singleItem: true,
		transitionStyle: "fade",
		responsive: true,
	});



	//rooms_slider
	$(".pres__slider").owlCarousel({
		autoPlay: 5000,
		stopOnHover: true,
		navigation: true,
		paginationSpeed: 1000,
		goToFirstSpeed: 2000,
		singleItem: true,
		transitionStyle: "fade",
		responsive: true
	});



	//main_slider
	$(".main_slider").owlCarousel({
		autoPlay: 5000,
		stopOnHover: true,
		navigation: true,
		paginationSpeed: 1000,
		goToFirstSpeed: 2000,
		singleItem: true,
		transitionStyle: "fade",
		responsive: true,
		pagination: false
	});

});
$(document).ready(function () {
	//Universal Tabs
	$(document).on('click', '[data-id]', function () {
		var id = $(this).attr('data-id');
		var taba = $(this).attr('data-taba');

		$('[data-id="' + id + '"]').each(function () {
			if ($(this).attr('data-taba') == taba) {
				$(this).addClass('act').siblings().removeClass('act');
			}
		});

		$('#' + id + ' > [data-taba="' + taba + '"]').show().addClass('flex').siblings().hide().removeClass('flex');
	});
});