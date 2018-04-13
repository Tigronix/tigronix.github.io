"use strict"
//templates
new Vue({
		el: '#global-svg',
		template: '<svg aria-hidden="true" style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><symbol id="icon-check-box" viewBox="0 0 32 32"><title>check-box</title><path d="M25.333 4h-18.667c-1.48 0-2.667 1.2-2.667 2.667v18.667c0 1.467 1.187 2.667 2.667 2.667h18.667c1.48 0 2.667-1.2 2.667-2.667v-18.667c0-1.467-1.187-2.667-2.667-2.667zM13.333 22.667l-6.667-6.667 1.88-1.88 4.787 4.773 10.12-10.12 1.88 1.893-12 12z"></path></symbol><symbol id="icon-clear" viewBox="0 0 32 32"><title>clear</title><path d="M25.333 8.547l-1.88-1.88-7.453 7.453-7.453-7.453-1.88 1.88 7.453 7.453-7.453 7.453 1.88 1.88 7.453-7.453 7.453 7.453 1.88-1.88-7.453-7.453z"></path></symbol><symbol id="icon-computer" viewBox="0 0 32 32"><title>computer</title><path d="M26.667 24c1.467 0 2.653-1.2 2.653-2.667l0.013-13.333c0-1.467-1.2-2.667-2.667-2.667h-21.333c-1.467 0-2.667 1.2-2.667 2.667v13.333c0 1.467 1.2 2.667 2.667 2.667h-5.333v2.667h32v-2.667h-5.333zM5.333 8h21.333v13.333h-21.333v-13.333z"></path></symbol><symbol id="icon-device-hub" viewBox="0 0 32 32"><title>device-hub</title><path d="M22.667 21.333l-5.333-5.333v-4.24c1.547-0.56 2.667-2.027 2.667-3.76 0-2.213-1.787-4-4-4s-4 1.787-4 4c0 1.733 1.12 3.2 2.667 3.76v4.24l-5.333 5.333h-5.333v6.667h6.667v-4.067l5.333-5.6 5.333 5.6v4.067h6.667v-6.667h-5.333z"></path></symbol><symbol id="icon-dvr" viewBox="0 0 32 32"><title>dvr</title><path d="M23.333 14h2.667v1.333h-2.667zM6 14h2.667v4h-2.667zM28 4h-24c-1.48 0-2.667 1.187-2.667 2.667v18.667c0 1.467 1.187 2.667 2.667 2.667h24c1.48 0 2.667-1.2 2.667-2.667v-18.667c0-1.48-1.187-2.667-2.667-2.667zM10.667 18c0 1.133-0.867 2-2 2h-4.667v-8h4.667c1.133 0 2 0.867 2 2v4zM16.827 20h-2l-2.333-8h2l1.333 4.573 1.333-4.573h2l-2.333 8zM28 15.333c0 0.8-0.533 1.533-1.2 1.867l1.2 2.8h-2l-1.133-2.667h-1.533v2.667h-2v-8h4.667c1.133 0 2 0.867 2 2v1.333z"></path></symbol><symbol id="icon-expand-more" viewBox="0 0 32 32"><title>expand-more</title><path d="M22.12 11.453l-6.12 6.107-6.12-6.107-1.88 1.88 8 8 8-8z"></path></symbol><symbol id="icon-flash-off" viewBox="0 0 32 32"><title>flash-off</title><path d="M4.36 4l-1.693 1.693 6.667 6.667v4.973h4v12l4.773-8.187 5.533 5.52 1.693-1.693-20.973-20.973zM22.667 13.333h-5.333l5.333-10.667h-13.333v2.907l11.28 11.28 2.053-3.52z"></path></symbol><symbol id="icon-format-color-reset" viewBox="0 0 32 32"><title>format-color-reset</title><path d="M24 18.667c0-5.333-8-14.4-8-14.4s-1.773 2.013-3.64 4.693l11.453 11.453c0.12-0.56 0.187-1.147 0.187-1.747zM22.827 22.827l-15.8-15.8-1.693 1.707 4.427 4.427c-1.027 1.933-1.76 3.893-1.76 5.507 0 4.413 3.587 8 8 8 2.027 0 3.867-0.76 5.28-2l3.507 3.507 1.693-1.693-3.653-3.653z"></path></symbol><symbol id="icon-group-work" viewBox="0 0 32 32"><title>group-work</title><path d="M16 2.667c-7.36 0-13.333 5.973-13.333 13.333s5.973 13.333 13.333 13.333 13.333-5.973 13.333-13.333-5.973-13.333-13.333-13.333zM10.667 23.333c-1.84 0-3.333-1.493-3.333-3.333s1.493-3.333 3.333-3.333 3.333 1.493 3.333 3.333-1.493 3.333-3.333 3.333zM12.667 10.667c0-1.84 1.493-3.333 3.333-3.333s3.333 1.493 3.333 3.333-1.493 3.333-3.333 3.333-3.333-1.493-3.333-3.333zM21.333 23.333c-1.84 0-3.333-1.493-3.333-3.333s1.493-3.333 3.333-3.333 3.333 1.493 3.333 3.333-1.493 3.333-3.333 3.333z"></path></symbol><symbol id="icon-keyboard-hide" viewBox="0 0 32 32"><title>keyboard-hide</title><path d="M26.667 4h-21.333c-1.467 0-2.653 1.2-2.653 2.667l-0.013 13.333c0 1.467 1.2 2.667 2.667 2.667h21.333c1.467 0 2.667-1.2 2.667-2.667v-13.333c0-1.467-1.2-2.667-2.667-2.667zM14.667 8h2.667v2.667h-2.667v-2.667zM14.667 12h2.667v2.667h-2.667v-2.667zM10.667 8h2.667v2.667h-2.667v-2.667zM10.667 12h2.667v2.667h-2.667v-2.667zM9.333 14.667h-2.667v-2.667h2.667v2.667zM9.333 10.667h-2.667v-2.667h2.667v2.667zM21.333 20h-10.667v-2.667h10.667v2.667zM21.333 14.667h-2.667v-2.667h2.667v2.667zM21.333 10.667h-2.667v-2.667h2.667v2.667zM25.333 14.667h-2.667v-2.667h2.667v2.667zM25.333 10.667h-2.667v-2.667h2.667v2.667zM16 30.667l5.333-5.333h-10.667l5.333 5.333z"></path></symbol><symbol id="icon-laptop-chromebook" viewBox="0 0 32 32"><title>laptop-chromebook</title><path d="M29.333 24v-20h-26.667v20h-2.667v2.667h32v-2.667h-2.667zM18.667 24h-5.333v-1.333h5.333v1.333zM26.667 20h-21.333v-13.333h21.333v13.333z"></path></symbol><symbol id="icon-laptop-mac" viewBox="0 0 32 32"><title>laptop-mac</title><path d="M26.667 24c1.467 0 2.653-1.2 2.653-2.667l0.013-14.667c0-1.467-1.2-2.667-2.667-2.667h-21.333c-1.467 0-2.667 1.2-2.667 2.667v14.667c0 1.467 1.2 2.667 2.667 2.667h-5.333c0 1.467 1.2 2.667 2.667 2.667h26.667c1.467 0 2.667-1.2 2.667-2.667h-5.333zM5.333 6.667h21.333v14.667h-21.333v-14.667zM16 25.333c-0.733 0-1.333-0.6-1.333-1.333s0.6-1.333 1.333-1.333 1.333 0.6 1.333 1.333-0.6 1.333-1.333 1.333z"></path></symbol><symbol id="icon-location-on" viewBox="0 0 32 32"><title>location-on</title><path d="M16 2.667c-5.16 0-9.333 4.173-9.333 9.333 0 7 9.333 17.333 9.333 17.333s9.333-10.333 9.333-17.333c0-5.16-4.173-9.333-9.333-9.333zM16 15.333c-1.84 0-3.333-1.493-3.333-3.333s1.493-3.333 3.333-3.333 3.333 1.493 3.333 3.333-1.493 3.333-3.333 3.333z"></path></symbol><symbol id="icon-memory" viewBox="0 0 32 32"><title>memory</title><path d="M20 12h-8v8h8v-8zM17.333 17.333h-2.667v-2.667h2.667v2.667zM28 14.667v-2.667h-2.667v-2.667c0-1.467-1.2-2.667-2.667-2.667h-2.667v-2.667h-2.667v2.667h-2.667v-2.667h-2.667v2.667h-2.667c-1.467 0-2.667 1.2-2.667 2.667v2.667h-2.667v2.667h2.667v2.667h-2.667v2.667h2.667v2.667c0 1.467 1.2 2.667 2.667 2.667h2.667v2.667h2.667v-2.667h2.667v2.667h2.667v-2.667h2.667c1.467 0 2.667-1.2 2.667-2.667v-2.667h2.667v-2.667h-2.667v-2.667h2.667zM22.667 22.667h-13.333v-13.333h13.333v13.333z"></path></symbol><symbol id="icon-personal-video" viewBox="0 0 32 32"><title>personal-video</title><path d="M28 4h-24c-1.48 0-2.667 1.187-2.667 2.667v16c0 1.467 1.187 2.667 2.667 2.667h6.667v2.667h10.667v-2.667h6.667c1.467 0 2.653-1.2 2.653-2.667l0.013-16c0-1.48-1.2-2.667-2.667-2.667zM28 22.667h-24v-16h24v16z"></path></symbol><symbol id="icon-power" viewBox="0 0 32 32"><title>power</title><path d="M17.333 4h-2.667v13.333h2.667v-13.333zM23.773 6.893l-1.893 1.893c2.107 1.693 3.453 4.293 3.453 7.213 0 5.16-4.173 9.333-9.333 9.333s-9.333-4.173-9.333-9.333c0-2.92 1.347-5.52 3.44-7.227l-1.88-1.88c-2.587 2.2-4.227 5.453-4.227 9.107 0 6.627 5.373 12 12 12s12-5.373 12-12c0-3.653-1.64-6.907-4.227-9.107z"></path></symbol><symbol id="icon-print" viewBox="0 0 32 32"><title>print</title><path d="M25.333 10.667h-18.667c-2.213 0-4 1.787-4 4v8h5.333v5.333h16v-5.333h5.333v-8c0-2.213-1.787-4-4-4zM21.333 25.333h-10.667v-6.667h10.667v6.667zM25.333 16c-0.733 0-1.333-0.6-1.333-1.333s0.6-1.333 1.333-1.333 1.333 0.6 1.333 1.333-0.6 1.333-1.333 1.333zM24 4h-16v5.333h16v-5.333z"></path></symbol><symbol id="icon-scanner" viewBox="0 0 32 32"><title>scanner</title><path d="M26.4 14.267l-20.8-7.6-0.933 2.533 18.8 6.8h-16.8c-1.467 0-2.667 1.2-2.667 2.667v5.333c0 1.467 1.2 2.667 2.667 2.667h18.667c1.467 0 2.667-1.2 2.667-2.667v-7.333c0-1.067-0.667-2.133-1.6-2.4zM9.333 22.667h-2.667v-2.667h2.667v2.667zM25.333 22.667h-13.333v-2.667h13.333v2.667z"></path></symbol><symbol id="icon-settings-applications" viewBox="0 0 32 32"><title>settings-applications</title><path d="M16 13.333c-1.467 0-2.667 1.2-2.667 2.667s1.2 2.667 2.667 2.667 2.667-1.2 2.667-2.667-1.2-2.667-2.667-2.667zM25.333 4h-18.667c-1.48 0-2.667 1.2-2.667 2.667v18.667c0 1.467 1.187 2.667 2.667 2.667h18.667c1.48 0 2.667-1.2 2.667-2.667v-18.667c0-1.467-1.187-2.667-2.667-2.667zM23 16c0 0.307-0.027 0.613-0.067 0.907l1.973 1.547c0.173 0.147 0.227 0.4 0.107 0.6l-1.867 3.227c-0.12 0.2-0.36 0.28-0.573 0.2l-2.32-0.933c-0.48 0.373-1.013 0.68-1.573 0.92l-0.347 2.467c-0.040 0.227-0.24 0.4-0.467 0.4h-3.733c-0.227 0-0.427-0.173-0.467-0.387l-0.347-2.467c-0.573-0.24-1.093-0.547-1.573-0.92l-2.32 0.933c-0.213 0.080-0.453 0-0.573-0.2l-1.867-3.227c-0.12-0.2-0.067-0.453 0.107-0.6l1.973-1.547c-0.040-0.307-0.067-0.613-0.067-0.92s0.027-0.613 0.067-0.907l-1.973-1.547c-0.173-0.147-0.227-0.4-0.107-0.6l1.867-3.227c0.12-0.2 0.36-0.28 0.573-0.2l2.32 0.933c0.48-0.373 1.013-0.68 1.573-0.92l0.347-2.467c0.040-0.227 0.24-0.4 0.467-0.4h3.733c0.227 0 0.427 0.173 0.467 0.387l0.347 2.467c0.573 0.24 1.093 0.547 1.573 0.92l2.32-0.933c0.213-0.080 0.453 0 0.573 0.2l1.867 3.227c0.12 0.2 0.067 0.453-0.107 0.6l-1.973 1.547c0.040 0.307 0.067 0.613 0.067 0.92z"></path></symbol><symbol id="icon-sync-problem" viewBox="0 0 32 32"><title>sync-problem</title><path d="M4 16c0 2.947 1.213 5.6 3.147 7.52l-3.147 3.147h8v-8l-2.987 2.987c-1.44-1.453-2.347-3.44-2.347-5.653 0-3.48 2.227-6.44 5.333-7.533v-2.787c-4.6 1.187-8 5.347-8 10.32zM14.667 22.667h2.667v-2.667h-2.667v2.667zM28 5.333h-8v8l2.987-2.987c1.44 1.453 2.347 3.44 2.347 5.653 0 3.48-2.227 6.44-5.333 7.533v2.787c4.6-1.187 8-5.347 8-10.32 0-2.947-1.213-5.6-3.147-7.52l3.147-3.147zM14.667 17.333h2.667v-8h-2.667v8z"></path></symbol><symbol id="icon-video-label" viewBox="0 0 32 32"><title>video-label</title><path d="M28 4h-24c-1.467 0-2.667 1.2-2.667 2.667v18.667c0 1.467 1.2 2.667 2.667 2.667h24c1.467 0 2.667-1.2 2.667-2.667v-18.667c0-1.467-1.2-2.667-2.667-2.667zM28 21.333h-24v-14.667h24v14.667z"></path></symbol><symbol id="icon-volume-off" viewBox="0 0 32 32"><title>volume-off</title><path d="M22 16c0-2.36-1.36-4.387-3.333-5.373v2.947l3.267 3.267c0.040-0.267 0.067-0.547 0.067-0.84zM25.333 16c0 1.253-0.267 2.427-0.72 3.52l2.013 2.013c0.88-1.653 1.373-3.533 1.373-5.533 0-5.707-3.987-10.48-9.333-11.693v2.747c3.853 1.147 6.667 4.72 6.667 8.947zM5.693 4l-1.693 1.693 6.307 6.307h-6.307v8h5.333l6.667 6.667v-8.973l5.667 5.667c-0.893 0.693-1.893 1.24-3 1.573v2.747c1.84-0.413 3.507-1.267 4.92-2.413l2.72 2.733 1.693-1.693-22.307-22.307zM16 5.333l-2.787 2.787 2.787 2.787v-5.573z"></path></symbol><symbol id="icon-whatshot" viewBox="0 0 32 32"><title>whatshot</title><path d="M18 0.893s0.987 3.533 0.987 6.4c0 2.747-1.8 4.973-4.547 4.973-2.76 0-4.84-2.227-4.84-4.973l0.040-0.48c-2.693 3.2-4.307 7.347-4.307 11.853 0 5.893 4.773 10.667 10.667 10.667s10.667-4.773 10.667-10.667c0-7.187-3.453-13.6-8.667-17.773zM15.613 25.333c-2.373 0-4.293-1.867-4.293-4.187 0-2.16 1.4-3.68 3.747-4.16 2.36-0.48 4.8-1.613 6.16-3.44 0.52 1.72 0.787 3.533 0.787 5.387 0 3.533-2.867 6.4-6.4 6.4z"></path></symbol></defs></svg>'
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
			if(windowWidth <= 768){
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
			dots: true,
			dotsEach: true,
			dotsContainer: '.slider__dots',
			navText: navText,
			onInitialized: function(){
				$('.box').each(function() {
				    //set size
				    var th = $(this).height(),//box height
				        tw = $(this).width(),//box width
				        im = $(this).children('img'),//image
				        ih = im.height(),//inital image height
				        iw = im.width();//initial image width
				    if (ih>iw) {//if portrait
				        im.addClass('ww').removeClass('wh');//set width 100%
				    } else {//if landscape
				        im.addClass('wh').removeClass('ww');//set height 100%
				    }
				    //set offset
				    var nh = im.height(),//new image height
				        nw = im.width(),//new image width
				        hd = (nh-th)/2,//half dif img/box height
				        wd = (nw-tw)/2;//half dif img/box width
				    if (nh<nw) {//if portrait
				        im.css({marginLeft: '-'+wd+'px', marginTop: 0});//offset left
				    } else {//if landscape
				        im.css({marginTop: '-'+hd+'px', marginLeft: 0});//offset top
				    }
				});
			},
			onChanged: function(){

			}
		});
	}
}

//tabSlider
function tabSlider(animationIn, animationOut, elem, items, navContainer, navText) {
	var arrayPosition = [];
	var arrayOffset = [];
	animationIn = animationIn || 'zoomIn';
	animationOut = animationOut || 'fadeOut';
	elem = elem || '.tab__slider';
	items = items || 9;
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
			responsive: {
				0: {
					items: 1,
				},
				320: {
					items: 3
				},
				768: {
					items: 6
				},
				1024: {
					items: 9
				}
			}
		});
	}
}

//photoSlider
function photoSlider(animationIn, animationOut, elem, items, navContainer, navText) {
	var arrayPosition = [];
	var arrayOffset = [];
	animationIn = animationIn || 'zoomIn';
	animationOut = animationOut || 'fadeOut';
	elem = elem || '.photo__slider';
	items = items || 4;
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
			dots: true,
			dotsEach: true,
			dotsContainer: '.photo__dots',
			navText: navText,
			responsive: {
				320: {
					items: 1,
				},
				768: {
					items: 3
				},
				1024: {
					items: 4
				}
			}
		});
	}
}

//detailsSlider
function detailsSlider(animationIn, animationOut, elem, items, navContainer, navText) {
	var arrayPosition = [];
	var arrayOffset = [];
	animationIn = animationIn || 'zoomIn';
	animationOut = animationOut || 'fadeOut';
	elem = elem || '.details__slider';
	items = items || 6;
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
			loop: false,
			URLhashListener: true,
      startPosition: 'URLHash',
			dots: true,
			dotsEach: 1,
			dotsContainer: '',
			navText: navText,
			responsive: {
				320: {
					items: 1,
				},
				768: {
					items: 3
				},
				1024: {
					items: 6
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

//resizeFix
function resizeFix(elem) {
	$(window).on('resize', function(){
		var windowWidth = $(window).width();
		if(windowWidth > 1024){
			$(elem).show().removeClass('animated').css('display', 'flex');
		}else {
			$(elem).addClass('animated').css('display', 'none');
			$('.hamburger').removeClass('active');
			$('.hamburger__wrap').removeClass('active');
			$('.hamburger__line1').removeClass('rotate_in_45');
			$('.hamburger__line3').removeClass('rotate_in_-45');
			$('.menu').removeClass('animated, slideInLeft');
			$('body').removeClass('overflow');
		}
	});
}

function brandHover() {
	var item = $('.brand__item');
	$('.brand__item').on('mouseenter', function(){
		var itemHover = $(this).find('.brand__hover');
		itemHover.removeClass('circleHover--out').addClass('circleHover');
	});
	$('.brand__item').on('mouseleave', function(){
		var itemHover = $(this).find('.brand__hover');
		itemHover.removeClass('circleHover').addClass('circleHover--out');
	});
}

function accordion() {
	  var allPanels = $('.accordion .question__content').hide();
		var btn = $('.accBtn');
		var btnActive = $('.accBtn.active');

	  btn.click(function() {
	    $(this).parent().siblings().find('.accContent').slideUp();
	    $(this).parent().siblings().find('.accBtn').removeClass('active');
	    $(this).next().slideToggle();
			$(this).toggleClass('active');
	  });
}

function sliderFix() {
	var elem = $('.slider');
	if(elem){
		var windowSize =  $(window).width();
		if(windowSize <= 1440) {
			elem.css('height', '495')
		}
		setTimeout(function(){
			$(elem).css('height', 'auto');
		}, 500);
	}

}

function checkFix(elem) {
	$(elem).on('click', function(){
		$(this).closest('.checkFixBox').siblings().find(elem).prop('checked', false);
	});
}

//productCalc
function productCalc(){
	var btn = $('.calcBtn');
	var dec = $('.calcDec');
	var inc = $('.calcInc');
	var output = $('.calcNumber');
	var outputText = '.calcNumber';
	var valueBox = $('.calcOutput');
	var valueBoxText = '.calcOutput';
	var btnWeight = $('.calcCheckbox');
	var submit = $('.calcSubmit');
	var singleItem = $('.calcSingleItem');
	var singleSubmit = $('.calcSingleSubmit');

	if(btn){
		$(btn).on('click', function(){
		var output = $(this).closest('.calcItem').find(outputText);
		var value = $(this).closest('.calcItem').find(valueBoxText);
		var valueHtml = $(value).html();

		if($(this).hasClass('calcDec')){
			--valueHtml
		}else if($(this).hasClass('calcInc')){
			++valueHtml
		}
		if(valueHtml <= 1){
			valueHtml = 1;
		}
		var summ = valueHtml * parseInt(output.attr('data-price'));

		$(value).html(valueHtml);
		$(output).html(summ);
	});
	}
	if(btnWeight){
		$(btnWeight).on('click', function(){
			var number = parseInt($(this).closest('.calcWeightItem').find('.calcWeightNumber').html());
			var price = $(this).closest('.calcItem').find('.calcNumber');
			var output = $(this).closest('.calcItem').find('.calcOutput');
			console.log(btnWeight);

			price.html(number);
			output.html(1);
		});
	}

	if(submit){
		$(submit).on('click', function(){
			var output = $(this).closest('.calcItem').find(outputText);
			var value = $(this).closest('.calcItem').find(valueBoxText);
			var cartNumber = $('.calcCart');
			var cartCount = $('.calcCartCount');

			var summ = parseInt(cartNumber.html()) + parseInt(output.html());
			var valueSumm = parseInt(value.html()) + parseInt(cartCount.html());

			cartCount.html(valueSumm);
			cartNumber.html(summ);
		});
	}

	if(singleSubmit){
		$(singleSubmit).on('click', function(){
			var output = $(this).closest('.calcSingleItem').find(outputText);
			var cartNumber = $('.calcCartNumber');
			var cartCount = $('.calcCartCount');

			var summ = parseInt(cartNumber.html()) + parseInt(output.html());
			var valueSumm = 1 + parseInt(cartCount.html());

			cartCount.html(valueSumm);
			cartNumber.html(summ);
		});
	}
}

//cartCalc
function cartCalc() {
	var inc = $('.cartCalcInc');
	var dec = $('.cartCalcDec');
	var countNumber_t = '.cartCalcNumber';
	var close = $('.cartCalcDelete');
	var summ_t = '.cartCalcTotalSumm';
	var item_t = '.cartCalcItem';
	var singleItemPrice_t = '.cartCalcSinglePrice';
	var singleSumm_t = '.cartSummNumber';
	var total = document.querySelector('.cartCalcTotalSumm');
	var total_t = '.cartCalcTotalSumm';
	var sum = 0;
	var sumArray = [];

	function calcOnWindowLoad(){
			var itemsSumm = document.querySelectorAll(singleSumm_t);

			sumArray.length = 0;
			itemsSumm.forEach(function(item, index, value){
				var number = parseInt(item.textContent);
				sumArray.push(number);
			});
			sum = 0;
			if(total){
				for(var key in sumArray) {
					sum = sum + parseInt(sumArray[key]);
				}
				if(!sum){
					sum = 0;
				}
				total.textContent = sum;
			}
		}

	function countInc(){
		var count = $(this).closest(item_t).find(countNumber_t);
		var countNumber = parseInt(count.html());
		var singleItemPrice = $(this).closest(item_t).find(singleItemPrice_t);
		var singleItemPriceNumber = parseInt(singleItemPrice.html());
		var singleSumm = $(this).closest(item_t).find($(singleSumm_t));

		var itemsSumm = document.querySelectorAll(singleSumm_t);

		countNumber++
		count.html(countNumber);

		var summ = countNumber * singleItemPriceNumber;
		singleSumm.html(summ);

		sumArray.length = 0;

		itemsSumm.forEach(function(item, index, value){
			var number = parseInt(item.textContent);
			sumArray.push(number);
		});

		sum = 0;
		if(total){
			for(var key in sumArray) {
				sum = sum + parseInt(sumArray[key]);
			}
			if(!sum){
				sum = 0;
			}
			total.textContent = sum;
		}
	}

	function countDec(){
		var count = $(this).closest(item_t).find(countNumber_t);
		var countNumber = parseInt(count.html());
		var singleItemPrice = $(this).closest(item_t).find(singleItemPrice_t);
		var singleItemPriceNumber = parseInt(singleItemPrice.html());
		var singleSumm = $(this).closest(item_t).find($(singleSumm_t));

		var itemsSumm = document.querySelectorAll(singleSumm_t);

		countNumber--
		if(countNumber <= 1){
			countNumber = 1
		}
		count.html(countNumber);

		var summ = countNumber * singleItemPriceNumber;
		singleSumm.html(summ);


		sumArray.length = 0;
		itemsSumm.forEach(function(item, index, value){
			var number = parseInt(item.textContent);
			sumArray.push(number);
		});
		sum = 0;
		if(total){
			for(var key in sumArray) {
				sum = sum + parseInt(sumArray[key]);
			}
			if(!sum){
				sum = 0;
			}
			total.textContent = sum;
		}
	}

	function onCloseItem(){
		var singleSumm = $(this).closest(item_t).find(singleSumm_t);
		var singleSummNumber = parseInt(singleSumm.html());
		var total = $(total_t);
		var totalPrice = parseInt(total.html()) - singleSummNumber;

		$(this).closest(item_t).hide(400);
		total.html(totalPrice);
	}

	calcOnWindowLoad();

	inc.on('click', countInc);

	dec.on('click', countDec);

	close.on('click', onCloseItem);
}

//mainMargin
function mainMargin() {
	var heightHeader = $('.page-header').innerHeight();

	$('.main').css('margin-top', heightHeader);
}

//sliderLine
function sliderLine() {
	var elem = '.sliderLine';
	var item = '.sliderLineItem';
	var elemTrue = document.querySelector('.sliderLine');
	var itemTrue = document.querySelector('.sliderLineItem');
	if(elemTrue && itemTrue){
		$(window).on('resize || load', function() {
			var elem = '.sliderLine';
			var item = '.sliderLineItem';
			var itemActive = $('.sliderLineItem.active')
			var positionItem = $(itemActive).position();
			var marginItem = parseInt($(itemActive).css('margin-left'));
			var widthItem = $(itemActive).width();
			var positionLeftLine = positionItem.left + marginItem;

			$(elem).css({
				'left': positionLeftLine,
				'width': widthItem
			});

	});

		$(item).on('mouseenter', function(){
			var positionItem = $(this).position();
			var marginItem = parseInt($(this).css('margin-left'));
			var widthItem = $(this).width();
			var positionLeftLine = positionItem.left + marginItem;

			$(this).addClass('active').siblings().removeClass('active');
			$(elem).css({
				'left': positionLeftLine,
				'width': widthItem
			});
		});
	}
}

function tableLink() {
	var tableTr = $('.table__tr');
	if(tableTr){
		tableTr.on('click', function(){
			var href = $(this).attr('href');
			$(location).attr('href', href);
		});
	}
}

function productHover() {
	var navItem = '.productNav';

	$(navItem).mouseenter(function(){
		var navItemNumber = $(this).index();
		var item = $(this).closest('.productWrap').find('.productItem');

		$(this).addClass('active').siblings().removeClass('active');
		$(item).each(function(index, element){
			if(index === navItemNumber){
				$(this).addClass('active').siblings().removeClass('active');
			}
		});
	});
}

window.onload = function() {
	//scrollEvents
	scrollEffects();

	//other
	phoneMask();
	mainMargin();

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
	animate('.hamburger__wrap', '.menu', 'slideInDown', 'slideOutUp');

	//calc
	productCalc();

	//slider(animationIn, animationOut, elem, items, navContainer, navText)
	slider();
	tabSlider();
	photoSlider();
	detailsSlider();

	//loading
	loading();
};

//other
bodyOverflow('.hamburger');
