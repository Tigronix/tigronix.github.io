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
		template: '<svg aria-hidden="true" style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><symbol id="icon-send" viewBox="0 0 32 32"><title>send</title><path d="M2.68 28l27.987-12-27.987-12-0.013 9.333 20 2.667-20 2.667z"></path></symbol><symbol id="icon-close" viewBox="0 0 32 32"><title>close</title><path d="M25.333 8.547l-1.88-1.88-7.453 7.453-7.453-7.453-1.88 1.88 7.453 7.453-7.453 7.453 1.88 1.88 7.453-7.453 7.453 7.453 1.88-1.88-7.453-7.453z"></path></symbol><symbol id="icon-location" viewBox="0 0 32 32"><title>location</title><path d="M16 2.667c-5.16 0-9.333 4.173-9.333 9.333 0 7 9.333 17.333 9.333 17.333s9.333-10.333 9.333-17.333c0-5.16-4.173-9.333-9.333-9.333zM16 15.333c-1.84 0-3.333-1.493-3.333-3.333s1.493-3.333 3.333-3.333 3.333 1.493 3.333 3.333-1.493 3.333-3.333 3.333z"></path></symbol><symbol id="icon-arrow-drop-down" viewBox="0 0 32 32"><title>arrow-drop-down</title><path d="M9.333 13.333l6.667 6.667 6.667-6.667z"></path></symbol><symbol id="icon-add-shopping-cart" viewBox="0 0 32 32"><title>add-shopping-cart</title><path d="M14.667 12h2.667v-4h4v-2.667h-4v-4h-2.667v4h-4v2.667h4v4zM9.333 24c-1.467 0-2.653 1.2-2.653 2.667s1.187 2.667 2.653 2.667 2.667-1.2 2.667-2.667-1.2-2.667-2.667-2.667zM22.667 24c-1.467 0-2.653 1.2-2.653 2.667s1.187 2.667 2.653 2.667 2.667-1.2 2.667-2.667-1.2-2.667-2.667-2.667zM9.56 19.667l0.040-0.16 1.2-2.173h9.933c1 0 1.88-0.547 2.333-1.373l5.147-9.347-2.32-1.28h-0.013l-1.467 2.667-3.68 6.667h-9.36l-0.173-0.36-2.987-6.307-1.267-2.667-1.253-2.667h-4.36v2.667h2.667l4.8 10.12-1.8 3.267c-0.213 0.373-0.333 0.813-0.333 1.28 0 1.467 1.2 2.667 2.667 2.667h16v-2.667h-15.44c-0.173 0-0.333-0.147-0.333-0.333z"></path></symbol><symbol id="icon-arrow-back" viewBox="0 0 32 32"><title>arrow-back</title><path d="M26.667 14.667h-16.227l7.453-7.453-1.893-1.88-10.667 10.667 10.667 10.667 1.88-1.88-7.44-7.453h16.227v-2.667z"></path></symbol><symbol id="icon-arrow-drop-up" viewBox="0 0 32 32"><title>arrow-drop-up</title><path d="M9.333 18.667l6.667-6.667 6.667 6.667z"></path></symbol><symbol id="icon-arrow-forward" viewBox="0 0 32 32"><title>arrow-forward</title><path d="M16 5.333l-1.88 1.88 7.44 7.453h-16.227v2.667h16.227l-7.44 7.453 1.88 1.88 10.667-10.667z"></path></symbol><symbol id="icon-check-box" viewBox="0 0 32 32"><title>check-box</title><path d="M25.333 4h-18.667c-1.48 0-2.667 1.2-2.667 2.667v18.667c0 1.467 1.187 2.667 2.667 2.667h18.667c1.48 0 2.667-1.2 2.667-2.667v-18.667c0-1.467-1.187-2.667-2.667-2.667zM13.333 22.667l-6.667-6.667 1.88-1.88 4.787 4.773 10.12-10.12 1.88 1.893-12 12z"></path></symbol><symbol id="icon-contacts" viewBox="0 0 32 32"><title>contacts</title><path d="M26.667 0h-21.333v2.667h21.333v-2.667zM5.333 32h21.333v-2.667h-21.333v2.667zM26.667 5.333h-21.333c-1.467 0-2.667 1.2-2.667 2.667v16c0 1.467 1.2 2.667 2.667 2.667h21.333c1.467 0 2.667-1.2 2.667-2.667v-16c0-1.467-1.2-2.667-2.667-2.667zM16 9c1.653 0 3 1.347 3 3s-1.347 3-3 3-3-1.347-3-3 1.347-3 3-3zM22.667 22.667h-13.333v-2c0-2.227 4.44-3.333 6.667-3.333s6.667 1.107 6.667 3.333v2z"></path></symbol><symbol id="icon-credit-card" viewBox="0 0 32 32"><title>credit-card</title><path d="M26.667 5.333h-21.333c-1.48 0-2.653 1.187-2.653 2.667l-0.013 16c0 1.48 1.187 2.667 2.667 2.667h21.333c1.48 0 2.667-1.187 2.667-2.667v-16c0-1.48-1.187-2.667-2.667-2.667zM26.667 24h-21.333v-8h21.333v8zM26.667 10.667h-21.333v-2.667h21.333v2.667z"></path></symbol><symbol id="icon-done" viewBox="0 0 32 32"><title>done</title><path d="M12 21.6l-5.6-5.6-1.867 1.867 7.467 7.467 16-16-1.867-1.867-14.133 14.133z"></path></symbol><symbol id="icon-grade" viewBox="0 0 32 32"><title>grade</title><path d="M16 23.027l8.24 4.973-2.187-9.373 7.28-6.307-9.587-0.813-3.747-8.84-3.747 8.84-9.587 0.813 7.28 6.307-2.187 9.373z"></path></symbol><symbol id="icon-keyboard-arrow-down" viewBox="0 0 32 32"><title>keyboard-arrow-down</title><path d="M9.88 10.453l6.12 6.107 6.12-6.107 1.88 1.88-8 8-8-8z"></path></symbol><symbol id="icon-moon" viewBox="0 0 32 32"><title>moon</title><path d="M17.446 32c4.922 0 9.436-2.238 12.428-5.923 1.767-2.177-0.16-5.358-2.891-4.838-5.147 0.98-9.892-2.954-9.892-8.175 0-3.027 1.629-5.768 4.215-7.24 2.422-1.378 1.812-5.049-0.939-5.557-0.878-0.17-1.888-0.267-2.921-0.267h-0c-8.835 0-16 7.161-16 16 0 8.835 7.161 16 16 16zM17.446 3c0.812 0 1.606 0.075 2.376 0.217-3.422 1.948-5.731 5.628-5.731 9.847 0 7.115 6.478 12.45 13.453 11.121-2.384 2.937-6.021 4.814-10.098 4.814-7.18 0-13-5.82-13-13s5.82-13 13-13z"></path></symbol><symbol id="icon-motorcycle" viewBox="0 0 32 32"><title>motorcycle</title><path d="M25.92 12.040l-5.373-5.373h-5.88v2.667h4.787l2.667 2.667h-15.453c-3.733 0-6.667 2.933-6.667 6.667s2.933 6.667 6.667 6.667c3.28 0 5.933-2.253 6.533-5.333h2.2l3.693-3.693c-0.28 0.72-0.427 1.52-0.427 2.36 0 3.733 2.933 6.667 6.667 6.667s6.667-2.933 6.667-6.667c0-3.533-2.627-6.36-6.080-6.627zM10.427 20c-0.56 1.533-2.053 2.667-3.76 2.667-2.173 0-4-1.827-4-4s1.827-4 4-4c1.707 0 3.2 1.133 3.76 2.667h-3.76v2.667h3.76zM25.333 22.667c-2.213 0-4-1.787-4-4s1.787-4 4-4 4 1.787 4 4-1.787 4-4 4z"></path></symbol><symbol id="icon-percent" viewBox="0 0 28 32"><title>percent</title><path d="M7 14c3.869 0 7-3.131 7-7s-3.131-7-7-7-7 3.131-7 7 3.131 7 7 7zM7 4c1.656 0 3 1.344 3 3s-1.344 3-3 3-3-1.344-3-3 1.344-3 3-3zM21 18c-3.869 0-7 3.131-7 7s3.131 7 7 7 7-3.131 7-7-3.131-7-7-7zM21 28c-1.656 0-3-1.344-3-3s1.344-3 3-3 3 1.344 3 3-1.344 3-3 3zM24.519 0.013l1.975-0.006c1.212-0.006 1.931 1.363 1.231 2.362l-22.887 28.981c-0.274 0.387-0.72 0.637-1.225 0.637h-0l-2.087 0.006c-1.219 0-1.931-1.369-1.231-2.363l23-28.981c0.281-0.4 0.738-0.637 1.225-0.637z"></path></symbol><symbol id="icon-phone-forwarded" viewBox="0 0 32 32"><title>phone-forwarded</title><path d="M24 14.667l6.667-6.667-6.667-6.667v4h-5.333v5.333h5.333v4zM26.667 20.667c-1.667 0-3.267-0.267-4.76-0.76-0.467-0.147-0.987-0.040-1.36 0.32l-2.933 2.933c-3.773-1.92-6.867-5-8.787-8.787l2.933-2.947c0.373-0.347 0.48-0.867 0.333-1.333-0.493-1.493-0.76-3.093-0.76-4.76 0-0.733-0.6-1.333-1.333-1.333h-4.667c-0.733 0-1.333 0.6-1.333 1.333 0 12.52 10.147 22.667 22.667 22.667 0.733 0 1.333-0.6 1.333-1.333v-4.667c0-0.733-0.6-1.333-1.333-1.333z"></path></symbol><symbol id="icon-query-builder" viewBox="0 0 32 32"><title>query-builder</title><path d="M15.987 2.667c-7.36 0-13.32 5.973-13.32 13.333s5.96 13.333 13.32 13.333c7.373 0 13.347-5.973 13.347-13.333s-5.973-13.333-13.347-13.333zM16 26.667c-5.893 0-10.667-4.773-10.667-10.667s4.773-10.667 10.667-10.667 10.667 4.773 10.667 10.667-4.773 10.667-10.667 10.667z"></path><path d="M16.667 9.333h-2v8l7 4.2 1-1.64-6-3.56z"></path></symbol><symbol id="icon-room" viewBox="0 0 32 32"><title>room</title><path d="M16 2.667c-5.16 0-9.333 4.173-9.333 9.333 0 7 9.333 17.333 9.333 17.333s9.333-10.333 9.333-17.333c0-5.16-4.173-9.333-9.333-9.333zM16 15.333c-1.84 0-3.333-1.493-3.333-3.333s1.493-3.333 3.333-3.333 3.333 1.493 3.333 3.333-1.493 3.333-3.333 3.333z"></path></symbol><symbol id="icon-ruble-sign" viewBox="0 0 24 32"><title>ruble-sign</title><path d="M14.96 20c5.32 0 9.040-3.716 9.040-9.058s-3.72-8.942-9.040-8.942h-10.21c-0.414 0-0.75 0.336-0.75 0.75v12.915h-3.25c-0.414 0-0.75 0.336-0.75 0.75v2.835c0 0.414 0.336 0.75 0.75 0.75h3.25v2h-3.25c-0.414 0-0.75 0.336-0.75 0.75v2.5c0 0.414 0.336 0.75 0.75 0.75h3.25v3.25c0 0.414 0.336 0.75 0.75 0.75h3.66c0.414 0 0.75-0.336 0.75-0.75v-3.25h10.090c0.414 0 0.75-0.336 0.75-0.75v-2.5c0-0.414-0.336-0.75-0.75-0.75h-10.090v-2h5.8zM9.16 6.297h4.92c2.92 0 4.68 1.819 4.68 4.645 0 2.864-1.76 4.723-4.76 4.723h-4.84v-9.368z"></path></symbol><symbol id="icon-settings-phone" viewBox="0 0 32 32"><title>settings-phone</title><path d="M17.333 12h-2.667v2.667h2.667v-2.667zM22.667 12h-2.667v2.667h2.667v-2.667zM26.667 20.667c-1.667 0-3.267-0.267-4.76-0.76-0.467-0.147-0.987-0.040-1.36 0.32l-2.933 2.933c-3.773-1.92-6.867-5-8.787-8.773l2.933-2.947c0.373-0.36 0.48-0.88 0.333-1.347-0.493-1.493-0.76-3.093-0.76-4.76 0-0.733-0.6-1.333-1.333-1.333h-4.667c-0.733 0-1.333 0.6-1.333 1.333 0 12.52 10.147 22.667 22.667 22.667 0.733 0 1.333-0.6 1.333-1.333v-4.667c0-0.733-0.6-1.333-1.333-1.333zM25.333 12v2.667h2.667v-2.667h-2.667z"></path></symbol><symbol id="icon-shopping-basket" viewBox="0 0 32 32"><title>shopping-basket</title><path d="M22.947 12l-5.84-8.747c-0.253-0.373-0.68-0.56-1.107-0.56s-0.853 0.187-1.107 0.573l-5.84 8.733h-6.387c-0.733 0-1.333 0.6-1.333 1.333 0 0.12 0.013 0.24 0.053 0.36l3.387 12.36c0.307 1.12 1.333 1.947 2.56 1.947h17.333c1.227 0 2.253-0.827 2.573-1.947l3.387-12.36 0.040-0.36c0-0.733-0.6-1.333-1.333-1.333h-6.387zM12 12l4-5.867 4 5.867h-8zM16 22.667c-1.467 0-2.667-1.2-2.667-2.667s1.2-2.667 2.667-2.667 2.667 1.2 2.667 2.667-1.2 2.667-2.667 2.667z"></path></symbol><symbol id="icon-star-half" viewBox="0 0 32 32"><title>star-half</title><path d="M29.333 12.32l-9.587-0.827-3.747-8.827-3.747 8.84-9.587 0.813 7.28 6.307-2.187 9.373 8.24-4.973 8.24 4.973-2.173-9.373 7.267-6.307zM16 20.533v-12.4l2.28 5.387 5.84 0.507-4.427 3.84 1.333 5.707-5.027-3.040z"></path></symbol><symbol id="icon-star" viewBox="0 0 32 32"><title>star</title><path d="M16 23.027l8.24 4.973-2.187-9.373 7.28-6.307-9.587-0.813-3.747-8.84-3.747 8.84-9.587 0.813 7.28 6.307-2.187 9.373z"></path></symbol></defs></svg>'
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
function carousel(animationIn, animationOut, elem) {
	elem = elem || '.carousel__slider';
	animationIn = animationIn || 'fadeIn';
	animationOut = animationOut || 'fadeOut';
	if($('*').is(elem)){
		$(elem).owlCarousel({
			loop: true,
			nav: true,
			items: 4,
			dots: true,
			dotsEach: true,
			dotsContainer: '.carousel__dots',
			mouseDrag: false,
			touchDrag: false,
			pullDrag: false,
			freeDrag: false,
			responsive: {
				0: {
					items: 1
				},
				768: {
					items: 2
				},
				1024: {
					items: 3
				},
				1400: {
					items: 1
				}
			}
		});
	}
}

function carousel2(animationIn, animationOut, elem) {
	elem = elem || '.certifications__carousel';
	animationIn = animationIn || 'fadeIn';
	animationOut = animationOut || 'fadeOut';
	if($('*').is(elem)){
		$(elem).owlCarousel({
			loop: true,
			nav: true,
			items: 5,
			dots: true,
			dotsEach: true,
			dotsContainer: '.carousel__dots2',
			responsive: {
				0: {
					items: 1
				},
				420: {
					items: 2
				},
				768: {
					items: 3
				},
				1281: {
					items: 4
				},
				1601: {
					items: 5
				}
			}
		});
	}
}

function carousel3(animationIn, animationOut, elem) {
	elem = elem || '.partner-slider';
	animationIn = animationIn || 'fadeIn';
	animationOut = animationOut || 'fadeOut';
	if($('*').is(elem)){
		$(elem).owlCarousel({
			loop: true,
			nav: true,
			items: 7,
			dots: false,
			navText: ['<svg class="icon icon-arrow-back"><use xlink:href="#icon-arrow-back"></use></svg>', '<svg class="icon icon-arrow-forward"><use xlink:href="#icon-arrow-forward"></use></svg>'],
			responsive: {
				0: {
					items: 1
				},
				500: {
					items: 2
				},
				768: {
					items: 3
				},
				1024: {
					items: 4
				},
				1280: {
					items: 5
				},
				1440: {
					items: 6
				},
				1600: {
					items: 7
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

// +/- для input-number. имитация input:type[number]
function catalogItemCounter(field, container){

			var fieldCount = function(el) {
				var elContainer = (el.closest(container));
				var
					min = el.data('min') || false,
					max = el.data('max') || false,
					dec = elContainer.find('.dec'),
					inc = elContainer.find('.inc');
				function init(el) {
					if(!el.attr('disabled')){
						dec.on('click', decrement);
						inc.on('click', increment);
					}

					// Уменьшим значение
					function decrement() {
						var value = parseInt(el[0].value);
						value--;
						if(!min || value >= min) {
							el[0].value = value;
						}
					};

					// Увеличим значение
					function increment() {
						var value = parseInt(el[0].value);

						value++;

						if(!max || value <= max) {
							el[0].value = value++;
						}
					};
				}


				el.each(function() {
					init($(this));
				});
			};

			$(field).each(function(){
				fieldCount($(this));
				function calcPrice() {
						var value = parseInt($(this));
					};
			});
		}

//начало пересчёт цены товара
function calcTotal() {
	var summTotal = document.querySelector('.backet__summ');
	var itemsSumm = document.querySelectorAll('.itemSumm');
	var total = document.querySelector('.backet__total');
	var sum = 0;
	var sumArray = [];
	itemsSumm.forEach(function(item, index, value){
		var number = parseInt(item.textContent);
		sumArray.push(number);
	});
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

function summPrice(elem) {
	$('.product__btn').on('click', function(){
		var elContainer = $(this).closest(elem);
		var price = elContainer.find('.itemSumm');
		var output = elContainer.find('.fieldCount');
		var dec = elContainer.find('.dec');
		var inc = elContainer.find('.inc');
		var value = parseInt($(output).val());

		if($(this).hasClass('dec')){
			--value;
		}else if($(this).hasClass('inc')){
			++value;
		}
		if($(this).hasClass('dec')){
			if(value <= 1){
				$(this).attr('disabled', '');
			}
		}
		if($(this).hasClass('inc')){
			if(value > 1){
				$(dec).attr('disabled', false);
			}
		}
		var summ = parseInt(price.data('summ')) * value;
		price.html(summ);


		calcTotal();
	});
	$('.fieldCount').on('keyup', function(){
		var elContainer = $(this).closest(elem);
		var price = elContainer.find('.itemSumm');
		var dec = elContainer.find('.dec');
		var inc = elContainer.find('.inc');
		var value = parseInt($(this).val());
		var summ = value * parseInt(price.data('summ'))
		if(value <= 1){
			dec.attr('disabled', '');
			price.html(summ);
		}else{
			price.html(summ);
			dec.attr('disabled', false);
		}
		if(value <= 0) {
			var dataValue = price.data('summ');
			price.html(0);
		}
		calcTotal()
	});
	var test = document.querySelectorAll('.backet__tr--content');
	var owl = $('.owl-carousel');
	if(owl){
		owl.on('initialize.owl.carousel', function(event) {
			backetOnload();
			calcWeight();
		})
	}
	function backetOnload(){
		var itemContainer = document.querySelectorAll(elem);
		itemContainer.forEach(function(item, index, array){
			var itemSumm = item.querySelector('.fieldCount');
			if(itemSumm){
				var itemValue = item.querySelector('.itemSumm');
				var summ = itemSumm.getAttribute('value') * itemValue.dataset.summ;
				itemValue.textContent = summ;
			}
		});
	}
	backetOnload();
	$('.backet__close').on('click', function(){
		var elContainer = $(this).closest(elem);
		var itemValue = elContainer.find('.itemSumm');
		itemValue.html('0');
		elContainer.hide(400);
		calcTotal()
	});

	function calcWeight() {
		var elContainer = document.querySelectorAll(elem);
		elContainer.forEach(function(item, index, array){
			var weightItems = item.querySelectorAll('.check-wrap__input');
			weightItems.forEach(function(item, index, array){
				function calc(){
					if(item.checked){
						console.log(this);
					}
				}
				item.addEventListener('click', calc);
			});
		});
	}

	calcTotal()
}//конец пересчёт цены товара

window.onload = function() {
	//scollEvents
	scrollEffects();
	changeClassOnScroll();

	//other
	bodyOverflow('.hamburger');
	summPrice('.backet__tr--content');
	catalogItemCounter('.fieldCount', '.backet__tr--content');
	summPrice('.carousel__item');
	catalogItemCounter('.fieldCount', '.carousel__item');

	//active toggle
	active('.hamburger');

	//Animation
	animate('.hamburger', '.hamburger__line1', 'rotate_in_45', 'rotate_in_45_out');
	animate('.hamburger', '.hamburger__line3', 'rotate_in_-45', 'rotate_in_-45_out');
	//Animation+hide
	animateHide('.hamburger', '.menu', 'slideInDown', 'slideOutUp');

	//slider
	carousel();
	carousel2();
	carousel3();
	phoneMask();
};
