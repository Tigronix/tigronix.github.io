"use strict"
$(document).ready(function(){
	//wow animation
	new WOW().init();

	//templates
	new Vue({
		el: '#global-svg',
		template: '<svg aria-hidden="true" style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs> <symbol id="icon-directions-car" viewBox="0 0 32 32"> <title>directions-car</title> <path d="M25.227 8.013c-0.267-0.787-1.013-1.347-1.893-1.347h-14.667c-0.88 0-1.613 0.56-1.893 1.347l-2.773 7.987v10.667c0 0.733 0.6 1.333 1.333 1.333h1.333c0.733 0 1.333-0.6 1.333-1.333v-1.333h16v1.333c0 0.733 0.6 1.333 1.333 1.333h1.333c0.733 0 1.333-0.6 1.333-1.333v-10.667l-2.773-7.987zM8.667 21.333c-1.107 0-2-0.893-2-2s0.893-2 2-2 2 0.893 2 2-0.893 2-2 2zM23.333 21.333c-1.107 0-2-0.893-2-2s0.893-2 2-2 2 0.893 2 2-0.893 2-2 2zM6.667 14.667l2-6h14.667l2 6h-18.667z"></path> </symbol><symbol id="icon-access-time" viewBox="0 0 32 32"><title>access-time</title><path d="M15.987 2.667c-7.36 0-13.32 5.973-13.32 13.333s5.96 13.333 13.32 13.333c7.373 0 13.347-5.973 13.347-13.333s-5.973-13.333-13.347-13.333zM16 26.667c-5.893 0-10.667-4.773-10.667-10.667s4.773-10.667 10.667-10.667 10.667 4.773 10.667 10.667-4.773 10.667-10.667 10.667z"></path><path d="M16.667 9.333h-2v8l7 4.2 1-1.64-6-3.56z"></path></symbol><symbol id="icon-add_location" viewBox="0 0 32 32"><title>add_location</title><path d="M16 2.667c-5.147 0-9.333 4.187-9.333 9.333 0 7 9.333 17.333 9.333 17.333s9.333-10.333 9.333-17.333c0-5.147-4.187-9.333-9.333-9.333zM21.333 13.333h-4v4h-2.667v-4h-4v-2.667h4v-4h2.667v4h4v2.667z"></path></symbol><symbol id="icon-brightness_1" viewBox="0 0 32 32"><title>brightness_1</title><path d="M29.333 16c0 7.364-5.97 13.333-13.333 13.333s-13.333-5.97-13.333-13.333c0-7.364 5.97-13.333 13.333-13.333s13.333 5.97 13.333 13.333z"></path></symbol><symbol id="icon-cancel" viewBox="0 0 32 32"><title>cancel</title><path d="M16 2.667c-7.373 0-13.333 5.96-13.333 13.333s5.96 13.333 13.333 13.333 13.333-5.96 13.333-13.333-5.96-13.333-13.333-13.333zM22.667 20.787l-1.88 1.88-4.787-4.787-4.787 4.787-1.88-1.88 4.787-4.787-4.787-4.787 1.88-1.88 4.787 4.787 4.787-4.787 1.88 1.88-4.787 4.787 4.787 4.787z"></path></symbol><symbol id="icon-check_circle" viewBox="0 0 32 32"><title>check_circle</title><path d="M16 2.667c-7.36 0-13.333 5.973-13.333 13.333s5.973 13.333 13.333 13.333 13.333-5.973 13.333-13.333-5.973-13.333-13.333-13.333zM13.333 22.667l-6.667-6.667 1.88-1.88 4.787 4.773 10.12-10.12 1.88 1.893-12 12z"></path></symbol><symbol id="icon-chevron_left" viewBox="0 0 32 32"><title>chevron_left</title><path d="M20.547 9.88l-1.88-1.88-8 8 8 8 1.88-1.88-6.107-6.12z"></path></symbol><symbol id="icon-chevron_right" viewBox="0 0 32 32"><title>chevron_right</title><path d="M13.333 8l-1.88 1.88 6.107 6.12-6.107 6.12 1.88 1.88 8-8z"></path></symbol><symbol id="icon-expand-less" viewBox="0 0 32 32"><title>expand-less</title><path d="M16 10.667l-8 8 1.88 1.88 6.12-6.107 6.12 6.107 1.88-1.88z"></path></symbol><symbol id="icon-expand-more" viewBox="0 0 32 32"><title>expand-more</title><path d="M22.12 11.453l-6.12 6.107-6.12-6.107-1.88 1.88 8 8 8-8z"></path></symbol><symbol id="icon-grade" viewBox="0 0 32 32"><title>grade</title><path d="M16 23.027l8.24 4.973-2.187-9.373 7.28-6.307-9.587-0.813-3.747-8.84-3.747 8.84-9.587 0.813 7.28 6.307-2.187 9.373z"></path></symbol><symbol id="icon-keyboard_arrow-down" viewBox="0 0 32 32"><title>keyboard_arrow-down</title><path d="M9.88 10.453l6.12 6.107 6.12-6.107 1.88 1.88-8 8-8-8z"></path></symbol><symbol id="icon-location_on" viewBox="0 0 32 32"><title>location_on</title><path d="M16 2.667c-5.16 0-9.333 4.173-9.333 9.333 0 7 9.333 17.333 9.333 17.333s9.333-10.333 9.333-17.333c0-5.16-4.173-9.333-9.333-9.333zM16 15.333c-1.84 0-3.333-1.493-3.333-3.333s1.493-3.333 3.333-3.333 3.333 1.493 3.333 3.333-1.493 3.333-3.333 3.333z"></path></symbol><symbol id="icon-motorcycle" viewBox="0 0 32 32"><title>motorcycle</title><path d="M25.92 12.040l-5.373-5.373h-5.88v2.667h4.787l2.667 2.667h-15.453c-3.733 0-6.667 2.933-6.667 6.667s2.933 6.667 6.667 6.667c3.28 0 5.933-2.253 6.533-5.333h2.2l3.693-3.693c-0.28 0.72-0.427 1.52-0.427 2.36 0 3.733 2.933 6.667 6.667 6.667s6.667-2.933 6.667-6.667c0-3.533-2.627-6.36-6.080-6.627zM10.427 20c-0.56 1.533-2.053 2.667-3.76 2.667-2.173 0-4-1.827-4-4s1.827-4 4-4c1.707 0 3.2 1.133 3.76 2.667h-3.76v2.667h3.76zM25.333 22.667c-2.213 0-4-1.787-4-4s1.787-4 4-4 4 1.787 4 4-1.787 4-4 4z"></path></symbol><symbol id="icon-phone_forwarded" viewBox="0 0 32 32"><title>phone_forwarded</title><path d="M24 14.667l6.667-6.667-6.667-6.667v4h-5.333v5.333h5.333v4zM26.667 20.667c-1.667 0-3.267-0.267-4.76-0.76-0.467-0.147-0.987-0.040-1.36 0.32l-2.933 2.933c-3.773-1.92-6.867-5-8.787-8.787l2.933-2.947c0.373-0.347 0.48-0.867 0.333-1.333-0.493-1.493-0.76-3.093-0.76-4.76 0-0.733-0.6-1.333-1.333-1.333h-4.667c-0.733 0-1.333 0.6-1.333 1.333 0 12.52 10.147 22.667 22.667 22.667 0.733 0 1.333-0.6 1.333-1.333v-4.667c0-0.733-0.6-1.333-1.333-1.333z"></path></symbol><symbol id="icon-radio_button_checked" viewBox="0 0 32 32"><title>radio_button_checked</title><path d="M16 9.333c-3.68 0-6.667 2.987-6.667 6.667s2.987 6.667 6.667 6.667 6.667-2.987 6.667-6.667-2.987-6.667-6.667-6.667zM16 2.667c-7.36 0-13.333 5.973-13.333 13.333s5.973 13.333 13.333 13.333 13.333-5.973 13.333-13.333-5.973-13.333-13.333-13.333zM16 26.667c-5.893 0-10.667-4.773-10.667-10.667s4.773-10.667 10.667-10.667 10.667 4.773 10.667 10.667-4.773 10.667-10.667 10.667z"></path></symbol><symbol id="icon-record-voice-over" viewBox="0 0 32 32"><title>record-voice-over</title><path d="M17.333 12c0 2.946-2.388 5.333-5.333 5.333s-5.333-2.388-5.333-5.333c0-2.946 2.388-5.333 5.333-5.333s5.333 2.388 5.333 5.333z"></path><path d="M12 20c-3.56 0-10.667 1.787-10.667 5.333v2.667h21.333v-2.667c0-3.547-7.107-5.333-10.667-5.333zM22.347 7.147l-2.24 2.253c1.12 1.573 1.12 3.613 0 5.187l2.24 2.253c2.693-2.693 2.693-6.76 0-9.693zM26.76 2.667l-2.173 2.173c3.693 4.027 3.693 10.080 0 14.32l2.173 2.173c5.2-5.187 5.213-13.267 0-18.667z"></path></symbol><symbol id="icon-rv_hookup" viewBox="0 0 32 32"><title>rv_hookup</title><path d="M26.667 22.667v-8c0-1.467-1.2-2.667-2.667-2.667h-14.667v-2.667l-4 4 4 4v-2.667h5.333v4h-9.333v4c0 1.467 1.2 2.667 2.667 2.667h2.667c0 2.213 1.787 4 4 4s4-1.787 4-4h10.667v-2.667h-2.667zM14.667 26.667c-0.733 0-1.333-0.6-1.333-1.333s0.6-1.333 1.333-1.333 1.333 0.6 1.333 1.333-0.6 1.333-1.333 1.333zM24 18.667h-5.333v-4h5.333v4zM22.667 2.667v2.667h-10.667v2.667h10.667v2.667l4-4z"></path></symbol><symbol id="icon-settings_phone" viewBox="0 0 32 32"><title>settings_phone</title><path d="M17.333 12h-2.667v2.667h2.667v-2.667zM22.667 12h-2.667v2.667h2.667v-2.667zM26.667 20.667c-1.667 0-3.267-0.267-4.76-0.76-0.467-0.147-0.987-0.040-1.36 0.32l-2.933 2.933c-3.773-1.92-6.867-5-8.787-8.773l2.933-2.947c0.373-0.36 0.48-0.88 0.333-1.347-0.493-1.493-0.76-3.093-0.76-4.76 0-0.733-0.6-1.333-1.333-1.333h-4.667c-0.733 0-1.333 0.6-1.333 1.333 0 12.52 10.147 22.667 22.667 22.667 0.733 0 1.333-0.6 1.333-1.333v-4.667c0-0.733-0.6-1.333-1.333-1.333zM25.333 12v2.667h2.667v-2.667h-2.667z"></path></symbol><symbol id="icon-star-half" viewBox="0 0 32 32"><title>star-half</title><path d="M29.333 12.32l-9.587-0.827-3.747-8.827-3.747 8.84-9.587 0.813 7.28 6.307-2.187 9.373 8.24-4.973 8.24 4.973-2.173-9.373 7.267-6.307zM16 20.533v-12.4l2.28 5.387 5.84 0.507-4.427 3.84 1.333 5.707-5.027-3.040z"></path></symbol><symbol id="icon-star" viewBox="0 0 32 32"><title>star</title><path d="M16 23.027l8.24 4.973-2.187-9.373 7.28-6.307-9.587-0.813-3.747-8.84-3.747 8.84-9.587 0.813 7.28 6.307-2.187 9.373z"></path></symbol></defs></svg>'
	})

	//animate
	function animate(button, content, animationIn, animationOut, hideTiming){
		hideTiming = hideTiming || 1000;
		$(button).on('click', function(){
			$(this).addClass('active');
			$(content).show();
			var animateContent = content;
			if($(content).hasClass(animationIn)){
				$(content).removeClass(animationIn).addClass(animationOut);
				setTimeout(function(){
					$(content).hide();
				}, hideTiming);
			}else {
				$(content).removeClass(animationOut).addClass(animationIn);
			}
		});
	}

	//Universal Tabs
	$(document).on('click', '[data-tabclass]', function () {
		var content = $(this).attr('data-tabclass');
		var number = $(this).attr('data-tabnumber');
		$('[data-tabclass="' + content + '"]').each(function () {
			if ($(this).attr('data-tabnumber') == number) {
				$(this).addClass('active').siblings().removeClass('active');
			}
		});
		$('.' + content + ' > [data-tabnumber="' + number + '"]').show().addClass('active').css('display', 'flex').siblings().hide().removeClass('active');
	});

	//mobile menu
	function mobileMenu() {
		$('.menu__wrap').on('click', function(){
			if($('.hamburger').hasClass('hamburgerActive')){
				$('.hamburger').removeClass('hamburgerActive');
			}else{
				$('.hamburger').addClass('hamburgerActive');
			}
			if($(window).width() < 769){
				if($('.hamburger').hasClass('hamburgerActive')){
					$('body').addClass('overflow');
				}else{
					$('body').removeClass('overflow');
				}
			}else{
				$('body').removeClass('overflow');
			}
		});
	}

	//header-scroll
	$(window).scroll(function () {
			var header = $('.page-header');
			var height = header.innerHeight();
			var elem = document.querySelector('main');
			var top = $(this).scrollTop();
			if (top > 50) {
				header.addClass('page-header--fixed');
				elem.style.marginTop = height + 'px';
			}
			else {
				header.removeClass('page-header--fixed');
				elem.style.marginTop = '0px';
			}
		});

	//formsyler
	function selectStyle(elem) {
		$(elem).styler();
		$('.jq-selectbox__trigger-arrow').html('<i class="icon"><svg class="icon icon-expand-more"><use xlink:href="#icon-expand-more"></use></svg></i>');
	}

	//product-slider
	$('.product-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		infinite: true,
		dots: true,
		prevArrow: '<div class="slick-prev"><i class="icon"><svg class="icon icon-chevron_left"><use xlink:href="#icon-chevron_left"></use></svg></i></div>',
		nextArrow: '<div class="slick-next"><i class="icon"><svg class="icon icon-chevron_right"><use xlink:href="#icon-chevron_right"></use></svg></i></div>'
	});

	//example__slider
	$('.example__slider').owlCarousel({
			margin: 60,
			loop: true,
	    nav:true,
			items: 3,
			dotsEach: true,
			animateIn: 'zoomIn',
			animateOut: 'zoomOut',
			navText: ['<svg class="icon icon-chevron_left"><use xlink:href="#icon-chevron_left"></use></svg>', '<svg class="icon icon-chevron_right"><use xlink:href="#icon-chevron_right"></use></svg>'],
			responsive: {
				0: {
					items: 1,
				},
				480: {
					items: 2
				},
				768: {
					margin: 10
				},
				1024: {
					margin: 30,
				}
			}
	});

	//owl bug fixes
	function owlVerticalAlign(slider){
		$(window).on('load && resize', function(){
			var height = $(slider + ' .owl-dots').innerHeight();
			var elem = document.querySelector(slider + ' .owl-nav');
			elem.style.marginTop = -height + 'px';
		});
	}

	mobileMenu();
	animate('.menu__wrap', '.nav', 'slideInLeft', 'slideOutLeft')
	selectStyle('.page-header__select');
	selectStyle('.order__select');
	owlVerticalAlign('.example__slider');
});
