
$(document).ready(function() {
	//header-scroll
	var header = $('.header');
	$(window).scroll(function () {
		var top = $(this).scrollTop();
		if (top > 10) {
			header.addClass('header__small');
		} else {
			header.removeClass('header__small');
		}
	});
	
	//accordeon
	(function($) {

		var allPanels = $('.accordion > dd').hide();
		$('.first').addClass('active');
		$('.accordion > dt > div').click(function() {
			$('.first').removeClass('active');
			allPanels.slideUp(600);
			$(this).parent().next().slideDown(600);
			return false;
		});

	})(jQuery);
	
	//lightcase
	$('a[data-rel^=lightcase]').lightcase({
		swipe: true
	});
	
	//mob-menu
	$('.header__open').click(function () {
		$(this).fadeOut(300);
		$('.header__close').fadeIn(300).addClass('ib');
		$('.header__nav').addClass('header__on').removeClass('move_away').addClass('move_left_header').fadeIn(400);
		$('.blackout').fadeIn(400);
	});
	$('.header__close').click(function () {
		$(this).fadeOut(300);
		$('.header__nav').removeClass('move_left_header').addClass('move_away').fadeOut(400);
		$('.header__open').fadeIn(300).addClass('ib');
		$('.blackout').fadeOut(400);
	});
});