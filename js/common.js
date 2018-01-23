"use strict"

//wow animation
new WOW().init();

//templates
new Vue({
	el: '#global-svg',
	template: '<svg aria-hidden="true" style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><symbol id="icon-lnr-cart" viewBox="0 0 32 32"><title>lnr-cart</title><path d="M12.8 32c-1.765 0-3.2-1.435-3.2-3.2s1.435-3.2 3.2-3.2 3.2 1.435 3.2 3.2-1.435 3.2-3.2 3.2zM12.8 27.2c-0.882 0-1.6 0.718-1.6 1.6s0.718 1.6 1.6 1.6 1.6-0.718 1.6-1.6-0.718-1.6-1.6-1.6z"></path><path d="M24 32c-1.765 0-3.2-1.435-3.2-3.2s1.435-3.2 3.2-3.2 3.2 1.435 3.2 3.2-1.435 3.2-3.2 3.2zM24 27.2c-0.882 0-1.6 0.718-1.6 1.6s0.718 1.6 1.6 1.6 1.6-0.718 1.6-1.6-0.718-1.6-1.6-1.6z"></path><path d="M28.062 7.147c-0.402-0.475-1.008-0.747-1.662-0.747h-19.589l-0.158-0.954c-0.21-1.259-1.374-2.246-2.653-2.246h-1.6c-0.442 0-0.8 0.358-0.8 0.8s0.358 0.8 0.8 0.8h1.6c0.491 0 0.994 0.426 1.074 0.91l2.674 16.043c0.21 1.259 1.374 2.246 2.653 2.246h16c0.442 0 0.8-0.358 0.8-0.8s-0.358-0.8-0.8-0.8h-16c-0.491 0-0.994-0.426-1.074-0.91l-0.395-2.368 15.944-1.387c1.24-0.107 2.373-1.154 2.578-2.382l1.074-6.443c0.107-0.646-0.061-1.29-0.462-1.763zM26.947 8.646l-1.074 6.443c-0.085 0.506-0.626 1.006-1.138 1.051l-16.069 1.397-1.59-9.539h19.322c0.187 0 0.344 0.064 0.442 0.181s0.136 0.282 0.106 0.466z"></path></symbol><symbol id="icon-cancel" viewBox="0 0 32 32"><title>cancel</title><path d="M16 2.667c-7.373 0-13.333 5.96-13.333 13.333s5.96 13.333 13.333 13.333 13.333-5.96 13.333-13.333-5.96-13.333-13.333-13.333zM22.667 20.787l-1.88 1.88-4.787-4.787-4.787 4.787-1.88-1.88 4.787-4.787-4.787-4.787 1.88-1.88 4.787 4.787 4.787-4.787 1.88 1.88-4.787 4.787 4.787 4.787z"></path></symbol><symbol id="icon-shopping_cart" viewBox="0 0 32 32"><title>shopping_cart</title><path d="M9.333 24c-1.467 0-2.653 1.2-2.653 2.667s1.187 2.667 2.653 2.667 2.667-1.2 2.667-2.667-1.2-2.667-2.667-2.667zM1.333 2.667v2.667h2.667l4.8 10.12-1.8 3.267c-0.213 0.373-0.333 0.813-0.333 1.28 0 1.467 1.2 2.667 2.667 2.667h16v-2.667h-15.44c-0.187 0-0.333-0.147-0.333-0.333l0.040-0.16 1.2-2.173h9.933c1 0 1.88-0.547 2.333-1.373l4.773-8.653c0.107-0.187 0.16-0.413 0.16-0.64 0-0.733-0.6-1.333-1.333-1.333h-19.72l-1.253-2.667h-4.36zM22.667 24c-1.467 0-2.653 1.2-2.653 2.667s1.187 2.667 2.653 2.667 2.667-1.2 2.667-2.667-1.2-2.667-2.667-2.667z"></path></symbol><symbol id="icon-location_on" viewBox="0 0 32 32"><title>location_on</title><path d="M16 2.667c-5.16 0-9.333 4.173-9.333 9.333 0 7 9.333 17.333 9.333 17.333s9.333-10.333 9.333-17.333c0-5.16-4.173-9.333-9.333-9.333zM16 15.333c-1.84 0-3.333-1.493-3.333-3.333s1.493-3.333 3.333-3.333 3.333 1.493 3.333 3.333-1.493 3.333-3.333 3.333z"></path></symbol><symbol id="icon-phone_in_talk" viewBox="0 0 32 32"><title>phone_in_talk</title><path d="M26.667 20.667c-1.667 0-3.267-0.267-4.76-0.76-0.467-0.147-0.987-0.040-1.36 0.32l-2.933 2.933c-3.773-1.92-6.867-5-8.787-8.787l2.933-2.947c0.373-0.347 0.48-0.867 0.333-1.333-0.493-1.493-0.76-3.093-0.76-4.76 0-0.733-0.6-1.333-1.333-1.333h-4.667c-0.733 0-1.333 0.6-1.333 1.333 0 12.52 10.147 22.667 22.667 22.667 0.733 0 1.333-0.6 1.333-1.333v-4.667c0-0.733-0.6-1.333-1.333-1.333zM25.333 16h2.667c0-6.627-5.373-12-12-12v2.667c5.16 0 9.333 4.173 9.333 9.333zM20 16h2.667c0-3.68-2.987-6.667-6.667-6.667v2.667c2.213 0 4 1.787 4 4z"></path></symbol></defs></svg>'
})

//animate
function animate(button, content, animationIn, animationOut, hideTiming){
	hideTiming = hideTiming || 1000;
	$(button).on('click', function(){
		$(this).addClass('active');
		$(content).show();
		var animateContent = content;
		if($(content).hasClass(animationIn)){
			$(content).removeClass(animationIn).addClass(animationOut);
			setTimeout(function(){
				$(content).hide();
			}, hideTiming);
		}else {
			$(content).removeClass(animationOut).addClass(animationIn);
		}
	});
}

//Universal Tabs
$(document).on('click', '[data-tabclass]', function () {
	var content = $(this).attr('data-tabclass');
	var number = $(this).attr('data-tabnumber');
	$('[data-tabclass="' + content + '"]').each(function () {
		if ($(this).attr('data-tabnumber') == number) {
			$(this).addClass('active').siblings().removeClass('active');
		}
	});
	$('.' + content + ' > [data-tabnumber="' + number + '"]').show().addClass('active').css('display', 'flex').siblings().hide().removeClass('active');
});

// +/- для input-number. имитация input:type[number]
function catalogItemCounter(field){

			var fieldCount = function(el) {

				var
					// Мин. значение
					min = el.data('min') || false,

					// Макс. значение
					max = el.data('max') || false,

					// Кнопка уменьшения кол-ва
					dec = el.next('.dec'),

					// Кнопка увеличения кол-ва
					inc = el.prev('.inc');

				function init(el) {
					if(!el.attr('disabled')){
						dec.on('click', decrement);
						inc.on('click', increment);
					}

					// Уменьшим значение
					function decrement() {
						var value = parseInt(el[0].value);
						value--;
						if(!min || value >= min) {
							el[0].value = value;
						}
					};

					// Увеличим значение
					function increment() {
						var value = parseInt(el[0].value);

						value++;

						if(!max || value <= max) {
							el[0].value = value++;
						}
					};
				}


				el.each(function() {
					init($(this));
				});
			};

			$(field).each(function(){
				fieldCount($(this));
				function calcPrice() {
						var value = parseInt($(this));
					};
			});
		}

//пересчёт цены товара
function itemTotal(){
	$('.catalog__item .input-number__input').each(function(){
		var price = parseInt($(this).closest('.input-number').next().find('.number').data('value'));
		var value = $(this).val();
		var summ = value * price;
		$(this).closest('.input-number').next().find('.number').html(summ);
	});
}

function summPrice() {
	$(document).ready(function(){
		itemTotal();
	});

	$('.input-number__button').on('click', function(){
		var price = parseInt($(this).closest('.input-number').next().find('.number').data('value'));
		if($(this).hasClass('dec')){
			var value = parseInt($(this).prev().val());
		}else if($(this).hasClass('inc')){
			var value = parseInt($(this).next().val());
		}
		if($(this).hasClass('dec')){
			if(value == 1){
				$(this).attr('disabled', '');
			}
		}
		if($(this).hasClass('inc')){
			if(value > 1){
				$(this).next().next().attr('disabled', false);
			}
		}
		var summ = price * value;
		$(this).closest('.input-number').next().find('.number').html(summ);

	});

	$('.fieldCount').on('keyup', function(){
		var value = parseInt($(this).val());
		var price = $(this).closest('.input-number').next().find('.number');
		var summ = value * parseInt(price.data('value'));
		var dec = $(this).next();
		var inc = $(this).prev();
		if(value <= 1){
			dec.attr('disabled', '');
			price.html(summ);
		}else{
			price.html(summ);
			dec.attr('disabled', false);
		}
		if(value <= 0) {
			var dataValue = price.data('value');
			price.html(0);
		}
	});

	$('.catalog__label').on('click', function(){
		var disabled = $(this).prev().attr('disabled');
		var numberWeight = $(this).data('price');
		var price = $(this).closest('.catalog__weight').next().next().next().find('.number');
		var input = $(this).closest('.catalog__weight').next().next().find('.fieldCount');
		if(disabled == 'disabled'){
		}else{
			parseInt(price.html(numberWeight).data('value', numberWeight));
			parseInt(input.val(1));
		}
	});
}


//Корзина
function basketTotal(){
 var count = 0;
 $('.basket__td .number').each(function(){
	count = count + parseInt($(this).text());
	});
 return $('.numberTotal').html(count);
}

function basketItemTotal(){
	$('.basket__td .input-number__input').each(function(){
		var price = parseInt($(this).closest('td').next().find('.number').data('value'));
		var value = $(this).val();
		var summ = value * price;
		$(this).closest('td').next().find('.number').html(summ);
	});
}

function basketPrice() {
	$(document).ready(function(){
		basketItemTotal();
		basketTotal();
		basketClose('.basket__cancel');
	});
	$('.input-number__button').on('click', function(){
		var price = parseInt($(this).closest('td').next().find('.number').data('value'));
		if($(this).hasClass('dec')){
			var value = parseInt($(this).prev().val());
		}else if($(this).hasClass('inc')){
			var value = parseInt($(this).next().val());
		}
		if($(this).hasClass('dec')){
			if(value == 1){
				$(this).attr('disabled', '');
			}
		}
		if($(this).hasClass('inc')){
			if(value > 1){
				$(this).next().next().attr('disabled', false);
			}
		}
		var summ = price * value;
		$(this).closest('td').next().find('.number').html(summ);
		basketTotal();
	});

	$('.fieldCount').on('keyup', function(){
		var value = parseInt($(this).val());
		var price = $(this).closest('td').next().find('.number');
		var summ = value * parseInt(price.data('value'));
		var dec = $(this).next();
		var inc = $(this).prev();
		if(value <= 1){
			dec.attr('disabled', '');
			price.html(summ);
		}else{
			price.html(summ);
			dec.attr('disabled', false);
		}
		if(value <= 0) {
			var dataValue = price.data('value');
			price.html(0);
		}
		basketTotal();
	});
}

function basketClose(elem){
	$(elem).on('click', function(){
		var price = $(this).closest('tr').find('.basketItemPrice').find('.number');
		$(this).closest('tr').hide();
		price.text(0);
		basketTotal();
	});
}


//mobile menu
$('.menu__wrap').on('click', function(){
	if($('.hamburger').hasClass('hamburgerActive')){
		$('.hamburger').removeClass('hamburgerActive');
	}else{
		$('.hamburger').addClass('hamburgerActive');
	}
	if($(window).width() < 769){
		if($('.hamburger').hasClass('hamburgerActive')){
			$('body').addClass('overflow');
		}else{
			$('body').removeClass('overflow');
		}
	}else{
		$('body').removeClass('overflow');
	}
});

//header-scroll
	$(window).scroll(function () {
		var header = $('.page-header');
		var top = $(this).scrollTop();
		if (top > 50) {
			header.addClass('page-header--fixed');
		}
		else {
			header.removeClass('page-header--fixed');
		}
	});

//header animation fix
if($(window).width() < 769){
	$('.page-header__bottom').hide().removeClass('slideInDown flex');
	$('.hamburger').removeClass('hamburgerActive');
}else{
	$('.page-header__bottom').show().removeClass('slideOutUp').addClass('slideInDown').css('display', 'flex');
	$('body').removeClass('overflow');
}

animate('.menu__wrap', '.page-header__bottom', 'slideInDown', 'slideOutUp');
catalogItemCounter('.fieldCount');
summPrice();
basketPrice();
$(".formTel").mask("+7(999)999-99-99", {
	placeholder: "+7(___)___-__-__"
});
