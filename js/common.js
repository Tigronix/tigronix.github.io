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
		template: '<svg aria-hidden="true" style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><symbol id="icon-assignment-turned-in" viewBox="0 0 20 20"><title>assignment-turned-in</title><path d="M15.833 2.5h-3.483c-0.35-0.967-1.267-1.667-2.35-1.667s-2 0.7-2.35 1.667h-3.483c-0.917 0-1.667 0.75-1.667 1.667v11.667c0 0.917 0.75 1.667 1.667 1.667h11.667c0.917 0 1.667-0.75 1.667-1.667v-11.667c0-0.917-0.75-1.667-1.667-1.667zM10 2.5c0.458 0 0.833 0.375 0.833 0.833s-0.375 0.833-0.833 0.833-0.833-0.375-0.833-0.833 0.375-0.833 0.833-0.833zM8.333 14.167l-3.333-3.333 1.175-1.175 2.158 2.15 5.492-5.492 1.175 1.183-6.667 6.667z"></path></symbol><symbol id="icon-directions-car" viewBox="0 0 20 20"><title>directions-car</title><path d="M15.767 5.008c-0.167-0.492-0.633-0.842-1.183-0.842h-9.167c-0.55 0-1.008 0.35-1.183 0.842l-1.733 4.992v6.667c0 0.458 0.375 0.833 0.833 0.833h0.833c0.458 0 0.833-0.375 0.833-0.833v-0.833h10v0.833c0 0.458 0.375 0.833 0.833 0.833h0.833c0.458 0 0.833-0.375 0.833-0.833v-6.667l-1.733-4.992zM5.417 13.333c-0.692 0-1.25-0.558-1.25-1.25s0.558-1.25 1.25-1.25 1.25 0.558 1.25 1.25-0.558 1.25-1.25 1.25zM14.583 13.333c-0.692 0-1.25-0.558-1.25-1.25s0.558-1.25 1.25-1.25 1.25 0.558 1.25 1.25-0.558 1.25-1.25 1.25zM4.167 9.167l1.25-3.75h9.167l1.25 3.75h-11.667z"></path></symbol><symbol id="icon-event-available" viewBox="0 0 20 20"><title>event-available</title><path d="M13.775 9.217l-0.883-0.883-4.067 4.067-1.767-1.767-0.883 0.883 2.65 2.65 4.95-4.95zM15.833 2.5h-0.833v-1.667h-1.667v1.667h-6.667v-1.667h-1.667v1.667h-0.833c-0.925 0-1.658 0.75-1.658 1.667l-0.008 11.667c0 0.917 0.742 1.667 1.667 1.667h11.667c0.917 0 1.667-0.75 1.667-1.667v-11.667c0-0.917-0.75-1.667-1.667-1.667zM15.833 15.833h-11.667v-9.167h11.667v9.167z"></path></symbol><symbol id="icon-event-busy" viewBox="0 0 20 20"><title>event-busy</title><path d="M7.758 14.167l2.033-2.033 2.033 2.033 0.883-0.883-2.033-2.033 2.033-2.033-0.883-0.883-2.033 2.033-2.033-2.033-0.883 0.883 2.033 2.033-2.033 2.033 0.883 0.883zM15.833 2.5h-0.833v-1.667h-1.667v1.667h-6.667v-1.667h-1.667v1.667h-0.833c-0.925 0-1.658 0.75-1.658 1.667l-0.008 11.667c0 0.917 0.742 1.667 1.667 1.667h11.667c0.917 0 1.667-0.75 1.667-1.667v-11.667c0-0.917-0.75-1.667-1.667-1.667zM15.833 15.833h-11.667v-9.167h11.667v9.167z"></path></symbol><symbol id="icon-hotel" viewBox="0 0 20 20"><title>hotel</title><path d="M5.833 10.833c1.383 0 2.5-1.117 2.5-2.5s-1.117-2.5-2.5-2.5-2.5 1.117-2.5 2.5 1.117 2.5 2.5 2.5zM15.833 5.833h-6.667v5.833h-6.667v-7.5h-1.667v12.5h1.667v-2.5h15v2.5h1.667v-7.5c0-1.842-1.492-3.333-3.333-3.333z"></path></symbol><symbol id="icon-local-cafe" viewBox="0 0 20 20"><title>local-cafe</title><path d="M16.667 2.5h-13.333v8.333c0 1.842 1.492 3.333 3.333 3.333h5c1.842 0 3.333-1.492 3.333-3.333v-2.5h1.667c0.925 0 1.667-0.742 1.667-1.667v-2.5c0-0.925-0.742-1.667-1.667-1.667zM16.667 6.667h-1.667v-2.5h1.667v2.5zM1.667 17.5h15v-1.667h-15v1.667z"></path></symbol><symbol id="icon-local-dining" viewBox="0 0 20 20"><title>local-dining</title><path d="M6.75 11.117l2.358-2.358-5.85-5.842c-1.3 1.3-1.3 3.408 0 4.717l3.492 3.483zM12.4 9.608c1.275 0.592 3.067 0.175 4.392-1.15 1.592-1.592 1.9-3.875 0.675-5.1-1.217-1.217-3.5-0.917-5.1 0.675-1.325 1.325-1.742 3.117-1.15 4.392l-8.133 8.133 1.175 1.175 5.742-5.725 5.733 5.733 1.175-1.175-5.733-5.733 1.225-1.225z"></path></symbol><symbol id="icon-message" viewBox="0 0 20 20"><title>message</title><path d="M16.667 1.667h-13.333c-0.917 0-1.658 0.75-1.658 1.667l-0.008 15 3.333-3.333h11.667c0.917 0 1.667-0.75 1.667-1.667v-10c0-0.917-0.75-1.667-1.667-1.667zM15 11.667h-10v-1.667h10v1.667zM15 9.167h-10v-1.667h10v1.667zM15 6.667h-10v-1.667h10v1.667z"></path></symbol><symbol id="icon-play-arrow" viewBox="0 0 20 20"><title>play-arrow</title><path d="M6.667 4.167v11.667l9.167-5.833z"></path></symbol><symbol id="icon-room-service" viewBox="0 0 20 20"><title>room-service</title><path d="M1.667 14.167h16.667v1.667h-16.667zM11.533 6.492c0.083-0.2 0.133-0.425 0.133-0.658 0-0.917-0.75-1.667-1.667-1.667s-1.667 0.75-1.667 1.667c0 0.233 0.050 0.458 0.133 0.658-3.258 0.675-5.742 3.45-5.967 6.842h15c-0.225-3.392-2.708-6.167-5.967-6.842z"></path></symbol><symbol id="icon-store" viewBox="0 0 20 20"><title>store</title><path d="M16.667 3.333h-13.333v1.667h13.333v-1.667zM17.5 11.667v-1.667l-0.833-4.167h-13.333l-0.833 4.167v1.667h0.833v5h8.333v-5h3.333v5h1.667v-5h0.833zM10 15h-5v-3.333h5v3.333z"></path></symbol><symbol id="icon-wifi" viewBox="0 0 20 20"><title>wifi</title><path d="M0.833 7.5l1.667 1.667c4.142-4.142 10.858-4.142 15 0l1.667-1.667c-5.058-5.058-13.267-5.058-18.333 0zM7.5 14.167l2.5 2.5 2.5-2.5c-1.375-1.383-3.617-1.383-5 0zM4.167 10.833l1.667 1.667c2.3-2.3 6.033-2.3 8.333 0l1.667-1.667c-3.217-3.217-8.442-3.217-11.667 0z"></path></symbol><symbol id="icon-star" viewBox="0 0 23 20"><title>star</title><path d="M10.129 0.695l-2.551 5.172-5.707 0.832c-1.023 0.148-1.434 1.41-0.691 2.133l4.129 4.023-0.977 5.684c-0.176 1.027 0.906 1.797 1.813 1.316l5.105-2.684 5.105 2.684c0.906 0.477 1.988-0.289 1.813-1.316l-0.977-5.684 4.129-4.023c0.742-0.723 0.332-1.984-0.691-2.133l-5.707-0.832-2.551-5.172c-0.457-0.922-1.781-0.934-2.242 0z"></path></symbol><symbol id="icon-caret-left" viewBox="0 0 8 20"><title>caret-left</title><path d="M7.5 4.974v10.052c0 0.696-0.842 1.045-1.334 0.552l-5.026-5.026c-0.305-0.305-0.305-0.8 0-1.105l5.026-5.026c0.492-0.492 1.334-0.144 1.334 0.552z"></path></symbol><symbol id="icon-caret-right" viewBox="0 0 8 20"><title>caret-right</title><path d="M0 15.026v-10.052c0-0.696 0.842-1.045 1.334-0.552l5.026 5.026c0.305 0.305 0.305 0.8 0 1.105l-5.026 5.026c-0.492 0.492-1.334 0.144-1.334-0.552z"></path></symbol></defs></svg>'
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
	elem = elem || '.slider__content';
	items = items || 1;
	navContainer = navContainer || '';
	navText = navText || ['<svg class="icon icon-caret-left"><use xlink:href="#icon-caret-left"></use></svg>', '<svg class="icon icon-caret-right"><use xlink:href="#icon-caret-right"></use></svg>'];

	$(elem).on('initialized.owl.carousel', function(event) {
		setTimeout(function(){
			var navItems = $('.gallery__nav-item');
			var owlItems = $(elem + ' .owl-item.active .gallery__slider-item').data('hash');
			navItems.each(function(){
				var href = $(this).attr('href');
				if('#'+owlItems == href){
					$(this).addClass('active').siblings().removeClass('active');
				}
			});
		}, 10);
	});
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
	$(elem).on('changed.owl.carousel', function(event) {
		setTimeout(function(){
			var navItems = $('.gallery__nav-item');
			var owlItems = $(elem + ' .owl-item.active .gallery__slider-item').data('hash');
			navItems.each(function(){
				var href = $(this).attr('href');
				if('#'+owlItems == href){
					$(this).addClass('active').siblings().removeClass('active');
				}
			});
		}, 10);
	})
}

function sliderRoom(animationIn, animationOut, elem, items, navContainer, navText) {
	animationIn = animationIn || 'zoomIn';
	animationOut = animationOut || 'fadeOut';
	elem = elem || '.room__gallery-bigSlider';
	items = items || 1;
	navContainer = navContainer || '';
	navText = navText || ['<svg class="icon icon-caret-left"><use xlink:href="#icon-caret-left"></use></svg>', '<svg class="icon icon-caret-right"><use xlink:href="#icon-caret-right"></use></svg>'];
	if(elem){
		$(elem).owlCarousel({
			nav: false,
			navContainer: navContainer,
			navText: navText,
			items: items,
			animateIn: animationIn,
			animateOut: animationOut,
			loop: false,
			dots: false,
			URLhashListener: true,
      startPosition: 'URLHash',
			mouseDrag: false,
			touchDrag: false,
			pullDrag: false,
			freeDrag: false
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

window.onload = function() {
	//scrollEvents
	scrollEffects();
	changeClassOnScroll();

	//other
	bodyOverflow('.hamburger');
	phoneMask();

	//tabs
	tabs();
	tabsNav();

	//active toggle
	active('.hamburger');
	active('.hamburger__wrap');

	//activeSiblings
	activeSiblings('.room__gallery-small-slide');
	activeSiblings('.gallery__nav-item');

	//Animation
	animate('.hamburger', '.hamburger__line1', 'rotate_in_45', 'rotate_in_45_out');
	animate('.hamburger', '.hamburger__line3', 'rotate_in_-45', 'rotate_in_-45_out');
	animate('.hamburger__wrap', '.hamburger__wrap', 'lightSpeedIn', 'slideInRight');
	//Animation+hide
	animateHide('.hamburger__wrap', '.nav', 'lightSpeedIn', 'lightSpeedOut');

	//slider(animationIn, animationOut, elem, items, navContainer, navText)
	slider();
	sliderRoom();
	slider('zoomIn', 'fadeOut', '.gallery__slider', 3);
};
