"use strict"
//templates
new Vue({
		el: '#global-svg',
		template: '<svg aria-hidden="true" style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><symbol id="icon-keyboard-arrow-left" viewBox="0 0 20 20"><title>keyboard-arrow-left</title><path d="M12.842 13.408l-3.817-3.825 3.817-3.825-1.175-1.175-5 5 5 5z"></path></symbol><symbol id="icon-account-balance-wallet" viewBox="0 0 20 20"><title>account-balance-wallet</title><path d="M17.5 15v0.833c0 0.917-0.75 1.667-1.667 1.667h-11.667c-0.925 0-1.667-0.75-1.667-1.667v-11.667c0-0.917 0.742-1.667 1.667-1.667h11.667c0.917 0 1.667 0.75 1.667 1.667v0.833h-7.5c-0.925 0-1.667 0.75-1.667 1.667v6.667c0 0.917 0.742 1.667 1.667 1.667h7.5zM10 13.333h8.333v-6.667h-8.333v6.667zM13.333 11.25c-0.692 0-1.25-0.558-1.25-1.25s0.558-1.25 1.25-1.25 1.25 0.558 1.25 1.25-0.558 1.25-1.25 1.25z"></path></symbol><symbol id="icon-access-time" viewBox="0 0 20 20"><title>access-time</title><path d="M9.992 1.667c-4.6 0-8.325 3.733-8.325 8.333s3.725 8.333 8.325 8.333c4.608 0 8.342-3.733 8.342-8.333s-3.733-8.333-8.342-8.333zM10 16.667c-3.683 0-6.667-2.983-6.667-6.667s2.983-6.667 6.667-6.667 6.667 2.983 6.667 6.667-2.983 6.667-6.667 6.667z"></path><path d="M10.417 5.833h-1.25v5l4.375 2.625 0.625-1.025-3.75-2.225z"></path></symbol><symbol id="icon-account-balance" viewBox="0 0 20 20"><title>account-balance</title><path d="M3.333 8.333v5.833h2.5v-5.833h-2.5zM8.333 8.333v5.833h2.5v-5.833h-2.5zM1.667 18.333h15.833v-2.5h-15.833v2.5zM13.333 8.333v5.833h2.5v-5.833h-2.5zM9.583 0.833l-7.917 4.167v1.667h15.833v-1.667l-7.917-4.167z"></path></symbol><symbol id="icon-adb" viewBox="0 0 20 20"><title>adb</title><path d="M4.167 13.333c0 3.225 2.608 5.833 5.833 5.833s5.833-2.608 5.833-5.833v-3.333h-11.667v3.333zM13.433 3.642l1.75-1.75-0.683-0.692-1.917 1.925c-0.783-0.392-1.65-0.625-2.583-0.625s-1.8 0.233-2.575 0.625l-1.925-1.925-0.683 0.692 1.75 1.75c-1.45 1.058-2.4 2.758-2.4 4.692v0.833h11.667v-0.833c0-1.933-0.95-3.633-2.4-4.692zM7.5 7.5c-0.458 0-0.833-0.375-0.833-0.833s0.375-0.833 0.833-0.833 0.833 0.375 0.833 0.833-0.375 0.833-0.833 0.833zM12.5 7.5c-0.458 0-0.833-0.375-0.833-0.833s0.375-0.833 0.833-0.833 0.833 0.375 0.833 0.833-0.375 0.833-0.833 0.833z"></path></symbol><symbol id="icon-keyboard" viewBox="0 0 20 20"><title>keyboard</title><path d="M16.667 4.167h-13.333c-0.917 0-1.658 0.75-1.658 1.667l-0.008 8.333c0 0.917 0.75 1.667 1.667 1.667h13.333c0.917 0 1.667-0.75 1.667-1.667v-8.333c0-0.917-0.75-1.667-1.667-1.667zM9.167 6.667h1.667v1.667h-1.667v-1.667zM9.167 9.167h1.667v1.667h-1.667v-1.667zM6.667 6.667h1.667v1.667h-1.667v-1.667zM6.667 9.167h1.667v1.667h-1.667v-1.667zM5.833 10.833h-1.667v-1.667h1.667v1.667zM5.833 8.333h-1.667v-1.667h1.667v1.667zM13.333 14.167h-6.667v-1.667h6.667v1.667zM13.333 10.833h-1.667v-1.667h1.667v1.667zM13.333 8.333h-1.667v-1.667h1.667v1.667zM15.833 10.833h-1.667v-1.667h1.667v1.667zM15.833 8.333h-1.667v-1.667h1.667v1.667z"></path></symbol><symbol id="icon-laptop" viewBox="0 0 20 20"><title>laptop</title><path d="M16.667 15c0.917 0 1.667-0.75 1.667-1.667v-8.333c0-0.917-0.75-1.667-1.667-1.667h-13.333c-0.917 0-1.667 0.75-1.667 1.667v8.333c0 0.917 0.75 1.667 1.667 1.667h-3.333v1.667h20v-1.667h-3.333zM3.333 5h13.333v8.333h-13.333v-8.333z"></path></symbol><symbol id="icon-power-settings-new" viewBox="0 0 20 20"><title>power-settings-new</title><path d="M10.833 2.5h-1.667v8.333h1.667v-8.333zM14.858 4.308l-1.183 1.183c1.317 1.058 2.158 2.683 2.158 4.508 0 3.225-2.608 5.833-5.833 5.833s-5.833-2.608-5.833-5.833c0-1.825 0.842-3.45 2.15-4.517l-1.175-1.175c-1.617 1.375-2.642 3.408-2.642 5.692 0 4.142 3.358 7.5 7.5 7.5s7.5-3.358 7.5-7.5c0-2.283-1.025-4.317-2.642-5.692z"></path></symbol><symbol id="icon-settings-input-svideo" viewBox="0 0 20 20"><title>settings-input-svideo</title><path d="M6.667 9.583c0-0.692-0.558-1.25-1.25-1.25s-1.25 0.558-1.25 1.25 0.558 1.25 1.25 1.25 1.25-0.558 1.25-1.25zM12.5 5.417c0-0.692-0.558-1.25-1.25-1.25h-2.5c-0.692 0-1.25 0.558-1.25 1.25s0.558 1.25 1.25 1.25h2.5c0.692 0 1.25-0.558 1.25-1.25zM7.083 12.5c-0.692 0-1.25 0.558-1.25 1.25s0.558 1.25 1.25 1.25 1.25-0.558 1.25-1.25-0.558-1.25-1.25-1.25zM10 0.833c-5.058 0-9.167 4.108-9.167 9.167s4.108 9.167 9.167 9.167 9.167-4.108 9.167-9.167-4.108-9.167-9.167-9.167zM10 17.5c-4.133 0-7.5-3.367-7.5-7.5s3.367-7.5 7.5-7.5 7.5 3.367 7.5 7.5-3.367 7.5-7.5 7.5zM14.583 8.333c-0.692 0-1.25 0.558-1.25 1.25s0.558 1.25 1.25 1.25 1.25-0.558 1.25-1.25-0.558-1.25-1.25-1.25zM12.917 12.5c-0.692 0-1.25 0.558-1.25 1.25s0.558 1.25 1.25 1.25 1.25-0.558 1.25-1.25-0.558-1.25-1.25-1.25z"></path></symbol><symbol id="icon-keyboard-arrow-right" viewBox="0 0 20 20"><title>keyboard-arrow-right</title><path d="M7.158 13.617l3.817-3.825-3.817-3.825 1.175-1.175 5 5-5 5z"></path></symbol><symbol id="icon-down" viewBox="0 0 20 20"><title>down</title><path d="M6.175 6.533l3.825 3.817 3.825-3.817 1.175 1.175-5 5-5-5z"></path></symbol><symbol id="icon-up" viewBox="0 0 20 20"><title>up</title><path d="M6.175 12.842l3.825-3.817 3.825 3.817 1.175-1.175-5-5-5 5z"></path></symbol><symbol id="icon-check-box-outline-blank" viewBox="0 0 20 20"><title>check-box-outline-blank</title><path d="M15.833 4.167v11.667h-11.667v-11.667h11.667zM15.833 2.5h-11.667c-0.917 0-1.667 0.75-1.667 1.667v11.667c0 0.917 0.75 1.667 1.667 1.667h11.667c0.917 0 1.667-0.75 1.667-1.667v-11.667c0-0.917-0.75-1.667-1.667-1.667z"></path></symbol><symbol id="icon-check-box" viewBox="0 0 20 20"><title>check-box</title><path d="M15.833 2.5h-11.667c-0.925 0-1.667 0.75-1.667 1.667v11.667c0 0.917 0.742 1.667 1.667 1.667h11.667c0.925 0 1.667-0.75 1.667-1.667v-11.667c0-0.917-0.742-1.667-1.667-1.667zM8.333 14.167l-4.167-4.167 1.175-1.175 2.992 2.983 6.325-6.325 1.175 1.183-7.5 7.5z"></path></symbol><symbol id="icon-check-circle" viewBox="0 0 20 20"><title>check-circle</title><path d="M10 1.667c-4.6 0-8.333 3.733-8.333 8.333s3.733 8.333 8.333 8.333 8.333-3.733 8.333-8.333-3.733-8.333-8.333-8.333zM8.333 14.167l-4.167-4.167 1.175-1.175 2.992 2.983 6.325-6.325 1.175 1.183-7.5 7.5z"></path></symbol><symbol id="icon-contact-mail" viewBox="0 0 20 20"><title>contact-mail</title><path d="M17.5 6.667v-0.833l-2.5 1.667-2.5-1.667v0.833l2.5 1.667 2.5-1.667zM18.333 2.5h-16.667c-0.917 0-1.667 0.75-1.667 1.667v11.667c0 0.917 0.75 1.667 1.667 1.667h16.667c0.917 0 1.658-0.75 1.658-1.667l0.008-11.667c0-0.917-0.75-1.667-1.667-1.667zM6.667 5c1.383 0 2.5 1.117 2.5 2.5s-1.117 2.5-2.5 2.5-2.5-1.117-2.5-2.5 1.117-2.5 2.5-2.5zM11.667 15h-10v-0.833c0-1.667 3.333-2.583 5-2.583s5 0.917 5 2.583v0.833zM18.333 10h-6.667v-5h6.667v5z"></path></symbol><symbol id="icon-desktop-mac" viewBox="0 0 20 20"><title>desktop-mac</title><path d="M17.5 1.667h-15c-0.917 0-1.667 0.75-1.667 1.667v10c0 0.917 0.75 1.667 1.667 1.667h5.833l-1.667 2.5v0.833h6.667v-0.833l-1.667-2.5h5.833c0.917 0 1.667-0.75 1.667-1.667v-10c0-0.917-0.75-1.667-1.667-1.667zM17.5 11.667h-15v-8.333h15v8.333z"></path></symbol><symbol id="icon-developer-board" viewBox="0 0 20 20"><title>developer-board</title><path d="M18.333 7.5v-1.667h-1.667v-1.667c0-0.917-0.75-1.667-1.667-1.667h-11.667c-0.917 0-1.667 0.75-1.667 1.667v11.667c0 0.917 0.75 1.667 1.667 1.667h11.667c0.917 0 1.667-0.75 1.667-1.667v-1.667h1.667v-1.667h-1.667v-1.667h1.667v-1.667h-1.667v-1.667h1.667zM15 15.833h-11.667v-11.667h11.667v11.667zM5 10.833h4.167v3.333h-4.167zM10 5.833h3.333v2.5h-3.333zM5 5.833h4.167v4.167h-4.167zM10 9.167h3.333v5h-3.333z"></path></symbol><symbol id="icon-expand-more" viewBox="0 0 20 20"><title>expand-more</title><path d="M13.825 7.158l-3.825 3.817-3.825-3.817-1.175 1.175 5 5 5-5z"></path></symbol><symbol id="icon-filter-frames" viewBox="0 0 20 20"><title>filter-frames</title><path d="M16.667 3.333h-3.333l-3.333-3.333-3.333 3.333h-3.333c-0.917 0-1.667 0.75-1.667 1.667v11.667c0 0.917 0.75 1.667 1.667 1.667h13.333c0.917 0 1.667-0.75 1.667-1.667v-11.667c0-0.917-0.75-1.667-1.667-1.667zM16.667 16.667h-13.333v-11.667h3.767l2.933-2.917 2.9 2.917h3.733v11.667zM15 6.667h-10v8.333h10z"></path></symbol><symbol id="icon-laptop-chromebook" viewBox="0 0 20 20"><title>laptop-chromebook</title><path d="M18.333 15v-12.5h-16.667v12.5h-1.667v1.667h20v-1.667h-1.667zM11.667 15h-3.333v-0.833h3.333v0.833zM16.667 12.5h-13.333v-8.333h13.333v8.333z"></path></symbol><symbol id="icon-laptop-windows" viewBox="0 0 20 20"><title>laptop-windows</title><path d="M16.667 15v-0.833c0.917 0 1.658-0.75 1.658-1.667l0.008-8.333c0-0.917-0.75-1.667-1.667-1.667h-13.333c-0.917 0-1.667 0.75-1.667 1.667v8.333c0 0.917 0.75 1.667 1.667 1.667v0.833h-3.333v1.667h20v-1.667h-3.333zM3.333 4.167h13.333v8.333h-13.333v-8.333z"></path></symbol><symbol id="icon-laptop2" viewBox="0 0 20 20"><title>laptop2</title><path d="M16.667 15c0.917 0 1.667-0.75 1.667-1.667v-8.333c0-0.917-0.75-1.667-1.667-1.667h-13.333c-0.917 0-1.667 0.75-1.667 1.667v8.333c0 0.917 0.75 1.667 1.667 1.667h-3.333v1.667h20v-1.667h-3.333zM3.333 5h13.333v8.333h-13.333v-8.333z"></path></symbol><symbol id="icon-live-help" viewBox="0 0 20 20"><title>live-help</title><path d="M15.833 1.667h-11.667c-0.925 0-1.667 0.75-1.667 1.667v11.667c0 0.917 0.742 1.667 1.667 1.667h3.333l2.5 2.5 2.5-2.5h3.333c0.917 0 1.667-0.75 1.667-1.667v-11.667c0-0.917-0.75-1.667-1.667-1.667zM10.833 15h-1.667v-1.667h1.667v1.667zM12.558 8.542l-0.75 0.767c-0.6 0.608-0.975 1.108-0.975 2.358h-1.667v-0.417c0-0.917 0.375-1.75 0.975-2.358l1.033-1.050c0.308-0.3 0.492-0.717 0.492-1.175 0-0.917-0.75-1.667-1.667-1.667s-1.667 0.75-1.667 1.667h-1.667c0-1.842 1.492-3.333 3.333-3.333s3.333 1.492 3.333 3.333c0 0.733-0.3 1.4-0.775 1.875z"></path></symbol><symbol id="icon-location-on" viewBox="0 0 20 20"><title>location-on</title><path d="M10 1.667c-3.225 0-5.833 2.608-5.833 5.833 0 4.375 5.833 10.833 5.833 10.833s5.833-6.458 5.833-10.833c0-3.225-2.608-5.833-5.833-5.833zM10 9.583c-1.15 0-2.083-0.933-2.083-2.083s0.933-2.083 2.083-2.083 2.083 0.933 2.083 2.083-0.933 2.083-2.083 2.083z"></path></symbol><symbol id="icon-mail-outline" viewBox="0 0 20 20"><title>mail-outline</title><path d="M16.667 3.333h-13.333c-0.917 0-1.658 0.75-1.658 1.667l-0.008 10c0 0.917 0.75 1.667 1.667 1.667h13.333c0.917 0 1.667-0.75 1.667-1.667v-10c0-0.917-0.75-1.667-1.667-1.667zM16.667 15h-13.333v-8.333l6.667 4.167 6.667-4.167v8.333zM10 9.167l-6.667-4.167h13.333l-6.667 4.167z"></path></symbol><symbol id="icon-memory" viewBox="0 0 20 20"><title>memory</title><path d="M12.5 7.5h-5v5h5v-5zM10.833 10.833h-1.667v-1.667h1.667v1.667zM17.5 9.167v-1.667h-1.667v-1.667c0-0.917-0.75-1.667-1.667-1.667h-1.667v-1.667h-1.667v1.667h-1.667v-1.667h-1.667v1.667h-1.667c-0.917 0-1.667 0.75-1.667 1.667v1.667h-1.667v1.667h1.667v1.667h-1.667v1.667h1.667v1.667c0 0.917 0.75 1.667 1.667 1.667h1.667v1.667h1.667v-1.667h1.667v1.667h1.667v-1.667h1.667c0.917 0 1.667-0.75 1.667-1.667v-1.667h1.667v-1.667h-1.667v-1.667h1.667zM14.167 14.167h-8.333v-8.333h8.333v8.333z"></path></symbol><symbol id="icon-move-in-box" viewBox="0 0 20 20"><title>move-in-box</title><path d="M15.833 2.5h-11.675c-0.925 0-1.65 0.75-1.65 1.667l-0.008 11.667c0 0.917 0.733 1.667 1.658 1.667h11.675c0.917 0 1.667-0.75 1.667-1.667v-11.667c0-0.917-0.75-1.667-1.667-1.667zM15.833 12.5h-3.333c0 1.383-1.125 2.5-2.5 2.5s-2.5-1.117-2.5-2.5h-3.342v-8.333h11.675v8.333zM13.333 8.333h-1.667v-2.5h-3.333v2.5h-1.667l3.333 3.333 3.333-3.333z"></path></symbol><symbol id="icon-power" viewBox="0 0 20 20"><title>power</title><path d="M13.342 5.833l-0.008-3.333h-1.667v3.333h-3.333v-3.333h-1.667v3.333h-0.008c-0.825-0.008-1.658 0.825-1.658 1.658v4.575l2.917 2.933v2.5h4.167v-2.5l2.917-2.925v-4.583c0-0.833-0.833-1.667-1.658-1.658z"></path></symbol><symbol id="icon-toys" viewBox="0 0 20 20"><title>toys</title><path d="M10 10c0-2.5 2.083-4.583 4.583-4.583s4.583 2.083 4.583 4.583h-9.167zM10 10c0 2.5-2.083 4.583-4.583 4.583s-4.583-2.083-4.583-4.583h9.167zM10 10c-2.5 0-4.583-2.083-4.583-4.583s2.083-4.583 4.583-4.583v9.167zM10 10c2.5 0 4.583 2.083 4.583 4.583s-2.083 4.583-4.583 4.583v-9.167z"></path></symbol></defs></svg>'
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

function partnerSlider(animationIn, animationOut, elem, items, navContainer, navText) {
	animationIn = animationIn || 'zoomIn';
	animationOut = animationOut || 'fadeOut';
	elem = elem || '.partners__slider';
	items = items || 6;
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
			dots: false,
			dotsEach: true,
			dotsContainer: '',
			navText: ['', ''],
			responsive: {
				0: {
					items: 1
				},
				768: {
					items: 3
				},
				1025: {
					items: 6
				}
			}
		});
	}
}
function photoSlider(animationIn, animationOut, elem, items, navContainer, navText) {
	animationIn = animationIn || 'zoomIn';
	animationOut = animationOut || 'fadeOut';
	elem = elem || '.photo__slider';
	items = items || 5;
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
			navText: ['', ''],
			responsive: {
				0: {
					items: 1
				},
				768: {
					items: 3
				},
				1025: {
					items: 5
				}
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
	var elem = $('.calc__label');

	elem.on('click', function(){
		$(this).closest('.calc__line').siblings().find('.calc__input').prop('checked', false);
	});
}

window.onload = function() {
	//scrollEvents
	scrollEffects();
	changeClassOnScroll();

	//other
	bodyOverflow('.hamburger');
	phoneMask();
	inputFix();

	//calc

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
	animate('.hamburger__wrap', '.nav', 'slideInDown', 'slideOutUp');

	//slider(animationIn, animationOut, elem, items, navContainer, navText)
	slider();
	partnerSlider();
	photoSlider();
};
