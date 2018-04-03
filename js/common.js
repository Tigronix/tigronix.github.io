"use strict"
//templates
new Vue({
		el: '#global-svg',
		template: '<svg aria-hidden="true" style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><symbol id="icon-map-marker" viewBox="0 0 24 32"><title>map-marker</title><path d="M10.767 31.354c-9.081-13.165-10.767-14.516-10.767-19.354 0-6.627 5.373-12 12-12s12 5.373 12 12c0 4.838-1.686 6.189-10.767 19.354-0.596 0.861-1.871 0.861-2.466 0z"></path></symbol><symbol id="icon-arrow-drop-down" viewBox="0 0 32 32"><title>arrow-drop-down</title><path d="M9.333 13.333l6.667 6.667 6.667-6.667z"></path></symbol><symbol id="icon-arrow-drop-up" viewBox="0 0 32 32"><title>arrow-drop-up</title><path d="M9.333 18.667l6.667-6.667 6.667 6.667z"></path></symbol><symbol id="icon-block" viewBox="0 0 32 32"><title>block</title><path d="M16 2.667c-7.36 0-13.333 5.973-13.333 13.333s5.973 13.333 13.333 13.333 13.333-5.973 13.333-13.333-5.973-13.333-13.333-13.333zM5.333 16c0-5.893 4.773-10.667 10.667-10.667 2.467 0 4.733 0.84 6.533 2.253l-14.947 14.947c-1.413-1.8-2.253-4.067-2.253-6.533zM16 26.667c-2.467 0-4.733-0.84-6.533-2.253l14.947-14.947c1.413 1.8 2.253 4.067 2.253 6.533 0 5.893-4.773 10.667-10.667 10.667z"></path></symbol><symbol id="icon-chat" viewBox="0 0 32 32"><title>chat</title><path d="M26.667 2.667h-21.333c-1.467 0-2.653 1.2-2.653 2.667l-0.013 24 5.333-5.333h18.667c1.467 0 2.667-1.2 2.667-2.667v-16c0-1.467-1.2-2.667-2.667-2.667zM8 12h16v2.667h-16v-2.667zM18.667 18.667h-10.667v-2.667h10.667v2.667zM24 10.667h-16v-2.667h16v2.667z"></path></symbol><symbol id="icon-content-paste" viewBox="0 0 32 32"><title>content-paste</title><path d="M25.333 2.667h-5.573c-0.56-1.547-2.027-2.667-3.76-2.667s-3.2 1.12-3.76 2.667h-5.573c-1.467 0-2.667 1.2-2.667 2.667v21.333c0 1.467 1.2 2.667 2.667 2.667h18.667c1.467 0 2.667-1.2 2.667-2.667v-21.333c0-1.467-1.2-2.667-2.667-2.667zM16 2.667c0.733 0 1.333 0.6 1.333 1.333s-0.6 1.333-1.333 1.333-1.333-0.6-1.333-1.333 0.6-1.333 1.333-1.333zM25.333 26.667h-18.667v-21.333h2.667v4h13.333v-4h2.667v21.333z"></path></symbol><symbol id="icon-done" viewBox="0 0 32 32"><title>done</title><path d="M12 21.6l-5.6-5.6-1.867 1.867 7.467 7.467 16-16-1.867-1.867-14.133 14.133z"></path></symbol><symbol id="icon-payment" viewBox="0 0 32 32"><title>payment</title><path d="M26.667 5.333h-21.333c-1.48 0-2.653 1.187-2.653 2.667l-0.013 16c0 1.48 1.187 2.667 2.667 2.667h21.333c1.48 0 2.667-1.187 2.667-2.667v-16c0-1.48-1.187-2.667-2.667-2.667zM26.667 24h-21.333v-8h21.333v8zM26.667 10.667h-21.333v-2.667h21.333v2.667z"></path></symbol><symbol id="icon-phone-in-talk" viewBox="0 0 32 32"><title>phone-in-talk</title><path d="M26.667 20.667c-1.667 0-3.267-0.267-4.76-0.76-0.467-0.147-0.987-0.040-1.36 0.32l-2.933 2.933c-3.773-1.92-6.867-5-8.787-8.787l2.933-2.947c0.373-0.347 0.48-0.867 0.333-1.333-0.493-1.493-0.76-3.093-0.76-4.76 0-0.733-0.6-1.333-1.333-1.333h-4.667c-0.733 0-1.333 0.6-1.333 1.333 0 12.52 10.147 22.667 22.667 22.667 0.733 0 1.333-0.6 1.333-1.333v-4.667c0-0.733-0.6-1.333-1.333-1.333zM25.333 16h2.667c0-6.627-5.373-12-12-12v2.667c5.16 0 9.333 4.173 9.333 9.333zM20 16h2.667c0-3.68-2.987-6.667-6.667-6.667v2.667c2.213 0 4 1.787 4 4z"></path></symbol><symbol id="icon-place" viewBox="0 0 32 32"><title>place</title><path d="M16 2.667c-5.16 0-9.333 4.173-9.333 9.333 0 7 9.333 17.333 9.333 17.333s9.333-10.333 9.333-17.333c0-5.16-4.173-9.333-9.333-9.333zM16 15.333c-1.84 0-3.333-1.493-3.333-3.333s1.493-3.333 3.333-3.333 3.333 1.493 3.333 3.333-1.493 3.333-3.333 3.333z"></path></symbol><symbol id="icon-radio-button-checked" viewBox="0 0 32 32"><title>radio-button-checked</title><path d="M16 9.333c-3.68 0-6.667 2.987-6.667 6.667s2.987 6.667 6.667 6.667 6.667-2.987 6.667-6.667-2.987-6.667-6.667-6.667zM16 2.667c-7.36 0-13.333 5.973-13.333 13.333s5.973 13.333 13.333 13.333 13.333-5.973 13.333-13.333-5.973-13.333-13.333-13.333zM16 26.667c-5.893 0-10.667-4.773-10.667-10.667s4.773-10.667 10.667-10.667 10.667 4.773 10.667 10.667-4.773 10.667-10.667 10.667z"></path></symbol><symbol id="icon-radio-button-unchecked" viewBox="0 0 32 32"><title>radio-button-unchecked</title><path d="M16 2.667c-7.36 0-13.333 5.973-13.333 13.333s5.973 13.333 13.333 13.333 13.333-5.973 13.333-13.333-5.973-13.333-13.333-13.333zM16 26.667c-5.893 0-10.667-4.773-10.667-10.667s4.773-10.667 10.667-10.667 10.667 4.773 10.667 10.667-4.773 10.667-10.667 10.667z"></path></symbol><symbol id="icon-shopping-basket" viewBox="0 0 32 32"><title>shopping-basket</title><path d="M22.947 12l-5.84-8.747c-0.253-0.373-0.68-0.56-1.107-0.56s-0.853 0.187-1.107 0.573l-5.84 8.733h-6.387c-0.733 0-1.333 0.6-1.333 1.333 0 0.12 0.013 0.24 0.053 0.36l3.387 12.36c0.307 1.12 1.333 1.947 2.56 1.947h17.333c1.227 0 2.253-0.827 2.573-1.947l3.387-12.36 0.040-0.36c0-0.733-0.6-1.333-1.333-1.333h-6.387zM12 12l4-5.867 4 5.867h-8zM16 22.667c-1.467 0-2.667-1.2-2.667-2.667s1.2-2.667 2.667-2.667 2.667 1.2 2.667 2.667-1.2 2.667-2.667 2.667z"></path></symbol><symbol id="icon-star-border" viewBox="0 0 32 32"><title>star-border</title><path d="M29.333 12.32l-9.587-0.827-3.747-8.827-3.747 8.84-9.587 0.813 7.28 6.307-2.187 9.373 8.24-4.973 8.24 4.973-2.173-9.373 7.267-6.307zM16 20.533l-5.013 3.027 1.333-5.707-4.427-3.84 5.84-0.507 2.267-5.373 2.28 5.387 5.84 0.507-4.427 3.84 1.333 5.707-5.027-3.040z"></path></symbol><symbol id="icon-star-half" viewBox="0 0 32 32"><title>star-half</title><path d="M29.333 12.32l-9.587-0.827-3.747-8.827-3.747 8.84-9.587 0.813 7.28 6.307-2.187 9.373 8.24-4.973 8.24 4.973-2.173-9.373 7.267-6.307zM16 20.533v-12.4l2.28 5.387 5.84 0.507-4.427 3.84 1.333 5.707-5.027-3.040z"></path></symbol><symbol id="icon-star" viewBox="0 0 32 32"><title>star</title><path d="M16 23.027l8.24 4.973-2.187-9.373 7.28-6.307-9.587-0.813-3.747-8.84-3.747 8.84-9.587 0.813 7.28 6.307-2.187 9.373z"></path></symbol></defs></svg>'
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
	var arrayPosition = [];
	var arrayOffset = [];
	animationIn = animationIn || 'zoomIn';
	animationOut = animationOut || 'fadeOut';
	elem = elem || '.slider__content';
	items = items || 1;
	navContainer = navContainer || '.slider__nav-arrows';
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
			navText: ['<svg class="icon icon-up"><use xlink:href="#icon-up"></use></svg>', '<svg class="icon icon-down"><use xlink:href="#icon-down"></use></svg>'],
			onInitialized: function(p){
				var arrayItems = $('.slider__item');
				arrayItems.each(function(){
					$('.slider__item:first-child').addClass('active').siblings().removeClass('active');
					var top = $(this).position().top;
					var index = $(this).index();
					arrayPosition[index] = top;
				});
			},
			onChanged: function(p){
				$('.slider__nav').animate({ scrollTop: arrayPosition[p.page.index]}, 300);
				$('.slider__item:eq('+p.page.index+')').addClass('active').siblings().removeClass('active');
			}
		});
		$('.slider__item').on('click', function(){
			var index = $(this).index();

			$(this).addClass('active').siblings().removeClass('active');
			$(elem).trigger('to.owl.carousel', [index]);
		});

		$('.slider__arrows--prev').on('click', function(){
			var index = $(this).index();

			$(elem).trigger('prev.owl.carousel');
		})
		$('.slider__arrows--next').on('click', function(){
			var index = $(this).index();

			$(elem).trigger('next.owl.carousel');
		})

	}
}

function ratingSlider(animationIn, animationOut, elem, items, navContainer, navText) {
	animationIn = animationIn || 'zoomIn';
	animationOut = animationOut || 'fadeOut';
	elem = elem || '.rating__slider';
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
			dotsContainer: '.rating__dots',
			navText: ['', ''],
			responsive: {
				0: {
					items: 1
				},
				768: {
					items: 2
				},
				1025: {
					items: 4
				}
			}
		});
	}
}

function reviewSlider(animationIn, animationOut, elem, items, navContainer, navText) {
	animationIn = animationIn || 'slideInDown';
	animationOut = animationOut || 'slideOutDown';
	elem = elem || '.review__slider';
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
			dotsContainer: '.review__dots',
			navText: ['', ''],
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

function inputFix() {
	var elem = $('.product__input');

	elem.on('click', function(){
		$(this).closest('.product__line').siblings().find(elem).prop('checked', false);
	});
}

function pageHover() {
	$('.page-header__menu').on('mouseenter', function(){
		$('.nav__link-arr').css('opacity', '1');
	});
	$('.page-header__menu').on('mouseleave', function(){
		$('.nav__link-arr').css('opacity', '0');
	});
	$('.nav__link.active').on('mouseenter', function(){
		$('.nav__link-arr').css('opacity', '1');
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
			var cartNumber = $('.cartNumber');
			var cartCount = $('.calcCartCount');

			var summ = parseInt(cartNumber.html()) + parseInt(output.html());
			var valueSumm = 1 + parseInt(cartCount.html());

			cartCount.html(valueSumm);
			cartNumber.html(summ);
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
	inputFix();
	pageHover();

	//calc
	productCalc();

	//tabs
	tabs('.nav');

	//active toggle
	active('.hamburger');
	active('.hamburger__wrap');

	//activeSiblings

	//activeOther


	//Animation
	animate('.hamburger', '.hamburger__line1', 'rotate_in_45', 'rotate_in_45_out');
	animate('.hamburger', '.hamburger__line3', 'rotate_in_-45', 'rotate_in_-45_out');
	//Animation+hide
	animate('.hamburger__wrap', '.nav', 'slideInDown', 'slideOutUp');


	//slider(animationIn, animationOut, elem, items, navContainer, navText)
	slider();
	ratingSlider();
	reviewSlider();
};
