"use strict"
//templates
new Vue({
		el: '#global-svg',
		template: '<svg aria-hidden="true" style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><symbol id="icon-ruble-sign" viewBox="0 0 24 32"><title>ruble-sign</title><path d="M14.96 20c5.32 0 9.040-3.716 9.040-9.058s-3.72-8.942-9.040-8.942h-10.21c-0.414 0-0.75 0.336-0.75 0.75v12.915h-3.25c-0.414 0-0.75 0.336-0.75 0.75v2.835c0 0.414 0.336 0.75 0.75 0.75h3.25v2h-3.25c-0.414 0-0.75 0.336-0.75 0.75v2.5c0 0.414 0.336 0.75 0.75 0.75h3.25v3.25c0 0.414 0.336 0.75 0.75 0.75h3.66c0.414 0 0.75-0.336 0.75-0.75v-3.25h10.090c0.414 0 0.75-0.336 0.75-0.75v-2.5c0-0.414-0.336-0.75-0.75-0.75h-10.090v-2h5.8zM9.16 6.297h4.92c2.92 0 4.68 1.819 4.68 4.645 0 2.864-1.76 4.723-4.76 4.723h-4.84v-9.368z"></path></symbol><symbol id="icon-android" viewBox="0 0 32 32"><title>android</title><path d="M8 24c0 0.733 0.6 1.333 1.333 1.333h1.333v4.667c0 1.107 0.893 2 2 2s2-0.893 2-2v-4.667h2.667v4.667c0 1.107 0.893 2 2 2s2-0.893 2-2v-4.667h1.333c0.733 0 1.333-0.6 1.333-1.333v-13.333h-16v13.333zM4.667 10.667c-1.107 0-2 0.893-2 2v9.333c0 1.107 0.893 2 2 2s2-0.893 2-2v-9.333c0-1.107-0.893-2-2-2zM27.333 10.667c-1.107 0-2 0.893-2 2v9.333c0 1.107 0.893 2 2 2s2-0.893 2-2v-9.333c0-1.107-0.893-2-2-2zM20.707 2.88l1.733-1.733c0.267-0.267 0.267-0.68 0-0.947s-0.68-0.267-0.947 0l-1.973 1.973c-1.053-0.533-2.253-0.84-3.52-0.84-1.28 0-2.48 0.307-3.547 0.84l-1.987-1.973c-0.267-0.267-0.68-0.267-0.947 0s-0.267 0.68 0 0.947l1.747 1.747c-1.973 1.453-3.267 3.787-3.267 6.44h16c0-2.653-1.293-5-3.293-6.453zM13.333 6.667h-1.333v-1.333h1.333v1.333zM20 6.667h-1.333v-1.333h1.333v1.333z"></path></symbol><symbol id="icon-dehaze" viewBox="0 0 32 32"><title>dehaze</title><path d="M2.667 20.667v2.667h26.667v-2.667h-26.667zM2.667 14v2.667h26.667v-2.667h-26.667zM2.667 7.333v2.667h26.667v-2.667h-26.667z"></path></symbol><symbol id="icon-favorite-border" viewBox="0 0 32 32"><title>favorite-border</title><path d="M22 4c-2.32 0-4.547 1.080-6 2.787-1.453-1.707-3.68-2.787-6-2.787-4.107 0-7.333 3.227-7.333 7.333 0 5.040 4.533 9.147 11.4 15.387l1.933 1.747 1.933-1.76c6.867-6.227 11.4-10.333 11.4-15.373 0-4.107-3.227-7.333-7.333-7.333zM16.133 24.733l-0.133 0.133-0.133-0.133c-6.347-5.747-10.533-9.547-10.533-13.4 0-2.667 2-4.667 4.667-4.667 2.053 0 4.053 1.32 4.76 3.147h2.493c0.693-1.827 2.693-3.147 4.747-3.147 2.667 0 4.667 2 4.667 4.667 0 3.853-4.187 7.653-10.533 13.4z"></path></symbol><symbol id="icon-ic_radio_button_unchecked_black_24px" viewBox="0 0 32 32"><title>ic_radio_button_unchecked_black_24px</title><path d="M16 2.667c-7.36 0-13.333 5.973-13.333 13.333s5.973 13.333 13.333 13.333 13.333-5.973 13.333-13.333-5.973-13.333-13.333-13.333zM16 26.667c-5.893 0-10.667-4.773-10.667-10.667s4.773-10.667 10.667-10.667 10.667 4.773 10.667 10.667-4.773 10.667-10.667 10.667z"></path></symbol><symbol id="icon-radio-button-checked" viewBox="0 0 32 32"><title>radio-button-checked</title><path d="M16 9.333c-3.68 0-6.667 2.987-6.667 6.667s2.987 6.667 6.667 6.667 6.667-2.987 6.667-6.667-2.987-6.667-6.667-6.667zM16 2.667c-7.36 0-13.333 5.973-13.333 13.333s5.973 13.333 13.333 13.333 13.333-5.973 13.333-13.333-5.973-13.333-13.333-13.333zM16 26.667c-5.893 0-10.667-4.773-10.667-10.667s4.773-10.667 10.667-10.667 10.667 4.773 10.667 10.667-4.773 10.667-10.667 10.667z"></path></symbol></defs></svg>'
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
    var elem = $('.parallax__container');
    var height = elem.innerHeight();
    var top = $(this).scrollTop();
    if (top > 828) {
      elem.addClass('parallax__container--off');
    } else {
      elem.removeClass('parallax__container--off');
    }
		if (screen.width <= 1440) {
			if (top > 626) {
	      elem.addClass('parallax__container--off');
	    } else {
	      elem.removeClass('parallax__container--off');
	    }
		}
		if (screen.width <= 1280) {
			if (top > 556) {
	      elem.addClass('parallax__container--off');
	    } else {
	      elem.removeClass('parallax__container--off');
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
	elem = elem || '.slider__content';
	items = items || 1;
	navContainer = navContainer || '';
	navText = navText || ['<svg class="icon icon-keyboard-arrow-left"><use xlink:href="#icon-keyboard-arrow-left"></use></svg>', '<svg class="icon icon-keyboard_arrow_right"><use xlink:href="#icon-keyboard_arrow_right"></use></svg>'];


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
			dots: false
		});
	}
}

//spincrement
function spincrement() {
	var elem = $('.spincrement');
	if(elem){
		$(".spincrement").spincrement();
		var show = true;
		var countbox = ".stats";
		$(window).on("scroll load resize", function () {
			if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
			var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
			var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
			var w_height = $(window).height(); // Высота окна браузера
			var d_height = $(document).height(); // Высота всего документа
			var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
			if (w_top + 400 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
				$(".spincrement").spincrement({
					thousandSeparator: ""
					, duration: 3000
				});
				show = false;
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

//tabsNav
function tabsNav() {
	var containers = document.querySelectorAll('.choose__roomNav-wrap');
	containers.forEach(function(item, index, array){
		var prev = item.querySelector('.choose__roomNav-btn--prev');
		var next = item.querySelector('.choose__roomNav-btn--next');
		var navItems = item.querySelector('.choose__roomNav').childNodes;
		var navitemFirst = navItems[1];
		var navitemLast = navItems[7];

		function tabsPrev() {
			var navItemActive = item.querySelector('.choose__roomNav-item.active');
			var navItemPrev = navItemActive.previousElementSibling;

			navItemActive.classList.remove('active');
			if(navItemPrev){
				var itemDataClass = navItemPrev.getAttribute('data-tabclass');
				var itemDataNumber = navItemPrev.getAttribute('data-tabnumber');
				var tabContent = item.nextElementSibling.querySelectorAll('.choose__room-item');

				tabContent.forEach(function(item, index, array) {
					var itemContentNumber = item.getAttribute('data-tabnumber');
					item.style.display = 'none';

					if(itemContentNumber == itemDataNumber){
						item.style.display = 'block';
						item.classList.add('animated');
					}
				});

				navItemPrev.classList.add('active');
			}else{
				navitemFirst.classList.add('active');
			}
		}
		function tabsNext() {
			var navItemActive = item.querySelector('.choose__roomNav-item.active');
			var navItemNext = navItemActive.nextElementSibling;

			navItemActive.classList.remove('active');
			if(navItemNext){
				var itemDataClass = navItemNext.getAttribute('data-tabclass');
				var itemDataNumber = navItemNext.getAttribute('data-tabnumber');

				var tabContent = item.nextElementSibling.querySelectorAll('.choose__room-item');
				tabContent.forEach(function(item, index, array) {
					var itemContentNumber = item.getAttribute('data-tabnumber');
					item.style.display = 'none';

					if(itemContentNumber == itemDataNumber){
						item.style.display = 'block';
						item.classList.add('animated');
					}
				});

				navItemNext.classList.add('active');
			}else{
				navitemLast.classList.add('active');
			}
		}

		prev.addEventListener('click', tabsPrev);
		next.addEventListener('click', tabsNext);
	});
}

//resizeFix
function resizeFix(elem) {
	$(window).on('resize', function(){
		var windowWidth = $(window).width();
		if(windowWidth > 1024){
			$(elem).show().removeClass('animated');
		}else {
			$(elem).addClass('animated');
		}
	});
}

//productToggle
function productToggle(elem) {
	$(elem).on('click', function(){
		var target = $(this).closest('.product__buy').find('.product__calc');

		$(this).addClass('animated fadeOut');
		$(target).show().addClass('animated slideInUp');
	});
}

//menuHover
function menuHover() {
	var menuDrop = $('.menu__drop');
	var menuItem = $('.menu__item');
	var menuLink = $('.menu__link');

	$('[data-item]').mouseenter(function(){
		var itemData = $(this).data('item');
		menuLink.each(function(){
			var linkData = $(this).data('item');

			if(linkData == itemData){
				$(this).addClass('active');
			}
		});
	});

	$('[data-item]').mouseleave(function(){
		var itemData = $(this).data('item');
		menuLink.each(function(){
			var linkData = $(this).data('item');

			if(linkData == itemData){
				$(this).removeClass('active');
			}
		});
	});
}

//productCalc
function productCalc() {
	var btn = $('.product__btn');
	var btnWeight = $('.product__checkbox');
	var btnCart = $('.product__cart');
	var cartTotal = $('.cartNumber');
	var itemPop = $('.popular__item');
	var calcCartCount = $('.calcCartCount')

	$(itemPop).on('click', function(){
		var number = parseInt($(this).find('.popPrice').html());
		var cartNumber = parseInt($(cartTotal).html());
		var cartCalc = number + cartNumber;

		var cartCount = parseInt(calcCartCount.html());
		var summCartCount = 1 + cartCount;

		cartTotal.html(cartCalc);
		calcCartCount.html(summCartCount);
	});

	$(btnCart).on('click', function(){
		var number = parseInt($(this).closest('.product').find('.productNumber').html());
		var cartNumber = parseInt($(cartTotal).html());
		var cartCalc = number + cartNumber;

		var count = parseInt($(this).closest('.product').find('.product__number').html());
		var cartCount = parseInt(calcCartCount.html());
		var summCartCount = count + cartCount;

		cartTotal.html(cartCalc);
		calcCartCount.html(summCartCount);
	});

	$(btnWeight).on('click', function(){
		var number = $(this).data('number');
		var price = $(this).closest('.product__weight').find('.productNumber');
		var output = $(this).closest('.product__content').find('.product__number');

		price.html(number);
		output.html(1);
	});

	$(btn).on('click', function(){
		var output = $(this).closest('div').find('.product__number');
		var number = parseInt($(this).closest('div').find('.product__number').html());
		var price = $(this).closest('.product').find('.productNumber');
		var priceNumber = parseInt($(this).closest('.product').find('.product__checkbox:checked').data('number'));

		if($(this).hasClass('btnDec')){
			--number
		}else if($(this).hasClass('btnInc')){
			++number
		}

		if(number <= 1){
			number = 1;
		}

		var summPrice = priceNumber * number;

		price.html(summPrice);
		output.html(number);
	});
}

function inputFix() {
	var elem = $('.product__checkbox');

	elem.on('click', function(){
		$(this).closest('.product__inp-box').siblings().find(elem).prop('checked', false);
	});
}

window.onload = function() {
	//scrollEvents
	scrollEffects();
	changeClassOnScroll();

	//other
	bodyOverflow('.hamburger');
	phoneMask();
	menuHover();
	productCalc();
	inputFix();

	//tabs
	tabs();

	//active toggle
	active('.hamburger');

	//activeSiblings

	//activeOther
	activerOther('.hamburger__wrap', '.menu__drop');

	//Animation
	animate('.hamburger', '.hamburger__line1', 'rotate_in_45', 'rotate_in_45_out');
	animate('.hamburger', '.hamburger__line3', 'rotate_in_-45', 'rotate_in_-45_out');
	//Animation+hide
	animate('.hamburger__wrap', '.menu__drop', 'lightSpeedIn--menu', 'lightSpeedOut--menu');

	//slider(animationIn, animationOut, elem, items, navContainer, navText)

};
