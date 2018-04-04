"use strict"
//templates
new Vue({
		el: '#global-svg',
		template: '<svg aria-hidden="true" style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><symbol id="icon-map-marker" viewBox="0 0 15 20"><title>map-marker</title><path d="M6.729 19.596c-5.676-8.228-6.729-9.073-6.729-12.096 0-4.142 3.358-7.5 7.5-7.5s7.5 3.358 7.5 7.5c0 3.024-1.054 3.868-6.729 12.096-0.372 0.538-1.169 0.538-1.542 0z"></path></symbol><symbol id="icon-close" viewBox="0 0 20 20"><title>close</title><path d="M15.833 5.342l-1.175-1.175-4.658 4.658-4.658-4.658-1.175 1.175 4.658 4.658-4.658 4.658 1.175 1.175 4.658-4.658 4.658 4.658 1.175-1.175-4.658-4.658z"></path></symbol><symbol id="icon-arrow-drop-down" viewBox="0 0 20 20"><title>arrow-drop-down</title><path d="M5.833 8.333l4.167 4.167 4.167-4.167z"></path></symbol><symbol id="icon-arrow-drop-up" viewBox="0 0 20 20"><title>arrow-drop-up</title><path d="M5.833 11.667l4.167-4.167 4.167 4.167z"></path></symbol><symbol id="icon-block" viewBox="0 0 20 20"><title>block</title><path d="M10 1.667c-4.6 0-8.333 3.733-8.333 8.333s3.733 8.333 8.333 8.333 8.333-3.733 8.333-8.333-3.733-8.333-8.333-8.333zM3.333 10c0-3.683 2.983-6.667 6.667-6.667 1.542 0 2.958 0.525 4.083 1.408l-9.342 9.342c-0.883-1.125-1.408-2.542-1.408-4.083zM10 16.667c-1.542 0-2.958-0.525-4.083-1.408l9.342-9.342c0.883 1.125 1.408 2.542 1.408 4.083 0 3.683-2.983 6.667-6.667 6.667z"></path></symbol><symbol id="icon-chat" viewBox="0 0 20 20"><title>chat</title><path d="M16.667 1.667h-13.333c-0.917 0-1.658 0.75-1.658 1.667l-0.008 15 3.333-3.333h11.667c0.917 0 1.667-0.75 1.667-1.667v-10c0-0.917-0.75-1.667-1.667-1.667zM5 7.5h10v1.667h-10v-1.667zM11.667 11.667h-6.667v-1.667h6.667v1.667zM15 6.667h-10v-1.667h10v1.667z"></path></symbol><symbol id="icon-content-paste" viewBox="0 0 20 20"><title>content-paste</title><path d="M15.833 1.667h-3.483c-0.35-0.967-1.267-1.667-2.35-1.667s-2 0.7-2.35 1.667h-3.483c-0.917 0-1.667 0.75-1.667 1.667v13.333c0 0.917 0.75 1.667 1.667 1.667h11.667c0.917 0 1.667-0.75 1.667-1.667v-13.333c0-0.917-0.75-1.667-1.667-1.667zM10 1.667c0.458 0 0.833 0.375 0.833 0.833s-0.375 0.833-0.833 0.833-0.833-0.375-0.833-0.833 0.375-0.833 0.833-0.833zM15.833 16.667h-11.667v-13.333h1.667v2.5h8.333v-2.5h1.667v13.333z"></path></symbol><symbol id="icon-done" viewBox="0 0 20 20"><title>done</title><path d="M7.5 13.5l-3.5-3.5-1.167 1.167 4.667 4.667 10-10-1.167-1.167-8.833 8.833z"></path></symbol><symbol id="icon-payment" viewBox="0 0 20 20"><title>payment</title><path d="M16.667 3.333h-13.333c-0.925 0-1.658 0.742-1.658 1.667l-0.008 10c0 0.925 0.742 1.667 1.667 1.667h13.333c0.925 0 1.667-0.742 1.667-1.667v-10c0-0.925-0.742-1.667-1.667-1.667zM16.667 15h-13.333v-5h13.333v5zM16.667 6.667h-13.333v-1.667h13.333v1.667z"></path></symbol><symbol id="icon-phone-in-talk" viewBox="0 0 20 20"><title>phone-in-talk</title><path d="M16.667 12.917c-1.042 0-2.042-0.167-2.975-0.475-0.292-0.092-0.617-0.025-0.85 0.2l-1.833 1.833c-2.358-1.2-4.292-3.125-5.492-5.492l1.833-1.842c0.233-0.217 0.3-0.542 0.208-0.833-0.308-0.933-0.475-1.933-0.475-2.975 0-0.458-0.375-0.833-0.833-0.833h-2.917c-0.458 0-0.833 0.375-0.833 0.833 0 7.825 6.342 14.167 14.167 14.167 0.458 0 0.833-0.375 0.833-0.833v-2.917c0-0.458-0.375-0.833-0.833-0.833zM15.833 10h1.667c0-4.142-3.358-7.5-7.5-7.5v1.667c3.225 0 5.833 2.608 5.833 5.833zM12.5 10h1.667c0-2.3-1.867-4.167-4.167-4.167v1.667c1.383 0 2.5 1.117 2.5 2.5z"></path></symbol><symbol id="icon-place" viewBox="0 0 20 20"><title>place</title><path d="M10 1.667c-3.225 0-5.833 2.608-5.833 5.833 0 4.375 5.833 10.833 5.833 10.833s5.833-6.458 5.833-10.833c0-3.225-2.608-5.833-5.833-5.833zM10 9.583c-1.15 0-2.083-0.933-2.083-2.083s0.933-2.083 2.083-2.083 2.083 0.933 2.083 2.083-0.933 2.083-2.083 2.083z"></path></symbol><symbol id="icon-radio-button-checked" viewBox="0 0 20 20"><title>radio-button-checked</title><path d="M10 5.833c-2.3 0-4.167 1.867-4.167 4.167s1.867 4.167 4.167 4.167 4.167-1.867 4.167-4.167-1.867-4.167-4.167-4.167zM10 1.667c-4.6 0-8.333 3.733-8.333 8.333s3.733 8.333 8.333 8.333 8.333-3.733 8.333-8.333-3.733-8.333-8.333-8.333zM10 16.667c-3.683 0-6.667-2.983-6.667-6.667s2.983-6.667 6.667-6.667 6.667 2.983 6.667 6.667-2.983 6.667-6.667 6.667z"></path></symbol><symbol id="icon-radio-button-unchecked" viewBox="0 0 20 20"><title>radio-button-unchecked</title><path d="M10 1.667c-4.6 0-8.333 3.733-8.333 8.333s3.733 8.333 8.333 8.333 8.333-3.733 8.333-8.333-3.733-8.333-8.333-8.333zM10 16.667c-3.683 0-6.667-2.983-6.667-6.667s2.983-6.667 6.667-6.667 6.667 2.983 6.667 6.667-2.983 6.667-6.667 6.667z"></path></symbol><symbol id="icon-shopping-basket" viewBox="0 0 20 20"><title>shopping-basket</title><path d="M14.342 7.5l-3.65-5.467c-0.158-0.233-0.425-0.35-0.692-0.35s-0.533 0.117-0.692 0.358l-3.65 5.458h-3.992c-0.458 0-0.833 0.375-0.833 0.833 0 0.075 0.008 0.15 0.033 0.225l2.117 7.725c0.192 0.7 0.833 1.217 1.6 1.217h10.833c0.767 0 1.408-0.517 1.608-1.217l2.117-7.725 0.025-0.225c0-0.458-0.375-0.833-0.833-0.833h-3.992zM7.5 7.5l2.5-3.667 2.5 3.667h-5zM10 14.167c-0.917 0-1.667-0.75-1.667-1.667s0.75-1.667 1.667-1.667 1.667 0.75 1.667 1.667-0.75 1.667-1.667 1.667z"></path></symbol><symbol id="icon-star-border" viewBox="0 0 20 20"><title>star-border</title><path d="M18.333 7.7l-5.992-0.517-2.342-5.517-2.342 5.525-5.992 0.508 4.55 3.942-1.367 5.858 5.15-3.108 5.15 3.108-1.358-5.858 4.542-3.942zM10 12.833l-3.133 1.892 0.833-3.567-2.767-2.4 3.65-0.317 1.417-3.358 1.425 3.367 3.65 0.317-2.767 2.4 0.833 3.567-3.142-1.9z"></path></symbol><symbol id="icon-star-half" viewBox="0 0 20 20"><title>star-half</title><path d="M18.333 7.7l-5.992-0.517-2.342-5.517-2.342 5.525-5.992 0.508 4.55 3.942-1.367 5.858 5.15-3.108 5.15 3.108-1.358-5.858 4.542-3.942zM10 12.833v-7.75l1.425 3.367 3.65 0.317-2.767 2.4 0.833 3.567-3.142-1.9z"></path></symbol><symbol id="icon-star" viewBox="0 0 20 20"><title>star</title><path d="M10 14.392l5.15 3.108-1.367-5.858 4.55-3.942-5.992-0.508-2.342-5.525-2.342 5.525-5.992 0.508 4.55 3.942-1.367 5.858z"></path></symbol></defs></svg>'
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

function ratingSlider(animationIn, animationOut, elem, items, navContainer, navText) {
	animationIn = animationIn || 'zoomIn';
	animationOut = animationOut || 'fadeOut';
	elem = elem || '.rating__slider';
	items = items || 4;
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
			dotsContainer: '.rating__dots',
			navText: ['', ''],
			responsive: {
				0: {
					items: 1
				},
				768: {
					items: 2
				},
				1025: {
					items: 4
				}
			}
		});
	}
}

function reviewSlider(animationIn, animationOut, elem, items, navContainer, navText) {
	animationIn = animationIn || 'slideInDown';
	animationOut = animationOut || 'slideOutDown';
	elem = elem || '.review__slider';
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
			dotsContainer: '.review__dots',
			navText: ['', ''],
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
	var elem = $('.product__input');

	elem.on('click', function(){
		$(this).closest('.product__line').siblings().find(elem).prop('checked', false);
	});
}

function pageHover() {
	$('.page-header__menu').on('mouseenter', function(){
		$('.nav__link-arr').css('opacity', '1');
	});
	$('.page-header__menu').on('mouseleave', function(){
		$('.nav__link-arr').css('opacity', '0');
	});
	$('.nav__link.active').on('mouseenter', function(){
		$('.nav__link-arr').css('opacity', '1');
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

window.onload = function() {
	//scrollEvents
	scrollEffects();
	changeClassOnScroll();

	//other
	bodyOverflow('.hamburger');
	phoneMask();
	inputFix();
	pageHover();

	//calc
	productCalc();
	cartCalc();

	//tabs
	tabs('.nav');

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
	ratingSlider();
	reviewSlider();
};
