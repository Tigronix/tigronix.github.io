$(document).ready(function(){
	//Слайдер на  главной
	$('.main_slider').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 2,
		centerMode: true,
		arrows: true,
		centerPadding: 0
	});
	
	//Стили для селектов
	(function($) {
		$(function() {

			$('.styler').styler();

		});
	})(jQuery);
	
	//Открытие формы регистрации
	$(".reg__open").fancybox({
		width: 676,
		height: 374,
		maxWidth	: 800,
		maxHeight	: 600,
		fitToView	: false,
		autoSize	: false,
		closeClick	: false,
		openEffect	: 'true',
		closeEffect	: 'true'
	});
	
	//Открытие формы обратной связи
	$(".feedback__open").fancybox({
		width: 676,
		height: 374,
		maxWidth	: 800,
		maxHeight	: 600,
		fitToView	: false,
		autoSize	: false,
		closeClick	: false,
		openEffect	: 'true',
		closeEffect	: 'true'
	});
	
	
});