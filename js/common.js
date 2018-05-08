"use strict"
//templates
new Vue({
		el: '#global-svg',
		template: '<svg aria-hidden="true" style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><symbol id="icon-ruble-sign" viewBox="0 0 24 32"><title>ruble-sign</title><path d="M14.96 20c5.32 0 9.040-3.716 9.040-9.058s-3.72-8.942-9.040-8.942h-10.21c-0.414 0-0.75 0.336-0.75 0.75v12.915h-3.25c-0.414 0-0.75 0.336-0.75 0.75v2.835c0 0.414 0.336 0.75 0.75 0.75h3.25v2h-3.25c-0.414 0-0.75 0.336-0.75 0.75v2.5c0 0.414 0.336 0.75 0.75 0.75h3.25v3.25c0 0.414 0.336 0.75 0.75 0.75h3.66c0.414 0 0.75-0.336 0.75-0.75v-3.25h10.090c0.414 0 0.75-0.336 0.75-0.75v-2.5c0-0.414-0.336-0.75-0.75-0.75h-10.090v-2h5.8zM9.16 6.297h4.92c2.92 0 4.68 1.819 4.68 4.645 0 2.864-1.76 4.723-4.76 4.723h-4.84v-9.368z"></path></symbol><symbol id="icon-access-time" viewBox="0 0 32 32"><title>access-time</title><path d="M15.987 2.667c-7.36 0-13.32 5.973-13.32 13.333s5.96 13.333 13.32 13.333c7.373 0 13.347-5.973 13.347-13.333s-5.973-13.333-13.347-13.333zM16 26.667c-5.893 0-10.667-4.773-10.667-10.667s4.773-10.667 10.667-10.667 10.667 4.773 10.667 10.667-4.773 10.667-10.667 10.667z"></path><path d="M16.667 9.333h-2v8l7 4.2 1-1.64-6-3.56z"></path></symbol><symbol id="icon-account-balance" viewBox="0 0 32 32"><title>account-balance</title><path d="M5.333 13.333v9.333h4v-9.333h-4zM13.333 13.333v9.333h4v-9.333h-4zM2.667 29.333h25.333v-4h-25.333v4zM21.333 13.333v9.333h4v-9.333h-4zM15.333 1.333l-12.667 6.667v2.667h25.333v-2.667l-12.667-6.667z"></path></symbol><symbol id="icon-account-circle" viewBox="0 0 32 32"><title>account-circle</title><path d="M16 2.667c-7.36 0-13.333 5.973-13.333 13.333s5.973 13.333 13.333 13.333 13.333-5.973 13.333-13.333-5.973-13.333-13.333-13.333zM16 6.667c2.213 0 4 1.787 4 4s-1.787 4-4 4-4-1.787-4-4 1.787-4 4-4zM16 25.6c-3.333 0-6.28-1.707-8-4.293 0.040-2.653 5.333-4.107 8-4.107 2.653 0 7.96 1.453 8 4.107-1.72 2.587-4.667 4.293-8 4.293z"></path></symbol><symbol id="icon-check-box" viewBox="0 0 32 32"><title>check-box</title><path d="M25.333 4h-18.667c-1.48 0-2.667 1.2-2.667 2.667v18.667c0 1.467 1.187 2.667 2.667 2.667h18.667c1.48 0 2.667-1.2 2.667-2.667v-18.667c0-1.467-1.187-2.667-2.667-2.667zM13.333 22.667l-6.667-6.667 1.88-1.88 4.787 4.773 10.12-10.12 1.88 1.893-12 12z"></path></symbol><symbol id="icon-check" viewBox="0 0 32 32"><title>check</title><path d="M12 21.56l-5.56-5.56-1.893 1.88 7.453 7.453 16-16-1.88-1.88z"></path></symbol><symbol id="icon-delete-forever" viewBox="0 0 32 32"><title>delete-forever</title><path d="M8 25.333c0 1.467 1.2 2.667 2.667 2.667h10.667c1.467 0 2.667-1.2 2.667-2.667v-16h-16v16zM11.28 15.84l1.88-1.88 2.84 2.827 2.827-2.827 1.88 1.88-2.827 2.827 2.827 2.827-1.88 1.88-2.827-2.827-2.827 2.827-1.88-1.88 2.827-2.827-2.84-2.827zM20.667 5.333l-1.333-1.333h-6.667l-1.333 1.333h-4.667v2.667h18.667v-2.667z"></path></symbol><symbol id="icon-filter-list" viewBox="0 0 32 32"><title>filter-list</title><path d="M13.333 24h5.333v-2.667h-5.333v2.667zM4 8v2.667h24v-2.667h-24zM8 17.333h16v-2.667h-16v2.667z"></path></symbol><symbol id="icon-local-pizza" viewBox="0 0 32 32"><title>local-pizza</title><path d="M16 2.667c-4.76 0-9.027 2.053-11.987 5.333l11.987 21.333 11.987-21.333c-2.947-3.267-7.227-5.333-11.987-5.333zM9.333 9.333c0-1.467 1.2-2.667 2.667-2.667s2.667 1.2 2.667 2.667-1.2 2.667-2.667 2.667-2.667-1.2-2.667-2.667zM16 20c-1.467 0-2.667-1.2-2.667-2.667s1.2-2.667 2.667-2.667 2.667 1.2 2.667 2.667-1.2 2.667-2.667 2.667z"></path></symbol><symbol id="icon-person-pin" viewBox="0 0 32 32"><title>person-pin</title><path d="M25.333 2.667h-18.667c-1.48 0-2.667 1.2-2.667 2.667v18.667c0 1.467 1.187 2.667 2.667 2.667h5.333l4 4 4-4h5.333c1.467 0 2.667-1.2 2.667-2.667v-18.667c0-1.467-1.2-2.667-2.667-2.667zM16 7.067c1.987 0 3.6 1.613 3.6 3.6s-1.613 3.6-3.6 3.6c-1.987 0-3.6-1.613-3.6-3.6s1.613-3.6 3.6-3.6zM24 21.333h-16v-1.2c0-2.667 5.333-4.133 8-4.133s8 1.467 8 4.133v1.2z"></path></symbol><symbol id="icon-phone" viewBox="0 0 32 32"><title>phone</title><path d="M8.827 14.387c1.92 3.773 5.013 6.853 8.787 8.787l2.933-2.933c0.36-0.36 0.893-0.48 1.36-0.32 1.493 0.493 3.107 0.76 4.76 0.76 0.733 0 1.333 0.6 1.333 1.333v4.653c0 0.733-0.6 1.333-1.333 1.333-12.52 0-22.667-10.147-22.667-22.667 0-0.733 0.6-1.333 1.333-1.333h4.667c0.733 0 1.333 0.6 1.333 1.333 0 1.667 0.267 3.267 0.76 4.76 0.147 0.467 0.040 0.987-0.333 1.36l-2.933 2.933z"></path></symbol><symbol id="icon-radio-button-checked" viewBox="0 0 32 32"><title>radio-button-checked</title><path d="M16 9.333c-3.68 0-6.667 2.987-6.667 6.667s2.987 6.667 6.667 6.667 6.667-2.987 6.667-6.667-2.987-6.667-6.667-6.667zM16 2.667c-7.36 0-13.333 5.973-13.333 13.333s5.973 13.333 13.333 13.333 13.333-5.973 13.333-13.333-5.973-13.333-13.333-13.333zM16 26.667c-5.893 0-10.667-4.773-10.667-10.667s4.773-10.667 10.667-10.667 10.667 4.773 10.667 10.667-4.773 10.667-10.667 10.667z"></path></symbol><symbol id="icon-radio-button-unchecked" viewBox="0 0 32 32"><title>radio-button-unchecked</title><path d="M16 2.667c-7.36 0-13.333 5.973-13.333 13.333s5.973 13.333 13.333 13.333 13.333-5.973 13.333-13.333-5.973-13.333-13.333-13.333zM16 26.667c-5.893 0-10.667-4.773-10.667-10.667s4.773-10.667 10.667-10.667 10.667 4.773 10.667 10.667-4.773 10.667-10.667 10.667z"></path></symbol><symbol id="icon-spa" viewBox="0 0 32 32"><title>spa</title><path fill="#607d8b" style="fill: var(--color1, #607d8b)" d="M11.4 16c-1.427-0.947-3-1.693-4.707-2.147 1.707 0.453 3.28 1.2 4.707 2.147zM25.307 13.853c-1.72 0.453-3.32 1.213-4.76 2.187 1.44-0.973 3.040-1.733 4.76-2.187z"></path><path fill="#000" style="fill: var(--color2, #000)" d="M20.653 12.84c-0.24-3.72-1.747-7.347-4.573-10.173-2.853 2.853-4.427 6.48-4.733 10.173 1.707 0.907 3.28 2.080 4.653 3.507 1.373-1.413 2.947-2.587 4.653-3.507zM11.987 16.373c-0.187-0.133-0.4-0.253-0.6-0.387 0.2 0.147 0.413 0.253 0.6 0.387zM20.547 16.040c-0.173 0.12-0.36 0.213-0.533 0.347 0.173-0.133 0.36-0.227 0.533-0.347zM16 20.6c-2.867-4.373-7.76-7.267-13.333-7.267 0 7.093 4.48 13.093 10.707 15.32 0.84 0.307 1.72 0.533 2.627 0.68 0.907-0.16 1.773-0.387 2.627-0.68 6.227-2.227 10.707-8.227 10.707-15.32-5.573 0-10.467 2.893-13.333 7.267z"></path></symbol><symbol id="icon-subway" viewBox="0 0 32 32"><title>subway</title><path d="M22 21.333c0 0.736-0.597 1.333-1.333 1.333s-1.333-0.597-1.333-1.333c0-0.736 0.597-1.333 1.333-1.333s1.333 0.597 1.333 1.333z"></path><path d="M12.667 21.333c0 0.736-0.597 1.333-1.333 1.333s-1.333-0.597-1.333-1.333c0-0.736 0.597-1.333 1.333-1.333s1.333 0.597 1.333 1.333z"></path><path d="M9.347 12h13.333v6.667h-13.333z"></path><path d="M23.733 3.733c-2.4-0.947-5.253-1.067-7.733-1.067s-5.333 0.12-7.733 1.067c-3.56 1.387-5.6 4.333-5.6 8.080v17.52h26.667v-17.52c0-3.747-2.040-6.693-5.6-8.080zM24 21.173c0 1.933-1.573 3.493-3.507 3.493l1.507 1.493v0.507h-2l-2-2h-3.773l-2 2h-2.227v-0.507l1.493-1.493c-1.92 0-3.493-1.573-3.493-3.493v-9.173c0-3.507 4-4 8-4 4.427 0 8 0.507 8 4v9.173z"></path></symbol><symbol id="icon-timer" viewBox="0 0 32 32"><title>timer</title><path d="M20 1.333h-8v2.667h8v-2.667zM14.667 18.667h2.667v-8h-2.667v8zM25.373 9.853l1.893-1.893c-0.573-0.68-1.2-1.32-1.88-1.88l-1.893 1.893c-2.067-1.653-4.667-2.64-7.493-2.64-6.627 0-12 5.373-12 12s5.36 12 12 12 12-5.373 12-12c0-2.827-0.987-5.427-2.627-7.48zM16 26.667c-5.16 0-9.333-4.173-9.333-9.333s4.173-9.333 9.333-9.333 9.333 4.173 9.333 9.333-4.173 9.333-9.333 9.333z"></path></symbol><symbol id="icon-verified-user" viewBox="0 0 32 32"><title>verified-user</title><path d="M16 1.333l-12 5.333v8c0 7.4 5.12 14.32 12 16 6.88-1.68 12-8.6 12-16v-8l-12-5.333zM13.333 22.667l-5.333-5.333 1.88-1.88 3.453 3.44 8.787-8.787 1.88 1.893-10.667 10.667z"></path></symbol><symbol id="icon-whatshot" viewBox="0 0 32 32"><title>whatshot</title><path d="M18 0.893s0.987 3.533 0.987 6.4c0 2.747-1.8 4.973-4.547 4.973-2.76 0-4.84-2.227-4.84-4.973l0.040-0.48c-2.693 3.2-4.307 7.347-4.307 11.853 0 5.893 4.773 10.667 10.667 10.667s10.667-4.773 10.667-10.667c0-7.187-3.453-13.6-8.667-17.773zM15.613 25.333c-2.373 0-4.293-1.867-4.293-4.187 0-2.16 1.4-3.68 3.747-4.16 2.36-0.48 4.8-1.613 6.16-3.44 0.52 1.72 0.787 3.533 0.787 5.387 0 3.533-2.867 6.4-6.4 6.4z"></path></symbol><symbol id="icon-youtube-searched" viewBox="0 0 32 32"><title>youtube-searched</title><path d="M22.68 18.667h-1.067l-0.36-0.36c1.307-1.52 2.093-3.48 2.093-5.64 0-4.787-3.88-8.667-8.667-8.667s-8.667 4-8.667 8.667h-3.347l5.12 5.333 5.547-5.333h-4.653c0-3.333 2.693-6 6-6s6 2.68 6 6c0 3.307-2.693 6-6 6-0.867 0-1.68-0.187-2.427-0.507l-1.973 1.973c1.293 0.76 2.787 1.2 4.4 1.2 2.147 0 4.107-0.787 5.627-2.093l0.36 0.36v1.053l6.68 6.653 1.987-1.973-6.653-6.667z"></path></symbol></defs></svg>'
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

function checkbox(item) {
	var elem = $(item);
	var label = $(item).closest('label');

	elem.on('click', function(){
		$(this).closest('label').toggleClass('active');
		$(this).closest('label').find('img').prop('src', 'img/radius--white.png');
		$(this).closest('.checkFixBox').siblings().find('label').removeClass('active');
		$(this).closest('.checkFixBox').siblings().find('img').prop('src', 'img/radius.png');
	});
}

function productToggle() {
	var elem = $('.productToggle');
	var elemHover = $('.product__toggle-hover');
	var activeFirst = $('.product__toggle-first');
	var activeLast = $('.product__toggle-last');

	elem.on('click', function(){
		if(activeLast.hasClass('active')){
			activeLast.addClass('activeLast');
			elemHover.addClass('activeLast');
		}else {
			activeLast.removeClass('activeLast');
			elemHover.removeClass('activeLast');
		}
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
			var number = parseInt($(this).attr('data-calcWeightNumber'));
			var price = $(this).closest('.calcItem').find('.calcNumber');
			var output = $(this).closest('.calcItem').find('.calcOutput');

			price.html(number).attr('data-price', number);
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

	//other
	phoneMask();
	checkbox('.product__checkbox');
	checkFix('.product__checkbox');
	activeSiblings('.productToggle');
	productToggle();

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
	animateHide('.hamburger__wrap', '.nav', 'slideInLeft', 'slideOutLeft', 'block');

	//slider(animationIn, animationOut, elem, items, navContainer, navText)
	productSlider();

	//loading
	loading();

	//map
	map();

	//calc
	productCalc();
};

//other
bodyOverflow('.hamburger');
