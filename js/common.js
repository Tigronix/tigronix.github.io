$(document).ready(function () {
	//Universal Tabs
	$(document).on('click', '[data-id]', function () {
		var id = $(this).attr('data-id');
		var taba = $(this).attr('data-taba');
		$('[data-id="' + id + '"]').each(function () {
			if ($(this).attr('data-taba') == taba) {
				$(this).addClass('active').siblings().removeClass('active');
			}
		});
		$('#' + id + ' > [data-taba="' + taba + '"]').show().removeClass('hide').siblings().hide().addClass('hide');
	});
	
	$('.menu__wrap, .nav__link--services').click(function () {
		$('.page-header').toggleClass('page-header--menu');
		$('.page-header__metro').toggleClass('slide-left active').css('transition', 'transform .6s');
		$('.hamburger').toggleClass('hamburgerActive');
		$('body').toggleClass('overflow');
	});
	//header-scroll
	var header = $('.page-header');
	$(window).scroll(function () {
		var top = $(this).scrollTop();
		if (top > 50) {
			header.addClass('page-header--fixed');
			$('.left-menu').addClass('left-menu--fixed');
		}
		else {
			header.removeClass('page-header--fixed');
			$('.left-menu').removeClass('left-menu--fixed');
		}
	});
	//Маска для телефона
	$(".form__tel").mask("+7(999)999-99-99", {
		placeholder: "+7(___)___-__-__"
	});
	//slider-main
	$('.slider-main').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		dots: true
	});
	//product__slider
	$('.product__slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true
	});
	
	(function($) {
	$(function() {

		$('.styler').styler();

	});
	})(jQuery);
});
new WOW().init();