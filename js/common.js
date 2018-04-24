"use strict"
//templates
new Vue({
		el: '#global-svg',
		template: '<svg aria-hidden="true" style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><symbol id="icon-access-time" viewBox="0 0 32 32"><title>access-time</title><path d="M15.987 2.667c-7.36 0-13.32 5.973-13.32 13.333s5.96 13.333 13.32 13.333c7.373 0 13.347-5.973 13.347-13.333s-5.973-13.333-13.347-13.333zM16 26.667c-5.893 0-10.667-4.773-10.667-10.667s4.773-10.667 10.667-10.667 10.667 4.773 10.667 10.667-4.773 10.667-10.667 10.667z"></path><path d="M16.667 9.333h-2v8l7 4.2 1-1.64-6-3.56z"></path></symbol><symbol id="icon-account-balance" viewBox="0 0 32 32"><title>account-balance</title><path d="M5.333 13.333v9.333h4v-9.333h-4zM13.333 13.333v9.333h4v-9.333h-4zM2.667 29.333h25.333v-4h-25.333v4zM21.333 13.333v9.333h4v-9.333h-4zM15.333 1.333l-12.667 6.667v2.667h25.333v-2.667l-12.667-6.667z"></path></symbol><symbol id="icon-account-circle" viewBox="0 0 32 32"><title>account-circle</title><path d="M16 2.667c-7.36 0-13.333 5.973-13.333 13.333s5.973 13.333 13.333 13.333 13.333-5.973 13.333-13.333-5.973-13.333-13.333-13.333zM16 6.667c2.213 0 4 1.787 4 4s-1.787 4-4 4-4-1.787-4-4 1.787-4 4-4zM16 25.6c-3.333 0-6.28-1.707-8-4.293 0.040-2.653 5.333-4.107 8-4.107 2.653 0 7.96 1.453 8 4.107-1.72 2.587-4.667 4.293-8 4.293z"></path></symbol><symbol id="icon-chat-bubble-outline" viewBox="0 0 32 32"><title>chat-bubble-outline</title><path d="M26.667 2.667h-21.333c-1.467 0-2.667 1.2-2.667 2.667v24l5.333-5.333h18.667c1.467 0 2.667-1.2 2.667-2.667v-16c0-1.467-1.2-2.667-2.667-2.667zM26.667 21.333h-18.667l-2.667 2.667v-18.667h21.333v16z"></path></symbol><symbol id="icon-contacts" viewBox="0 0 32 32"><title>contacts</title><path d="M26.667 0h-21.333v2.667h21.333v-2.667zM5.333 32h21.333v-2.667h-21.333v2.667zM26.667 5.333h-21.333c-1.467 0-2.667 1.2-2.667 2.667v16c0 1.467 1.2 2.667 2.667 2.667h21.333c1.467 0 2.667-1.2 2.667-2.667v-16c0-1.467-1.2-2.667-2.667-2.667zM16 9c1.653 0 3 1.347 3 3s-1.347 3-3 3-3-1.347-3-3 1.347-3 3-3zM22.667 22.667h-13.333v-2c0-2.227 4.44-3.333 6.667-3.333s6.667 1.107 6.667 3.333v2z"></path></symbol><symbol id="icon-content-paste" viewBox="0 0 32 32"><title>content-paste</title><path d="M25.333 2.667h-5.573c-0.56-1.547-2.027-2.667-3.76-2.667s-3.2 1.12-3.76 2.667h-5.573c-1.467 0-2.667 1.2-2.667 2.667v21.333c0 1.467 1.2 2.667 2.667 2.667h18.667c1.467 0 2.667-1.2 2.667-2.667v-21.333c0-1.467-1.2-2.667-2.667-2.667zM16 2.667c0.733 0 1.333 0.6 1.333 1.333s-0.6 1.333-1.333 1.333-1.333-0.6-1.333-1.333 0.6-1.333 1.333-1.333zM25.333 26.667h-18.667v-21.333h2.667v4h13.333v-4h2.667v21.333z"></path></symbol><symbol id="icon-expand-more" viewBox="0 0 32 32"><title>expand-more</title><path d="M22.12 11.453l-6.12 6.107-6.12-6.107-1.88 1.88 8 8 8-8z"></path></symbol><symbol id="icon-fingerprint" viewBox="0 0 32 32"><title>fingerprint</title><path d="M23.747 5.96c-0.107 0-0.213-0.027-0.307-0.080-2.56-1.32-4.773-1.88-7.427-1.88-2.64 0-5.147 0.627-7.427 1.88-0.32 0.173-0.72 0.053-0.907-0.267-0.173-0.32-0.053-0.733 0.267-0.907 2.48-1.347 5.2-2.040 8.067-2.040 2.84 0 5.32 0.627 8.040 2.027 0.333 0.173 0.453 0.573 0.28 0.893-0.12 0.24-0.347 0.373-0.587 0.373zM4.667 12.96c-0.133 0-0.267-0.040-0.387-0.12-0.307-0.213-0.373-0.627-0.16-0.933 1.32-1.867 3-3.333 5-4.36 4.187-2.16 9.547-2.173 13.747-0.013 2 1.027 3.68 2.48 5 4.333 0.213 0.293 0.147 0.72-0.16 0.933s-0.72 0.147-0.933-0.16c-1.2-1.68-2.72-3-4.52-3.92-3.827-1.96-8.72-1.96-12.533 0.013-1.813 0.933-3.333 2.267-4.533 3.947-0.107 0.187-0.307 0.28-0.52 0.28zM13 29.053c-0.173 0-0.347-0.067-0.467-0.2-1.16-1.16-1.787-1.907-2.68-3.52-0.92-1.64-1.4-3.64-1.4-5.787 0-3.96 3.387-7.187 7.547-7.187s7.547 3.227 7.547 7.187c0 0.373-0.293 0.667-0.667 0.667s-0.667-0.293-0.667-0.667c0-3.227-2.787-5.853-6.213-5.853s-6.213 2.627-6.213 5.853c0 1.92 0.427 3.693 1.24 5.133 0.853 1.533 1.44 2.187 2.467 3.227 0.253 0.267 0.253 0.68 0 0.947-0.147 0.133-0.32 0.2-0.493 0.2zM22.56 26.587c-1.587 0-2.987-0.4-4.133-1.187-1.987-1.347-3.173-3.533-3.173-5.853 0-0.373 0.293-0.667 0.667-0.667s0.667 0.293 0.667 0.667c0 1.88 0.96 3.653 2.587 4.747 0.947 0.64 2.053 0.947 3.387 0.947 0.32 0 0.853-0.040 1.387-0.133 0.36-0.067 0.707 0.173 0.773 0.547 0.067 0.36-0.173 0.707-0.547 0.773-0.76 0.147-1.427 0.16-1.613 0.16zM19.88 29.333c-0.053 0-0.12-0.013-0.173-0.027-2.12-0.587-3.507-1.373-4.96-2.8-1.867-1.853-2.893-4.32-2.893-6.96 0-2.16 1.84-3.92 4.107-3.92s4.107 1.76 4.107 3.92c0 1.427 1.24 2.587 2.773 2.587s2.773-1.16 2.773-2.587c0-5.027-4.333-9.107-9.667-9.107-3.787 0-7.253 2.107-8.813 5.373-0.52 1.080-0.787 2.347-0.787 3.733 0 1.040 0.093 2.68 0.893 4.813 0.133 0.347-0.040 0.733-0.387 0.853-0.347 0.133-0.733-0.053-0.853-0.387-0.653-1.747-0.973-3.48-0.973-5.28 0-1.6 0.307-3.053 0.907-4.32 1.773-3.72 5.707-6.133 10.013-6.133 6.067 0 11 4.68 11 10.44 0 2.16-1.84 3.92-4.107 3.92s-4.107-1.76-4.107-3.92c0-1.427-1.24-2.587-2.773-2.587s-2.773 1.16-2.773 2.587c0 2.28 0.88 4.413 2.493 6.013 1.267 1.253 2.48 1.947 4.36 2.467 0.36 0.093 0.56 0.467 0.467 0.813-0.067 0.307-0.347 0.507-0.627 0.507z"></path></symbol><symbol id="icon-group" viewBox="0 0 32 32"><title>group</title><path d="M21.333 14.667c2.213 0 3.987-1.787 3.987-4s-1.773-4-3.987-4c-2.213 0-4 1.787-4 4s1.787 4 4 4zM10.667 14.667c2.213 0 3.987-1.787 3.987-4s-1.773-4-3.987-4c-2.213 0-4 1.787-4 4s1.787 4 4 4zM10.667 17.333c-3.107 0-9.333 1.56-9.333 4.667v3.333h18.667v-3.333c0-3.107-6.227-4.667-9.333-4.667zM21.333 17.333c-0.387 0-0.827 0.027-1.293 0.067 1.547 1.12 2.627 2.627 2.627 4.6v3.333h8v-3.333c0-3.107-6.227-4.667-9.333-4.667z"></path></symbol><symbol id="icon-local-offer" viewBox="0 0 32 32"><title>local-offer</title><path d="M28.547 15.44l-12-12c-0.48-0.48-1.147-0.773-1.88-0.773h-9.333c-1.467 0-2.667 1.2-2.667 2.667v9.333c0 0.733 0.293 1.4 0.787 1.893l12 12c0.48 0.48 1.147 0.773 1.88 0.773s1.4-0.293 1.88-0.787l9.333-9.333c0.493-0.48 0.787-1.147 0.787-1.88s-0.307-1.413-0.787-1.893zM7.333 9.333c-1.107 0-2-0.893-2-2s0.893-2 2-2 2 0.893 2 2-0.893 2-2 2z"></path></symbol><symbol id="icon-location-on" viewBox="0 0 32 32"><title>location-on</title><path d="M16 2.667c-5.16 0-9.333 4.173-9.333 9.333 0 7 9.333 17.333 9.333 17.333s9.333-10.333 9.333-17.333c0-5.16-4.173-9.333-9.333-9.333zM16 15.333c-1.84 0-3.333-1.493-3.333-3.333s1.493-3.333 3.333-3.333 3.333 1.493 3.333 3.333-1.493 3.333-3.333 3.333z"></path></symbol><symbol id="icon-mail-outline" viewBox="0 0 32 32"><title>mail-outline</title><path d="M26.667 5.333h-21.333c-1.467 0-2.653 1.2-2.653 2.667l-0.013 16c0 1.467 1.2 2.667 2.667 2.667h21.333c1.467 0 2.667-1.2 2.667-2.667v-16c0-1.467-1.2-2.667-2.667-2.667zM26.667 24h-21.333v-13.333l10.667 6.667 10.667-6.667v13.333zM16 14.667l-10.667-6.667h21.333l-10.667 6.667z"></path></symbol><symbol id="icon-people" viewBox="0 0 32 32"><title>people</title><path d="M21.333 14.667c2.213 0 3.987-1.787 3.987-4s-1.773-4-3.987-4c-2.213 0-4 1.787-4 4s1.787 4 4 4zM10.667 14.667c2.213 0 3.987-1.787 3.987-4s-1.773-4-3.987-4c-2.213 0-4 1.787-4 4s1.787 4 4 4zM10.667 17.333c-3.107 0-9.333 1.56-9.333 4.667v3.333h18.667v-3.333c0-3.107-6.227-4.667-9.333-4.667zM21.333 17.333c-0.387 0-0.827 0.027-1.293 0.067 1.547 1.12 2.627 2.627 2.627 4.6v3.333h8v-3.333c0-3.107-6.227-4.667-9.333-4.667z"></path></symbol><symbol id="icon-phone-in-talk" viewBox="0 0 32 32"><title>phone-in-talk</title><path d="M26.667 20.667c-1.667 0-3.267-0.267-4.76-0.76-0.467-0.147-0.987-0.040-1.36 0.32l-2.933 2.933c-3.773-1.92-6.867-5-8.787-8.787l2.933-2.947c0.373-0.347 0.48-0.867 0.333-1.333-0.493-1.493-0.76-3.093-0.76-4.76 0-0.733-0.6-1.333-1.333-1.333h-4.667c-0.733 0-1.333 0.6-1.333 1.333 0 12.52 10.147 22.667 22.667 22.667 0.733 0 1.333-0.6 1.333-1.333v-4.667c0-0.733-0.6-1.333-1.333-1.333zM25.333 16h2.667c0-6.627-5.373-12-12-12v2.667c5.16 0 9.333 4.173 9.333 9.333zM20 16h2.667c0-3.68-2.987-6.667-6.667-6.667v2.667c2.213 0 4 1.787 4 4z"></path></symbol><symbol id="icon-phone" viewBox="0 0 32 32"><title>phone</title><path d="M8.827 14.387c1.92 3.773 5.013 6.853 8.787 8.787l2.933-2.933c0.36-0.36 0.893-0.48 1.36-0.32 1.493 0.493 3.107 0.76 4.76 0.76 0.733 0 1.333 0.6 1.333 1.333v4.653c0 0.733-0.6 1.333-1.333 1.333-12.52 0-22.667-10.147-22.667-22.667 0-0.733 0.6-1.333 1.333-1.333h4.667c0.733 0 1.333 0.6 1.333 1.333 0 1.667 0.267 3.267 0.76 4.76 0.147 0.467 0.040 0.987-0.333 1.36l-2.933 2.933z"></path></symbol><symbol id="icon-place" viewBox="0 0 32 32"><title>place</title><path d="M16 2.667c-5.16 0-9.333 4.173-9.333 9.333 0 7 9.333 17.333 9.333 17.333s9.333-10.333 9.333-17.333c0-5.16-4.173-9.333-9.333-9.333zM16 15.333c-1.84 0-3.333-1.493-3.333-3.333s1.493-3.333 3.333-3.333 3.333 1.493 3.333 3.333-1.493 3.333-3.333 3.333z"></path></symbol><symbol id="icon-portrait" viewBox="0 0 32 32"><title>portrait</title><path d="M16 16.333c1.653 0 3-1.347 3-3s-1.347-3-3-3-3 1.347-3 3 1.347 3 3 3zM22 21.667c0-2-4-3-6-3s-6 1-6 3v1h12v-1zM25.333 4h-18.667c-1.467 0-2.667 1.2-2.667 2.667v18.667c0 1.467 1.2 2.667 2.667 2.667h18.667c1.467 0 2.667-1.2 2.667-2.667v-18.667c0-1.467-1.2-2.667-2.667-2.667zM25.333 25.333h-18.667v-18.667h18.667v18.667z"></path></symbol><symbol id="icon-remove-red-eye" viewBox="0 0 32 32"><title>remove-red-eye</title><path d="M16 6c-6.667 0-12.36 4.147-14.667 10 2.307 5.853 8 10 14.667 10s12.36-4.147 14.667-10c-2.307-5.853-8-10-14.667-10zM16 22.667c-3.68 0-6.667-2.987-6.667-6.667s2.987-6.667 6.667-6.667 6.667 2.987 6.667 6.667-2.987 6.667-6.667 6.667zM16 12c-2.213 0-4 1.787-4 4s1.787 4 4 4 4-1.787 4-4-1.787-4-4-4z"></path></symbol><symbol id="icon-security" viewBox="0 0 32 32"><title>security</title><path d="M16 1.333l-12 5.333v8c0 7.4 5.12 14.32 12 16 6.88-1.68 12-8.6 12-16v-8l-12-5.333zM16 15.987h9.333c-0.707 5.493-4.373 10.387-9.333 11.92v-11.907h-9.333v-7.6l9.333-4.147v11.733z"></path></symbol></defs></svg>'
	})

function scrollEffects() {
	new WOW().init();
}

function loading() {
	$('.loading').fadeOut(1500);
}

//функция помощник: siblings
var getSiblings = function(elem) {
	var siblings = [];
	var sibling = elem.parentNode.firstChild;
	for(; sibling; sibling = sibling.nextSibling) {
		if(sibling.nodeType !== 1 || sibling === elem) continue;
		siblings.push(sibling);
	}
	return siblings;
}

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

//active & siblings off
function activeSiblings(elem) {
	$(elem).on('click', function(){
		$(this).addClass('active').siblings().removeClass('active');
	});
}

//active other
function activerOther(elem, target) {
	$(elem).on('click', function(){
		$(target).removeClass('menu__hide').toggleClass('active');
	});
}

//bodyOverflow
function bodyOverflow(elem) {
	$(window).on('resize || load', function(){
		var btn = $(elem);
		var body = $('body');
		var windowWidth = $(this).width();

		btn.on('click', function(){
			if(windowWidth <= 1024){
				body.toggleClass('overflow');
			}
		});
	});
}

//toggleClass on window scroll
function changeClassOnScroll(){
	$(window).scroll(function() {
    var elem = $('.page-header');
    var height = elem.innerHeight();
    var top = $(this).scrollTop();
		var pageTop = $('.page-header__top');
		var pageBot = $('.page-header__bottom');
		var windowWidth = $(window).width();

    if (top > 50) {
			$(elem).addClass('scroll');
      $(pageTop).hide();
			$(pageBot).addClass('scroll');
    } else {
			$(elem).removeClass('scroll');
      $(pageTop).show();
			$(pageBot).removeClass('scroll');
    }

		if(windowWidth <= 1024){
			if (top > 50) {
				$(elem).removeClass('scroll');
	      $(pageTop).show();
				$(pageBot).removeClass('scroll');
	    }
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
		$('.' + content + ' > [data-tabnumber="' + number + '"]').show().addClass('active animated').removeClass('hide').siblings().hide().removeClass('active animated');
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
			setTimeout(function(){e
				$(content).hide();
			}, hideTiming);
		} else {
			$(content).removeClass(animationOut).addClass(animationIn + ' animated');
		}
	});
}

//owl-slider
function slider(animationIn, animationOut, elem, items, navContainer, navText) {
	var arrayPosition = [];
	var arrayOffset = [];
	animationIn = animationIn || 'zoomIn';
	animationOut = animationOut || 'fadeOut';
	elem = elem || '.slider__wrap';
	items = items || 1;
	navContainer = navContainer || '';
	navText = navText || ['', ''];
	if(elem){
		$(elem).owlCarousel({
			nav: true,
			navContainer: navContainer,
			navText: navText,
			items: items,
			animateIn: animationIn,
			animateOut: animationOut,
			loop: true,
			URLhashListener: true,
      startPosition: 'URLHash',
			dots: false,
			dotsEach: true,
			dotsContainer: '',
			navText: navText,
		});
	}
}

//owl-slider
function carousel(animationIn, animationOut, elem, items, navContainer, navText) {
	var arrayPosition = [];
	var arrayOffset = [];
	animationIn = animationIn || 'zoomIn';
	animationOut = animationOut || 'fadeOut';
	elem = elem || '.carousel__wrap';
	items = items || 8;
	navContainer = navContainer || '';
	navText = navText || ['',''];
	if(elem){
		$(elem).owlCarousel({
			nav: true,
			navContainer: navContainer,
			navText: navText,
			items: items,
			animateIn: animationIn,
			animateOut: animationOut,
			loop: true,
			URLhashListener: true,
      startPosition: 'URLHash',
			dots: false,
			dotsEach: true,
			dotsContainer: '',
			navText: navText,
			responsive: {
				0: {
					items: 1
				},
				550: {
					items: 3
				},
				1025: {
					items: 8
				}
			}
		});
	}
}
//owl-slider
function carouselLicence(animationIn, animationOut, elem, items, navContainer, navText) {
	var arrayPosition = [];
	var arrayOffset = [];
	animationIn = animationIn || 'zoomIn';
	animationOut = animationOut || 'fadeOut';
	elem = elem || '.licence__wrap';
	items = items || 5;
	navContainer = navContainer || '';
	navText = navText || ['',''];
	if(elem){
		$(elem).owlCarousel({
			nav: true,
			navContainer: navContainer,
			navText: navText,
			items: items,
			animateIn: animationIn,
			animateOut: animationOut,
			loop: true,
			URLhashListener: true,
      startPosition: 'URLHash',
			dots: false,
			dotsEach: true,
			dotsContainer: '',
			navText: navText,
			responsive: {
				0: {
					items: 1
				},
				550: {
					items: 3
				},
				1025: {
					items: 5
				}
			}
		});
	}
}
//owl-slider
function carouselBuy(animationIn, animationOut, elem, items, navContainer, navText) {
	var arrayPosition = [];
	var arrayOffset = [];
	animationIn = animationIn || 'zoomIn';
	animationOut = animationOut || 'fadeOut';
	elem = elem || '.buy__carousel';
	items = items || 3;
	navContainer = navContainer || '';
	navText = navText || ['',''];
	if(elem){
		$(elem).owlCarousel({
			nav: true,
			navContainer: navContainer,
			navText: navText,
			items: items,
			animateIn: animationIn,
			animateOut: animationOut,
			loop: true,
			URLhashListener: true,
      startPosition: 'URLHash',
			dots: true,
			dotsEach: true,
			dotsContainer: '',
			navText: navText,
			responsive: {
				0: {
					items: 1
				},
				550: {
					items: 2
				},
				1025: {
					items: 3
				}
			}
		});
	}
}

//Маска для телефона
function phoneMask() {
	if($('*').is('.formTel')){
		$(".formTel").mask("+7(999)999-99-99", {
			placeholder: "+7(___)___-__-__"
		});
	}
}

function accordion() {
	  var allPanels = $('.accordion .accContent').hide();
		var btn = $('.accBtn');
		var btnActive = $('.accBtn.active');
		$('.accordion .accContent.active').show();

	  btn.click(function() {
	    $(this).parent().siblings().find('.accContent').slideUp();
	    $(this).parent().siblings().find('.accBtn').removeClass('active');
	    $(this).next().slideToggle();
			$(this).toggleClass('active');
	  });
}

function checkFix(elem) {
	$(elem).on('click', function(){
		$(this).closest('.checkFixBox').siblings().find(elem).prop('checked', false);
	});
}

//mainMargin
function mainMargin() {
	var heightHeader = $('.page-header').innerHeight();

	$('.main').css('margin-top', heightHeader);
}

window.onload = function() {
	//scrollEvents
	scrollEffects();

	//other
	phoneMask();
	accordion();

	//tabs
	tabs();

	//active toggle
	active('.hamburger');
	active('.hamburger__wrap');

	//activeSiblings

	//activeOther


	//Animation
	animate('.hamburger', '.hamburger__line1', 'rotate_in_45', 'rotate_in_45_out');
	animate('.hamburger', '.hamburger__line3', 'rotate_in_-45', 'rotate_in_-45_out');
	//Animation+hide
	animateHide('.hamburger__wrap', '.nav', 'slideInLeft', 'slideOutLeft');

	//slider(animationIn, animationOut, elem, items, navContainer, navText)
	slider();
	carousel();
	carouselLicence();
	carouselBuy();

	//loading
	loading();
};

//other
bodyOverflow('.hamburger');
