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
		template: '<svg aria-hidden="true" style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><symbol id="icon-keyboard-arrow-right" viewBox="0 0 32 32"><title>keyboard-arrow-right</title><path d="M11.453 21.787l6.107-6.12-6.107-6.12 1.88-1.88 8 8-8 8z"></path></symbol><symbol id="icon-airport-shuttle" viewBox="0 0 32 32"><title>airport-shuttle</title><path d="M22.667 6.667h-18.667c-1.467 0-2.667 1.187-2.667 2.667v12h2.667c0 2.2 1.787 4 4 4s4-1.8 4-4h7.333c0 2.2 1.787 4 4 4s4-1.8 4-4h3.333v-6.667l-8-8zM4 14.667v-5.333h5.333v5.333h-5.333zM8 23.333c-1.107 0-2-0.893-2-2s0.893-2 2-2 2 0.893 2 2-0.893 2-2 2zM17.333 14.667h-5.333v-5.333h5.333v5.333zM23.333 23.333c-1.107 0-2-0.893-2-2s0.893-2 2-2 2 0.893 2 2-0.893 2-2 2zM20 14.667v-5.333h1.333l5.333 5.333h-6.667z"></path></symbol><symbol id="icon-network-check" viewBox="0 0 32 32"><title>network-check</title><path d="M21.2 6.667c-0.227 0-0.427 0.12-0.547 0.307l-0.093 0.2-6.907 15.533c-0.213 0.387-0.347 0.813-0.347 1.28 0 1.48 1.2 2.68 2.68 2.68 1.28 0 2.36-0.907 2.613-2.12l0.013-0.040 3.253-17.173c0-0.373-0.293-0.667-0.667-0.667zM1.333 12l2.667 2.667c3.84-3.84 9.053-5.44 14.040-4.827l1.587-3.573c-6.44-1.147-13.307 0.76-18.293 5.733zM28 14.667l2.667-2.667c-2.187-2.187-4.733-3.76-7.453-4.76l-0.707 3.76c2 0.827 3.867 2.040 5.493 3.667zM22.667 20l2.667-2.667c-1.067-1.067-2.267-1.893-3.547-2.52l-0.733 3.893c0.56 0.36 1.107 0.787 1.613 1.293zM6.667 17.333l2.667 2.667c1.507-1.507 3.413-2.387 5.373-2.667l1.707-3.84c-3.507-0.107-7.067 1.16-9.747 3.84z"></path></symbol><symbol id="icon-phone" viewBox="0 0 32 32"><title>phone</title><path d="M8.827 14.387c1.92 3.773 5.013 6.853 8.787 8.787l2.933-2.933c0.36-0.36 0.893-0.48 1.36-0.32 1.493 0.493 3.107 0.76 4.76 0.76 0.733 0 1.333 0.6 1.333 1.333v4.653c0 0.733-0.6 1.333-1.333 1.333-12.52 0-22.667-10.147-22.667-22.667 0-0.733 0.6-1.333 1.333-1.333h4.667c0.733 0 1.333 0.6 1.333 1.333 0 1.667 0.267 3.267 0.76 4.76 0.147 0.467 0.040 0.987-0.333 1.36l-2.933 2.933z"></path></symbol><symbol id="icon-portrait" viewBox="0 0 32 32"><title>portrait</title><path d="M16 16.333c1.653 0 3-1.347 3-3s-1.347-3-3-3-3 1.347-3 3 1.347 3 3 3zM22 21.667c0-2-4-3-6-3s-6 1-6 3v1h12v-1zM25.333 4h-18.667c-1.467 0-2.667 1.2-2.667 2.667v18.667c0 1.467 1.2 2.667 2.667 2.667h18.667c1.467 0 2.667-1.2 2.667-2.667v-18.667c0-1.467-1.2-2.667-2.667-2.667zM25.333 25.333h-18.667v-18.667h18.667v18.667z"></path></symbol><symbol id="icon-storage" viewBox="0 0 32 32"><title>storage</title><path d="M2.667 26.667h26.667v-5.333h-26.667v5.333zM5.333 22.667h2.667v2.667h-2.667v-2.667zM2.667 5.333v5.333h26.667v-5.333h-26.667zM8 9.333h-2.667v-2.667h2.667v2.667zM2.667 18.667h26.667v-5.333h-26.667v5.333zM5.333 14.667h2.667v2.667h-2.667v-2.667z"></path></symbol></defs></svg>'
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

//active & siblings off
function activeSiblings(elem) {
	$(elem).on('click', function(){
		$(this).addClass('active').siblings().removeClass('active');
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
	navText = navText || ['<svg class="icon icon-caret-left"><use xlink:href="#icon-caret-left"></use></svg>', '<svg class="icon icon-caret-right"><use xlink:href="#icon-caret-right"></use></svg>'];


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
		console.log(windowWidth);
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

window.onload = function() {
	//scrollEvents
	scrollEffects();
	changeClassOnScroll();

	//other
	bodyOverflow('.hamburger');
	phoneMask();
	resizeFix('.nav');
	productToggle('.product__submit');

	//tabs
	tabs();

	//active toggle
	active('.hamburger');
	active('.hamburger__wrap');

	//activeSiblings

	//Animation
	animate('.hamburger', '.hamburger__line1', 'rotate_in_45', 'rotate_in_45_out');
	animate('.hamburger', '.hamburger__line3', 'rotate_in_-45', 'rotate_in_-45_out');
	animate('.hamburger__wrap', '.hamburger__wrap', 'lightSpeedIn', 'slideInRight');
	//Animation+hide
	animateHide('.hamburger__wrap', '.nav', 'lightSpeedIn', 'lightSpeedOut');

};
