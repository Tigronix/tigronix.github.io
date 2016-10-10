$(document).ready(function(){
    //mob-menu
    $('.header__open').click(function(){
        $(this).fadeOut(300);
        $('.header__close').fadeIn(300);
        $('.header__nav').addClass('header__on').fadeIn(300);
    });
    $('.header__close').click(function(){
        $(this).fadeOut(300);
        $('.header__nav').removeClass('header__on').fadeOut(300);
        $('.header__open').fadeIn(300);
    });
	
	//header-scroll
	var header = $('.header');
	$(window).scroll(function(){
		var top = $(this).scrollTop();
		if (top > 120) {
			header.addClass('header__small');
		}
		else {
			header.removeClass('header__small');
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
	
	//vertical-slider
	var slider = $.fn.fsvs({
		speed : 1000,
		bodyID : 'fsvs-body',
		selector : '> .slide',
		mouseSwipeDisance : 40,
		afterSlide : function(){},
		beforeSlide : function(){},
		endSlide : function(){},
		mouseWheelEvents : true,
		mouseWheelDelay : false,
		scrollableArea : 'scrollable',
		mouseDragEvents : false,
		touchEvents : true,
		arrowKeyEvents : true,
		pagination : true,
		nthClasses : false,
		detectHash : true
	});
	
	//Universal Tabs
	$(document).ready(function(){
		$(document).on('click', '[data-id]', function(){
			var id = $(this).attr('data-id');
			var taba = $(this).attr('data-taba');
			$('[data-id="'+id+'"]').each(function () {
				if ($(this).attr('data-taba') == taba){
					$(this).addClass('act').siblings().removeClass('act');
				}
			});
			$('#'+id+' div[data-taba="'+taba+'"]').show().addClass('table').siblings().hide().removeClass('table_off');
		});
	});
});
