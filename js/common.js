
	$('.table__row[data-href]').click( function() {
		window.location = $(this).attr('data-href');
	});
	// GO TOP
	  $('.fixed_wrap').height( $('.go-top').outerHeight() );
	  function goTop(){
			var docBot = $('.go-top').offset().top + $(this).height();
			console.log(docBot);
			var footerTop = $('.page-footer').offset().top;
			console.log(footerTop);
			if (docBot >= footerTop){
					$('.go-top').addClass('go-top--bottom');
			}else{
					$('.go-top').removeClass('go-top--bottom');
			}
	  }
	  window.onscroll = function() {
			goTop();
	  }
$(document).ready(function () {
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
	//styler
	$('.styler').styler();
	var window = $('.page-header').width();
	if (window <= 1024) {
		$('.page-header__menu').addClass('off');
		$('.nav').addClass('off');
		$('.page-header__form').addClass('off');
		$(".hamburger").click(function () {
			$(this).toggleClass("hamburgerActive");
			$('.nav').slideToggle('400');
		});
	}
});