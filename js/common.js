"use strict"
//templates
new Vue({
		el: '#global-svg',
		template: '<svg aria-hidden="true" style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><symbol id="icon-access-time" viewBox="0 0 32 32"><title>access-time</title><path d="M15.987 2.667c-7.36 0-13.32 5.973-13.32 13.333s5.96 13.333 13.32 13.333c7.373 0 13.347-5.973 13.347-13.333s-5.973-13.333-13.347-13.333zM16 26.667c-5.893 0-10.667-4.773-10.667-10.667s4.773-10.667 10.667-10.667 10.667 4.773 10.667 10.667-4.773 10.667-10.667 10.667z"></path><path d="M16.667 9.333h-2v8l7 4.2 1-1.64-6-3.56z"></path></symbol><symbol id="icon-account-balance" viewBox="0 0 32 32"><title>account-balance</title><path d="M5.333 13.333v9.333h4v-9.333h-4zM13.333 13.333v9.333h4v-9.333h-4zM2.667 29.333h25.333v-4h-25.333v4zM21.333 13.333v9.333h4v-9.333h-4zM15.333 1.333l-12.667 6.667v2.667h25.333v-2.667l-12.667-6.667z"></path></symbol><symbol id="icon-account-circle" viewBox="0 0 32 32"><title>account-circle</title><path d="M16 2.667c-7.36 0-13.333 5.973-13.333 13.333s5.973 13.333 13.333 13.333 13.333-5.973 13.333-13.333-5.973-13.333-13.333-13.333zM16 6.667c2.213 0 4 1.787 4 4s-1.787 4-4 4-4-1.787-4-4 1.787-4 4-4zM16 25.6c-3.333 0-6.28-1.707-8-4.293 0.040-2.653 5.333-4.107 8-4.107 2.653 0 7.96 1.453 8 4.107-1.72 2.587-4.667 4.293-8 4.293z"></path></symbol><symbol id="icon-build" viewBox="0 0 32 32"><title>build</title><path d="M30.267 25.333l-12.133-12.133c1.2-3.067 0.533-6.667-2-9.2-2.667-2.667-6.667-3.2-9.867-1.733l5.733 5.733-4 4-5.867-5.733c-1.6 3.2-0.933 7.2 1.733 9.867 2.533 2.533 6.133 3.2 9.2 2l12.133 12.133c0.533 0.533 1.333 0.533 1.867 0l3.067-3.067c0.667-0.533 0.667-1.467 0.133-1.867z"></path></symbol><symbol id="icon-check" viewBox="0 0 32 32"><title>check</title><path d="M12 21.56l-5.56-5.56-1.893 1.88 7.453 7.453 16-16-1.88-1.88z"></path></symbol><symbol id="icon-keyboard-arrow-down" viewBox="0 0 32 32"><title>keyboard-arrow-down</title><path d="M9.88 10.453l6.12 6.107 6.12-6.107 1.88 1.88-8 8-8-8z"></path></symbol><symbol id="icon-local-taxi" viewBox="0 0 32 32"><title>local-taxi</title><path d="M25.227 8.013c-0.267-0.787-1.013-1.347-1.893-1.347h-3.333v-2.667h-8v2.667h-3.333c-0.88 0-1.613 0.56-1.893 1.347l-2.773 7.987v10.667c0 0.733 0.6 1.333 1.333 1.333h1.333c0.733 0 1.333-0.6 1.333-1.333v-1.333h16v1.333c0 0.733 0.6 1.333 1.333 1.333h1.333c0.733 0 1.333-0.6 1.333-1.333v-10.667l-2.773-7.987zM8.667 21.333c-1.107 0-2-0.893-2-2s0.893-2 2-2 2 0.893 2 2-0.893 2-2 2zM23.333 21.333c-1.107 0-2-0.893-2-2s0.893-2 2-2 2 0.893 2 2-0.893 2-2 2zM6.667 14.667l2-6h14.667l2 6h-18.667z"></path></symbol><symbol id="icon-location-on" viewBox="0 0 32 32"><title>location-on</title><path d="M16 2.667c-5.16 0-9.333 4.173-9.333 9.333 0 7 9.333 17.333 9.333 17.333s9.333-10.333 9.333-17.333c0-5.16-4.173-9.333-9.333-9.333zM16 15.333c-1.84 0-3.333-1.493-3.333-3.333s1.493-3.333 3.333-3.333 3.333 1.493 3.333 3.333-1.493 3.333-3.333 3.333z"></path></symbol><symbol id="icon-menu" viewBox="0 0 32 32"><title>menu</title><path d="M4 24h24v-2.667h-24v2.667zM4 17.333h24v-2.667h-24v2.667zM4 8v2.667h24v-2.667h-24z"></path></symbol><symbol id="icon-motorcycle" viewBox="0 0 32 32"><title>motorcycle</title><path d="M25.92 12.040l-5.373-5.373h-5.88v2.667h4.787l2.667 2.667h-15.453c-3.733 0-6.667 2.933-6.667 6.667s2.933 6.667 6.667 6.667c3.28 0 5.933-2.253 6.533-5.333h2.2l3.693-3.693c-0.28 0.72-0.427 1.52-0.427 2.36 0 3.733 2.933 6.667 6.667 6.667s6.667-2.933 6.667-6.667c0-3.533-2.627-6.36-6.080-6.627zM10.427 20c-0.56 1.533-2.053 2.667-3.76 2.667-2.173 0-4-1.827-4-4s1.827-4 4-4c1.707 0 3.2 1.133 3.76 2.667h-3.76v2.667h3.76zM25.333 22.667c-2.213 0-4-1.787-4-4s1.787-4 4-4 4 1.787 4 4-1.787 4-4 4z"></path></symbol><symbol id="icon-phone" viewBox="0 0 32 32"><title>phone</title><path d="M8.827 14.387c1.92 3.773 5.013 6.853 8.787 8.787l2.933-2.933c0.36-0.36 0.893-0.48 1.36-0.32 1.493 0.493 3.107 0.76 4.76 0.76 0.733 0 1.333 0.6 1.333 1.333v4.653c0 0.733-0.6 1.333-1.333 1.333-12.52 0-22.667-10.147-22.667-22.667 0-0.733 0.6-1.333 1.333-1.333h4.667c0.733 0 1.333 0.6 1.333 1.333 0 1.667 0.267 3.267 0.76 4.76 0.147 0.467 0.040 0.987-0.333 1.36l-2.933 2.933z"></path></symbol></defs></svg>'
	})

function scrollEffects() {
	var wow = new WOW(
  {
    mobile:       false,       // trigger animations on mobile devices (default is true)
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
function productSlider(animationIn, animationOut, elem, items, navContainer, navText) {
	var arrayPosition = [];
	var arrayOffset = [];
	animationIn = animationIn || 'zoomIn';
	animationOut = animationOut || 'fadeOut';
	elem = elem || '.product__slider';
	items = items || 1;
	navContainer = navContainer || '';
	navText = navText || ['', ''];
	if(elem){
		$(elem).owlCarousel({
			nav: false,
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

function mainMargin() {
	var heightHeader = $('.page-header').innerHeight();
	$('.main').css('margin-top', heightHeader);
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
	var item = $('.menu-hover');

	link.on('mouseenter', function(){
		item.addClass('active animated slideInDown');
	});
	item.on('mouseleave', function(){
		item.removeClass('slideInDown').addClass('slideOutUp');
		setTimeout(function(){
			item.removeClass('active slideOutUp');
		}, 1000);
	});
}

function popup() {
	var btn = $('.popupBtn');
	var item = $('.popup');
	var closeBtn = $('.form__cancel');

	btn.on('click', function(){
		item.fadeIn(400).css('display', 'flex');
		$('body').addClass('overflow');
	});

	closeBtn.on('click', function(){
		item.fadeOut(400);
		$('body').removeClass('overflow');
	});
}

window.onload = function() {
	//scrollEvents
	scrollEffects();

	//other
	phoneMask();
	menuHover();
	popup();

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
	animateHide('.hamburger__wrap', '.menu', 'slideInDown', 'slideOutUp', 'flex');

	//slider(animationIn, animationOut, elem, items, navContainer, navText)
	productSlider();

	//loading
	loading();

	//map
	map();
};

//other
bodyOverflow('.hamburger');
