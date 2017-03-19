$(document).ready(function(){
//header-scroll
	var header = $('.page-header');
	$(window).scroll(function () {
			var top = $(this).scrollTop();
			if (top > 50) {
					header.addClass('page-header--fixed');
			}
			else {
					header.removeClass('page-header--fixed');
			}
	});
 //mob-menu-плавное появление
	$('.header__open').click(function () {
			$(this).hide();
			$('.header__close').show();
			$('.nav').addClass('bounceInDownn').show().fadeIn();
			$('.mob_phone2').addClass('bounceInDownn').addClass('header__on').fadeIn();
			$('.page-header').addClass('z-index');
			$('.blackout').fadeIn(400);
			$('.global_wrapper').addClass('body_overflow');
	});
	$('.header__close').click(function () {
			$(this).hide();
			$('.room__nav').fadeOut();
			$('.nav').removeClass('bounceInDownn').fadeOut();
			$('.mob_phone2').removeClass('bounceInDownn').fadeOut();
			$('.header__open').show();
			$('.blackout').fadeOut(400);
			$('.page-header').removeClass('z-index');
			$('.global_wrapper').removeClass('body_overflow');
	});
	$('.blackout').click(function () {
			$(this).fadeOut(400);
			$('.header__close').removeClass('bounceInDownn').fadeOut();
			$('.header__open').removeClass('bounceInDownn').fadeIn();
			$('.room__nav').fadeOut(400);
			$('.nav').fadeOut(400);
			$('.mob_phone2').fadeOut(400);
			$('.page-header').removeClass('z-index');
			$('.global_wrapper').removeClass('body_overflow');
	});
	
	//Маска для телефона
	$(".form__tel").mask("+7(999)999-99-99",{placeholder:"+7(___)___-__-__"});	
	
	//slider-main
	$('.slider-main').slick({
    slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true
	});
});