$(document).ready(function(){
	$('.menu__wrap').click(function(){
		$('.page-header').toggleClass('page-header--menu');
		$('.left-menu').toggleClass('slide-left').css('transition', 'transform .6s');
		$('.hamburger').toggleClass('hamburgerActive');
		$('body').toggleClass('overflow');
	});
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

	//Маска для телефона
	$(".form__tel").mask("+7(999)999-99-99",{placeholder:"+7(___)___-__-__"});

	//slider-main
	$('.slider-main').slick({
    slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		dots: true
	});
	//services
	$('.services-slider').slick({
    slidesToShow: 6,
		slidesToScroll: 1,
		arrows: true,
		responsive: [
    {
      breakpoint: 1281,
      settings: {
        slidesToShow: 4
      }
    },
		{
      breakpoint: 901,
      settings: {
        slidesToShow: 3
      }
    },
		{
      breakpoint: 768,
      settings: {
        slidesToShow: 2
      }
    },
		{
      breakpoint: 500,
      settings: {
        slidesToShow: 1
      }
    }
  ]
	});
	
});
