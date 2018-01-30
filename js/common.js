"use strict"
function scrollEffects() {
	new WOW().init();
}

//templates
new Vue({
		el: '#global-svg',
		template: '<svg aria-hidden="true" style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><symbol id="icon-menu" viewBox="0 0 32 32"><title>menu</title><path d="M2 6h28v6h-28zM2 14h28v6h-28zM2 22h28v6h-28z"></path></symbol><symbol id="icon-cancel-circle" viewBox="0 0 32 32"><title>cancel-circle</title><path d="M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM16 29c-7.18 0-13-5.82-13-13s5.82-13 13-13 13 5.82 13 13-5.82 13-13 13z"></path><path d="M21 8l-5 5-5-5-3 3 5 5-5 5 3 3 5-5 5 5 3-3-5-5 5-5z"></path></symbol><symbol id="icon-drafts" viewBox="0 0 20 20"><title>drafts</title><path d="M18.325 6.667c0-0.6-0.308-1.125-0.783-1.417l-7.542-4.417-7.542 4.417c-0.475 0.292-0.792 0.817-0.792 1.417v8.333c0 0.917 0.75 1.667 1.667 1.667h13.333c0.917 0 1.667-0.75 1.667-1.667l-0.008-8.333zM10 10.833l-6.883-4.3 6.883-4.033 6.883 4.033-6.883 4.3z"></path></symbol><symbol id="icon-keyboard-arrow-left" viewBox="0 0 20 20"><title>keyboard-arrow-left</title><path d="M12.842 13.408l-3.817-3.825 3.817-3.825-1.175-1.175-5 5 5 5z"></path></symbol><symbol id="icon-keyboard-arrow-right" viewBox="0 0 20 20"><title>keyboard-arrow-right</title><path d="M7.158 13.617l3.817-3.825-3.817-3.825 1.175-1.175 5 5-5 5z"></path></symbol><symbol id="icon-location-on" viewBox="0 0 20 20"><title>location-on</title><path d="M10 1.667c-3.225 0-5.833 2.608-5.833 5.833 0 4.375 5.833 10.833 5.833 10.833s5.833-6.458 5.833-10.833c0-3.225-2.608-5.833-5.833-5.833zM10 9.583c-1.15 0-2.083-0.933-2.083-2.083s0.933-2.083 2.083-2.083 2.083 0.933 2.083 2.083-0.933 2.083-2.083 2.083z"></path></symbol><symbol id="icon-phone" viewBox="0 0 20 20"><title>phone</title><path d="M5.517 8.992c1.2 2.358 3.133 4.283 5.492 5.492l1.833-1.833c0.225-0.225 0.558-0.3 0.85-0.2 0.933 0.308 1.942 0.475 2.975 0.475 0.458 0 0.833 0.375 0.833 0.833v2.908c0 0.458-0.375 0.833-0.833 0.833-7.825 0-14.167-6.342-14.167-14.167 0-0.458 0.375-0.833 0.833-0.833h2.917c0.458 0 0.833 0.375 0.833 0.833 0 1.042 0.167 2.042 0.475 2.975 0.092 0.292 0.025 0.617-0.208 0.85l-1.833 1.833z"></path></symbol><symbol id="icon-place" viewBox="0 0 20 20"><title>place</title><path d="M10 1.667c-3.225 0-5.833 2.608-5.833 5.833 0 4.375 5.833 10.833 5.833 10.833s5.833-6.458 5.833-10.833c0-3.225-2.608-5.833-5.833-5.833zM10 9.583c-1.15 0-2.083-0.933-2.083-2.083s0.933-2.083 2.083-2.083 2.083 0.933 2.083 2.083-0.933 2.083-2.083 2.083z"></path></symbol><symbol id="icon-portrait" viewBox="0 0 20 20"><title>portrait</title><path d="M10 10.208c1.033 0 1.875-0.842 1.875-1.875s-0.842-1.875-1.875-1.875-1.875 0.842-1.875 1.875 0.842 1.875 1.875 1.875zM13.75 13.542c0-1.25-2.5-1.875-3.75-1.875s-3.75 0.625-3.75 1.875v0.625h7.5v-0.625zM15.833 2.5h-11.667c-0.917 0-1.667 0.75-1.667 1.667v11.667c0 0.917 0.75 1.667 1.667 1.667h11.667c0.917 0 1.667-0.75 1.667-1.667v-11.667c0-0.917-0.75-1.667-1.667-1.667zM15.833 15.833h-11.667v-11.667h11.667v11.667z"></path></symbol><symbol id="icon-vpn-key" viewBox="0 0 20 20"><title>vpn-key</title><path d="M10.542 8.333c-0.683-1.942-2.533-3.333-4.708-3.333-2.758 0-5 2.242-5 5s2.242 5 5 5c2.175 0 4.025-1.392 4.708-3.333h3.625v3.333h3.333v-3.333h1.667v-3.333h-8.625zM5.833 11.667c-0.917 0-1.667-0.75-1.667-1.667s0.75-1.667 1.667-1.667 1.667 0.75 1.667 1.667-0.75 1.667-1.667 1.667z"></path></symbol></defs></svg>'
	})

//active
function active(elem) {
	$(elem).on('click', function(){
		if($(this).hasClass('active')){
			$(this).removeClass('active');
		}else{
			$(this).addClass('active');
		}
	});
}

//bodyOverflow
function bodyOverflow(elem) {
	var btn = $(elem);
	var body = $('body');
	btn.on('click', function(){
		body.toggleClass('overflow');
	});
}

//toggleClass on window scroll
function changeClassOnScroll(){
	$(window).scroll(function() {
    var elem = $('.menuButton');
    var height = elem.innerHeight();
    var top = $(this).scrollTop();
    if (top > 50) {
      elem.addClass('menuButton--position');
    } else {
      elem.removeClass('menuButton--position');
    }
  });
}

//Universal Tabs
function tabs() {
	$(document).on('click', '[data-tabclass]', function() {
		var content = $(this).attr('data-tabclass');
		var number = $(this).attr('data-tabnumber');
		$('[data-tabclass="' + content + '"]').each(function() {
			if ($(this).attr('data-tabnumber') == number) {
				$(this).addClass('active').siblings().removeClass('active');
			}
		});
		$('.' + content + ' > [data-tabnumber="' + number + '"]').show().addClass('active flex animated').css('display', 'flex').siblings().hide().removeClass('active flex animated');
	});
};

//animate
function animate(button, content, animationIn, animationOut, hideTiming) {
	hideTiming = hideTiming || 1000;
	var elem = document.querySelector(content);
	$(button).on('click', function() {
		$(content).show();
		var animateContent = content;
		if ($(content).hasClass(animationIn)) {
			$(content).removeClass(animationIn).addClass(animationOut + ' animated');
		} else {
			$(content).removeClass(animationOut).addClass(animationIn + ' animated');
		}
	});
}

//animate + hide
function animateHide(button, content, animationIn, animationOut, hideTiming) {
	hideTiming = hideTiming || 1000;
	var elem = document.querySelector(content);
	$(button).on('click', function() {
		$(content).show();
		var animateContent = content;
		if ($(content).hasClass(animationIn)) {
			$(content).removeClass(animationIn).addClass(animationOut + ' animated');
			setTimeout(function(){
				$(content).hide();
			}, hideTiming);
		} else {
			$(content).removeClass(animationOut).addClass(animationIn + ' animated');
		}
	});
}



//accordion
function accordion() {
	$( ".accordion" ).accordion();
}

//owl bug fixes
function owlVerticalAlign(slider){
	$(window).on('load || resize', function(){
		var height = $(slider + ' .owl-dots').innerHeight();
		var elem = document.querySelector(slider + ' .owl-nav');
		elem.style.marginTop = -height + 'px';
	});
}

//owl-slider
function slider(animationIn, animationOut, elem) {
	elem = elem || '.slider';
	animationIn = animationIn || 'fadeIn';
	animationOut = animationOut || 'fadeOut';
	$(elem).owlCarousel({
		loop: true,
		nav: true,
		items: 1,
		dots: false,
		animateIn: animationIn,
		animateOut: animationOut,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
	});
}
function staticSlider(animationIn, animationOut, elem) {
	elem = elem || '.staticSlider';
	animationIn = animationIn || 'fadeIn';
	animationOut = animationOut || 'fadeOut';
	$(elem).owlCarousel({
		loop: true,
		nav: true,
		items: 1,
		animateIn: animationIn,
		animateOut: animationOut,
		navText: ['<svg class="icon icon-keyboard-arrow-left"><use xlink:href="#icon-keyboard-arrow-left"></use></svg>', '<svg class="icon icon-keyboard-arrow-right"><use xlink:href="#icon-keyboard-arrow-right"></use></svg>'],
	});
}
function photoSlider(animationIn, animationOut, elem) {
	elem = elem || '.staticSlider';
	animationIn = animationIn || 'fadeIn';
	animationOut = animationOut || 'fadeOut';
	$(elem).owlCarousel({
		loop: true,
		nav: true,
		items: 1,
		animateIn: animationIn,
		animateOut: animationOut,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		navText: ['<svg class="icon icon-keyboard-arrow-left"><use xlink:href="#icon-keyboard-arrow-left"></use></svg>', '<svg class="icon icon-keyboard-arrow-right"><use xlink:href="#icon-keyboard-arrow-right"></use></svg>'],
	});
}

window.onload = function() {
	//slider
	slider('zoomIn', 'fadeOut');
	staticSlider('slideInDown', 'slideOutDown');
	photoSlider('fadeIn', 'fadeOut', '.photo-slider');

	//scollEvents
	scrollEffects();
	changeClassOnScroll();

	//other
	accordion();
	tabs();
	bodyOverflow('.hamburger');
	bodyOverflow('.map__menu');

	//active toggle
	active('.hamburger');
	active('.slider-main__btn-menu');
	active('.map__menu')

	//Animation
	animate('.hamburger', '.hamburger__line1', 'rotate_in_45', 'rotate_in_45_out');
	animate('.hamburger', '.hamburger__line3', 'rotate_in_-45', 'rotate_in_-45_out');
	animate('.slider-main__btn-menu', '.menu', 'slideInRight', 'slideOutRight');
	animate('.slider-main__btn-menu', '.slider-main__btn-menu', 'btnMenuIn', 'btnMenuOut');
	//Animation+hide
	animateHide('.map__menu', '.map__desc', 'slideInDown', 'slideOutDown');
};
owlVerticalAlign('.staticSlider');
