"use strict"
function scrollEffects() {
	new WOW().init();
}

//templates
new Vue({
		el: '#global-svg',
		template: '<svg aria-hidden="true" style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><symbol id="icon-directions-walk" viewBox="0 0 32 32"><title>directions-walk</title><path d="M18 7.333c1.467 0 2.667-1.2 2.667-2.667s-1.2-2.667-2.667-2.667-2.667 1.2-2.667 2.667 1.2 2.667 2.667 2.667zM13.067 11.867l-3.733 18.8h2.8l2.4-10.667 2.8 2.667v8h2.667v-10l-2.8-2.667 0.8-4c1.733 2 4.4 3.333 7.333 3.333v-2.667c-2.533 0-4.667-1.333-5.733-3.2l-1.333-2.133c-0.533-0.8-1.333-1.333-2.267-1.333-0.4 0-0.667 0.133-1.067 0.133l-6.933 2.933v6.267h2.667v-4.533l2.4-0.933z"></path></symbol><symbol id="icon-mail-outline" viewBox="0 0 32 32"><title>mail-outline</title><path d="M26.667 5.333h-21.333c-1.467 0-2.653 1.2-2.653 2.667l-0.013 16c0 1.467 1.2 2.667 2.667 2.667h21.333c1.467 0 2.667-1.2 2.667-2.667v-16c0-1.467-1.2-2.667-2.667-2.667zM26.667 24h-21.333v-13.333l10.667 6.667 10.667-6.667v13.333zM16 14.667l-10.667-6.667h21.333l-10.667 6.667z"></path></symbol><symbol id="icon-directions-bus" viewBox="0 0 32 32"><title>directions-bus</title><path d="M5.333 21.333c0 1.173 0.52 2.227 1.333 2.96v2.373c0 0.733 0.6 1.333 1.333 1.333h1.333c0.733 0 1.333-0.6 1.333-1.333v-1.333h10.667v1.333c0 0.733 0.6 1.333 1.333 1.333h1.333c0.733 0 1.333-0.6 1.333-1.333v-2.373c0.813-0.733 1.333-1.787 1.333-2.96v-13.333c0-4.667-4.773-5.333-10.667-5.333s-10.667 0.667-10.667 5.333v13.333zM10 22.667c-1.107 0-2-0.893-2-2s0.893-2 2-2 2 0.893 2 2-0.893 2-2 2zM22 22.667c-1.107 0-2-0.893-2-2s0.893-2 2-2 2 0.893 2 2-0.893 2-2 2zM24 14.667h-16v-6.667h16v6.667z"></path></symbol><symbol id="icon-tram" viewBox="0 0 32 32"><title>tram</title><path d="M25.333 22.587v-11.253c0-3.72-3.48-4.533-8.013-4.653l1.013-2.013h4.333v-2h-13.333v2h6.333l-1.013 2.027c-4.173 0.12-7.987 0.947-7.987 4.64v11.253c0 1.933 1.587 3.547 3.453 3.96l-2.12 2.12v0.667h2.973l2.667-2.667h5.027l2.667 2.667h2.667v-0.667l-2-2h-0.107c2.253 0 3.44-1.827 3.44-4.080zM16 24.667c-1.107 0-2-0.893-2-2s0.893-2 2-2 2 0.893 2 2-0.893 2-2 2zM22.667 18.667h-13.333v-6.667h13.333v6.667z"></path></symbol><symbol id="icon-aspect-ratio" viewBox="0 0 32 32"><title>aspect-ratio</title><path d="M25.333 16h-2.667v4h-4v2.667h6.667v-6.667zM9.333 12h4v-2.667h-6.667v6.667h2.667v-4zM28 4h-24c-1.467 0-2.667 1.2-2.667 2.667v18.667c0 1.467 1.2 2.667 2.667 2.667h24c1.467 0 2.667-1.2 2.667-2.667v-18.667c0-1.467-1.2-2.667-2.667-2.667zM28 25.347h-24v-18.693h24v18.693z"></path></symbol><symbol id="icon-filter-frames" viewBox="0 0 32 32"><title>filter-frames</title><path d="M26.667 5.333h-5.333l-5.333-5.333-5.333 5.333h-5.333c-1.467 0-2.667 1.2-2.667 2.667v18.667c0 1.467 1.2 2.667 2.667 2.667h21.333c1.467 0 2.667-1.2 2.667-2.667v-18.667c0-1.467-1.2-2.667-2.667-2.667zM26.667 26.667h-21.333v-18.667h6.027l4.693-4.667 4.64 4.667h5.973v18.667zM24 10.667h-16v13.333h16z"></path></symbol><symbol id="icon-restaurant-menu" viewBox="0 0 32 32"><title>restaurant-menu</title><path d="M10.8 17.787l3.773-3.773-9.36-9.347c-2.080 2.080-2.080 5.453 0 7.547l5.587 5.573zM19.84 15.373c2.040 0.947 4.907 0.28 7.027-1.84 2.547-2.547 3.040-6.2 1.080-8.16-1.947-1.947-5.6-1.467-8.16 1.080-2.12 2.12-2.787 4.987-1.84 7.027l-13.013 13.013 1.88 1.88 9.187-9.16 9.173 9.173 1.88-1.88-9.173-9.173 1.96-1.96z"></path></symbol><symbol id="icon-ruble-sign" viewBox="0 0 24 32"><title>ruble-sign</title><path d="M14.96 20c5.32 0 9.040-3.716 9.040-9.058s-3.72-8.942-9.040-8.942h-10.21c-0.414 0-0.75 0.336-0.75 0.75v12.915h-3.25c-0.414 0-0.75 0.336-0.75 0.75v2.835c0 0.414 0.336 0.75 0.75 0.75h3.25v2h-3.25c-0.414 0-0.75 0.336-0.75 0.75v2.5c0 0.414 0.336 0.75 0.75 0.75h3.25v3.25c0 0.414 0.336 0.75 0.75 0.75h3.66c0.414 0 0.75-0.336 0.75-0.75v-3.25h10.090c0.414 0 0.75-0.336 0.75-0.75v-2.5c0-0.414-0.336-0.75-0.75-0.75h-10.090v-2h5.8zM9.16 6.297h4.92c2.92 0 4.68 1.819 4.68 4.645 0 2.864-1.76 4.723-4.76 4.723h-4.84v-9.368z"></path></symbol><symbol id="icon-wallpaper" viewBox="0 0 32 32"><title>wallpaper</title><path d="M5.333 5.333h9.333v-2.667h-9.333c-1.467 0-2.667 1.2-2.667 2.667v9.333h2.667v-9.333zM13.333 17.333l-5.333 6.667h16l-4-5.333-2.707 3.613-3.96-4.947zM22.667 11.333c0-1.107-0.893-2-2-2s-2 0.893-2 2 0.893 2 2 2 2-0.893 2-2zM26.667 2.667h-9.333v2.667h9.333v9.333h2.667v-9.333c0-1.467-1.2-2.667-2.667-2.667zM26.667 26.667h-9.333v2.667h9.333c1.467 0 2.667-1.2 2.667-2.667v-9.333h-2.667v9.333zM5.333 17.333h-2.667v9.333c0 1.467 1.2 2.667 2.667 2.667h9.333v-2.667h-9.333v-9.333z"></path></symbol><symbol id="icon-wc" viewBox="0 0 32 32"><title>wc</title><path d="M7.333 29.333v-10h-2v-7.333c0-1.467 1.2-2.667 2.667-2.667h4c1.467 0 2.667 1.2 2.667 2.667v7.333h-2v10h-5.333zM24 29.333v-8h4l-3.387-10.173c-0.373-1.093-1.387-1.827-2.533-1.827h-0.16c-1.147 0-2.173 0.733-2.533 1.827l-3.387 10.173h4v8h4zM10 8c1.48 0 2.667-1.187 2.667-2.667s-1.187-2.667-2.667-2.667-2.667 1.187-2.667 2.667 1.187 2.667 2.667 2.667zM22 8c1.48 0 2.667-1.187 2.667-2.667s-1.187-2.667-2.667-2.667-2.667 1.187-2.667 2.667 1.187 2.667 2.667 2.667z"></path></symbol><symbol id="icon-lock" viewBox="0 0 32 32"><title>lock</title><path d="M24 10.667h-1.333v-2.667c0-3.68-2.987-6.667-6.667-6.667s-6.667 2.987-6.667 6.667v2.667h-1.333c-1.467 0-2.667 1.2-2.667 2.667v13.333c0 1.467 1.2 2.667 2.667 2.667h16c1.467 0 2.667-1.2 2.667-2.667v-13.333c0-1.467-1.2-2.667-2.667-2.667zM16 22.667c-1.467 0-2.667-1.2-2.667-2.667s1.2-2.667 2.667-2.667 2.667 1.2 2.667 2.667-1.2 2.667-2.667 2.667zM20.133 10.667h-8.267v-2.667c0-2.28 1.853-4.133 4.133-4.133s4.133 1.853 4.133 4.133v2.667z"></path></symbol><symbol id="icon-print" viewBox="0 0 32 32"><title>print</title><path d="M25.333 10.667h-18.667c-2.213 0-4 1.787-4 4v8h5.333v5.333h16v-5.333h5.333v-8c0-2.213-1.787-4-4-4zM21.333 25.333h-10.667v-6.667h10.667v6.667zM25.333 16c-0.733 0-1.333-0.6-1.333-1.333s0.6-1.333 1.333-1.333 1.333 0.6 1.333 1.333-0.6 1.333-1.333 1.333zM24 4h-16v5.333h16v-5.333z"></path></symbol><symbol id="icon-drafts" viewBox="0 0 32 32"><title>drafts</title><path d="M29.32 10.667c0-0.96-0.493-1.8-1.253-2.267l-12.067-7.067-12.067 7.067c-0.76 0.467-1.267 1.307-1.267 2.267v13.333c0 1.467 1.2 2.667 2.667 2.667h21.333c1.467 0 2.667-1.2 2.667-2.667l-0.013-13.333zM16 17.333l-11.013-6.88 11.013-6.453 11.013 6.453-11.013 6.88z"></path></symbol><symbol id="icon-keyboard-arrow-left" viewBox="0 0 32 32"><title>keyboard-arrow-left</title><path d="M20.547 21.453l-6.107-6.12 6.107-6.12-1.88-1.88-8 8 8 8z"></path></symbol><symbol id="icon-keyboard-arrow-right" viewBox="0 0 32 32"><title>keyboard-arrow-right</title><path d="M11.453 21.787l6.107-6.12-6.107-6.12 1.88-1.88 8 8-8 8z"></path></symbol><symbol id="icon-location-on" viewBox="0 0 32 32"><title>location-on</title><path d="M16 2.667c-5.16 0-9.333 4.173-9.333 9.333 0 7 9.333 17.333 9.333 17.333s9.333-10.333 9.333-17.333c0-5.16-4.173-9.333-9.333-9.333zM16 15.333c-1.84 0-3.333-1.493-3.333-3.333s1.493-3.333 3.333-3.333 3.333 1.493 3.333 3.333-1.493 3.333-3.333 3.333z"></path></symbol><symbol id="icon-phone" viewBox="0 0 32 32"><title>phone</title><path d="M8.827 14.387c1.92 3.773 5.013 6.853 8.787 8.787l2.933-2.933c0.36-0.36 0.893-0.48 1.36-0.32 1.493 0.493 3.107 0.76 4.76 0.76 0.733 0 1.333 0.6 1.333 1.333v4.653c0 0.733-0.6 1.333-1.333 1.333-12.52 0-22.667-10.147-22.667-22.667 0-0.733 0.6-1.333 1.333-1.333h4.667c0.733 0 1.333 0.6 1.333 1.333 0 1.667 0.267 3.267 0.76 4.76 0.147 0.467 0.040 0.987-0.333 1.36l-2.933 2.933z"></path></symbol><symbol id="icon-place" viewBox="0 0 32 32"><title>place</title><path d="M16 2.667c-5.16 0-9.333 4.173-9.333 9.333 0 7 9.333 17.333 9.333 17.333s9.333-10.333 9.333-17.333c0-5.16-4.173-9.333-9.333-9.333zM16 15.333c-1.84 0-3.333-1.493-3.333-3.333s1.493-3.333 3.333-3.333 3.333 1.493 3.333 3.333-1.493 3.333-3.333 3.333z"></path></symbol><symbol id="icon-portrait" viewBox="0 0 32 32"><title>portrait</title><path d="M16 16.333c1.653 0 3-1.347 3-3s-1.347-3-3-3-3 1.347-3 3 1.347 3 3 3zM22 21.667c0-2-4-3-6-3s-6 1-6 3v1h12v-1zM25.333 4h-18.667c-1.467 0-2.667 1.2-2.667 2.667v18.667c0 1.467 1.2 2.667 2.667 2.667h18.667c1.467 0 2.667-1.2 2.667-2.667v-18.667c0-1.467-1.2-2.667-2.667-2.667zM25.333 25.333h-18.667v-18.667h18.667v18.667z"></path></symbol><symbol id="icon-vpn-key" viewBox="0 0 32 32"><title>vpn-key</title><path d="M16.867 13.333c-1.093-3.107-4.053-5.333-7.533-5.333-4.413 0-8 3.587-8 8s3.587 8 8 8c3.48 0 6.44-2.227 7.533-5.333h5.8v5.333h5.333v-5.333h2.667v-5.333h-13.8zM9.333 18.667c-1.467 0-2.667-1.2-2.667-2.667s1.2-2.667 2.667-2.667 2.667 1.2 2.667 2.667-1.2 2.667-2.667 2.667z"></path></symbol><symbol id="icon-menu" viewBox="0 0 32 32"><title>menu</title><path d="M2 6h28v6h-28zM2 14h28v6h-28zM2 22h28v6h-28z"></path></symbol><symbol id="icon-cancel-circle" viewBox="0 0 32 32"><title>cancel-circle</title><path d="M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM16 29c-7.18 0-13-5.82-13-13s5.82-13 13-13 13 5.82 13 13-5.82 13-13 13z"></path><path d="M21 8l-5 5-5-5-3 3 5 5-5 5 3 3 5-5 5 5 3-3-5-5 5-5z"></path></symbol></defs></svg>'
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
		autoplayTimeout: 5000
	});
}
function staticSlider(animationIn, animationOut, elem) {
	elem = elem || '.staticSlider';
	animationIn = animationIn || 'fadeIn';
	animationOut = animationOut || 'fadeOut';
	$(elem).owlCarousel({
		loop: true,
		nav: true,
		dots: true,
		dotsContainer: '.edge__desc',
		dotClass: 'edge__desc-item',
		dotData: true,
		items: 1,
		animateIn: animationIn,
		animateOut: animationOut,
		navText: ['<svg class="icon icon-keyboard-arrow-left"><use xlink:href="#icon-keyboard-arrow-left"></use></svg>', '<svg class="icon icon-keyboard-arrow-right"><use xlink:href="#icon-keyboard-arrow-right"></use></svg>'],
	});
	var dotElem = document.querySelector('.edge__desc-item:last-child');
	dotElem.innerHTML = 'НАДЕЖНЫЙ ЗАСТРОЙЩИК';
	$(elem).on('changed.owl.carousel', function(event) {
		var dotElem = document.querySelector('.edge__desc-item:nth-child(4)');
		var dotDomElems = document.querySelector('.edge__desc-item:last-child');
		dotDomElems.innerHTML = 'НАДЕЖНЫЙ ЗАСТРОЙЩИК';
		dotElem.innerHTML = 'ПРОДУМАННОЕ ПРОСТРАНСТВО';
	})
}
function roomSlider(animationIn, animationOut, elem) {
	elem = elem || '.roomSlider';
	animationIn = animationIn || 'fadeIn';
	animationOut = animationOut || 'fadeOut';
	$(elem).owlCarousel({
		loop: true,
		nav: true,
		dots: true,
		dotData: true,
		items: 1,
		animateIn: animationIn,
		animateOut: animationOut,
		navText: ['<svg class="icon icon-keyboard-arrow-left"><use xlink:href="#icon-keyboard-arrow-left"></use></svg>', '<svg class="icon icon-keyboard-arrow-right"><use xlink:href="#icon-keyboard-arrow-right"></use></svg>'],
	});
}
function photoSlider(animationIn, animationOut, elem) {
	elem = elem || '.photoSlider';
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

//slider
slider('zoomIn', 'fadeOut');
roomSlider('slideInDown', 'slideOutDown');
staticSlider('slideInDown', 'slideOutDown');
photoSlider('fadeIn', 'fadeOut', '.photo-slider');
