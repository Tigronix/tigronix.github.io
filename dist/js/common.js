$(document).ready(function(){
	//main-slider
	$('.main-slider').slick({
    slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true
	});
	
	//class-tab
	$(document).on('click', '[data-class]', function () {
			var clas = $(this).attr('data-class');
			var taba = $(this).attr('data-taba');
			$('[data-class="' + clas + '"]').each(function () {
					if ($(this).attr('data-taba') == taba) {
							$(this).addClass('act').siblings().removeClass('act');
					}
			});
			$('.' + clas + ' > [data-taba="' + taba + '"]').addClass('act').siblings().removeClass('act');
	});
});