"use strict"
//templates
new Vue({
		el: '#global-svg',
		template: ''
	})

function scrollEffects() {
	var wow = new WOW(
	  {
	    mobile: false,
	  }
	);
	wow.init();
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

//owl-slider
function productSlider(animationIn, animationOut, elem, items, navContainer, navText) {
	var arrayPosition = [];
	var arrayOffset = [];
	animationIn = animationIn || 'zoomIn';
	animationOut = animationOut || 'fadeOut';
	elem = elem || '.product__slider';
	items = items || 5;
	navContainer = navContainer || '';
	navText = navText || ['<svg class="icon icon-prev"><use xlink:href="#icon-prev"></use></svg>', '<svg class="icon icon-next"><use xlink:href="#icon-next"></use></svg>'];
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
				1024: {
					items: 3
				},
				1280: {
					items: 5
				}
			}
		});
	}
}

function phoneMask() {
	if($('*').is('.formTel')){
		$(".formTel").mask("+7(999)999-99-99", {
			placeholder: "+7(___)___-__-__"
		});
	}
}

function checkFix() {
	$('.checkFixElem').on('click', function(){
		$(this).closest('.checkFixBox').siblings().find('.checkFixElem').prop('checked', false);
	});
}

function menuHover() {
	var link = $('.menuHover');

	link.on('mouseenter', function(){
		$('.scroll').addClass('active animated slideInDown');
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
			var number = parseInt($(this).find('.calcWeightNumber').html());
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

	//active toggle
	active('.hamburger');
	active('.hamburger__wrap');

	//active siblings
	activeSiblings('.product__weight-item');

	//Animation
	animate('.hamburger', '.hamburger__line1', 'rotate_in_45', 'rotate_in_45_out');
	animate('.hamburger', '.hamburger__line3', 'rotate_in_-45', 'rotate_in_-45_out');
	//Animation+hide
	animateHide('.hamburger__wrap', '.menu', 'slideInDown', 'slideOutUp', 'block');

	//slider(animationIn, animationOut, elem, items, navContainer, navText)
	productSlider();

	//calc
	productCalc();
};

//other
bodyOverflow('.hamburger');
