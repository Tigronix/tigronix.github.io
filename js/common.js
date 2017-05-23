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
	$('.showLinks').click(function(){
		var headHeight = $('.page-header__middle').innerHeight();
		$('.page-header__menu').toggleClass('off page-header__menu--fixed').css('top', headHeight);
	});
	
});
$(document).ready(function () {
	//styler
	$('.styler').styler();
	$('.table__row[data-href]').click( function() {
		window.location = $(this).attr('data-href');
	});
	$('.tables').DataTable({
		paging: false
	});
	//Universal Tabs
	$(document).on('click', '[data-id]', function () {
		var id = $(this).attr('data-id');
		var taba = $(this).attr('data-taba');
		$('[data-id="' + id + '"]').each(function () {
			if ($(this).attr('data-taba') == taba) {
				$(this).addClass('table-tabs__tab--active').siblings().removeClass('table-tabs__tab--active');
			}
		});
		$('#' + id + ' > [data-taba="' + taba + '"]').show().removeClass('hide').siblings().hide().addClass('hide');
	});
	$(".hamburger").click(function () {
		$(this).toggleClass("hamburgerActive");
		$('.page-header__menu').slideToggle(400).css('display', 'flex');
		$('.page-header__form').slideToggle(400).css('display', 'flex');
		$('.page-header__menu--fixed').removeClass('page-header__menu--fixed').addClass('off');
	});
	//mob-menu-плавное появление
	$('.header__open').click(function () {
		$(this).hide();
		$('.header__close').show();
		$('.page-header').addClass('page-header--off');
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
		$('.page-header').removeClass('page-header--off');
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
		$('.page-header').removeClass('page-header--off');
	});
	//Маска для телефона
	$(".form__tel").mask("+7(999)999-99-99", {
		placeholder: "+7(___)___-__-__"
	});
	//slider-page
	$('.slider-main').owlCarousel({
		animateOut: 'fadeOut'
		, animateIn: 'zoomOut'
		, items: 1
		, loop: true
		, autoplay: true
		, autoplayHoverPause: true
		, autoplayTimeout: 3000
		, nav: true
		, navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
	});
	//slider-page
	$('.slider-page').owlCarousel({
		animateOut: 'fadeOut'
		, animateIn: 'zoomOut'
		, items: 1
		, loop: true
		, autoplay: true
		, autoplayHoverPause: true
		, autoplayTimeout: 3000
		, nav: true
		, navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
	});
	//slider-page
	$('.roomAlso').owlCarousel({
		items: 3
		, loop: true
		, margin: 75
		, nav: true
		, navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
		, responsive: {
			0: {
				items: 1
				, margin: 0
			}
			, 800: {
				items: 2
				, margin: 30
			}
			, 1281: {
				items: 3
			}
		}
	});
	$('.carousel').owlCarousel({
		items: 7
		, loop: true
		, margin: 12
		, nav: true
		, navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
		, responsive: {
			0: {
				items: 1
			}
			, 500: {
				items: 3
			}
			, 480: {
				items: 4
			}
			, 768: {
				items: 5
			}
			, 1024: {
				items: 6
			}
			, 1281: {
				items: 7
			}
		}
	});
	var window = $('.page-header').width();
	if (window <= 1024) {
		$('.page-header__menu').addClass('off');
		$('.nav').addClass('off');
		$('.page-header__form').addClass('off');
		$(".hamburger").click(function () {
			if($('.hamburger').hasClass('hamburgerActive')){
				$('.page-header').css('zIndex', '1200');
				$('#body').css('overflow', 'hidden');
				$('.nav').show();
				$('.page-header__middle').addClass('page-header__middle--active');
			}else{
				$('.page-header').css('zIndex', '999');
				$('#body').css('overflow', 'auto');
				$('.nav').hide();
				$('.page-header__middle').removeClass('page-header__middle--active');
			}
		});
		$('.nav__li--room').click(function(){
			$('.nav__li--room .nav__sub-menu').toggleClass('slide-right');
			$('.nav__link').toggleClass('slide-left');
			$('.nav__sub-link').removeClass('slide-left');
			$('.hamburger__line').hide();
			$('.hamburger__back').show();
			$('.hamburger').addClass('hamburger--back').removeClass('hamburgerActive');
			$('.hamburgerActive').removeClass('hamburgerActive');
		});
		$('.hamburger__back').click(function(){
			$('.nav__sub-menu').removeClass('slide-right');
			$('.nav__link').removeClass('slide-left').addClass('slide-right');
			$('.hamburger__line').show();
			$('.hamburger').removeClass('hamburger--back');
			$('.nav').show().removeClass('off');
			$(this).hide();
		});
	}
});
$(document).ready(function(){
	// GO TOP
	  $('.fixed_wrap').height($('.go-top').outerHeight());
	  function goTop(){
			var footerHeight = $('.page-footer').innerHeight();
			var docBot = $('.fixed_wrap').offset().top;
			var footerTop = $('.page-footer').offset().top;
			if (docBot >= footerTop){
					$('.go-top').addClass('static');
			}else{
					$('.go-top').removeClass('static');
			}
	  }
	  window.onscroll = function() {
			goTop();
	  }
});	
	