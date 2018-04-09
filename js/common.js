"use strict"
//templates
new Vue({
		el: '#global-svg',
		template: '<svg aria-hidden="true" style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><symbol id="icon-date-range" viewBox="0 0 20 20"><title>date-range</title><path d="M7.5 9.167h-1.667v1.667h1.667v-1.667zM10.833 9.167h-1.667v1.667h1.667v-1.667zM14.167 9.167h-1.667v1.667h1.667v-1.667zM15.833 3.333h-0.833v-1.667h-1.667v1.667h-6.667v-1.667h-1.667v1.667h-0.833c-0.925 0-1.658 0.75-1.658 1.667l-0.008 11.667c0 0.917 0.742 1.667 1.667 1.667h11.667c0.917 0 1.667-0.75 1.667-1.667v-11.667c0-0.917-0.75-1.667-1.667-1.667zM15.833 16.667h-11.667v-9.167h11.667v9.167z"></path></symbol><symbol id="icon-directions-bus" viewBox="0 0 20 20"><title>directions-bus</title><path d="M3.333 13.333c0 0.733 0.325 1.392 0.833 1.85v1.483c0 0.458 0.375 0.833 0.833 0.833h0.833c0.458 0 0.833-0.375 0.833-0.833v-0.833h6.667v0.833c0 0.458 0.375 0.833 0.833 0.833h0.833c0.458 0 0.833-0.375 0.833-0.833v-1.483c0.508-0.458 0.833-1.117 0.833-1.85v-8.333c0-2.917-2.983-3.333-6.667-3.333s-6.667 0.417-6.667 3.333v8.333zM6.25 14.167c-0.692 0-1.25-0.558-1.25-1.25s0.558-1.25 1.25-1.25 1.25 0.558 1.25 1.25-0.558 1.25-1.25 1.25zM13.75 14.167c-0.692 0-1.25-0.558-1.25-1.25s0.558-1.25 1.25-1.25 1.25 0.558 1.25 1.25-0.558 1.25-1.25 1.25zM15 9.167h-10v-4.167h10v4.167z"></path></symbol><symbol id="icon-directions-car" viewBox="0 0 20 20"><title>directions-car</title><path d="M15.767 5.008c-0.167-0.492-0.633-0.842-1.183-0.842h-9.167c-0.55 0-1.008 0.35-1.183 0.842l-1.733 4.992v6.667c0 0.458 0.375 0.833 0.833 0.833h0.833c0.458 0 0.833-0.375 0.833-0.833v-0.833h10v0.833c0 0.458 0.375 0.833 0.833 0.833h0.833c0.458 0 0.833-0.375 0.833-0.833v-6.667l-1.733-4.992zM5.417 13.333c-0.692 0-1.25-0.558-1.25-1.25s0.558-1.25 1.25-1.25 1.25 0.558 1.25 1.25-0.558 1.25-1.25 1.25zM14.583 13.333c-0.692 0-1.25-0.558-1.25-1.25s0.558-1.25 1.25-1.25 1.25 0.558 1.25 1.25-0.558 1.25-1.25 1.25zM4.167 9.167l1.25-3.75h9.167l1.25 3.75h-11.667z"></path></symbol><symbol id="icon-directions-subway" viewBox="0 0 20 20"><title>directions-subway</title><path d="M10 1.667c-3.683 0-6.667 0.417-6.667 3.333v7.917c0 1.608 1.308 2.917 2.917 2.917l-1.25 1.25v0.417h10v-0.417l-1.25-1.25c1.608 0 2.917-1.308 2.917-2.917v-7.917c0-2.917-2.983-3.333-6.667-3.333zM6.25 14.167c-0.692 0-1.25-0.558-1.25-1.25s0.558-1.25 1.25-1.25 1.25 0.558 1.25 1.25-0.558 1.25-1.25 1.25zM9.167 9.167h-4.167v-4.167h4.167v4.167zM13.75 14.167c-0.692 0-1.25-0.558-1.25-1.25s0.558-1.25 1.25-1.25 1.25 0.558 1.25 1.25-0.558 1.25-1.25 1.25zM15 9.167h-4.167v-4.167h4.167v4.167z"></path></symbol><symbol id="icon-domain" viewBox="0 0 20 20"><title>domain</title><path d="M10 5.833v-3.333h-8.333v15h16.667v-11.667h-8.333zM5 15.833h-1.667v-1.667h1.667v1.667zM5 12.5h-1.667v-1.667h1.667v1.667zM5 9.167h-1.667v-1.667h1.667v1.667zM5 5.833h-1.667v-1.667h1.667v1.667zM8.333 15.833h-1.667v-1.667h1.667v1.667zM8.333 12.5h-1.667v-1.667h1.667v1.667zM8.333 9.167h-1.667v-1.667h1.667v1.667zM8.333 5.833h-1.667v-1.667h1.667v1.667zM16.667 15.833h-6.667v-1.667h1.667v-1.667h-1.667v-1.667h1.667v-1.667h-1.667v-1.667h6.667v8.333zM15 9.167h-1.667v1.667h1.667v-1.667zM15 12.5h-1.667v1.667h1.667v-1.667z"></path></symbol><symbol id="icon-fullscreen" viewBox="0 0 20 20"><title>fullscreen</title><path d="M5.833 11.667h-1.667v4.167h4.167v-1.667h-2.5v-2.5zM4.167 8.333h1.667v-2.5h2.5v-1.667h-4.167v4.167zM14.167 14.167h-2.5v1.667h4.167v-4.167h-1.667v2.5zM11.667 4.167v1.667h2.5v2.5h1.667v-4.167h-4.167z"></path></symbol><symbol id="icon-room" viewBox="0 0 20 20"><title>room</title><path d="M10 1.667c-3.225 0-5.833 2.608-5.833 5.833 0 4.375 5.833 10.833 5.833 10.833s5.833-6.458 5.833-10.833c0-3.225-2.608-5.833-5.833-5.833zM10 9.583c-1.15 0-2.083-0.933-2.083-2.083s0.933-2.083 2.083-2.083 2.083 0.933 2.083 2.083-0.933 2.083-2.083 2.083z"></path></symbol><symbol id="icon-swap-calls" viewBox="0 0 20 20"><title>swap-calls</title><path d="M15 3.333l-3.333 3.333h2.5v5.833c0 0.917-0.75 1.667-1.667 1.667s-1.667-0.75-1.667-1.667v-5.833c0-1.842-1.492-3.333-3.333-3.333s-3.333 1.492-3.333 3.333v5.833h-2.5l3.333 3.333 3.333-3.333h-2.5v-5.833c0-0.917 0.75-1.667 1.667-1.667s1.667 0.75 1.667 1.667v5.833c0 1.842 1.492 3.333 3.333 3.333s3.333-1.492 3.333-3.333v-5.833h2.5l-3.333-3.333z"></path></symbol><symbol id="icon-tram" viewBox="0 0 20 20"><title>tram</title><path d="M15.833 14.117v-7.033c0-2.325-2.175-2.833-5.008-2.908l0.633-1.258h2.708v-1.25h-8.333v1.25h3.958l-0.633 1.267c-2.608 0.075-4.992 0.592-4.992 2.9v7.033c0 1.208 0.992 2.217 2.158 2.475l-1.325 1.325v0.417h1.858l1.667-1.667h3.142l1.667 1.667h1.667v-0.417l-1.25-1.25h-0.067c1.408 0 2.15-1.142 2.15-2.55zM10 15.417c-0.692 0-1.25-0.558-1.25-1.25s0.558-1.25 1.25-1.25 1.25 0.558 1.25 1.25-0.558 1.25-1.25 1.25zM14.167 11.667h-8.333v-4.167h8.333v4.167z"></path></symbol></defs></svg>'
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
	elem = elem || '.slider__wrap';
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
			dotsContainer: '.slider__dots',
			navText: navText,
			onInitialized: function(){
				console.log(123);
				$('.box').each(function() {
				    //set size
				    var th = $(this).height(),//box height
				        tw = $(this).width(),//box width
				        im = $(this).children('img'),//image
				        ih = im.height(),//inital image height
				        iw = im.width();//initial image width
				    if (ih>iw) {//if portrait
				        im.addClass('ww').removeClass('wh');//set width 100%
				    } else {//if landscape
				        im.addClass('wh').removeClass('ww');//set height 100%
				    }
				    //set offset
				    var nh = im.height(),//new image height
				        nw = im.width(),//new image width
				        hd = (nh-th)/2,//half dif img/box height
				        wd = (nw-tw)/2;//half dif img/box width
				    if (nh<nw) {//if portrait
				        im.css({marginLeft: '-'+wd+'px', marginTop: 0});//offset left
				    } else {//if landscape
				        im.css({marginTop: '-'+hd+'px', marginLeft: 0});//offset top
				    }
				});
			},
			onChanged: function(){

			}
		});
	}
}

//productSlider
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
			navText: navText,
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

function checkFix(elem) {
	$(elem).on('click', function(){
		$(this).closest('.checkFixBox').siblings().find(elem).prop('checked', false);
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

//cartCalc
function cartCalc() {
	var inc = $('.cartCalcInc');
	var dec = $('.cartCalcDec');
	var countNumber_t = '.cartCalcNumber';
	var close = $('.cartCalcDelete');
	var summ_t = '.cartCalcTotalSumm';
	var item_t = '.cartCalcItem';
	var singleItemPrice_t = '.cartCalcSinglePrice';
	var singleSumm_t = '.cartSummNumber';
	var total = document.querySelector('.cartCalcTotalSumm');
	var total_t = '.cartCalcTotalSumm';
	var sum = 0;
	var sumArray = [];

	function calcOnWindowLoad(){
			var itemsSumm = document.querySelectorAll(singleSumm_t);

			sumArray.length = 0;
			itemsSumm.forEach(function(item, index, value){
				var number = parseInt(item.textContent);
				sumArray.push(number);
			});
			sum = 0;
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

	function countInc(){
		var count = $(this).closest(item_t).find(countNumber_t);
		var countNumber = parseInt(count.html());
		var singleItemPrice = $(this).closest(item_t).find(singleItemPrice_t);
		var singleItemPriceNumber = parseInt(singleItemPrice.html());
		var singleSumm = $(this).closest(item_t).find($(singleSumm_t));

		var itemsSumm = document.querySelectorAll(singleSumm_t);

		countNumber++
		count.html(countNumber);

		var summ = countNumber * singleItemPriceNumber;
		singleSumm.html(summ);

		sumArray.length = 0;

		itemsSumm.forEach(function(item, index, value){
			var number = parseInt(item.textContent);
			sumArray.push(number);
		});

		sum = 0;
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

	function countDec(){
		var count = $(this).closest(item_t).find(countNumber_t);
		var countNumber = parseInt(count.html());
		var singleItemPrice = $(this).closest(item_t).find(singleItemPrice_t);
		var singleItemPriceNumber = parseInt(singleItemPrice.html());
		var singleSumm = $(this).closest(item_t).find($(singleSumm_t));

		var itemsSumm = document.querySelectorAll(singleSumm_t);

		countNumber--
		if(countNumber <= 1){
			countNumber = 1
		}
		count.html(countNumber);

		var summ = countNumber * singleItemPriceNumber;
		singleSumm.html(summ);


		sumArray.length = 0;
		itemsSumm.forEach(function(item, index, value){
			var number = parseInt(item.textContent);
			sumArray.push(number);
		});
		sum = 0;
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

	function onCloseItem(){
		var singleSumm = $(this).closest(item_t).find(singleSumm_t);
		var singleSummNumber = parseInt(singleSumm.html());
		var total = $(total_t);
		var totalPrice = parseInt(total.html()) - singleSummNumber;

		$(this).closest(item_t).hide(400);
		total.html(totalPrice);
	}

	calcOnWindowLoad();

	inc.on('click', countInc);

	dec.on('click', countDec);

	close.on('click', onCloseItem);
}

//mainMargin
function mainMargin() {
	var heightHeader = $('.page-header').innerHeight();

	$('.main').css('margin-top', heightHeader);
}

//sliderLine
function sliderLine() {
	var elem = '.sliderLine';
	var item = '.sliderLineItem';

	$(window).on('resize || load', function() {
		var elem = '.sliderLine';
		var item = '.sliderLineItem';
		var itemActive = $('.sliderLineItem.active')
		var positionItem = $(itemActive).position();
		var marginItem = parseInt($(itemActive).css('margin-left'));
		var widthItem = $(itemActive).width();
		var positionLeftLine = positionItem.left + marginItem;

		$(elem).css({
			'left': positionLeftLine,
			'width': widthItem
		});
	});

	$(item).on('mouseenter', function(){
		var positionItem = $(this).position();
		var marginItem = parseInt($(this).css('margin-left'));
		var widthItem = $(this).width();
		var positionLeftLine = positionItem.left + marginItem;

		$(this).addClass('active').siblings().removeClass('active');
		$(elem).css({
			'left': positionLeftLine,
			'width': widthItem
		});
	});
}

window.onload = function() {
	//scrollEvents
	scrollEffects();

	//other
	bodyOverflow('.hamburger');
	phoneMask();
	resizeFix('.nav');
	mainMargin();

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
	productSlider();
};

//other
sliderLine();
