"use strict"
//templates
new Vue({
		el: '#global-svg',
		template: '<svg aria-hidden="true" style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><symbol id="icon-star" viewBox="0 0 36 32"><title>star</title><path d="M16.206 1.113l-4.081 8.275-9.131 1.331c-1.637 0.238-2.294 2.256-1.106 3.412l6.606 6.438-1.563 9.094c-0.281 1.644 1.45 2.875 2.9 2.106l8.169-4.294 8.169 4.294c1.45 0.762 3.181-0.462 2.9-2.106l-1.563-9.094 6.606-6.438c1.188-1.156 0.531-3.175-1.106-3.412l-9.131-1.331-4.081-8.275c-0.731-1.475-2.85-1.494-3.587 0z"></path></symbol><symbol id="icon-star-half" viewBox="0 0 36 32"><title>star-half</title><path d="M18 0c-0.712 0-1.425 0.369-1.794 1.113l-4.081 8.275-9.131 1.325c-1.637 0.238-2.294 2.256-1.106 3.412l6.606 6.438-1.563 9.094c-0.281 1.631 1.438 2.875 2.9 2.106l8.169-4.287v-27.475z"></path></symbol><symbol id="icon-minus" viewBox="0 0 28 32"><title>minus</title><path d="M26 13h-24c-1.104 0-2 0.896-2 2v2c0 1.104 0.896 2 2 2h24c1.104 0 2-0.896 2-2v-2c0-1.104-0.896-2-2-2z"></path></symbol><symbol id="icon-plus" viewBox="0 0 28 32"><title>plus</title><path d="M26 13h-9v-9c0-1.104-0.896-2-2-2h-2c-1.104 0-2 0.896-2 2v9h-9c-1.104 0-2 0.896-2 2v2c0 1.104 0.896 2 2 2h9v9c0 1.104 0.896 2 2 2h2c1.104 0 2-0.896 2-2v-9h9c1.104 0 2-0.896 2-2v-2c0-1.104-0.896-2-2-2z"></path></symbol><symbol id="icon-shopping-basket" viewBox="0 0 36 32"><title>shopping-basket</title><path d="M36 13.5v1c0 0.828-0.672 1.5-1.5 1.5h-0.5l-1.632 11.424c-0.211 1.478-1.477 2.576-2.97 2.576h-22.796c-1.493 0-2.759-1.098-2.97-2.576l-1.632-11.424h-0.5c-0.828 0-1.5-0.672-1.5-1.5v-1c0-0.828 0.672-1.5 1.5-1.5h4.209l6.674-9.176c0.65-0.893 1.9-1.091 2.794-0.441s1.091 1.9 0.441 2.794l-4.963 6.824h14.69l-4.963-6.824c-0.65-0.893-0.452-2.144 0.441-2.794s2.144-0.452 2.794 0.441l6.674 9.176h4.209c0.828 0 1.5 0.672 1.5 1.5zM19.5 24.5v-7c0-0.828-0.672-1.5-1.5-1.5s-1.5 0.672-1.5 1.5v7c0 0.828 0.672 1.5 1.5 1.5s1.5-0.672 1.5-1.5zM26.5 24.5v-7c0-0.828-0.672-1.5-1.5-1.5s-1.5 0.672-1.5 1.5v7c0 0.828 0.672 1.5 1.5 1.5s1.5-0.672 1.5-1.5zM12.5 24.5v-7c0-0.828-0.672-1.5-1.5-1.5s-1.5 0.672-1.5 1.5v7c0 0.828 0.672 1.5 1.5 1.5s1.5-0.672 1.5-1.5z"></path></symbol><symbol id="icon-perm-identity" viewBox="0 0 32 32"><title>perm-identity</title><path d="M16 7.867c1.547 0 2.8 1.253 2.8 2.8s-1.253 2.8-2.8 2.8-2.8-1.253-2.8-2.8 1.253-2.8 2.8-2.8zM16 19.867c3.96 0 8.133 1.947 8.133 2.8v1.467h-16.267v-1.467c0-0.853 4.173-2.8 8.133-2.8zM16 5.333c-2.947 0-5.333 2.387-5.333 5.333s2.387 5.333 5.333 5.333 5.333-2.387 5.333-5.333-2.387-5.333-5.333-5.333zM16 17.333c-3.56 0-10.667 1.787-10.667 5.333v4h21.333v-4c0-3.547-7.107-5.333-10.667-5.333z"></path></symbol><symbol id="icon-phone-in-talk" viewBox="0 0 32 32"><title>phone-in-talk</title><path d="M26.667 20.667c-1.667 0-3.267-0.267-4.76-0.76-0.467-0.147-0.987-0.040-1.36 0.32l-2.933 2.933c-3.773-1.92-6.867-5-8.787-8.787l2.933-2.947c0.373-0.347 0.48-0.867 0.333-1.333-0.493-1.493-0.76-3.093-0.76-4.76 0-0.733-0.6-1.333-1.333-1.333h-4.667c-0.733 0-1.333 0.6-1.333 1.333 0 12.52 10.147 22.667 22.667 22.667 0.733 0 1.333-0.6 1.333-1.333v-4.667c0-0.733-0.6-1.333-1.333-1.333zM25.333 16h2.667c0-6.627-5.373-12-12-12v2.667c5.16 0 9.333 4.173 9.333 9.333zM20 16h2.667c0-3.68-2.987-6.667-6.667-6.667v2.667c2.213 0 4 1.787 4 4z"></path></symbol><symbol id="icon-access-time" viewBox="0 0 32 32"><title>access-time</title><path d="M15.987 2.667c-7.36 0-13.32 5.973-13.32 13.333s5.96 13.333 13.32 13.333c7.373 0 13.347-5.973 13.347-13.333s-5.973-13.333-13.347-13.333zM16 26.667c-5.893 0-10.667-4.773-10.667-10.667s4.773-10.667 10.667-10.667 10.667 4.773 10.667 10.667-4.773 10.667-10.667 10.667z"></path><path d="M16.667 9.333h-2v8l7 4.2 1-1.64-6-3.56z"></path></symbol><symbol id="icon-check-box" viewBox="0 0 32 32"><title>check-box</title><path d="M25.333 4h-18.667c-1.48 0-2.667 1.2-2.667 2.667v18.667c0 1.467 1.187 2.667 2.667 2.667h18.667c1.48 0 2.667-1.2 2.667-2.667v-18.667c0-1.467-1.187-2.667-2.667-2.667zM13.333 22.667l-6.667-6.667 1.88-1.88 4.787 4.773 10.12-10.12 1.88 1.893-12 12z"></path></symbol><symbol id="icon-motorcycle" viewBox="0 0 32 32"><title>motorcycle</title><path d="M23.333 13.333c-0.040 0-0.067 0.013-0.107 0.013l-5.347-5.347h-5.88v2.667h4.787l2.667 2.667h-10.8c-3.307 0-5.987 2.693-5.987 6 0 3.32 2.68 6 6 6 2.96 0 5.413-2.16 5.893-4.973v0l2.827-1.693c-0.027 0.227-0.053 0.44-0.053 0.667 0 3.32 2.68 6 6 6s6-2.68 6-6-2.68-6-6-6zM11.787 20.347c-0.427 1.347-1.68 2.32-3.16 2.32-1.84 0-3.333-1.493-3.333-3.333s1.493-3.333 3.333-3.333c1.493 0 2.733 0.987 3.16 2.333h-3.787v2l3.787 0.013zM23.293 22.667c-1.84 0-3.333-1.493-3.333-3.333s1.493-3.333 3.333-3.333 3.333 1.493 3.333 3.333c0 1.84-1.493 3.333-3.333 3.333z"></path></symbol><symbol id="icon-phone" viewBox="0 0 32 32"><title>phone</title><path d="M8.827 14.387c1.92 3.773 5.013 6.853 8.787 8.787l2.933-2.933c0.36-0.36 0.893-0.48 1.36-0.32 1.493 0.493 3.107 0.76 4.76 0.76 0.733 0 1.333 0.6 1.333 1.333v4.653c0 0.733-0.6 1.333-1.333 1.333-12.52 0-22.667-10.147-22.667-22.667 0-0.733 0.6-1.333 1.333-1.333h4.667c0.733 0 1.333 0.6 1.333 1.333 0 1.667 0.267 3.267 0.76 4.76 0.147 0.467 0.040 0.987-0.333 1.36l-2.933 2.933z"></path></symbol><symbol id="icon-shopping-basket2" viewBox="0 0 32 32"><title>shopping-basket2</title><path d="M22.947 12l-5.84-8.747c-0.253-0.373-0.68-0.56-1.107-0.56s-0.853 0.187-1.107 0.573l-5.84 8.733h-6.387c-0.733 0-1.333 0.6-1.333 1.333 0 0.12 0.013 0.24 0.053 0.36l3.387 12.36c0.307 1.12 1.333 1.947 2.56 1.947h17.333c1.227 0 2.253-0.827 2.573-1.947l3.387-12.36 0.040-0.36c0-0.733-0.6-1.333-1.333-1.333h-6.387zM12 12l4-5.867 4 5.867h-8zM16 22.667c-1.467 0-2.667-1.2-2.667-2.667s1.2-2.667 2.667-2.667 2.667 1.2 2.667 2.667-1.2 2.667-2.667 2.667z"></path></symbol></defs></svg>'
	})

function scrollEffects() {
	var wow = new WOW(
	  {
	    mobile: false,
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
    var elem = $('.menu');
    var height = elem.innerHeight();
    var top = $(this).scrollTop();
		var windowWidth = $(window).width();

    if (top > 50) {
			$(elem).addClass('scroll');
			$('.page-header').addClass('fixed');
			$('.scroll').on('mouseleave', function(){
				$('.scroll').removeClass('slideInDown').addClass('slideOutUp');
				setTimeout(function(){
					$('.scroll').removeClass('slideOutUp');
				}, 1000);
			});
    } else {
			$(elem).removeClass('scroll');
			$('.page-header').removeClass('fixed');
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
			setTimeout(function(){
				$(content).hide();
			}, hideTiming);
		} else {
			$(content).removeClass(animationOut).addClass(animationIn + ' animated');
		}
	});
}

//owl-slider
function popularSlider(animationIn, animationOut, elem, items, navContainer, navText) {
	var arrayPosition = [];
	var arrayOffset = [];
	animationIn = animationIn || 'zoomIn';
	animationOut = animationOut || 'fadeOut';
	elem = elem || '.popular__slider';
	items = items || 3;
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
			responsive: {
				0: {
					items: 1
				},
				768: {
					items: 2
				},
				1025: {
					items: 3
				}
			}
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

	link.on('mouseenter', function(){
		$('.scroll').addClass('active animated slideInDown');
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

function mobileTabScroll() {
	$(window).on('resize || load', function(){
		var windowWidth = $(this).width();

			if(windowWidth <= 1024){
				$('.work__nav-item').attr('href', '#work__content');
			}else {
				$('.work__nav-item').removeAttr('href');
			}
	});
}

//zoom
function okZoom() {
	$('.okzoom').okzoom({
        width:  200,
        height: 200,
        border: "1px solid #fff",
        //shadow: "0 0 5px #000"
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
		console.log(output, value);

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
			console.log(output);
			var cartNumber = $('.calcCart');
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
	var headerCalcCount = document.querySelector('.calcCartCount');
	var headerCalcCount_t = '.calcCartCount';
	var headerCalcSumm = document.querySelector('.calcCart');
	var headerCalcSumm_t = '.calcCart';
	var stepTotal = document.querySelector('.cartCalcStepTotalSumm');
	var stepTotal_t = ('.cartCalcStepTotalSumm');
	var sum = 0;
	var sumArray = [];
	var countArray = [];

	function calcOnWindowLoad(){
			var itemsSumm = document.querySelectorAll(singleSumm_t);
			var itemsCount = document.querySelectorAll(countNumber_t);
			var items = document.querySelectorAll(item_t);

			//Итоговая общая сумма
			sumArray.length = 0;
			itemsSumm.forEach(function(item, index, value){
				var number = parseInt(item.textContent);
				sumArray.push(number);
			});
			sum = 0;
			if(total || headerCalcSumm){
				for(var key in sumArray) {
					sum = sum + parseInt(sumArray[key]);
				}
				if(!sum){
					sum = 0;
				}

				total.textContent = sum;
				headerCalcSumm.textContent = sum;
				stepTotal.textContent = sum;
			}

			//Итоговое количество
			countArray.length = 0;
			itemsCount.forEach(function(item, index, value){
				var number = parseInt(item.textContent);
				countArray.push(number);
			});
			sum = 0;
			if(headerCalcCount){
				for(var key in countArray) {
					sum = sum + parseInt(countArray[key]);
				}
				if(!sum){
					sum = 0;
				}
				headerCalcCount.textContent = sum;
			}
		}

	function countInc(){
		var count = $(this).closest(item_t).find(countNumber_t);
		var countNumber = parseInt(count.html());
		var singleItemPrice = $(this).closest(item_t).find(singleItemPrice_t);
		var singleItemPriceNumber = parseInt(singleItemPrice.html());
		var singleSumm = $(this).closest(item_t).find($(singleSumm_t));
		var headerCount = parseInt($(headerCalcCount_t).html());
		var itemsSumm = document.querySelectorAll(singleSumm_t);

		countNumber++
		count.html(countNumber);

		headerCount++
		$(headerCalcCount_t).html(headerCount);

		var summ = countNumber * singleItemPriceNumber;
		singleSumm.html(summ);

		sumArray.length = 0;

		itemsSumm.forEach(function(item, index, value){
			var number = parseInt(item.textContent);
			sumArray.push(number);
		});

		sum = 0;
		if(total || headerCalcSumm){
			for(var key in sumArray) {
				sum = sum + parseInt(sumArray[key]);
			}
			if(!sum){
				sum = 0;
			}
			total.textContent = sum;
			headerCalcSumm.textContent = sum;
			stepTotal.textContent = sum;
		}
	}

	function countDec(){
		var count = $(this).closest(item_t).find(countNumber_t);
		var countNumber = parseInt(count.html());
		var singleItemPrice = $(this).closest(item_t).find(singleItemPrice_t);
		var singleItemPriceNumber = parseInt(singleItemPrice.html());
		var singleSumm = $(this).closest(item_t).find($(singleSumm_t));
		var headerCount = parseInt($(headerCalcCount_t).html());

		var itemsSumm = document.querySelectorAll(singleSumm_t);

		countNumber--
		if(countNumber <= 1){
			countNumber = 1
		}
		count.html(countNumber);

		headerCount--
		if(countNumber <= 1){
			--headerCount
			++headerCount
		}
		itemsSumm.forEach(function(item, index, value){
			if(headerCount <= ++index) {
				headerCount = index;
			}
		});
		$(headerCalcCount_t).html(headerCount);

		var summ = countNumber * singleItemPriceNumber;
		singleSumm.html(summ);


		sumArray.length = 0;
		itemsSumm.forEach(function(item, index, value){
			var number = parseInt(item.textContent);
			sumArray.push(number);
		});
		sum = 0;
		if(total || headerCalcSumm){
			for(var key in sumArray) {
				sum = sum + parseInt(sumArray[key]);
			}
			if(!sum){
				sum = 0;
			}
			total.textContent = sum;
			headerCalcSumm.textContent = sum;
			stepTotal.textContent = sum;
		}
	}

	function onCloseItem(){
		var singleSumm = $(this).closest(item_t).find(singleSumm_t);
		var singleSummNumber = parseInt(singleSumm.html());
		var headerCalcSumm = $(headerCalcSumm_t);
		var headerCalcCount = $(headerCalcCount_t);
		var count = parseInt($(this).closest(item_t).find(countNumber_t).html());
		var headerCount = parseInt($(headerCalcCount_t).html());
		var stepTotal = $(stepTotal_t);

		var totalCount = headerCount - count;

		var total = $(total_t);
		var totalPrice = parseInt(total.html()) - singleSummNumber;

		$(this).closest(item_t).addClass('animated slideOutLeft').hide(1000);
		total.html(totalPrice);
		stepTotal.html(totalPrice);
		headerCalcSumm.html(totalPrice);
		headerCalcCount.html(totalCount);
	}

	calcOnWindowLoad();

	inc.on('click', countInc);

	dec.on('click', countDec);

	close.on('click', onCloseItem);
}


window.onload = function() {
	//scrollEvents
	scrollEffects();

	//other
	phoneMask();
	checkFix('.product__input');
	okZoom();

	//active toggle
	active('.hamburger');
	active('.hamburger__wrap');

	//Animation
	animate('.hamburger', '.hamburger__line1', 'rotate_in_45', 'rotate_in_45_out');
	animate('.hamburger', '.hamburger__line3', 'rotate_in_-45', 'rotate_in_-45_out');
	//Animation+hide
	animateHide('.hamburger__wrap', '.menu', 'slideInDown', 'slideOutUp', 'flex');

	//slider(animationIn, animationOut, elem, items, navContainer, navText)
	popularSlider();

	//calc
	productCalc();

	//loading
	loading();
};

//other
bodyOverflow('.hamburger');
mobileTabScroll();
