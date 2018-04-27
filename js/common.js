"use strict"
//templates
new Vue({
		el: '#global-svg',
		template: '<svg aria-hidden="true" style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><symbol id="icon-attach-file" viewBox="0 0 32 32"><title>attach-file</title><path d="M22 8v15.333c0 2.947-2.387 5.333-5.333 5.333s-5.333-2.387-5.333-5.333v-16.667c0-1.84 1.493-3.333 3.333-3.333s3.333 1.493 3.333 3.333v14c0 0.733-0.6 1.333-1.333 1.333s-1.333-0.6-1.333-1.333v-12.667h-2v12.667c0 1.84 1.493 3.333 3.333 3.333s3.333-1.493 3.333-3.333v-14c0-2.947-2.387-5.333-5.333-5.333s-5.333 2.387-5.333 5.333v16.667c0 4.053 3.28 7.333 7.333 7.333s7.333-3.28 7.333-7.333v-15.333h-2z"></path></symbol><symbol id="icon-alarm-on" viewBox="0 0 32 32"><title>alarm-on</title><path d="M29.333 7.627l-6.133-5.147-1.72 2.040 6.133 5.147 1.72-2.040zM10.507 4.52l-1.707-2.040-6.133 5.133 1.72 2.040 6.12-5.133zM16 5.333c-6.627 0-12 5.373-12 12s5.36 12 12 12c6.627 0 12-5.373 12-12s-5.373-12-12-12zM16 26.667c-5.16 0-9.333-4.173-9.333-9.333s4.173-9.333 9.333-9.333 9.333 4.173 9.333 9.333-4.173 9.333-9.333 9.333zM14.053 19.373l-2.84-2.84-1.413 1.413 4.24 4.24 8-8-1.413-1.413-6.573 6.6z"></path></symbol><symbol id="icon-location-on" viewBox="0 0 32 32"><title>location-on</title><path d="M16 2.667c-5.16 0-9.333 4.173-9.333 9.333 0 7 9.333 17.333 9.333 17.333s9.333-10.333 9.333-17.333c0-5.16-4.173-9.333-9.333-9.333zM16 15.333c-1.84 0-3.333-1.493-3.333-3.333s1.493-3.333 3.333-3.333 3.333 1.493 3.333 3.333-1.493 3.333-3.333 3.333z"></path></symbol><symbol id="icon-motorcycle" viewBox="0 0 32 32"><title>motorcycle</title><path d="M25.92 12.040l-5.373-5.373h-5.88v2.667h4.787l2.667 2.667h-15.453c-3.733 0-6.667 2.933-6.667 6.667s2.933 6.667 6.667 6.667c3.28 0 5.933-2.253 6.533-5.333h2.2l3.693-3.693c-0.28 0.72-0.427 1.52-0.427 2.36 0 3.733 2.933 6.667 6.667 6.667s6.667-2.933 6.667-6.667c0-3.533-2.627-6.36-6.080-6.627zM10.427 20c-0.56 1.533-2.053 2.667-3.76 2.667-2.173 0-4-1.827-4-4s1.827-4 4-4c1.707 0 3.2 1.133 3.76 2.667h-3.76v2.667h3.76zM25.333 22.667c-2.213 0-4-1.787-4-4s1.787-4 4-4 4 1.787 4 4-1.787 4-4 4z"></path></symbol><symbol id="icon-access-time" viewBox="0 0 32 32"><title>access-time</title><path d="M15.987 2.667c-7.36 0-13.32 5.973-13.32 13.333s5.96 13.333 13.32 13.333c7.373 0 13.347-5.973 13.347-13.333s-5.973-13.333-13.347-13.333zM16 26.667c-5.893 0-10.667-4.773-10.667-10.667s4.773-10.667 10.667-10.667 10.667 4.773 10.667 10.667-4.773 10.667-10.667 10.667z"></path><path d="M16.667 9.333h-2v8l7 4.2 1-1.64-6-3.56z"></path></symbol><symbol id="icon-ambulance" viewBox="0 0 32 32"><title>ambulance</title><path d="M29.6 3.2h-16c-1.325 0-2.4 1.074-2.4 2.4v2.4h-2.206c-0.663 0-1.263 0.269-1.697 0.703l-4.994 4.994c-0.434 0.434-0.703 1.034-0.703 1.697v0 5.406h-0.4c-0.663 0-1.2 0.537-1.2 1.2v0.8c0 0.663 0.537 1.2 1.2 1.2h2c0 2.651 2.149 4.8 4.8 4.8s4.8-2.149 4.8-4.8h6.4c0 2.651 2.149 4.8 4.8 4.8s4.8-2.149 4.8-4.8h2c0.663 0 1.2-0.537 1.2-1.2v-17.2c0-1.325-1.075-2.4-2.4-2.4zM8 26.4c-1.323 0-2.4-1.077-2.4-2.4s1.077-2.4 2.4-2.4 2.4 1.077 2.4 2.4-1.077 2.4-2.4 2.4zM11.2 16h-7.2v-0.606l4.994-4.994h2.206v5.6zM24 26.4c-1.323 0-2.4-1.077-2.4-2.4s1.077-2.4 2.4-2.4 2.4 1.077 2.4 2.4-1.077 2.4-2.4 2.4zM25.6 12v1.6c0 0.331-0.269 0.6-0.6 0.6h-2.8v2.8c0 0.331-0.269 0.6-0.6 0.6h-1.6c-0.331 0-0.6-0.269-0.6-0.6v-2.8h-2.8c-0.331 0-0.6-0.269-0.6-0.6v-1.6c0-0.331 0.269-0.6 0.6-0.6h2.8v-2.8c0-0.331 0.269-0.6 0.6-0.6h1.6c0.331 0 0.6 0.269 0.6 0.6v2.8h2.8c0.331 0 0.6 0.269 0.6 0.6z"></path></symbol><symbol id="icon-av-timer" viewBox="0 0 32 32"><title>av-timer</title><path d="M14.667 22.667c0 0.733 0.6 1.333 1.333 1.333s1.333-0.6 1.333-1.333-0.6-1.333-1.333-1.333-1.333 0.6-1.333 1.333zM14.667 4v5.333h2.667v-2.56c4.52 0.653 8 4.52 8 9.227 0 5.16-4.173 9.333-9.333 9.333s-9.333-4.173-9.333-9.333c0-2.24 0.787-4.293 2.107-5.893l7.227 7.227 1.88-1.88-9.067-9.067v0.027c-2.92 2.187-4.813 5.653-4.813 9.587 0 6.627 5.36 12 12 12 6.627 0 12-5.373 12-12s-5.373-12-12-12h-1.333zM24 16c0-0.733-0.6-1.333-1.333-1.333s-1.333 0.6-1.333 1.333 0.6 1.333 1.333 1.333 1.333-0.6 1.333-1.333zM8 16c0 0.733 0.6 1.333 1.333 1.333s1.333-0.6 1.333-1.333-0.6-1.333-1.333-1.333-1.333 0.6-1.333 1.333z"></path></symbol><symbol id="icon-battery-charging-full" viewBox="0 0 32 32"><title>battery-charging-full</title><path d="M20.893 5.333h-2.227v-2.667h-5.333v2.667h-2.227c-0.973 0-1.773 0.8-1.773 1.773v20.44c0 0.987 0.8 1.787 1.773 1.787h9.773c0.987 0 1.787-0.8 1.787-1.773v-20.453c0-0.973-0.8-1.773-1.773-1.773zM14.667 26.667v-7.333h-2.667l5.333-10v7.333h2.667l-5.333 10z"></path></symbol><symbol id="icon-build" viewBox="0 0 32 32"><title>build</title><path d="M30.267 25.333l-12.133-12.133c1.2-3.067 0.533-6.667-2-9.2-2.667-2.667-6.667-3.2-9.867-1.733l5.733 5.733-4 4-5.867-5.733c-1.6 3.2-0.933 7.2 1.733 9.867 2.533 2.533 6.133 3.2 9.2 2l12.133 12.133c0.533 0.533 1.333 0.533 1.867 0l3.067-3.067c0.667-0.533 0.667-1.467 0.133-1.867z"></path></symbol><symbol id="icon-cancel" viewBox="0 0 32 32"><title>cancel</title><path d="M16 2.667c-7.373 0-13.333 5.96-13.333 13.333s5.96 13.333 13.333 13.333 13.333-5.96 13.333-13.333-5.96-13.333-13.333-13.333zM22.667 20.787l-1.88 1.88-4.787-4.787-4.787 4.787-1.88-1.88 4.787-4.787-4.787-4.787 1.88-1.88 4.787 4.787 4.787-4.787 1.88 1.88-4.787 4.787 4.787 4.787z"></path></symbol><symbol id="icon-expand-more" viewBox="0 0 32 32"><title>expand-more</title><path d="M22.12 11.453l-6.12 6.107-6.12-6.107-1.88 1.88 8 8 8-8z"></path></symbol><symbol id="icon-flash-on" viewBox="0 0 32 32"><title>flash-on</title><path d="M9.333 2.667v14.667h4v12l9.333-16h-5.333l5.333-10.667z"></path></symbol><symbol id="icon-keyboard-arrow-left" viewBox="0 0 32 32"><title>keyboard-arrow-left</title><path d="M20.547 21.453l-6.107-6.12 6.107-6.12-1.88-1.88-8 8 8 8z"></path></symbol><symbol id="icon-keyboard-arrow-right" viewBox="0 0 32 32"><title>keyboard-arrow-right</title><path d="M11.453 21.787l6.107-6.12-6.107-6.12 1.88-1.88 8 8-8 8z"></path></symbol><symbol id="icon-lock-open" viewBox="0 0 32 32"><title>lock-open</title><path d="M16 22.667c1.467 0 2.667-1.2 2.667-2.667s-1.2-2.667-2.667-2.667-2.667 1.2-2.667 2.667 1.2 2.667 2.667 2.667zM24 10.667h-1.333v-2.667c0-3.68-2.987-6.667-6.667-6.667s-6.667 2.987-6.667 6.667h2.533c0-2.28 1.853-4.133 4.133-4.133s4.133 1.853 4.133 4.133v2.667h-12.133c-1.467 0-2.667 1.2-2.667 2.667v13.333c0 1.467 1.2 2.667 2.667 2.667h16c1.467 0 2.667-1.2 2.667-2.667v-13.333c0-1.467-1.2-2.667-2.667-2.667zM24 26.667h-16v-13.333h16v13.333z"></path></symbol><symbol id="icon-phone-in-talk" viewBox="0 0 32 32"><title>phone-in-talk</title><path d="M26.667 20.667c-1.667 0-3.267-0.267-4.76-0.76-0.467-0.147-0.987-0.040-1.36 0.32l-2.933 2.933c-3.773-1.92-6.867-5-8.787-8.787l2.933-2.947c0.373-0.347 0.48-0.867 0.333-1.333-0.493-1.493-0.76-3.093-0.76-4.76 0-0.733-0.6-1.333-1.333-1.333h-4.667c-0.733 0-1.333 0.6-1.333 1.333 0 12.52 10.147 22.667 22.667 22.667 0.733 0 1.333-0.6 1.333-1.333v-4.667c0-0.733-0.6-1.333-1.333-1.333zM25.333 16h2.667c0-6.627-5.373-12-12-12v2.667c5.16 0 9.333 4.173 9.333 9.333zM20 16h2.667c0-3.68-2.987-6.667-6.667-6.667v2.667c2.213 0 4 1.787 4 4z"></path></symbol><symbol id="icon-rotate-90-degrees-ccw" viewBox="0 0 32 32"><title>rotate-90-degrees-ccw</title><path d="M9.787 8.547l-8.64 8.653 8.653 8.64 8.653-8.64-8.667-8.653zM4.92 17.2l4.88-4.88 4.867 4.88-4.88 4.88-4.867-4.88zM25.813 8.853c-2.333-2.347-5.413-3.52-8.48-3.52v-4.32l-5.653 5.653 5.653 5.653v-4.32c2.387 0 4.773 0.907 6.6 2.733 3.64 3.64 3.64 9.56 0 13.2-1.827 1.827-4.213 2.733-6.6 2.733-1.293 0-2.587-0.28-3.787-0.813l-1.987 1.987c1.8 0.987 3.787 1.493 5.773 1.493 3.067 0 6.147-1.173 8.48-3.52 4.693-4.68 4.693-12.28 0-16.96z"></path></symbol><symbol id="icon-rv-hookup" viewBox="0 0 32 32"><title>rv-hookup</title><path d="M26.667 22.667v-8c0-1.467-1.2-2.667-2.667-2.667h-14.667v-2.667l-4 4 4 4v-2.667h5.333v4h-9.333v4c0 1.467 1.2 2.667 2.667 2.667h2.667c0 2.213 1.787 4 4 4s4-1.787 4-4h10.667v-2.667h-2.667zM14.667 26.667c-0.733 0-1.333-0.6-1.333-1.333s0.6-1.333 1.333-1.333 1.333 0.6 1.333 1.333-0.6 1.333-1.333 1.333zM24 18.667h-5.333v-4h5.333v4zM22.667 2.667v2.667h-10.667v2.667h10.667v2.667l4-4z"></path></symbol><symbol id="icon-settings-remote" viewBox="0 0 32 32"><title>settings-remote</title><path d="M20 12h-8c-0.733 0-1.333 0.6-1.333 1.333v16c0 0.733 0.6 1.333 1.333 1.333h8c0.733 0 1.333-0.6 1.333-1.333v-16c0-0.733-0.6-1.333-1.333-1.333zM16 20c-1.467 0-2.667-1.2-2.667-2.667s1.2-2.667 2.667-2.667 2.667 1.2 2.667 2.667-1.2 2.667-2.667 2.667zM9.4 8.067l1.88 1.88c1.213-1.2 2.88-1.947 4.72-1.947s3.507 0.747 4.72 1.947l1.88-1.88c-1.693-1.693-4.027-2.733-6.6-2.733s-4.907 1.040-6.6 2.733zM16 0c-4.053 0-7.72 1.64-10.373 4.293l1.88 1.88c2.173-2.16 5.173-3.507 8.493-3.507s6.32 1.347 8.48 3.52l1.88-1.88c-2.64-2.667-6.307-4.307-10.36-4.307z"></path></symbol><symbol id="icon-surround-sound" viewBox="0 0 32 32"><title>surround-sound</title><path d="M26.667 5.333h-21.333c-1.467 0-2.667 1.2-2.667 2.667v16c0 1.467 1.2 2.667 2.667 2.667h21.333c1.467 0 2.667-1.2 2.667-2.667v-16c0-1.467-1.2-2.667-2.667-2.667zM10.347 21.653l-1.88 1.88c-2.093-2.067-3.133-4.8-3.133-7.533s1.040-5.467 3.12-7.547l1.88 1.88c-1.547 1.573-2.333 3.613-2.333 5.667s0.787 4.093 2.347 5.653zM16 21.333c-2.947 0-5.333-2.387-5.333-5.333s2.387-5.333 5.333-5.333 5.333 2.387 5.333 5.333-2.387 5.333-5.333 5.333zM23.547 23.547l-1.88-1.88c1.547-1.573 2.333-3.613 2.333-5.667s-0.787-4.093-2.347-5.653l1.88-1.88c2.093 2.067 3.133 4.8 3.133 7.533s-1.040 5.467-3.12 7.547zM16 13.333c-1.467 0-2.667 1.2-2.667 2.667s1.2 2.667 2.667 2.667 2.667-1.2 2.667-2.667-1.2-2.667-2.667-2.667z"></path></symbol><symbol id="icon-time-to-leave" viewBox="0 0 32 32"><title>time-to-leave</title><path d="M25.227 6.68c-0.267-0.787-1.013-1.347-1.893-1.347h-14.667c-0.88 0-1.613 0.56-1.893 1.347l-2.773 7.987v10.667c0 0.733 0.6 1.333 1.333 1.333h1.333c0.733 0 1.333-0.6 1.333-1.333v-1.333h16v1.333c0 0.733 0.6 1.333 1.333 1.333h1.333c0.733 0 1.333-0.6 1.333-1.333v-10.667l-2.773-7.987zM8.667 20c-1.107 0-2-0.893-2-2s0.893-2 2-2 2 0.893 2 2-0.893 2-2 2zM23.333 20c-1.107 0-2-0.893-2-2s0.893-2 2-2 2 0.893 2 2-0.893 2-2 2zM6.667 13.333l2-6h14.667l2 6h-18.667z"></path></symbol><symbol id="icon-wifi-lock" viewBox="0 0 32 32"><title>wifi-lock</title><path d="M27.333 12.667c0.373 0 0.733 0.053 1.080 0.107l3.587-4.773c-4.453-3.347-10-5.333-16-5.333s-11.547 1.987-16 5.333l16 21.333 4.667-6.227v-3.773c0-3.68 2.987-6.667 6.667-6.667zM30.667 21.333v-2c0-1.84-1.493-3.333-3.333-3.333s-3.333 1.493-3.333 3.333v2c-0.733 0-1.333 0.6-1.333 1.333v5.333c0 0.733 0.6 1.333 1.333 1.333h6.667c0.733 0 1.333-0.6 1.333-1.333v-5.333c0-0.733-0.6-1.333-1.333-1.333zM29.333 21.333h-4v-2c0-1.107 0.893-2 2-2s2 0.893 2 2v2z"></path></symbol></defs></svg>'
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

//slick slider
function sliderBrand() {
	$('.brand__wrap').slick({
		centerMode: true,
		centerPadding: '0',
		slidesToShow: 15,
		infinite: true,
		focusOnSelect: true,
		prevArrow: '<button type="button" class="slick__arrow slick__prev slick-prev"><svg class="icon icon-keyboard-arrow-left"><use xlink:href="#icon-keyboard-arrow-left"></use></svg></button>',
		nextArrow: '<button type="button" class="slick__arrow slick__next slick-next"><svg class="icon icon-keyboard-arrow-right"><use xlink:href="#icon-keyboard-arrow-right"></use></svg></button>',
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 7
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 500,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});
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
	sliderBrand();

	//loading
	loading();
};

//other
bodyOverflow('.hamburger');
