$(document).ready(function () {
	$('.room__about').addClass('slide_top');
	$('.room__info').addClass('slide_bot');
	//slider_hover
	$('.owl-prev').hover(function(){
		if ($(this).hover) {
			$('.fa-angle-left').toggleClass('angle_hover');
		}
	});
	$('.owl-next').hover(function(){
		if ($(this).hover) {
			$('.fa-angle-right').toggleClass('angle_hover');
		}
	});

	//header-scroll
	var header = $('.header__main');
	$(window).scroll(function(){
		var top = $(this).scrollTop();
		if (top > 10) {
			header.addClass('header__small');
		}
		else {
			header.removeClass('header__small');
		}
	});
	
	//mob-menu
	$('.header__open').click(function () {
		$(this).fadeOut(300);
		$('.header__close').fadeIn(300).addClass('ib');	$('.header__nav').addClass('header__on').removeClass('move_away').addClass('move_left_header').fadeIn(400);
		$('.blackout').fadeIn(400);
	});
	$('.header__close').click(function () {
		$(this).fadeOut(300);	$('.header__nav').removeClass('move_left_header').addClass('move_away').fadeOut(400);
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