"use strict"
//templates
new Vue({
		el: '#global-svg',
		template: '<svg aria-hidden="true" style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><symbol id="icon-ruble-sign" viewBox="0 0 24 32"><title>ruble-sign</title><path d="M14.96 20c5.32 0 9.040-3.716 9.040-9.058s-3.72-8.942-9.040-8.942h-10.21c-0.414 0-0.75 0.336-0.75 0.75v12.915h-3.25c-0.414 0-0.75 0.336-0.75 0.75v2.835c0 0.414 0.336 0.75 0.75 0.75h3.25v2h-3.25c-0.414 0-0.75 0.336-0.75 0.75v2.5c0 0.414 0.336 0.75 0.75 0.75h3.25v3.25c0 0.414 0.336 0.75 0.75 0.75h3.66c0.414 0 0.75-0.336 0.75-0.75v-3.25h10.090c0.414 0 0.75-0.336 0.75-0.75v-2.5c0-0.414-0.336-0.75-0.75-0.75h-10.090v-2h5.8zM9.16 6.297h4.92c2.92 0 4.68 1.819 4.68 4.645 0 2.864-1.76 4.723-4.76 4.723h-4.84v-9.368z"></path></symbol><symbol id="icon-star-half" viewBox="0 0 36 32"><title>star-half</title><path d="M18 24.081l-7.769 4.088 1.481-8.65-6.287-6.125 8.688-1.262 3.888-7.875v-4.256c-0.712 0-1.425 0.369-1.794 1.113l-4.081 8.275-9.131 1.325c-1.637 0.238-2.294 2.256-1.106 3.412l6.606 6.438-1.563 9.094c-0.281 1.631 1.438 2.875 2.9 2.106l8.169-4.287v-3.394z"></path></symbol><symbol id="icon-star-half2" viewBox="0 0 36 32"><title>star-half2</title><path d="M18 0c-0.712 0-1.425 0.369-1.794 1.113l-4.081 8.275-9.131 1.325c-1.637 0.238-2.294 2.256-1.106 3.412l6.606 6.438-1.563 9.094c-0.281 1.631 1.438 2.875 2.9 2.106l8.169-4.287v-27.475z"></path></symbol><symbol id="icon-star" viewBox="0 0 36 32"><title>star</title><path d="M16.206 1.113l-4.081 8.275-9.131 1.331c-1.637 0.238-2.294 2.256-1.106 3.412l6.606 6.438-1.563 9.094c-0.281 1.644 1.45 2.875 2.9 2.106l8.169-4.294 8.169 4.294c1.45 0.762 3.181-0.462 2.9-2.106l-1.563-9.094 6.606-6.438c1.188-1.156 0.531-3.175-1.106-3.412l-9.131-1.331-4.081-8.275c-0.731-1.475-2.85-1.494-3.587 0z"></path></symbol><symbol id="icon-star2" viewBox="0 0 36 32"><title>star2</title><path d="M33.006 10.719l-9.131-1.331-4.081-8.275c-0.731-1.475-2.85-1.494-3.587 0l-4.081 8.275-9.131 1.331c-1.637 0.238-2.294 2.256-1.106 3.412l6.606 6.438-1.563 9.094c-0.281 1.644 1.45 2.875 2.9 2.106l8.169-4.294 8.169 4.294c1.45 0.762 3.181-0.462 2.9-2.106l-1.563-9.094 6.606-6.438c1.188-1.156 0.531-3.175-1.106-3.412zM24.288 19.519l1.481 8.65-7.769-4.081-7.769 4.081 1.481-8.65-6.287-6.125 8.688-1.262 3.888-7.875 3.887 7.875 8.688 1.262-6.287 6.125z"></path></symbol><symbol id="icon-access-time" viewBox="0 0 32 32"><title>access-time</title><path d="M15.987 2.667c-7.36 0-13.32 5.973-13.32 13.333s5.96 13.333 13.32 13.333c7.373 0 13.347-5.973 13.347-13.333s-5.973-13.333-13.347-13.333zM16 26.667c-5.893 0-10.667-4.773-10.667-10.667s4.773-10.667 10.667-10.667 10.667 4.773 10.667 10.667-4.773 10.667-10.667 10.667z"></path><path d="M16.667 9.333h-2v8l7 4.2 1-1.64-6-3.56z"></path></symbol><symbol id="icon-card-membership" viewBox="0 0 32 32"><title>card-membership</title><path d="M26.667 2.667h-21.333c-1.48 0-2.667 1.187-2.667 2.667v14.667c0 1.48 1.187 2.667 2.667 2.667h5.333v6.667l5.333-2.667 5.333 2.667v-6.667h5.333c1.48 0 2.667-1.187 2.667-2.667v-14.667c0-1.48-1.187-2.667-2.667-2.667zM26.667 20h-21.333v-2.667h21.333v2.667zM26.667 13.333h-21.333v-8h21.333v8z"></path></symbol><symbol id="icon-cast-connected" viewBox="0 0 32 32"><title>cast-connected</title><path d="M1.333 24v4h4c0-2.213-1.787-4-4-4zM1.333 18.667v2.667c3.68 0 6.667 2.987 6.667 6.667h2.667c0-5.16-4.173-9.333-9.333-9.333zM25.333 9.333h-18.667v2.173c5.28 1.707 9.453 5.88 11.16 11.16h7.507v-13.333zM1.333 13.333v2.667c6.627 0 12 5.373 12 12h2.667c0-8.107-6.573-14.667-14.667-14.667zM28 4h-24c-1.467 0-2.667 1.2-2.667 2.667v4h2.667v-4h24v18.667h-9.333v2.667h9.333c1.467 0 2.667-1.2 2.667-2.667v-18.667c0-1.467-1.2-2.667-2.667-2.667z"></path></symbol><symbol id="icon-check-circle" viewBox="0 0 32 32"><title>check-circle</title><path d="M16 2.667c-7.36 0-13.333 5.973-13.333 13.333s5.973 13.333 13.333 13.333 13.333-5.973 13.333-13.333-5.973-13.333-13.333-13.333zM13.333 22.667l-6.667-6.667 1.88-1.88 4.787 4.773 10.12-10.12 1.88 1.893-12 12z"></path></symbol><symbol id="icon-content-paste" viewBox="0 0 32 32"><title>content-paste</title><path d="M25.333 2.667h-5.573c-0.56-1.547-2.027-2.667-3.76-2.667s-3.2 1.12-3.76 2.667h-5.573c-1.467 0-2.667 1.2-2.667 2.667v21.333c0 1.467 1.2 2.667 2.667 2.667h18.667c1.467 0 2.667-1.2 2.667-2.667v-21.333c0-1.467-1.2-2.667-2.667-2.667zM16 2.667c0.733 0 1.333 0.6 1.333 1.333s-0.6 1.333-1.333 1.333-1.333-0.6-1.333-1.333 0.6-1.333 1.333-1.333zM25.333 26.667h-18.667v-21.333h2.667v4h13.333v-4h2.667v21.333z"></path></symbol><symbol id="icon-developer-board" viewBox="0 0 32 32"><title>developer-board</title><path d="M29.333 12v-2.667h-2.667v-2.667c0-1.467-1.2-2.667-2.667-2.667h-18.667c-1.467 0-2.667 1.2-2.667 2.667v18.667c0 1.467 1.2 2.667 2.667 2.667h18.667c1.467 0 2.667-1.2 2.667-2.667v-2.667h2.667v-2.667h-2.667v-2.667h2.667v-2.667h-2.667v-2.667h2.667zM24 25.333h-18.667v-18.667h18.667v18.667zM8 17.333h6.667v5.333h-6.667zM16 9.333h5.333v4h-5.333zM8 9.333h6.667v6.667h-6.667zM16 14.667h5.333v8h-5.333z"></path></symbol><symbol id="icon-expand-more" viewBox="0 0 32 32"><title>expand-more</title><path d="M22.12 11.453l-6.12 6.107-6.12-6.107-1.88 1.88 8 8 8-8z"></path></symbol><symbol id="icon-keyboard-arrow-down" viewBox="0 0 32 32"><title>keyboard-arrow-down</title><path d="M9.88 10.453l6.12 6.107 6.12-6.107 1.88 1.88-8 8-8-8z"></path></symbol><symbol id="icon-keyboard-arrow-right" viewBox="0 0 32 32"><title>keyboard-arrow-right</title><path d="M11.453 21.787l6.107-6.12-6.107-6.12 1.88-1.88 8 8-8 8z"></path></symbol><symbol id="icon-laptop-mac" viewBox="0 0 32 32"><title>laptop-mac</title><path d="M26.667 24c1.467 0 2.653-1.2 2.653-2.667l0.013-14.667c0-1.467-1.2-2.667-2.667-2.667h-21.333c-1.467 0-2.667 1.2-2.667 2.667v14.667c0 1.467 1.2 2.667 2.667 2.667h-5.333c0 1.467 1.2 2.667 2.667 2.667h26.667c1.467 0 2.667-1.2 2.667-2.667h-5.333zM5.333 6.667h21.333v14.667h-21.333v-14.667zM16 25.333c-0.733 0-1.333-0.6-1.333-1.333s0.6-1.333 1.333-1.333 1.333 0.6 1.333 1.333-0.6 1.333-1.333 1.333z"></path></symbol><symbol id="icon-local-offer" viewBox="0 0 32 32"><title>local-offer</title><path d="M28.547 15.44l-12-12c-0.48-0.48-1.147-0.773-1.88-0.773h-9.333c-1.467 0-2.667 1.2-2.667 2.667v9.333c0 0.733 0.293 1.4 0.787 1.893l12 12c0.48 0.48 1.147 0.773 1.88 0.773s1.4-0.293 1.88-0.787l9.333-9.333c0.493-0.48 0.787-1.147 0.787-1.88s-0.307-1.413-0.787-1.893zM7.333 9.333c-1.107 0-2-0.893-2-2s0.893-2 2-2 2 0.893 2 2-0.893 2-2 2z"></path></symbol><symbol id="icon-local-see" viewBox="0 0 32 32"><title>local-see</title><path d="M20.267 16c0 2.356-1.91 4.267-4.267 4.267s-4.267-1.91-4.267-4.267c0-2.356 1.91-4.267 4.267-4.267s4.267 1.91 4.267 4.267z"></path><path d="M12 2.667l-2.44 2.667h-4.227c-1.467 0-2.667 1.2-2.667 2.667v16c0 1.467 1.2 2.667 2.667 2.667h21.333c1.467 0 2.667-1.2 2.667-2.667v-16c0-1.467-1.2-2.667-2.667-2.667h-4.227l-2.44-2.667h-8zM16 22.667c-3.68 0-6.667-2.987-6.667-6.667s2.987-6.667 6.667-6.667 6.667 2.987 6.667 6.667-2.987 6.667-6.667 6.667z"></path></symbol><symbol id="icon-payment" viewBox="0 0 32 32"><title>payment</title><path d="M26.667 5.333h-21.333c-1.48 0-2.653 1.187-2.653 2.667l-0.013 16c0 1.48 1.187 2.667 2.667 2.667h21.333c1.48 0 2.667-1.187 2.667-2.667v-16c0-1.48-1.187-2.667-2.667-2.667zM26.667 24h-21.333v-8h21.333v8zM26.667 10.667h-21.333v-2.667h21.333v2.667z"></path></symbol><symbol id="icon-personal-video" viewBox="0 0 32 32"><title>personal-video</title><path d="M28 4h-24c-1.48 0-2.667 1.187-2.667 2.667v16c0 1.467 1.187 2.667 2.667 2.667h6.667v2.667h10.667v-2.667h6.667c1.467 0 2.653-1.2 2.653-2.667l0.013-16c0-1.48-1.2-2.667-2.667-2.667zM28 22.667h-24v-16h24v16z"></path></symbol><symbol id="icon-phone-in-talk" viewBox="0 0 32 32"><title>phone-in-talk</title><path d="M26.667 20.667c-1.667 0-3.267-0.267-4.76-0.76-0.467-0.147-0.987-0.040-1.36 0.32l-2.933 2.933c-3.773-1.92-6.867-5-8.787-8.787l2.933-2.947c0.373-0.347 0.48-0.867 0.333-1.333-0.493-1.493-0.76-3.093-0.76-4.76 0-0.733-0.6-1.333-1.333-1.333h-4.667c-0.733 0-1.333 0.6-1.333 1.333 0 12.52 10.147 22.667 22.667 22.667 0.733 0 1.333-0.6 1.333-1.333v-4.667c0-0.733-0.6-1.333-1.333-1.333zM25.333 16h2.667c0-6.627-5.373-12-12-12v2.667c5.16 0 9.333 4.173 9.333 9.333zM20 16h2.667c0-3.68-2.987-6.667-6.667-6.667v2.667c2.213 0 4 1.787 4 4z"></path></symbol><symbol id="icon-place" viewBox="0 0 32 32"><title>place</title><path d="M16 2.667c-5.16 0-9.333 4.173-9.333 9.333 0 7 9.333 17.333 9.333 17.333s9.333-10.333 9.333-17.333c0-5.16-4.173-9.333-9.333-9.333zM16 15.333c-1.84 0-3.333-1.493-3.333-3.333s1.493-3.333 3.333-3.333 3.333 1.493 3.333 3.333-1.493 3.333-3.333 3.333z"></path></symbol><symbol id="icon-print" viewBox="0 0 32 32"><title>print</title><path d="M25.333 10.667h-18.667c-2.213 0-4 1.787-4 4v8h5.333v5.333h16v-5.333h5.333v-8c0-2.213-1.787-4-4-4zM21.333 25.333h-10.667v-6.667h10.667v6.667zM25.333 16c-0.733 0-1.333-0.6-1.333-1.333s0.6-1.333 1.333-1.333 1.333 0.6 1.333 1.333-0.6 1.333-1.333 1.333zM24 4h-16v5.333h16v-5.333z"></path></symbol><symbol id="icon-report-problem" viewBox="0 0 32 32"><title>report-problem</title><path d="M1.333 28h29.333l-14.667-25.333-14.667 25.333zM17.333 24h-2.667v-2.667h2.667v2.667zM17.333 18.667h-2.667v-5.333h2.667v5.333z"></path></symbol></defs></svg>'
	})

function scrollEffects() {
	new WOW().init();
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
	var btn = $(elem);
	var body = $('body');
	btn.on('click', function(){
		body.toggleClass('overflow');
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
		$('.' + content + ' > [data-tabnumber="' + number + '"]').show().addClass('active flex animated').removeClass('hide').css('display', 'flex').siblings().hide().removeClass('active flex animated showFlex');
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
	animationIn = animationIn || 'zoomIn';
	animationOut = animationOut || 'fadeOut';
	elem = elem || '.slider__wrap';
	items = items || 1;
	navContainer = navContainer || '.slider__arrows';
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
			responsive: {
				0: {
					navContainer: false,
					items: 1
				},
				768: {
					navContainer: navContainer
				}
			}
		});
	}
}
function comparsionSlider(animationIn, animationOut, elem, items, navContainer, navText) {
	animationIn = animationIn || 'zoomIn';
	animationOut = animationOut || 'fadeOut';
	elem = elem || '.compare__slider';
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
			dotsEach: true
		});
	}
}
function carousel(animationIn, animationOut, elem, items, navContainer, navText) {
	animationIn = animationIn || 'zoomIn';
	animationOut = animationOut || 'fadeOut';
	elem = elem || '.partners__slider';
	items = items || 5;
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
			autoWidth: true,
			responsive: {
				0: {
					items: 2,
					autoWidth: false
				},
				550: {
					items: 3,
					autoWidth: false
				},
				1025: {
					items: 4,
					autoWidth: false
				},
				1410: {
					items: 5
				}
			}
		});
	}
}
function photoSlider(animationIn, animationOut, elem, items, navContainer, navText) {
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
			dotsContainer: '',
			responsive: {
				0: {
					items: 1
				},
				550: {
					items: 3
				},
				1025: {
					items: 4
				},
			}
		});
	}
}
function reviewSlider(animationIn, animationOut, elem, items, navContainer, navText) {
	animationIn = animationIn || 'slideInDown';
	animationOut = animationOut || 'slideOutDown';
	elem = elem || '.review__wrap';
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
			dotsContainer: '',
			autoplay: true,
			autoplayTimeout: 5000,
			autoplayHoverPause: true,
			autoplaySpeed: 3000
		});
	}
}
function modelSlider(animationIn, animationOut, elem, items, navContainer, navText) {
	animationIn = animationIn || 'zoomIn';
	animationOut = animationOut || 'fadeOut';
	elem = elem || '.model__slider';
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
			dotsContainer: '',
			responsive: {
				0: {
					items: 1
				},
				550: {
					items: 2
				},
				1025: {
					items: 4
				},
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

window.onload = function() {
	//scrollEvents
	scrollEffects();
	changeClassOnScroll();

	//other
	bodyOverflow('.hamburger');
	phoneMask();
	resizeFix('.menu');
	brandHover();
	accordion();
	sliderFix()

	//calc

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
	animate('.hamburger__wrap', '.menu', 'slideInLeft', 'slideOutLeft');

	//slider(animationIn, animationOut, elem, items, navContainer, navText)
	slider();
	carousel();
	comparsionSlider();
	photoSlider();
	reviewSlider();
	modelSlider();
};
