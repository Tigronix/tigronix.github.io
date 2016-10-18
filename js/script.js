$(document).ready(function(){
    //mob-menu
    $('.header__open').click(function(){
        $('.header__close').fadeIn(300);
        $('.header__nav').addClass('header__on').fadeIn(300);
    });
    $('.header__close').click(function(){
        $(this).fadeOut(300);
        $('.header__nav').removeClass('header__on').fadeOut(300);
    });
	
	//header-scroll
	var header = $('.header');
	$(window).scroll(function(){
		var top = $(this).scrollTop();
		if (top > 125) {
			header.addClass('header__small');
			$('.header__nav').addClass('nav__small');
		}
		else {
			header.removeClass('header__small');
			$('.header__nav').removeClass('nav__small');
		}
	});
  	
	//slider-main
	$('.slider_main').slick({
		fade: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		autoplay: true,
		autoplaySpeed: 5000,
		pauseOnFocus: true,
		responsive: [
			{
				breakpoint: 740,
				settings: {
					dots: true,
					arrows: false
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
	
	//fancbyox
	$(".fancybox").fancybox();
});
