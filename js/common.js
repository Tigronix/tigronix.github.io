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
		template: '<svg aria-hidden="true" style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><symbol id="icon-star-half" viewBox="0 0 36 32"><title>star-half</title><path d="M18 24.081l-7.769 4.088 1.481-8.65-6.287-6.125 8.688-1.262 3.888-7.875v-4.256c-0.712 0-1.425 0.369-1.794 1.113l-4.081 8.275-9.131 1.325c-1.637 0.238-2.294 2.256-1.106 3.412l6.606 6.438-1.563 9.094c-0.281 1.631 1.438 2.875 2.9 2.106l8.169-4.287v-3.394z"></path></symbol><symbol id="icon-star-half2" viewBox="0 0 36 32"><title>star-half2</title><path d="M18 0c-0.712 0-1.425 0.369-1.794 1.113l-4.081 8.275-9.131 1.325c-1.637 0.238-2.294 2.256-1.106 3.412l6.606 6.438-1.563 9.094c-0.281 1.631 1.438 2.875 2.9 2.106l8.169-4.287v-27.475z"></path></symbol><symbol id="icon-star" viewBox="0 0 36 32"><title>star</title><path d="M16.206 1.113l-4.081 8.275-9.131 1.331c-1.637 0.238-2.294 2.256-1.106 3.412l6.606 6.438-1.563 9.094c-0.281 1.644 1.45 2.875 2.9 2.106l8.169-4.294 8.169 4.294c1.45 0.762 3.181-0.462 2.9-2.106l-1.563-9.094 6.606-6.438c1.188-1.156 0.531-3.175-1.106-3.412l-9.131-1.331-4.081-8.275c-0.731-1.475-2.85-1.494-3.587 0z"></path></symbol><symbol id="icon-star2" viewBox="0 0 36 32"><title>star2</title><path d="M33.006 10.719l-9.131-1.331-4.081-8.275c-0.731-1.475-2.85-1.494-3.587 0l-4.081 8.275-9.131 1.331c-1.637 0.238-2.294 2.256-1.106 3.412l6.606 6.438-1.563 9.094c-0.281 1.644 1.45 2.875 2.9 2.106l8.169-4.294 8.169 4.294c1.45 0.762 3.181-0.462 2.9-2.106l-1.563-9.094 6.606-6.438c1.188-1.156 0.531-3.175-1.106-3.412zM24.288 19.519l1.481 8.65-7.769-4.081-7.769 4.081 1.481-8.65-6.287-6.125 8.688-1.262 3.888-7.875 3.887 7.875 8.688 1.262-6.287 6.125z"></path></symbol><symbol id="icon-access-alarm" viewBox="0 0 32 32"><title>access-alarm</title><path d="M29.333 7.627l-6.133-5.147-1.72 2.040 6.133 5.147 1.72-2.040zM10.507 4.52l-1.707-2.040-6.133 5.133 1.72 2.040 6.12-5.133zM16.667 10.667h-2v8l6.333 3.8 1-1.64-5.333-3.16v-7zM16 5.333c-6.627 0-12 5.373-12 12s5.36 12 12 12c6.627 0 12-5.373 12-12s-5.373-12-12-12zM16 26.667c-5.16 0-9.333-4.173-9.333-9.333s4.173-9.333 9.333-9.333 9.333 4.173 9.333 9.333-4.173 9.333-9.333 9.333z"></path></symbol><symbol id="icon-access-time" viewBox="0 0 32 32"><title>access-time</title><path d="M15.987 2.667c-7.36 0-13.32 5.973-13.32 13.333s5.96 13.333 13.32 13.333c7.373 0 13.347-5.973 13.347-13.333s-5.973-13.333-13.347-13.333zM16 26.667c-5.893 0-10.667-4.773-10.667-10.667s4.773-10.667 10.667-10.667 10.667 4.773 10.667 10.667-4.773 10.667-10.667 10.667z"></path><path d="M16.667 9.333h-2v8l7 4.2 1-1.64-6-3.56z"></path></symbol><symbol id="icon-check" viewBox="0 0 32 32"><title>check</title><path d="M12 21.56l-5.56-5.56-1.893 1.88 7.453 7.453 16-16-1.88-1.88z"></path></symbol><symbol id="icon-details" viewBox="0 0 32 32"><title>details</title><path d="M4 5.333l12 21.333 12-21.333h-24zM8.507 8h15l-7.507 13.333-7.493-13.333z"></path></symbol><symbol id="icon-drive-eta" viewBox="0 0 32 32"><title>drive-eta</title><path d="M25.227 6.68c-0.267-0.787-1.013-1.347-1.893-1.347h-14.667c-0.88 0-1.613 0.56-1.893 1.347l-2.773 7.987v10.667c0 0.733 0.6 1.333 1.333 1.333h1.333c0.733 0 1.333-0.6 1.333-1.333v-1.333h16v1.333c0 0.733 0.6 1.333 1.333 1.333h1.333c0.733 0 1.333-0.6 1.333-1.333v-10.667l-2.773-7.987zM8.667 20c-1.107 0-2-0.893-2-2s0.893-2 2-2 2 0.893 2 2-0.893 2-2 2zM23.333 20c-1.107 0-2-0.893-2-2s0.893-2 2-2 2 0.893 2 2-0.893 2-2 2zM6.667 13.333l2-6h14.667l2 6h-18.667z"></path></symbol><symbol id="icon-filter-tilt-shift" viewBox="0 0 32 32"><title>filter-tilt-shift</title><path d="M14.667 5.427v-2.693c-2.68 0.267-5.12 1.333-7.093 2.947l1.893 1.907c1.48-1.147 3.253-1.92 5.2-2.16zM24.427 5.68c-1.973-1.613-4.413-2.68-7.093-2.947v2.693c1.947 0.24 3.72 1.013 5.2 2.16l1.893-1.907zM26.573 14.667h2.693c-0.267-2.68-1.333-5.12-2.947-7.093l-1.907 1.893c1.147 1.48 1.92 3.253 2.16 5.2zM7.587 9.467l-1.907-1.893c-1.613 1.973-2.68 4.413-2.947 7.093h2.693c0.24-1.947 1.013-3.72 2.16-5.2zM5.427 17.333h-2.693c0.267 2.68 1.333 5.12 2.947 7.093l1.907-1.907c-1.147-1.467-1.92-3.24-2.16-5.187zM20 16c0-2.213-1.787-4-4-4s-4 1.787-4 4 1.787 4 4 4 4-1.787 4-4zM24.413 22.533l1.907 1.907c1.613-1.973 2.68-4.427 2.947-7.093h-2.693c-0.24 1.933-1.013 3.707-2.16 5.187zM17.333 26.573v2.693c2.68-0.267 5.12-1.333 7.093-2.947l-1.907-1.907c-1.467 1.147-3.24 1.92-5.187 2.16zM7.573 26.32c1.973 1.613 4.427 2.68 7.093 2.947v-2.693c-1.947-0.24-3.72-1.013-5.2-2.16l-1.893 1.907z"></path></symbol><symbol id="icon-keyboard-arrow-left" viewBox="0 0 32 32"><title>keyboard-arrow-left</title><path d="M20.547 21.453l-6.107-6.12 6.107-6.12-1.88-1.88-8 8 8 8z"></path></symbol><symbol id="icon-keyboard_arrow_right" viewBox="0 0 32 32"><title>keyboard_arrow_right</title><path d="M11.453 21.787l6.107-6.12-6.107-6.12 1.88-1.88 8 8-8 8z"></path></symbol><symbol id="icon-location-on" viewBox="0 0 32 32"><title>location-on</title><path d="M16 2.667c-5.16 0-9.333 4.173-9.333 9.333 0 7 9.333 17.333 9.333 17.333s9.333-10.333 9.333-17.333c0-5.16-4.173-9.333-9.333-9.333zM16 15.333c-1.84 0-3.333-1.493-3.333-3.333s1.493-3.333 3.333-3.333 3.333 1.493 3.333 3.333-1.493 3.333-3.333 3.333z"></path></symbol><symbol id="icon-multiline-chart" viewBox="0 0 32 32"><title>multiline-chart</title><path d="M29.333 9.227l-1.88-1.88-3.8 4.28c-2.747-3.093-6.547-4.96-10.84-4.96-3.853 0-7.387 1.547-10.147 4l1.893 1.893c2.267-1.987 5.133-3.227 8.253-3.227 3.653 0 6.787 1.68 9.027 4.32l-3.84 4.32-5.333-5.333-10 10.013 2 2 8-8.013 5.333 5.333 5.4-6.067c1 1.8 1.667 3.867 1.92 6.067h2.68c-0.293-3.067-1.267-5.853-2.72-8.187l4.053-4.56z"></path></symbol><symbol id="icon-perm-data-setting" viewBox="0 0 32 32"><title>perm-data-setting</title><path d="M25.32 15.333c0.453 0 0.893 0.040 1.333 0.093l0.013-15.427-26.667 26.667h15.413c-0.053-0.44-0.093-0.88-0.093-1.333 0-5.52 4.48-10 10-10zM30.267 25.987c0.027-0.213 0.053-0.427 0.053-0.653s-0.013-0.44-0.053-0.653l1.413-1.107c0.12-0.107 0.16-0.28 0.080-0.427l-1.333-2.307c-0.080-0.147-0.253-0.2-0.413-0.147l-1.653 0.667c-0.347-0.267-0.72-0.493-1.133-0.653l-0.253-1.76c-0.013-0.16-0.16-0.28-0.32-0.28h-2.667c-0.16 0-0.307 0.12-0.333 0.28l-0.253 1.76c-0.4 0.173-0.787 0.387-1.133 0.653l-1.653-0.667c-0.147-0.053-0.32 0-0.413 0.147l-1.333 2.307c-0.080 0.147-0.053 0.32 0.080 0.427l1.413 1.107c-0.027 0.213-0.040 0.427-0.040 0.653s0.013 0.44 0.040 0.653l-1.413 1.107c-0.12 0.107-0.16 0.28-0.080 0.427l1.333 2.307c0.080 0.147 0.253 0.2 0.413 0.147l1.653-0.667c0.347 0.267 0.72 0.493 1.133 0.653l0.253 1.76c0.027 0.16 0.16 0.28 0.333 0.28h2.667c0.16 0 0.307-0.12 0.333-0.28l0.253-1.76c0.4-0.173 0.787-0.387 1.12-0.653l1.667 0.667c0.147 0.053 0.32 0 0.413-0.147l1.333-2.307c0.080-0.147 0.040-0.32-0.080-0.427l-1.427-1.107zM25.32 27.333c-1.107 0-2-0.893-2-2s0.893-2 2-2 2 0.893 2 2-0.893 2-2 2z"></path></symbol><symbol id="icon-person_pin_black" viewBox="0 0 32 32"><title>person_pin_black</title><path d="M25.333 2.667h-18.667c-1.48 0-2.667 1.2-2.667 2.667v18.667c0 1.467 1.187 2.667 2.667 2.667h5.333l4 4 4-4h5.333c1.467 0 2.667-1.2 2.667-2.667v-18.667c0-1.467-1.2-2.667-2.667-2.667zM16 7.067c1.987 0 3.6 1.613 3.6 3.6s-1.613 3.6-3.6 3.6c-1.987 0-3.6-1.613-3.6-3.6s1.613-3.6 3.6-3.6zM24 21.333h-16v-1.2c0-2.667 5.333-4.133 8-4.133s8 1.467 8 4.133v1.2z"></path></symbol><symbol id="icon-sentiment-satisfied" viewBox="0 0 32 32"><title>sentiment-satisfied</title><path d="M22.667 12.667c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M13.333 12.667c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M15.987 2.667c-7.36 0-13.32 5.973-13.32 13.333s5.96 13.333 13.32 13.333c7.373 0 13.347-5.973 13.347-13.333s-5.973-13.333-13.347-13.333zM16 26.667c-5.893 0-10.667-4.773-10.667-10.667s4.773-10.667 10.667-10.667 10.667 4.773 10.667 10.667-4.773 10.667-10.667 10.667zM16 21.333c-1.973 0-3.667-1.080-4.6-2.667h-2.227c1.067 2.733 3.72 4.667 6.827 4.667s5.76-1.933 6.827-4.667h-2.227c-0.933 1.587-2.627 2.667-4.6 2.667z"></path></symbol><symbol id="icon-settings-backup-restore" viewBox="0 0 32 32"><title>settings-backup-restore</title><path d="M18.667 16c0-1.467-1.2-2.667-2.667-2.667s-2.667 1.2-2.667 2.667 1.2 2.667 2.667 2.667 2.667-1.2 2.667-2.667zM16 4c-6.627 0-12 5.373-12 12h-4l5.333 5.333 5.333-5.333h-4c0-5.16 4.173-9.333 9.333-9.333s9.333 4.173 9.333 9.333-4.173 9.333-9.333 9.333c-2.013 0-3.88-0.653-5.413-1.733l-1.893 1.92c2.027 1.547 4.56 2.48 7.307 2.48 6.627 0 12-5.373 12-12s-5.373-12-12-12z"></path></symbol><symbol id="icon-settings-input-svideo" viewBox="0 0 32 32"><title>settings-input-svideo</title><path d="M10.667 15.333c0-1.107-0.893-2-2-2s-2 0.893-2 2 0.893 2 2 2 2-0.893 2-2zM20 8.667c0-1.107-0.893-2-2-2h-4c-1.107 0-2 0.893-2 2s0.893 2 2 2h4c1.107 0 2-0.893 2-2zM11.333 20c-1.107 0-2 0.893-2 2s0.893 2 2 2 2-0.893 2-2-0.893-2-2-2zM16 1.333c-8.093 0-14.667 6.573-14.667 14.667s6.573 14.667 14.667 14.667 14.667-6.573 14.667-14.667-6.573-14.667-14.667-14.667zM16 28c-6.613 0-12-5.387-12-12s5.387-12 12-12 12 5.387 12 12-5.387 12-12 12zM23.333 13.333c-1.107 0-2 0.893-2 2s0.893 2 2 2 2-0.893 2-2-0.893-2-2-2zM20.667 20c-1.107 0-2 0.893-2 2s0.893 2 2 2 2-0.893 2-2-0.893-2-2-2z"></path></symbol><symbol id="icon-settings-phone" viewBox="0 0 32 32"><title>settings-phone</title><path d="M17.333 12h-2.667v2.667h2.667v-2.667zM22.667 12h-2.667v2.667h2.667v-2.667zM26.667 20.667c-1.667 0-3.267-0.267-4.76-0.76-0.467-0.147-0.987-0.040-1.36 0.32l-2.933 2.933c-3.773-1.92-6.867-5-8.787-8.773l2.933-2.947c0.373-0.36 0.48-0.88 0.333-1.347-0.493-1.493-0.76-3.093-0.76-4.76 0-0.733-0.6-1.333-1.333-1.333h-4.667c-0.733 0-1.333 0.6-1.333 1.333 0 12.52 10.147 22.667 22.667 22.667 0.733 0 1.333-0.6 1.333-1.333v-4.667c0-0.733-0.6-1.333-1.333-1.333zM25.333 12v2.667h2.667v-2.667h-2.667z"></path></symbol><symbol id="icon-settings-remote" viewBox="0 0 32 32"><title>settings-remote</title><path d="M20 12h-8c-0.733 0-1.333 0.6-1.333 1.333v16c0 0.733 0.6 1.333 1.333 1.333h8c0.733 0 1.333-0.6 1.333-1.333v-16c0-0.733-0.6-1.333-1.333-1.333zM16 20c-1.467 0-2.667-1.2-2.667-2.667s1.2-2.667 2.667-2.667 2.667 1.2 2.667 2.667-1.2 2.667-2.667 2.667zM9.4 8.067l1.88 1.88c1.213-1.2 2.88-1.947 4.72-1.947s3.507 0.747 4.72 1.947l1.88-1.88c-1.693-1.693-4.027-2.733-6.6-2.733s-4.907 1.040-6.6 2.733zM16 0c-4.053 0-7.72 1.64-10.373 4.293l1.88 1.88c2.173-2.16 5.173-3.507 8.493-3.507s6.32 1.347 8.48 3.52l1.88-1.88c-2.64-2.667-6.307-4.307-10.36-4.307z"></path></symbol><symbol id="icon-star_rate" viewBox="0 0 32 32"><title>star_rate</title><path d="M16 20.089l6.596 4.8-2.524-7.751 6.596-4.693h-8.089l-2.578-8-2.578 8h-8.089l6.596 4.693-2.524 7.751z"></path></symbol><symbol id="icon-thumb-up" viewBox="0 0 32 32"><title>thumb-up</title><path d="M1.333 28h5.333v-16h-5.333v16zM30.667 13.333c0-1.467-1.2-2.667-2.667-2.667h-8.413l1.267-6.093 0.040-0.427c0-0.547-0.227-1.053-0.587-1.413l-1.413-1.4-8.773 8.787c-0.493 0.48-0.787 1.147-0.787 1.88v13.333c0 1.467 1.2 2.667 2.667 2.667h12c1.107 0 2.053-0.667 2.453-1.627l4.027-9.4c0.12-0.307 0.187-0.627 0.187-0.973v-2.547l-0.013-0.013 0.013-0.107z"></path></symbol><symbol id="icon-trending_up" viewBox="0 0 32 32"><title>trending_up</title><path d="M21.333 8l3.053 3.053-6.507 6.507-5.333-5.333-9.88 9.893 1.88 1.88 8-8 5.333 5.333 8.4-8.387 3.053 3.053v-8z"></path></symbol></defs></svg>'
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
	elem = elem || '.img-carousel';
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
			dots: false
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
};
