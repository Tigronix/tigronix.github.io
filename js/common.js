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
		template: '<svg aria-hidden="true" style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><symbol id="icon-access-time" viewBox="0 0 20 20"><title>access-time</title><path d="M9.992 1.667c-4.6 0-8.325 3.733-8.325 8.333s3.725 8.333 8.325 8.333c4.608 0 8.342-3.733 8.342-8.333s-3.733-8.333-8.342-8.333zM10 16.667c-3.683 0-6.667-2.983-6.667-6.667s2.983-6.667 6.667-6.667 6.667 2.983 6.667 6.667-2.983 6.667-6.667 6.667z"></path><path d="M10.417 5.833h-1.25v5l4.375 2.625 0.625-1.025-3.75-2.225z"></path></symbol><symbol id="icon-directions-car" viewBox="0 0 20 20"><title>directions-car</title><path d="M15.767 5.008c-0.167-0.492-0.633-0.842-1.183-0.842h-9.167c-0.55 0-1.008 0.35-1.183 0.842l-1.733 4.992v6.667c0 0.458 0.375 0.833 0.833 0.833h0.833c0.458 0 0.833-0.375 0.833-0.833v-0.833h10v0.833c0 0.458 0.375 0.833 0.833 0.833h0.833c0.458 0 0.833-0.375 0.833-0.833v-6.667l-1.733-4.992zM5.417 13.333c-0.692 0-1.25-0.558-1.25-1.25s0.558-1.25 1.25-1.25 1.25 0.558 1.25 1.25-0.558 1.25-1.25 1.25zM14.583 13.333c-0.692 0-1.25-0.558-1.25-1.25s0.558-1.25 1.25-1.25 1.25 0.558 1.25 1.25-0.558 1.25-1.25 1.25zM4.167 9.167l1.25-3.75h9.167l1.25 3.75h-11.667z"></path></symbol><symbol id="icon-email" viewBox="0 0 20 20"><title>email</title><path d="M16.667 3.333h-13.333c-0.917 0-1.658 0.75-1.658 1.667l-0.008 10c0 0.917 0.75 1.667 1.667 1.667h13.333c0.917 0 1.667-0.75 1.667-1.667v-10c0-0.917-0.75-1.667-1.667-1.667zM16.667 6.667l-6.667 4.167-6.667-4.167v-1.667l6.667 4.167 6.667-4.167v1.667z"></path></symbol><symbol id="icon-phone-on" viewBox="0 0 20 20"><title>phone-on</title><path d="M16.667 12.917c-1.042 0-2.042-0.167-2.975-0.475-0.292-0.092-0.617-0.025-0.85 0.2l-1.833 1.833c-2.358-1.2-4.292-3.125-5.492-5.492l1.833-1.842c0.233-0.217 0.3-0.542 0.208-0.833-0.308-0.933-0.475-1.933-0.475-2.975 0-0.458-0.375-0.833-0.833-0.833h-2.917c-0.458 0-0.833 0.375-0.833 0.833 0 7.825 6.342 14.167 14.167 14.167 0.458 0 0.833-0.375 0.833-0.833v-2.917c0-0.458-0.375-0.833-0.833-0.833zM15.833 10h1.667c0-4.142-3.358-7.5-7.5-7.5v1.667c3.225 0 5.833 2.608 5.833 5.833zM12.5 10h1.667c0-2.3-1.867-4.167-4.167-4.167v1.667c1.383 0 2.5 1.117 2.5 2.5z"></path></symbol><symbol id="icon-directions-walk" viewBox="0 0 20 20"><title>directions-walk</title><path d="M11.25 4.583c0.917 0 1.667-0.75 1.667-1.667s-0.75-1.667-1.667-1.667-1.667 0.75-1.667 1.667 0.75 1.667 1.667 1.667zM8.167 7.417l-2.333 11.75h1.75l1.5-6.667 1.75 1.667v5h1.667v-6.25l-1.75-1.667 0.5-2.5c1.083 1.25 2.75 2.083 4.583 2.083v-1.667c-1.583 0-2.917-0.833-3.583-2l-0.833-1.333c-0.333-0.5-0.833-0.833-1.417-0.833-0.25 0-0.417 0.083-0.667 0.083l-4.333 1.833v3.917h1.667v-2.833l1.5-0.583z"></path></symbol><symbol id="icon-mail-outline" viewBox="0 0 20 20"><title>mail-outline</title><path d="M16.667 3.333h-13.333c-0.917 0-1.658 0.75-1.658 1.667l-0.008 10c0 0.917 0.75 1.667 1.667 1.667h13.333c0.917 0 1.667-0.75 1.667-1.667v-10c0-0.917-0.75-1.667-1.667-1.667zM16.667 15h-13.333v-8.333l6.667 4.167 6.667-4.167v8.333zM10 9.167l-6.667-4.167h13.333l-6.667 4.167z"></path></symbol><symbol id="icon-directions-bus" viewBox="0 0 20 20"><title>directions-bus</title><path d="M3.333 13.333c0 0.733 0.325 1.392 0.833 1.85v1.483c0 0.458 0.375 0.833 0.833 0.833h0.833c0.458 0 0.833-0.375 0.833-0.833v-0.833h6.667v0.833c0 0.458 0.375 0.833 0.833 0.833h0.833c0.458 0 0.833-0.375 0.833-0.833v-1.483c0.508-0.458 0.833-1.117 0.833-1.85v-8.333c0-2.917-2.983-3.333-6.667-3.333s-6.667 0.417-6.667 3.333v8.333zM6.25 14.167c-0.692 0-1.25-0.558-1.25-1.25s0.558-1.25 1.25-1.25 1.25 0.558 1.25 1.25-0.558 1.25-1.25 1.25zM13.75 14.167c-0.692 0-1.25-0.558-1.25-1.25s0.558-1.25 1.25-1.25 1.25 0.558 1.25 1.25-0.558 1.25-1.25 1.25zM15 9.167h-10v-4.167h10v4.167z"></path></symbol><symbol id="icon-tram" viewBox="0 0 20 20"><title>tram</title><path d="M15.833 14.117v-7.033c0-2.325-2.175-2.833-5.008-2.908l0.633-1.258h2.708v-1.25h-8.333v1.25h3.958l-0.633 1.267c-2.608 0.075-4.992 0.592-4.992 2.9v7.033c0 1.208 0.992 2.217 2.158 2.475l-1.325 1.325v0.417h1.858l1.667-1.667h3.142l1.667 1.667h1.667v-0.417l-1.25-1.25h-0.067c1.408 0 2.15-1.142 2.15-2.55zM10 15.417c-0.692 0-1.25-0.558-1.25-1.25s0.558-1.25 1.25-1.25 1.25 0.558 1.25 1.25-0.558 1.25-1.25 1.25zM14.167 11.667h-8.333v-4.167h8.333v4.167z"></path></symbol><symbol id="icon-aspect-ratio" viewBox="0 0 20 20"><title>aspect-ratio</title><path d="M15.833 10h-1.667v2.5h-2.5v1.667h4.167v-4.167zM5.833 7.5h2.5v-1.667h-4.167v4.167h1.667v-2.5zM17.5 2.5h-15c-0.917 0-1.667 0.75-1.667 1.667v11.667c0 0.917 0.75 1.667 1.667 1.667h15c0.917 0 1.667-0.75 1.667-1.667v-11.667c0-0.917-0.75-1.667-1.667-1.667zM17.5 15.842h-15v-11.683h15v11.683z"></path></symbol><symbol id="icon-filter-frames" viewBox="0 0 20 20"><title>filter-frames</title><path d="M16.667 3.333h-3.333l-3.333-3.333-3.333 3.333h-3.333c-0.917 0-1.667 0.75-1.667 1.667v11.667c0 0.917 0.75 1.667 1.667 1.667h13.333c0.917 0 1.667-0.75 1.667-1.667v-11.667c0-0.917-0.75-1.667-1.667-1.667zM16.667 16.667h-13.333v-11.667h3.767l2.933-2.917 2.9 2.917h3.733v11.667zM15 6.667h-10v8.333h10z"></path></symbol><symbol id="icon-restaurant-menu" viewBox="0 0 20 20"><title>restaurant-menu</title><path d="M6.75 11.117l2.358-2.358-5.85-5.842c-1.3 1.3-1.3 3.408 0 4.717l3.492 3.483zM12.4 9.608c1.275 0.592 3.067 0.175 4.392-1.15 1.592-1.592 1.9-3.875 0.675-5.1-1.217-1.217-3.5-0.917-5.1 0.675-1.325 1.325-1.742 3.117-1.15 4.392l-8.133 8.133 1.175 1.175 5.742-5.725 5.733 5.733 1.175-1.175-5.733-5.733 1.225-1.225z"></path></symbol><symbol id="icon-ruble-sign" viewBox="0 0 15 20"><title>ruble-sign</title><path d="M9.35 12.5c3.325 0 5.65-2.323 5.65-5.661s-2.325-5.589-5.65-5.589h-6.381c-0.259 0-0.469 0.21-0.469 0.469v8.072h-2.031c-0.259 0-0.469 0.21-0.469 0.469v1.772c0 0.259 0.21 0.469 0.469 0.469h2.031v1.25h-2.031c-0.259 0-0.469 0.21-0.469 0.469v1.563c0 0.259 0.21 0.469 0.469 0.469h2.031v2.031c0 0.259 0.21 0.469 0.469 0.469h2.287c0.259 0 0.469-0.21 0.469-0.469v-2.031h6.306c0.259 0 0.469-0.21 0.469-0.469v-1.563c0-0.259-0.21-0.469-0.469-0.469h-6.306v-1.25h3.625zM5.725 3.935h3.075c1.825 0 2.925 1.137 2.925 2.903 0 1.79-1.1 2.952-2.975 2.952h-3.025v-5.855z"></path></symbol><symbol id="icon-wallpaper" viewBox="0 0 20 20"><title>wallpaper</title><path d="M3.333 3.333h5.833v-1.667h-5.833c-0.917 0-1.667 0.75-1.667 1.667v5.833h1.667v-5.833zM8.333 10.833l-3.333 4.167h10l-2.5-3.333-1.692 2.258-2.475-3.092zM14.167 7.083c0-0.692-0.558-1.25-1.25-1.25s-1.25 0.558-1.25 1.25 0.558 1.25 1.25 1.25 1.25-0.558 1.25-1.25zM16.667 1.667h-5.833v1.667h5.833v5.833h1.667v-5.833c0-0.917-0.75-1.667-1.667-1.667zM16.667 16.667h-5.833v1.667h5.833c0.917 0 1.667-0.75 1.667-1.667v-5.833h-1.667v5.833zM3.333 10.833h-1.667v5.833c0 0.917 0.75 1.667 1.667 1.667h5.833v-1.667h-5.833v-5.833z"></path></symbol><symbol id="icon-wc" viewBox="0 0 20 20"><title>wc</title><path d="M4.583 18.333v-6.25h-1.25v-4.583c0-0.917 0.75-1.667 1.667-1.667h2.5c0.917 0 1.667 0.75 1.667 1.667v4.583h-1.25v6.25h-3.333zM15 18.333v-5h2.5l-2.117-6.358c-0.233-0.683-0.867-1.142-1.583-1.142h-0.1c-0.717 0-1.358 0.458-1.583 1.142l-2.117 6.358h2.5v5h2.5zM6.25 5c0.925 0 1.667-0.742 1.667-1.667s-0.742-1.667-1.667-1.667-1.667 0.742-1.667 1.667 0.742 1.667 1.667 1.667zM13.75 5c0.925 0 1.667-0.742 1.667-1.667s-0.742-1.667-1.667-1.667-1.667 0.742-1.667 1.667 0.742 1.667 1.667 1.667z"></path></symbol><symbol id="icon-lock" viewBox="0 0 20 20"><title>lock</title><path d="M15 6.667h-0.833v-1.667c0-2.3-1.867-4.167-4.167-4.167s-4.167 1.867-4.167 4.167v1.667h-0.833c-0.917 0-1.667 0.75-1.667 1.667v8.333c0 0.917 0.75 1.667 1.667 1.667h10c0.917 0 1.667-0.75 1.667-1.667v-8.333c0-0.917-0.75-1.667-1.667-1.667zM10 14.167c-0.917 0-1.667-0.75-1.667-1.667s0.75-1.667 1.667-1.667 1.667 0.75 1.667 1.667-0.75 1.667-1.667 1.667zM12.583 6.667h-5.167v-1.667c0-1.425 1.158-2.583 2.583-2.583s2.583 1.158 2.583 2.583v1.667z"></path></symbol><symbol id="icon-print" viewBox="0 0 20 20"><title>print</title><path d="M15.833 6.667h-11.667c-1.383 0-2.5 1.117-2.5 2.5v5h3.333v3.333h10v-3.333h3.333v-5c0-1.383-1.117-2.5-2.5-2.5zM13.333 15.833h-6.667v-4.167h6.667v4.167zM15.833 10c-0.458 0-0.833-0.375-0.833-0.833s0.375-0.833 0.833-0.833 0.833 0.375 0.833 0.833-0.375 0.833-0.833 0.833zM15 2.5h-10v3.333h10v-3.333z"></path></symbol><symbol id="icon-drafts" viewBox="0 0 20 20"><title>drafts</title><path d="M18.325 6.667c0-0.6-0.308-1.125-0.783-1.417l-7.542-4.417-7.542 4.417c-0.475 0.292-0.792 0.817-0.792 1.417v8.333c0 0.917 0.75 1.667 1.667 1.667h13.333c0.917 0 1.667-0.75 1.667-1.667l-0.008-8.333zM10 10.833l-6.883-4.3 6.883-4.033 6.883 4.033-6.883 4.3z"></path></symbol><symbol id="icon-keyboard-arrow-left" viewBox="0 0 20 20"><title>keyboard-arrow-left</title><path d="M12.842 13.408l-3.817-3.825 3.817-3.825-1.175-1.175-5 5 5 5z"></path></symbol><symbol id="icon-keyboard-arrow-right" viewBox="0 0 20 20"><title>keyboard-arrow-right</title><path d="M7.158 13.617l3.817-3.825-3.817-3.825 1.175-1.175 5 5-5 5z"></path></symbol><symbol id="icon-location-on" viewBox="0 0 20 20"><title>location-on</title><path d="M10 1.667c-3.225 0-5.833 2.608-5.833 5.833 0 4.375 5.833 10.833 5.833 10.833s5.833-6.458 5.833-10.833c0-3.225-2.608-5.833-5.833-5.833zM10 9.583c-1.15 0-2.083-0.933-2.083-2.083s0.933-2.083 2.083-2.083 2.083 0.933 2.083 2.083-0.933 2.083-2.083 2.083z"></path></symbol><symbol id="icon-phone" viewBox="0 0 20 20"><title>phone</title><path d="M5.517 8.992c1.2 2.358 3.133 4.283 5.492 5.492l1.833-1.833c0.225-0.225 0.558-0.3 0.85-0.2 0.933 0.308 1.942 0.475 2.975 0.475 0.458 0 0.833 0.375 0.833 0.833v2.908c0 0.458-0.375 0.833-0.833 0.833-7.825 0-14.167-6.342-14.167-14.167 0-0.458 0.375-0.833 0.833-0.833h2.917c0.458 0 0.833 0.375 0.833 0.833 0 1.042 0.167 2.042 0.475 2.975 0.092 0.292 0.025 0.617-0.208 0.85l-1.833 1.833z"></path></symbol><symbol id="icon-place" viewBox="0 0 20 20"><title>place</title><path d="M10 1.667c-3.225 0-5.833 2.608-5.833 5.833 0 4.375 5.833 10.833 5.833 10.833s5.833-6.458 5.833-10.833c0-3.225-2.608-5.833-5.833-5.833zM10 9.583c-1.15 0-2.083-0.933-2.083-2.083s0.933-2.083 2.083-2.083 2.083 0.933 2.083 2.083-0.933 2.083-2.083 2.083z"></path></symbol><symbol id="icon-portrait" viewBox="0 0 20 20"><title>portrait</title><path d="M10 10.208c1.033 0 1.875-0.842 1.875-1.875s-0.842-1.875-1.875-1.875-1.875 0.842-1.875 1.875 0.842 1.875 1.875 1.875zM13.75 13.542c0-1.25-2.5-1.875-3.75-1.875s-3.75 0.625-3.75 1.875v0.625h7.5v-0.625zM15.833 2.5h-11.667c-0.917 0-1.667 0.75-1.667 1.667v11.667c0 0.917 0.75 1.667 1.667 1.667h11.667c0.917 0 1.667-0.75 1.667-1.667v-11.667c0-0.917-0.75-1.667-1.667-1.667zM15.833 15.833h-11.667v-11.667h11.667v11.667z"></path></symbol><symbol id="icon-vpn-key" viewBox="0 0 20 20"><title>vpn-key</title><path d="M10.542 8.333c-0.683-1.942-2.533-3.333-4.708-3.333-2.758 0-5 2.242-5 5s2.242 5 5 5c2.175 0 4.025-1.392 4.708-3.333h3.625v3.333h3.333v-3.333h1.667v-3.333h-8.625zM5.833 11.667c-0.917 0-1.667-0.75-1.667-1.667s0.75-1.667 1.667-1.667 1.667 0.75 1.667 1.667-0.75 1.667-1.667 1.667z"></path></symbol><symbol id="icon-menu" viewBox="0 0 32 32"><title>menu</title><path d="M2 6h28v6h-28zM2 14h28v6h-28zM2 22h28v6h-28z"></path></symbol><symbol id="icon-cancel-circle" viewBox="0 0 32 32"><title>cancel-circle</title><path d="M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM16 29c-7.18 0-13-5.82-13-13s5.82-13 13-13 13 5.82 13 13-5.82 13-13 13z"></path><path d="M21 8l-5 5-5-5-3 3 5 5-5 5 3 3 5-5 5 5 3-3-5-5 5-5z"></path></symbol></defs></svg>'
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
			elem.removeClass('btnMenuOut');
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


//sliderTabs
function sliderTabs() {
	var slider = document.querySelector('.edge__wrap');
	var prev = slider.querySelector('.owl-prev');
	var next = slider.querySelector('.owl-next');
	var dotItems = slider.querySelectorAll('.edge__desc-item');
	dotItems.forEach(function(item, index, array){
		if(item.classList.contains('active')){
			var dataNumber = item.dataset.tabnumber;
			var dataClass = item.dataset.tabclass;
			var tabItem = document.querySelectorAll('.' + dataClass + ' .edge__tab-item');

			tabItem.forEach(function(item, index, array){
				if(item.dataset.tabnumber == dataNumber){
					var siblings = getSiblings(item);

					item.classList.add('active', 'showFlex', 'animated');
					item.classList.remove('hide');

					siblings.forEach(function(item, index, array){
						item.classList.add('hide');
						item.classList.remove('active', 'showFlex', 'animated');
					});
				}
			});
		}
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

//accordion
function accordion() {
	$( ".accordion" ).accordion();
}

//owl bug fixes
function owlVerticalAlign(slider){
	$(window).on('load || resize', function(){
		var height = $(slider + ' .owl-dots').innerHeight();
		var elem = document.querySelector(slider + ' .owl-nav');
		elem.style.marginTop = -height + 'px';
	});
}

//Смена табов слайдера при клике
function sliderArrowHandler() {
	var prev = document.querySelector('.edge__slider .owl-prev');
	var next = document.querySelector('.edge__slider .owl-next');

	prev.addEventListener('click', sliderTabs);
	next.addEventListener('click', sliderTabs);
}

//owl-slider
function slider(animationIn, animationOut, elem) {
	elem = elem || '.slider';
	animationIn = animationIn || 'fadeIn';
	animationOut = animationOut || 'fadeOut';
	$(elem).owlCarousel({
		loop: true,
		nav: true,
		items: 1,
		dots: false,
		animateIn: animationIn,
		animateOut: animationOut,
		autoplay: true,
		autoplayTimeout: 5000,
	});
}
function staticSlider(animationIn, animationOut, elem) {
	elem = elem || '.staticSlider';
	animationIn = animationIn || 'fadeIn';
	animationOut = animationOut || 'fadeOut';

	$(elem).owlCarousel({
		loop: true,
		nav: true,
		dots: true,
		dotsContainer: '.edge__desc',
		dotClass: 'edge__desc-item',
		onDragged: onDrag,
		dotData: true,
		items: 1,
		animateIn: animationIn,
		animateOut: animationOut,
		navText: ['<svg class="icon icon-keyboard-arrow-left"><use xlink:href="#icon-keyboard-arrow-left"></use></svg>', '<svg class="icon icon-keyboard-arrow-right"><use xlink:href="#icon-keyboard-arrow-right"></use></svg>'],
	});

	var dotElem = document.querySelector('.edge__desc-item:last-child');
	dotElem.innerHTML = 'НАДЕЖНЫЙ ЗАСТРОЙЩИК';
	$(elem).on('changed.owl.carousel', function(event) {
		var dotElem = document.querySelector('.edge__desc-item:nth-child(4)');
		var dotDomElems = document.querySelector('.edge__desc-item:last-child');
		dotDomElems.innerHTML = 'НАДЕЖНЫЙ ЗАСТРОЙЩИК';
		dotElem.innerHTML = 'ПРОДУМАННОЕ ПРОСТРАНСТВО';
	})

	function onDrag() {
		sliderTabs();
	}

	sliderArrowHandler();
}
function roomSlider(animationIn, animationOut, elem) {
	elem = elem || '.roomSlider';
	animationIn = animationIn || 'fadeIn';
	animationOut = animationOut || 'fadeOut';
	$(elem).owlCarousel({
		loop: true,
		nav: true,
		dots: true,
		dotData: true,
		items: 1,
		animateIn: animationIn,
		animateOut: animationOut,
		navText: ['<svg class="icon icon-keyboard-arrow-left"><use xlink:href="#icon-keyboard-arrow-left"></use></svg>', '<svg class="icon icon-keyboard-arrow-right"><use xlink:href="#icon-keyboard-arrow-right"></use></svg>'],
	});
}
function photoSlider(animationIn, animationOut, elem) {
	elem = elem || '.photoSlider';
	animationIn = animationIn || 'fadeIn';
	animationOut = animationOut || 'fadeOut';
	$(elem).owlCarousel({
		loop: true,
		nav: true,
		items: 1,
		animateIn: animationIn,
		animateOut: animationOut,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		navText: ['<svg class="icon icon-keyboard-arrow-left"><use xlink:href="#icon-keyboard-arrow-left"></use></svg>', '<svg class="icon icon-keyboard-arrow-right"><use xlink:href="#icon-keyboard-arrow-right"></use></svg>'],
		responsive: {
				0: {
					dots: false
				},
				768: {
					dots: true
				}
		}
	});
}

function slickSlider() {
	//slick slider
	$('.product__slider').slick({
		 slidesToShow: 1,
		 slidesToScroll: 1,
		 arrows: false,
		 fade: true,
		 adaptiveHeight: true,
		 asNavFor: '.product__nav'
		});
		$('.product__nav').slick({
		 slidesToShow: 6,
		 slidesToScroll: 1,
		 asNavFor: '.product__slider',
		 dots: false,
		 arrows: false,
		 focusOnSelect: true,
		 responsive: [
	    {
	      breakpoint: 551,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 1,
	      }
	    },
	  ]
		});
}

window.onload = function() {
	//scollEvents
	scrollEffects();
	changeClassOnScroll();

	//other
	accordion();
	tabs();
	bodyOverflow('.hamburger');
	bodyOverflow('.map__menu');

	//active toggle
	active('.hamburger');
	active('.slider-main__btn-menu');
	active('.map__menu')

	//Animation
	animate('.hamburger', '.hamburger__line1', 'rotate_in_45', 'rotate_in_45_out');
	animate('.hamburger', '.hamburger__line3', 'rotate_in_-45', 'rotate_in_-45_out');
	animate('.slider-main__btn-menu', '.menu', 'slideInRight', 'slideOutRight');
	animate('.slider-main__btn-menu', '.slider-main__btn-menu', 'btnMenuIn', 'btnMenuOut');
	//Animation+hide
	animateHide('.map__menu', '.map__desc', 'slideInDown', 'slideOutDown');

	//slider
	slider('zoomIn', 'fadeOut');
	roomSlider('slideInDown', 'slideOutDown');
	photoSlider('fadeIn', 'fadeOut', '.photo-slider');
	slider('zoomIn', 'fadeOut', '.contacts__slider');
	slickSlider();
	staticSlider('slideInDown', 'slideOutDown');
};
