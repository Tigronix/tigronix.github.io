"use strict"

//wow animation
new WOW().init();

//templates
new Vue({
	el: '#global-svg',
	template: '<svg aria-hidden="true" style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><symbol id="icon-business_center" viewBox="0 0 32 32"><title>business_center</title><path d="M13.333 21.333v-1.333h-9.32l-0.013 5.333c0 1.48 1.187 2.667 2.667 2.667h18.667c1.48 0 2.667-1.187 2.667-2.667v-5.333h-9.333v1.333h-5.333zM26.667 9.333h-5.347v-2.667l-2.667-2.667h-5.333l-2.667 2.667v2.667h-5.32c-1.467 0-2.667 1.2-2.667 2.667v4c0 1.48 1.187 2.667 2.667 2.667h8v-2.667h5.333v2.667h8c1.467 0 2.667-1.2 2.667-2.667v-4c0-1.467-1.2-2.667-2.667-2.667zM18.667 9.333h-5.333v-2.667h5.333v2.667z"></path></symbol><symbol id="icon-arrow_back" viewBox="0 0 32 32"><title>arrow_back</title><path d="M26.667 14.667h-16.227l7.453-7.453-1.893-1.88-10.667 10.667 10.667 10.667 1.88-1.88-7.44-7.453h16.227v-2.667z"></path></symbol><symbol id="icon-arrow_forward" viewBox="0 0 32 32"><title>arrow_forward</title><path d="M16 5.333l-1.88 1.88 7.44 7.453h-16.227v2.667h16.227l-7.44 7.453 1.88 1.88 10.667-10.667z"></path></symbol><symbol id="icon-arrow_drop_down" viewBox="0 0 32 32"><title>arrow_drop_down</title><path d="M9.333 13.333l6.667 6.667 6.667-6.667z"></path></symbol><symbol id="icon-ac_unit" viewBox="0 0 32 32"><title>ac_unit</title><path d="M29.333 14.667h-5.56l4.32-4.32-1.88-1.893-6.213 6.213h-2.667v-2.667l6.213-6.213-1.893-1.88-4.32 4.32v-5.56h-2.667v5.56l-4.32-4.32-1.893 1.88 6.213 6.213v2.667h-2.667l-6.213-6.213-1.88 1.893 4.32 4.32h-5.56v2.667h5.56l-4.32 4.32 1.88 1.893 6.213-6.213h2.667v2.667l-6.213 6.213 1.893 1.88 4.32-4.32v5.56h2.667v-5.56l4.32 4.32 1.893-1.88-6.213-6.213v-2.667h2.667l6.213 6.213 1.88-1.893-4.32-4.32h5.56z"></path></symbol><symbol id="icon-account_balance_black" viewBox="0 0 32 32"><title>account_balance_black</title><path d="M5.333 13.333v9.333h4v-9.333h-4zM13.333 13.333v9.333h4v-9.333h-4zM2.667 29.333h25.333v-4h-25.333v4zM21.333 13.333v9.333h4v-9.333h-4zM15.333 1.333l-12.667 6.667v2.667h25.333v-2.667l-12.667-6.667z"></path></symbol><symbol id="icon-add_shopping_cart" viewBox="0 0 32 32"><title>add_shopping_cart</title><path d="M14.667 12h2.667v-4h4v-2.667h-4v-4h-2.667v4h-4v2.667h4v4zM9.333 24c-1.467 0-2.653 1.2-2.653 2.667s1.187 2.667 2.653 2.667 2.667-1.2 2.667-2.667-1.2-2.667-2.667-2.667zM22.667 24c-1.467 0-2.653 1.2-2.653 2.667s1.187 2.667 2.653 2.667 2.667-1.2 2.667-2.667-1.2-2.667-2.667-2.667zM9.56 19.667l0.040-0.16 1.2-2.173h9.933c1 0 1.88-0.547 2.333-1.373l5.147-9.347-2.32-1.28h-0.013l-1.467 2.667-3.68 6.667h-9.36l-0.173-0.36-2.987-6.307-1.267-2.667-1.253-2.667h-4.36v2.667h2.667l4.8 10.12-1.8 3.267c-0.213 0.373-0.333 0.813-0.333 1.28 0 1.467 1.2 2.667 2.667 2.667h16v-2.667h-15.44c-0.173 0-0.333-0.147-0.333-0.333z"></path></symbol><symbol id="icon-arrow_drop_up" viewBox="0 0 32 32"><title>arrow_drop_up</title><path d="M9.333 18.667l6.667-6.667 6.667 6.667z"></path></symbol><symbol id="icon-bookmark_border" viewBox="0 0 32 32"><title>bookmark_border</title><path d="M22.667 4h-13.333c-1.467 0-2.653 1.2-2.653 2.667l-0.013 21.333 9.333-4 9.333 4v-21.333c0-1.467-1.2-2.667-2.667-2.667zM22.667 24l-6.667-2.907-6.667 2.907v-17.333h13.333v17.333z"></path></symbol><symbol id="icon-business" viewBox="0 0 32 32"><title>business</title><path d="M16 9.333v-5.333h-13.333v24h26.667v-18.667h-13.333zM8 25.333h-2.667v-2.667h2.667v2.667zM8 20h-2.667v-2.667h2.667v2.667zM8 14.667h-2.667v-2.667h2.667v2.667zM8 9.333h-2.667v-2.667h2.667v2.667zM13.333 25.333h-2.667v-2.667h2.667v2.667zM13.333 20h-2.667v-2.667h2.667v2.667zM13.333 14.667h-2.667v-2.667h2.667v2.667zM13.333 9.333h-2.667v-2.667h2.667v2.667zM26.667 25.333h-10.667v-2.667h2.667v-2.667h-2.667v-2.667h2.667v-2.667h-2.667v-2.667h10.667v13.333zM24 14.667h-2.667v2.667h2.667v-2.667zM24 20h-2.667v2.667h2.667v-2.667z"></path></symbol><symbol id="icon-contact_phone" viewBox="0 0 32 32"><title>contact_phone</title><path d="M29.333 4h-26.667c-1.467 0-2.667 1.2-2.667 2.667v18.667c0 1.467 1.2 2.667 2.667 2.667h26.667c1.467 0 2.653-1.2 2.653-2.667l0.013-18.667c0-1.467-1.2-2.667-2.667-2.667zM10.667 8c2.213 0 4 1.787 4 4s-1.787 4-4 4-4-1.787-4-4 1.787-4 4-4zM18.667 24h-16v-1.333c0-2.667 5.333-4.133 8-4.133s8 1.467 8 4.133v1.333zM23.8 18.667h2.187l2.013 2.667-2.653 2.653c-1.747-1.307-3.040-3.173-3.64-5.32-0.24-0.853-0.373-1.747-0.373-2.667s0.133-1.813 0.373-2.667c0.6-2.16 1.893-4.013 3.64-5.32l2.653 2.653-2.013 2.667h-2.187c-0.293 0.84-0.467 1.733-0.467 2.667s0.173 1.827 0.467 2.667z"></path></symbol><symbol id="icon-donut_small" viewBox="0 0 32 32"><title>donut_small</title><path d="M14.667 12.213v-9.547c-6.667 0.667-12 6.387-12 13.333s5.333 12.667 12 13.333v-9.547c-1.333-0.547-2.667-2.027-2.667-3.787s1.333-3.24 2.667-3.787zM19.813 14.667h9.52c-0.64-6.333-5.333-11.373-12-12v9.547c1.333 0.4 2.027 1.307 2.48 2.453zM17.333 19.787v9.547c6.667-0.627 11.36-5.667 12-12h-9.52c-0.453 1.147-1.147 2.053-2.48 2.453z"></path></symbol><symbol id="icon-favorite_black" viewBox="0 0 32 32"><title>favorite_black</title><path d="M16 28.467l-1.933-1.76c-6.867-6.227-11.4-10.333-11.4-15.373 0-4.107 3.227-7.333 7.333-7.333 2.32 0 4.547 1.080 6 2.787 1.453-1.707 3.68-2.787 6-2.787 4.107 0 7.333 3.227 7.333 7.333 0 5.040-4.533 9.147-11.4 15.387l-1.933 1.747z"></path></symbol><symbol id="icon-local_play" viewBox="0 0 32 32"><title>local_play</title><path d="M26.667 16c0-1.467 1.2-2.667 2.667-2.667v-5.333c0-1.467-1.2-2.667-2.667-2.667h-21.333c-1.467 0-2.653 1.2-2.653 2.667v5.333c1.467 0 2.653 1.2 2.653 2.667s-1.187 2.667-2.667 2.667v5.333c0 1.467 1.2 2.667 2.667 2.667h21.333c1.467 0 2.667-1.2 2.667-2.667v-5.333c-1.467 0-2.667-1.2-2.667-2.667zM20.773 22.4l-4.773-3.067-4.773 3.067 1.44-5.493-4.387-3.587 5.653-0.333 2.067-5.253 2.053 5.267 5.653 0.333-4.387 3.587 1.453 5.48z"></path></symbol><symbol id="icon-star_half" viewBox="0 0 32 32"><title>star_half</title><path d="M29.333 12.32l-9.587-0.827-3.747-8.827-3.747 8.84-9.587 0.813 7.28 6.307-2.187 9.373 8.24-4.973 8.24 4.973-2.173-9.373 7.267-6.307zM16 20.533v-12.4l2.28 5.387 5.84 0.507-4.427 3.84 1.333 5.707-5.027-3.040z"></path></symbol><symbol id="icon-tune" viewBox="0 0 32 32"><title>tune</title><path d="M4 22.667v2.667h8v-2.667h-8zM4 6.667v2.667h13.333v-2.667h-13.333zM17.333 28v-2.667h10.667v-2.667h-10.667v-2.667h-2.667v8h2.667zM9.333 12v2.667h-5.333v2.667h5.333v2.667h2.667v-8h-2.667zM28 17.333v-2.667h-13.333v2.667h13.333zM20 12h2.667v-2.667h5.333v-2.667h-5.333v-2.667h-2.667v8z"></path></symbol></defs></svg>'
})

//animate
function animate(dataAttr, animationIn, animationOut, hideTiming) {
	$(document).on('click', '[data-class]', function () {
		var dataClass = $(this).attr('data-class');
		var dataNumber = $(this).attr('data-number');
		hideTiming = hideTiming || 1000;
		if (dataClass == dataAttr) {
			$('[data-class="' + dataClass + '"]').each(function () {
				if ($(this).attr('data-number') === dataNumber) {
					if ($(this).hasClass('animate__button')) {
						$(this).toggleClass('active');
					}

					if ($(this).hasClass('animate__content')) {
						$(this).show();
						if ($(this).hasClass(animationIn)) {
							var animateContent = $(this);
							animateContent.removeClass(animationIn).addClass(animationOut);
							setTimeout(function () {
								animateContent.hide();
							}, hideTiming);
						} else {
							$(this).removeClass(animationOut).addClass(animationIn);
						}
					}
				}
			});
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
					inc = el.next().next('.inc');

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
						console.log(value * 2);
					};
			});
		}

//пересчёт цены товара
function summPrice() {
	$('.input-number__button').on('click', function(){
		var price = parseInt($(this).closest('.catalog__count').next().find('.number').data('value'));
		if($(this).hasClass('dec')){
			var value = parseInt($(this).prev().val());
			--value;
		}else if($(this).hasClass('inc')){
			var value = parseInt($(this).prev().prev().val());
			++value;
		}
		if($(this).hasClass('dec')){
			if(value == 1){
				$(this).attr('disabled', '');
			}
		}
		if($(this).hasClass('inc')){
			if(value > 1){
				$(this).prev().attr('disabled', false);
			}
		}
		var summ = price * value;
		$(this).closest('.catalog__count').next().find('.number').html(summ);

	});
	
	$('.fieldCount').on('keyup', function(){
		var value = parseInt($(this).val());
		var price = $(this).closest('.catalog__count').next().find('.number');
		var summ = value * parseInt(price.data('value'));
		if(value <= 0){
			var dataValue = price.data('value');
			price.html(0);
		}else{
			price.html(summ);
		}
	});
	
	$('.catalog__label').on('click', function(){
		var disabled = $(this).prev().attr('disabled');
		var numberWeight = $(this).data('price');
		var price = $(this).closest('.catalog__size').next().next().find('.number');
		var input = $(this).closest('.catalog__size').next().find('.fieldCount');
		console.log(input);
		if(disabled == 'disabled'){
			console.log('disabled');
		}else{
			parseInt(price.html(numberWeight).data('value', numberWeight));
			parseInt(input.val(1));
		}
	});
}

//mobile menu
$('.hamburger').on('click', function(){
	$(this).toggleClass('hamburgerActive');
});

//header-scroll
	var header = $('.header');
	$(window).scroll(function () {
		var top = $(this).scrollTop();
		if (top > 50) {
			header.addClass('header--fixed');
		}
		else {
			header.removeClass('header--fixed');
		}
	});

//popular__slider
	$('.popular__slider').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		arrows: true,
		dots: true,
		infinite: true,
		prevArrow: '<div class="slick-prev"><i class="icon"><svg class="icon icon-arrow_back"><use xlink:href="#icon-arrow_back"></use></svg></i></div>',
		nextArrow: '<div class="slick-next"><i class="icon"><svg class="icon icon-arrow_forward"><use xlink:href="#icon-arrow_forward"></use></svg></i></div>',
		responsive: [
			{
				breakpoint: 1800,
				settings: {
					slidesToShow: 4
				}
			},
			{
				breakpoint: 1520,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 1100,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 1
				}
			},
			{
				breakpoint: 470,
				settings: {
					arrows: false,
					slidesToShow: 1
				}
			}
			
		]
	});
summPrice();
catalogItemCounter('.fieldCount');
animate('mobile-menu', 'bounceIn', 'bounceOut', 800);