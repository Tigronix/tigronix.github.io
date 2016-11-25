
$(document).ready(function() {

	//accordion
	$('.side_submenu').hide().prev().click(function(){
		$('.side_submenu').not(this).slideUp(400).prev().removeClass('side__active');
		$(this).next().not(':visible').slideDown(400).prev().addClass('side__active');
	});
	
	//плавные якоря
	$("a[href*=#]").bind("click", function(e){
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top -1400
		}, 0);
		e.preventDefault();
		return false;
	});
	
	//works__slider
	$('.works__slider').slick({
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 3,
		responsive: [
			{
				breakpoint: 1600,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 3
				}
			},
			{
				breakpoint: 1280,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});
	

	//hover в слайдере
	$('.slick-prev').hover(function(){
		if ($(this).hover) {
			$('.fa-angle-left').toggleClass('angle_hover');
		}
	});
	$('.slick-next').hover(function(){
		if ($(this).hover) {
			$('.fa-angle-right').toggleClass('angle_hover');
		}
	});
	
	//photogallery
	$('.slider-for--gallery').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.slider-nav--gallery',
		speed: 1000,
		autoplay: true,
		pauseOnHover: true,
		arrows: true,
		dots: true
	});
	$('.slider-nav--gallery').slick({
		slidesToShow: 13,
		slidesToScroll: 1,
		asNavFor: '.slider-for--gallery',
		dots: false,
		focusOnSelect: true,
		responsive: [
			{
				breakpoint: 1401,
				settings: {
					slidesToShow: 10
				}
			},
			{
				breakpoint: 1281,
				settings: {
					slidesToShow: 8
				}
			},
			{
				breakpoint: 1025,
				settings: {
					slidesToShow: 10
				}
			},
			{
				breakpoint: 960,
				settings: {
					slidesToShow: 6
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 5
				}
			},
			{
				breakpoint: 500,
				settings: {
					slidesToShow: 4
				}
			},
			{
				breakpoint: 400,
				settings: {
					slidesToShow: 3
				}
			},
			
		]
	});
	
	//header-scroll
	var header = $('.header');
	$(window).scroll(function () {
		var top = $(this).scrollTop();
		if (top > 10) {
			header.addClass('header__smally');
		} else {
			header.removeClass('header__smally');
		}
	});
	
	//lightcase
	$('a[data-rel^=lightcase]').lightcase({
		swipe: true
	});
	
	//mob-menu
	$('.header__open').click(function () {
		$(this).hide();
		$('.header__close').show();	$('.side__menu').addClass('header__on').removeClass('move_away').addClass('move_left_header').fadeIn(400);	$('.mob_phone').addClass('header__on').removeClass('move_away').addClass('move_left_header').fadeIn(400);
		$('.header').addClass('z_index');
		$('.blackout').fadeIn(400);
	});
	$('.header__close').click(function () {
		$(this).hide();	$('.side__menu').removeClass('move_left_header').addClass('move_away').fadeOut(400);	$('.mob_phone').removeClass('move_left_header').addClass('move_away').fadeOut(400);	
		$('.header__open').show();
		$('.blackout').fadeOut(400);
		$('.header').removeClass('z_index');
	});
	$('.blackout').click(function(){
		$(this).fadeOut(400);
		$('.header__close').fadeOut(300);
		$('.header__open').fadeIn(300);	$('.side__menu').removeClass('move_left_header').addClass('move_away').fadeOut(400);		$('.mob_phone').removeClass('move_left_header').addClass('move_away').fadeOut(400);	
		$('.header').removeClass('z_index');
	});
	
	//стили для инпутов/селектов
	(function($) {
		$(function() {

			$('input, select').styler();

		});
	})(jQuery);
});