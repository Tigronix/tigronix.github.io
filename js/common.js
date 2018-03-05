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
		template: '<svg aria-hidden="true" style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><symbol id="icon-access-alarm" viewBox="0 0 20 20"><title>access-alarm</title><path d="M18.333 4.767l-3.833-3.217-1.075 1.275 3.833 3.217 1.075-1.275zM6.567 2.825l-1.067-1.275-3.833 3.208 1.075 1.275 3.825-3.208zM10.417 6.667h-1.25v5l3.958 2.375 0.625-1.025-3.333-1.975v-4.375zM10 3.333c-4.142 0-7.5 3.358-7.5 7.5s3.35 7.5 7.5 7.5c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5zM10 16.667c-3.225 0-5.833-2.608-5.833-5.833s2.608-5.833 5.833-5.833 5.833 2.608 5.833 5.833-2.608 5.833-5.833 5.833z"></path></symbol><symbol id="icon-access-time" viewBox="0 0 20 20"><title>access-time</title><path d="M9.992 1.667c-4.6 0-8.325 3.733-8.325 8.333s3.725 8.333 8.325 8.333c4.608 0 8.342-3.733 8.342-8.333s-3.733-8.333-8.342-8.333zM10 16.667c-3.683 0-6.667-2.983-6.667-6.667s2.983-6.667 6.667-6.667 6.667 2.983 6.667 6.667-2.983 6.667-6.667 6.667z"></path><path d="M10.417 5.833h-1.25v5l4.375 2.625 0.625-1.025-3.75-2.225z"></path></symbol><symbol id="icon-arrow-back" viewBox="0 0 20 20"><title>arrow-back</title><path d="M16.667 9.167h-10.142l4.658-4.658-1.183-1.175-6.667 6.667 6.667 6.667 1.175-1.175-4.65-4.658h10.142v-1.667z"></path></symbol><symbol id="icon-arrow-forward" viewBox="0 0 20 20"><title>arrow-forward</title><path d="M10 3.333l-1.175 1.175 4.65 4.658h-10.142v1.667h10.142l-4.65 4.658 1.175 1.175 6.667-6.667z"></path></symbol><symbol id="icon-assignment-turned-in" viewBox="0 0 20 20"><title>assignment-turned-in</title><path d="M15.833 2.5h-3.483c-0.35-0.967-1.267-1.667-2.35-1.667s-2 0.7-2.35 1.667h-3.483c-0.917 0-1.667 0.75-1.667 1.667v11.667c0 0.917 0.75 1.667 1.667 1.667h11.667c0.917 0 1.667-0.75 1.667-1.667v-11.667c0-0.917-0.75-1.667-1.667-1.667zM10 2.5c0.458 0 0.833 0.375 0.833 0.833s-0.375 0.833-0.833 0.833-0.833-0.375-0.833-0.833 0.375-0.833 0.833-0.833zM8.333 14.167l-3.333-3.333 1.175-1.175 2.158 2.15 5.492-5.492 1.175 1.183-6.667 6.667z"></path></symbol><symbol id="icon-check" viewBox="0 0 20 20"><title>check</title><path d="M7.5 13.475l-3.475-3.475-1.183 1.175 4.658 4.658 10-10-1.175-1.175z"></path></symbol><symbol id="icon-check_circle" viewBox="0 0 20 20"><title>check_circle</title><path d="M10 1.667c-4.6 0-8.333 3.733-8.333 8.333s3.733 8.333 8.333 8.333 8.333-3.733 8.333-8.333-3.733-8.333-8.333-8.333zM8.333 14.167l-4.167-4.167 1.175-1.175 2.992 2.983 6.325-6.325 1.175 1.183-7.5 7.5z"></path></symbol><symbol id="icon-keyboard-arrow-down" viewBox="0 0 20 20"><title>keyboard-arrow-down</title><path d="M6.175 6.533l3.825 3.817 3.825-3.817 1.175 1.175-5 5-5-5z"></path></symbol><symbol id="icon-keyboard-arrow-left" viewBox="0 0 20 20"><title>keyboard-arrow-left</title><path d="M12.842 13.408l-3.817-3.825 3.817-3.825-1.175-1.175-5 5 5 5z"></path></symbol><symbol id="icon-keyboard_arrow_right" viewBox="0 0 20 20"><title>keyboard_arrow_right</title><path d="M7.158 13.617l3.817-3.825-3.817-3.825 1.175-1.175 5 5-5 5z"></path></symbol><symbol id="icon-location-on" viewBox="0 0 20 20"><title>location-on</title><path d="M10 1.667c-3.225 0-5.833 2.608-5.833 5.833 0 4.375 5.833 10.833 5.833 10.833s5.833-6.458 5.833-10.833c0-3.225-2.608-5.833-5.833-5.833zM10 9.583c-1.15 0-2.083-0.933-2.083-2.083s0.933-2.083 2.083-2.083 2.083 0.933 2.083 2.083-0.933 2.083-2.083 2.083z"></path></symbol><symbol id="icon-message" viewBox="0 0 20 20"><title>message</title><path d="M16.667 1.667h-13.333c-0.917 0-1.658 0.75-1.658 1.667l-0.008 15 3.333-3.333h11.667c0.917 0 1.667-0.75 1.667-1.667v-10c0-0.917-0.75-1.667-1.667-1.667zM15 11.667h-10v-1.667h10v1.667zM15 9.167h-10v-1.667h10v1.667zM15 6.667h-10v-1.667h10v1.667z"></path></symbol><symbol id="icon-person_pin_black" viewBox="0 0 20 20"><title>person_pin_black</title><path d="M15.833 1.667h-11.667c-0.925 0-1.667 0.75-1.667 1.667v11.667c0 0.917 0.742 1.667 1.667 1.667h3.333l2.5 2.5 2.5-2.5h3.333c0.917 0 1.667-0.75 1.667-1.667v-11.667c0-0.917-0.75-1.667-1.667-1.667zM10 4.417c1.242 0 2.25 1.008 2.25 2.25s-1.008 2.25-2.25 2.25c-1.242 0-2.25-1.008-2.25-2.25s1.008-2.25 2.25-2.25zM15 13.333h-10v-0.75c0-1.667 3.333-2.583 5-2.583s5 0.917 5 2.583v0.75z"></path></symbol><symbol id="icon-settings-phone" viewBox="0 0 20 20"><title>settings-phone</title><path d="M10.833 7.5h-1.667v1.667h1.667v-1.667zM14.167 7.5h-1.667v1.667h1.667v-1.667zM16.667 12.917c-1.042 0-2.042-0.167-2.975-0.475-0.292-0.092-0.617-0.025-0.85 0.2l-1.833 1.833c-2.358-1.2-4.292-3.125-5.492-5.483l1.833-1.842c0.233-0.225 0.3-0.55 0.208-0.842-0.308-0.933-0.475-1.933-0.475-2.975 0-0.458-0.375-0.833-0.833-0.833h-2.917c-0.458 0-0.833 0.375-0.833 0.833 0 7.825 6.342 14.167 14.167 14.167 0.458 0 0.833-0.375 0.833-0.833v-2.917c0-0.458-0.375-0.833-0.833-0.833zM15.833 7.5v1.667h1.667v-1.667h-1.667z"></path></symbol><symbol id="icon-star" viewBox="0 0 20 20"><title>star</title><path d="M10 14.392l5.15 3.108-1.367-5.858 4.55-3.942-5.992-0.508-2.342-5.525-2.342 5.525-5.992 0.508 4.55 3.942-1.367 5.858z"></path></symbol><symbol id="icon-store" viewBox="0 0 20 20"><title>store</title><path d="M16.667 3.333h-13.333v1.667h13.333v-1.667zM17.5 11.667v-1.667l-0.833-4.167h-13.333l-0.833 4.167v1.667h0.833v5h8.333v-5h3.333v5h1.667v-5h0.833zM10 15h-5v-3.333h5v3.333z"></path></symbol><symbol id="icon-thumb-up" viewBox="0 0 20 20"><title>thumb-up</title><path d="M0.833 17.5h3.333v-10h-3.333v10zM19.167 8.333c0-0.917-0.75-1.667-1.667-1.667h-5.258l0.792-3.808 0.025-0.267c0-0.342-0.142-0.658-0.367-0.883l-0.883-0.875-5.483 5.492c-0.308 0.3-0.492 0.717-0.492 1.175v8.333c0 0.917 0.75 1.667 1.667 1.667h7.5c0.692 0 1.283-0.417 1.533-1.017l2.517-5.875c0.075-0.192 0.117-0.392 0.117-0.608v-1.592l-0.008-0.008 0.008-0.067z"></path></symbol></defs></svg>'
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

	//slider(animationIn, animationOut, elem, items, navContainer, navText)
	slider('zoomIn', 'fadeOut', '.product__slider');
};
