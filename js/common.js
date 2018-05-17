"use strict"
//templates
new Vue({
		el: '#global-svg',
		template: '<svg aria-hidden="true" style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><symbol id="icon-next" viewBox="0 0 32 32"><title>next</title><path d="M11.453 22.12l6.107-6.12-6.107-6.12 1.88-1.88 8 8-8 8-1.88-1.88z"></path></symbol><symbol id="icon-prev" viewBox="0 0 32 32"><title>prev</title><path d="M20.547 22.12l-6.107-6.12 6.107-6.12-1.88-1.88-8 8 8 8 1.88-1.88z"></path></symbol><symbol id="icon-wallet" viewBox="0 0 32 32"><title>wallet</title><path d="M28 24v1.333c0 1.467-1.2 2.667-2.667 2.667h-18.667c-1.48 0-2.667-1.2-2.667-2.667v-18.667c0-1.467 1.187-2.667 2.667-2.667h18.667c1.467 0 2.667 1.2 2.667 2.667v1.333h-12c-1.48 0-2.667 1.2-2.667 2.667v10.667c0 1.467 1.187 2.667 2.667 2.667h12zM16 21.333h13.333v-10.667h-13.333v10.667zM21.333 18c-1.107 0-2-0.893-2-2s0.893-2 2-2 2 0.893 2 2-0.893 2-2 2z"></path></symbol><symbol id="icon-access-time" viewBox="0 0 32 32"><title>access-time</title><path d="M15.987 2.667c-7.36 0-13.32 5.973-13.32 13.333s5.96 13.333 13.32 13.333c7.373 0 13.347-5.973 13.347-13.333s-5.973-13.333-13.347-13.333zM16 26.667c-5.893 0-10.667-4.773-10.667-10.667s4.773-10.667 10.667-10.667 10.667 4.773 10.667 10.667-4.773 10.667-10.667 10.667z"></path><path d="M16.667 9.333h-2v8l7 4.2 1-1.64-6-3.56z"></path></symbol><symbol id="icon-account-balance" viewBox="0 0 32 32"><title>account-balance</title><path d="M5.333 13.333v9.333h4v-9.333h-4zM13.333 13.333v9.333h4v-9.333h-4zM2.667 29.333h25.333v-4h-25.333v4zM21.333 13.333v9.333h4v-9.333h-4zM15.333 1.333l-12.667 6.667v2.667h25.333v-2.667l-12.667-6.667z"></path></symbol><symbol id="icon-account-circle" viewBox="0 0 32 32"><title>account-circle</title><path d="M16 2.667c-7.36 0-13.333 5.973-13.333 13.333s5.973 13.333 13.333 13.333 13.333-5.973 13.333-13.333-5.973-13.333-13.333-13.333zM16 6.667c2.213 0 4 1.787 4 4s-1.787 4-4 4-4-1.787-4-4 1.787-4 4-4zM16 25.6c-3.333 0-6.28-1.707-8-4.293 0.040-2.653 5.333-4.107 8-4.107 2.653 0 7.96 1.453 8 4.107-1.72 2.587-4.667 4.293-8 4.293z"></path></symbol><symbol id="icon-airport-shuttle" viewBox="0 0 32 32"><title>airport-shuttle</title><path d="M22.667 6.667h-18.667c-1.467 0-2.667 1.187-2.667 2.667v12h2.667c0 2.2 1.787 4 4 4s4-1.8 4-4h7.333c0 2.2 1.787 4 4 4s4-1.8 4-4h3.333v-6.667l-8-8zM4 14.667v-5.333h5.333v5.333h-5.333zM8 23.333c-1.107 0-2-0.893-2-2s0.893-2 2-2 2 0.893 2 2-0.893 2-2 2zM17.333 14.667h-5.333v-5.333h5.333v5.333zM23.333 23.333c-1.107 0-2-0.893-2-2s0.893-2 2-2 2 0.893 2 2-0.893 2-2 2zM20 14.667v-5.333h1.333l5.333 5.333h-6.667z"></path></symbol><symbol id="icon-calendar" viewBox="0 0 32 32"><title>calendar</title><path d="M26.667 4h-1.333v-2.667h-2.667v2.667h-13.333v-2.667h-2.667v2.667h-1.333c-1.467 0-2.667 1.2-2.667 2.667v21.333c0 1.467 1.2 2.667 2.667 2.667h21.333c1.467 0 2.667-1.2 2.667-2.667v-21.333c0-1.467-1.2-2.667-2.667-2.667zM26.667 28h-21.333v-17.333h21.333v17.333z"></path></symbol><symbol id="icon-check-box" viewBox="0 0 32 32"><title>check-box</title><path d="M25.333 4h-18.667c-1.48 0-2.667 1.2-2.667 2.667v18.667c0 1.467 1.187 2.667 2.667 2.667h18.667c1.48 0 2.667-1.2 2.667-2.667v-18.667c0-1.467-1.187-2.667-2.667-2.667zM13.333 22.667l-6.667-6.667 1.88-1.88 4.787 4.773 10.12-10.12 1.88 1.893-12 12z"></path></symbol><symbol id="icon-color-lens" viewBox="0 0 32 32"><title>color-lens</title><path d="M16 4c-6.627 0-12 5.373-12 12s5.373 12 12 12c1.107 0 2-0.893 2-2 0-0.52-0.2-0.987-0.52-1.347-0.307-0.347-0.507-0.813-0.507-1.32 0-1.107 0.893-2 2-2h2.36c3.68 0 6.667-2.987 6.667-6.667 0-5.893-5.373-10.667-12-10.667zM8.667 16c-1.107 0-2-0.893-2-2s0.893-2 2-2 2 0.893 2 2-0.893 2-2 2zM12.667 10.667c-1.107 0-2-0.893-2-2s0.893-2 2-2 2 0.893 2 2-0.893 2-2 2zM19.333 10.667c-1.107 0-2-0.893-2-2s0.893-2 2-2 2 0.893 2 2-0.893 2-2 2zM23.333 16c-1.107 0-2-0.893-2-2s0.893-2 2-2 2 0.893 2 2-0.893 2-2 2z"></path></symbol><symbol id="icon-phone" viewBox="0 0 32 32"><title>phone</title><path d="M8.827 14.387c1.92 3.773 5.013 6.853 8.787 8.787l2.933-2.933c0.36-0.36 0.893-0.48 1.36-0.32 1.493 0.493 3.107 0.76 4.76 0.76 0.733 0 1.333 0.6 1.333 1.333v4.653c0 0.733-0.6 1.333-1.333 1.333-12.52 0-22.667-10.147-22.667-22.667 0-0.733 0.6-1.333 1.333-1.333h4.667c0.733 0 1.333 0.6 1.333 1.333 0 1.667 0.267 3.267 0.76 4.76 0.147 0.467 0.040 0.987-0.333 1.36l-2.933 2.933z"></path></symbol><symbol id="icon-photo-camera" viewBox="0 0 32 32"><title>photo-camera</title><path d="M20.267 16c0 2.356-1.91 4.267-4.267 4.267s-4.267-1.91-4.267-4.267c0-2.356 1.91-4.267 4.267-4.267s4.267 1.91 4.267 4.267z"></path><path d="M12 2.667l-2.44 2.667h-4.227c-1.467 0-2.667 1.2-2.667 2.667v16c0 1.467 1.2 2.667 2.667 2.667h21.333c1.467 0 2.667-1.2 2.667-2.667v-16c0-1.467-1.2-2.667-2.667-2.667h-4.227l-2.44-2.667h-8zM16 22.667c-3.68 0-6.667-2.987-6.667-6.667s2.987-6.667 6.667-6.667 6.667 2.987 6.667 6.667-2.987 6.667-6.667 6.667z"></path></symbol><symbol id="icon-spa" viewBox="0 0 32 32"><title>spa</title><path fill="#607d8b" style="fill: var(--color1, #607d8b)" d="M11.4 16c-1.427-0.947-3-1.693-4.707-2.147 1.707 0.453 3.28 1.2 4.707 2.147zM25.307 13.853c-1.72 0.453-3.32 1.213-4.76 2.187 1.44-0.973 3.040-1.733 4.76-2.187z"></path><path fill="#000" style="fill: var(--color2, #000)" d="M20.653 12.84c-0.24-3.72-1.747-7.347-4.573-10.173-2.853 2.853-4.427 6.48-4.733 10.173 1.707 0.907 3.28 2.080 4.653 3.507 1.373-1.413 2.947-2.587 4.653-3.507zM11.987 16.373c-0.187-0.133-0.4-0.253-0.6-0.387 0.2 0.147 0.413 0.253 0.6 0.387zM20.547 16.040c-0.173 0.12-0.36 0.213-0.533 0.347 0.173-0.133 0.36-0.227 0.533-0.347zM16 20.6c-2.867-4.373-7.76-7.267-13.333-7.267 0 7.093 4.48 13.093 10.707 15.32 0.84 0.307 1.72 0.533 2.627 0.68 0.907-0.16 1.773-0.387 2.627-0.68 6.227-2.227 10.707-8.227 10.707-15.32-5.573 0-10.467 2.893-13.333 7.267z"></path></symbol><symbol id="icon-subway" viewBox="0 0 32 32"><title>subway</title><path d="M22 21.333c0 0.736-0.597 1.333-1.333 1.333s-1.333-0.597-1.333-1.333c0-0.736 0.597-1.333 1.333-1.333s1.333 0.597 1.333 1.333z"></path><path d="M12.667 21.333c0 0.736-0.597 1.333-1.333 1.333s-1.333-0.597-1.333-1.333c0-0.736 0.597-1.333 1.333-1.333s1.333 0.597 1.333 1.333z"></path><path d="M9.347 12h13.333v6.667h-13.333zM23.733 3.733c-2.4-0.947-5.253-1.067-7.733-1.067s-5.333 0.12-7.733 1.067c-3.56 1.387-5.6 4.333-5.6 8.080v17.52h26.667v-17.52c0-3.747-2.040-6.693-5.6-8.080zM24 21.173c0 1.933-1.573 3.493-3.507 3.493l1.507 1.493v0.507h-2l-2-2h-3.773l-2 2h-2.227v-0.507l1.493-1.493c-1.92 0-3.493-1.573-3.493-3.493v-9.173c0-3.507 4-4 8-4 4.427 0 8 0.507 8 4v9.173z"></path></symbol><symbol id="icon-timer" viewBox="0 0 32 32"><title>timer</title><path d="M20 1.333h-8v2.667h8v-2.667zM14.667 18.667h2.667v-8h-2.667v8zM25.373 9.853l1.893-1.893c-0.573-0.68-1.2-1.32-1.88-1.88l-1.893 1.893c-2.067-1.653-4.667-2.64-7.493-2.64-6.627 0-12 5.373-12 12s5.36 12 12 12 12-5.373 12-12c0-2.827-0.987-5.427-2.627-7.48zM16 26.667c-5.16 0-9.333-4.173-9.333-9.333s4.173-9.333 9.333-9.333 9.333 4.173 9.333 9.333-4.173 9.333-9.333 9.333z"></path></symbol><symbol id="icon-uncheck-box" viewBox="0 0 32 32"><title>uncheck-box</title><path d="M25.333 6.667v18.667h-18.667v-18.667h18.667zM25.333 4h-18.667c-1.467 0-2.667 1.2-2.667 2.667v18.667c0 1.467 1.2 2.667 2.667 2.667h18.667c1.467 0 2.667-1.2 2.667-2.667v-18.667c0-1.467-1.2-2.667-2.667-2.667z"></path></symbol></defs></svg>'
	})

function scrollEffects() {
	var wow = new WOW(
	  {
	    mobile: false,
	  }
	);
	wow.init();
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
    var elem = $('.menu');
    var height = elem.innerHeight();
    var top = $(this).scrollTop();
		var windowWidth = $(window).width();

    if (top > 50) {
			$(elem).addClass('scroll');
			$('.page-header').addClass('fixed');
			$('.scroll').on('mouseleave', function(){
				$('.scroll').removeClass('slideInDown').addClass('slideOutUp');
				setTimeout(function(){
					$('.scroll').removeClass('slideOutUp');
				}, 1000);
			});
    } else {
			$(elem).removeClass('scroll');
			$('.page-header').removeClass('fixed');
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
function animateHide(button, content, animationIn, animationOut, display, hideTiming) {
	hideTiming = hideTiming || 1000;
	display = display || 'block';
	var elem = document.querySelector(content);
	$(button).on('click', function() {
		$(content).show().css('display', display);
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
function mainSlider(animationIn, animationOut, elem, items, navContainer, navText) {
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
			dotsContainer: '',
			navText: navText,
		});
	}
}

function workSlider(animationIn, animationOut, elem, items, navContainer, navText) {
	var arrayPosition = [];
	var arrayOffset = [];
	animationIn = animationIn || 'zoomIn';
	animationOut = animationOut || 'fadeOut';
	elem = elem || '.work__slider';
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
			navText: navText,
			responsive: {
				0: {
					items: 1
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

function productSlider(animationIn, animationOut, elem, items, navContainer, navText) {
	var arrayPosition = [];
	var arrayOffset = [];
	animationIn = animationIn || 'zoomIn';
	animationOut = animationOut || 'fadeOut';
	elem = elem || '.product__slider';
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
			loop: false,
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

function diplomaSlider(animationIn, animationOut, elem, items, navContainer, navText) {
	var arrayPosition = [];
	var arrayOffset = [];
	animationIn = animationIn || 'zoomIn';
	animationOut = animationOut || 'fadeOut';
	elem = elem || '.diploma__slider';
	items = items || 5;
	navContainer = navContainer || '';
	navText = navText || ['<svg class="icon icon-prev"><use xlink:href="#icon-prev"></use></svg>', '<svg class="icon icon-next"><use xlink:href="#icon-next"></use></svg>'];
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
				768: {
					items: 3
				},
				1024: {
					items: 5
				}
			}
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

function map() {
	$('.img-map').mapster({
    fillColor: 'fc5900',
    fillOpacity: 0.6,
		fadeDuration: 400
  });
}

function menuHover() {
	var link = $('.menuHover');

	link.on('mouseenter', function(){
		$('.scroll').addClass('active animated slideInDown');
	});

}

function checkbox(item) {
	var elem = $(item);
	var label = $(item).closest('label');

	elem.on('click', function(){
		$(this).closest('label').toggleClass('active');
		$(this).closest('label').find('img').prop('src', 'img/radius--white.png');
		$(this).closest('.checkFixBox').siblings().find('label').removeClass('active');
		$(this).closest('.checkFixBox').siblings().find('img').prop('src', 'img/radius.png');
	});
}


window.onload = function() {
	//scrollEvents
	scrollEffects();

	//other
	phoneMask();

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
	animateHide('.hamburger__wrap', '.nav', 'slideInLeft', 'slideOutLeft', 'block');

	//slider(animationIn, animationOut, elem, items, navContainer, navText)
	mainSlider();
	workSlider();
	productSlider();
	diplomaSlider();

	//loading
	loading();
};

//other
bodyOverflow('.hamburger');
