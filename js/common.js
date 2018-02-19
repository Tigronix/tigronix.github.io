"use strict"
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

//templates
new Vue({
		el: '#global-svg',
		template: '<svg aria-hidden="true" style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><symbol id="icon-mail_outline" viewBox="0 0 32 32"><title>mail_outline</title><path d="M26.667 5.333h-21.333c-1.467 0-2.653 1.2-2.653 2.667l-0.013 16c0 1.467 1.2 2.667 2.667 2.667h21.333c1.467 0 2.667-1.2 2.667-2.667v-16c0-1.467-1.2-2.667-2.667-2.667zM26.667 24h-21.333v-13.333l10.667 6.667 10.667-6.667v13.333zM16 14.667l-10.667-6.667h21.333l-10.667 6.667z"></path></symbol><symbol id="icon-location_on" viewBox="0 0 32 32"><title>location_on</title><path d="M16 2.667c-5.16 0-9.333 4.173-9.333 9.333 0 7 9.333 17.333 9.333 17.333s9.333-10.333 9.333-17.333c0-5.16-4.173-9.333-9.333-9.333zM16 15.333c-1.84 0-3.333-1.493-3.333-3.333s1.493-3.333 3.333-3.333 3.333 1.493 3.333 3.333-1.493 3.333-3.333 3.333z"></path></symbol><symbol id="icon-phone" viewBox="0 0 32 32"><title>phone</title><path d="M8.827 14.387c1.92 3.773 5.013 6.853 8.787 8.787l2.933-2.933c0.36-0.36 0.893-0.48 1.36-0.32 1.493 0.493 3.107 0.76 4.76 0.76 0.733 0 1.333 0.6 1.333 1.333v4.653c0 0.733-0.6 1.333-1.333 1.333-12.52 0-22.667-10.147-22.667-22.667 0-0.733 0.6-1.333 1.333-1.333h4.667c0.733 0 1.333 0.6 1.333 1.333 0 1.667 0.267 3.267 0.76 4.76 0.147 0.467 0.040 0.987-0.333 1.36l-2.933 2.933z"></path></symbol><symbol id="icon-portrait" viewBox="0 0 32 32"><title>portrait</title><path d="M16 16.333c1.653 0 3-1.347 3-3s-1.347-3-3-3-3 1.347-3 3 1.347 3 3 3zM22 21.667c0-2-4-3-6-3s-6 1-6 3v1h12v-1zM25.333 4h-18.667c-1.467 0-2.667 1.2-2.667 2.667v18.667c0 1.467 1.2 2.667 2.667 2.667h18.667c1.467 0 2.667-1.2 2.667-2.667v-18.667c0-1.467-1.2-2.667-2.667-2.667zM25.333 25.333h-18.667v-18.667h18.667v18.667z"></path></symbol><symbol id="icon-check_circle" viewBox="0 0 32 32"><title>check_circle</title><path d="M16 2.667c-7.36 0-13.333 5.973-13.333 13.333s5.973 13.333 13.333 13.333 13.333-5.973 13.333-13.333-5.973-13.333-13.333-13.333zM13.333 22.667l-6.667-6.667 1.88-1.88 4.787 4.773 10.12-10.12 1.88 1.893-12 12z"></path></symbol><symbol id="icon-chevron_left" viewBox="0 0 32 32"><title>chevron_left</title><path d="M20.547 9.88l-1.88-1.88-8 8 8 8 1.88-1.88-6.107-6.12z"></path></symbol><symbol id="icon-chevron_right" viewBox="0 0 32 32"><title>chevron_right</title><path d="M13.333 8l-1.88 1.88 6.107 6.12-6.107 6.12 1.88 1.88 8-8z"></path></symbol><symbol id="icon-arrow-forward" viewBox="0 0 32 32"><title>arrow-forward</title><path d="M16 5.333l-1.88 1.88 7.44 7.453h-16.227v2.667h16.227l-7.44 7.453 1.88 1.88 10.667-10.667z"></path></symbol><symbol id="icon-email" viewBox="0 0 32 32"><title>email</title><path d="M26.667 5.333h-21.333c-1.467 0-2.653 1.2-2.653 2.667l-0.013 16c0 1.467 1.2 2.667 2.667 2.667h21.333c1.467 0 2.667-1.2 2.667-2.667v-16c0-1.467-1.2-2.667-2.667-2.667zM26.667 10.667l-10.667 6.667-10.667-6.667v-2.667l10.667 6.667 10.667-6.667v2.667z"></path></symbol></defs></svg>'
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
			setTimeout(function(){
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
	elem = elem || '.slider-main';
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
			dotsContainer: '.slider__dots',
			dotsEach: true,
			dots: true,
			responsive: {
				0: {
					dots: false
				},
				550: {
					dots: true
				}
			}
		});
	}
}
//carousel
function carousel(animationIn, animationOut, elem, items, navContainer, navText) {
	animationIn = animationIn || 'zoomIn';
	animationOut = animationOut || 'fadeOut';
	elem = elem || '.portfolio-slider';
	items = items || 3;
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
			dotsEach: true,
			dots: true,
			loop: false,
			responsive: {
				0: {
					dots: false,
					items: 1
				},
				550: {
					dots: true,
					items: 1
				},
				768: {
					items: 1
				},
				1024: {
					items: 2
				},
				1281: {
					items: 3
				}
			}
		});
	}
}

//carousel-mail
function carouselMail(animationIn, animationOut, elem, items, navContainer, navText) {
	animationIn = animationIn || 'zoomIn';
	animationOut = animationOut || 'fadeOut';
	elem = elem || '.mail__carousel';
	items = items || 4;
	navContainer = navContainer || '';
	navText = navText || ['', ''];
	if(elem){
		$(elem).owlCarousel({
			nav: true,
			items: items,
			animateIn: animationIn,
			animateOut: animationOut,
			loop: true,
			dots: false,
			responsive: {
				0: {
					items: 1
				},
				400: {
					items: 2
				},
				768: {
					items: 3
				},
				1024: {
					items: 3
				},
				1281: {
					items: 4
				}
			}
		});
	}
}

//carousel-partners
function carouselPartners(animationIn, animationOut, elem, items, navContainer, navText) {
	animationIn = animationIn || 'zoomIn';
	animationOut = animationOut || 'fadeOut';
	elem = elem || '.partners-carousel';
	items = items || 6;
	navContainer = navContainer || '';
	navText = navText || ['', ''];
	if(elem){
		$(elem).owlCarousel({
			nav: true,
			items: items,
			animateIn: animationIn,
			animateOut: animationOut,
			loop: true,
			dots: false,
			responsive: {
				0: {
					items: 2
				},
				400: {
					items: 3
				},
				768: {
					items: 4
				},
				1024: {
					items: 5
				},
				1281: {
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

window.onload = function() {
	//scrollEvents
	scrollEffects();
	changeClassOnScroll();

	//other
	bodyOverflow('.hamburger');
	phoneMask();
	tabs();

	//active toggle
	active('.hamburger');

	//Animation
	animate('.hamburger', '.hamburger__line1', 'rotate_in_45', 'rotate_in_45_out');
	animate('.hamburger', '.hamburger__line3', 'rotate_in_-45', 'rotate_in_-45_out');
	//Animation+hide
	animateHide('.hamburger', '.menu', 'lightSpeedIn', 'lightSpeedOut');

	//slider(animationIn, animationOut, elem, items, navContainer, navText)
	slider();
	slider('slideInDown', 'slideOutDown', '.services-slider');
	carousel('', '');
	carouselMail('', '');
	carouselPartners('', '');
	slider('lightSpeedIn', 'lightSpeedOut', '.img-carousel', 1, '', ['<div class="portfolio-slider__arrow portfolio-slider__arrow--prev"><svg class="portfolio-slider__arrow-icon icon icon-chevron_left"><use xlink:href="#icon-chevron_left"></use></svg></div>', '<div class="portfolio-slider__arrow portfolio-slider__arrow--next"><svg class="portfolio-slider__arrow-icon icon icon-chevron_right"><use xlink:href="#icon-chevron_right"></use></svg></div>']);
};
