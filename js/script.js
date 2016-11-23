
$(document).ready(function() {
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
	
	//accordeon
	(function($) {

		var allPanels = $('.accordion > dd').hide();
		$('.first').addClass('act');
		$('.accordion > dt > a').click(function() {
			$('.first').removeClass('act');
			allPanels.slideUp(600);
			$(this).parent().next().slideDown(600);
			return false;
		});

	})(jQuery);

	//плавные якоря
	$(".accordion > dt > a").bind("click", function(e){
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top -100
		}, 2500);
		e.preventDefault();
		return false;
	});
	
	//lightcase
	$('a[data-rel^=lightcase]').lightcase({
		swipe: true
	});
	
	//mob-menu
	$('.header__open').click(function () {
		$(this).fadeOut(300);
		$('.header__close').fadeIn(300).addClass('ib');
		$('.side__menu').addClass('header__on').removeClass('move_away').addClass('move_left_header').fadeIn(400);
		$('.blackout').fadeIn(400);
	});
	$('.header__close').click(function () {
		$(this).fadeOut(300);
		$('.side__menu').removeClass('move_left_header').addClass('move_away').fadeOut(400);
		$('.header__open').fadeIn(300).addClass('ib');
		$('.blackout').fadeOut(400);
	});
	$('.blackout').click(function(){
		$(this).fadeOut(400);
		$('.header__close').fadeOut(300);
		$('.header__open').fadeIn(300);
		$('.side__menu').fadeOut(300);
	});
});