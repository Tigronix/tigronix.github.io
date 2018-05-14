"use strict"
//templates
new Vue({
		el: '#global-svg',
		template: '<svg aria-hidden="true" style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><symbol id="icon-ruble-sign" viewBox="0 0 15 20"><title>ruble-sign</title><path d="M9.35 12.5c3.325 0 5.65-2.323 5.65-5.661s-2.325-5.589-5.65-5.589h-6.381c-0.259 0-0.469 0.21-0.469 0.469v8.072h-2.031c-0.259 0-0.469 0.21-0.469 0.469v1.772c0 0.259 0.21 0.469 0.469 0.469h2.031v1.25h-2.031c-0.259 0-0.469 0.21-0.469 0.469v1.563c0 0.259 0.21 0.469 0.469 0.469h2.031v2.031c0 0.259 0.21 0.469 0.469 0.469h2.287c0.259 0 0.469-0.21 0.469-0.469v-2.031h6.306c0.259 0 0.469-0.21 0.469-0.469v-1.563c0-0.259-0.21-0.469-0.469-0.469h-6.306v-1.25h3.625zM5.725 3.935h3.075c1.825 0 2.925 1.137 2.925 2.903 0 1.79-1.1 2.952-2.975 2.952h-3.025v-5.855z"></path></symbol><symbol id="icon-access-time" viewBox="0 0 20 20"><title>access-time</title><path d="M9.992 1.667c-4.6 0-8.325 3.733-8.325 8.333s3.725 8.333 8.325 8.333c4.608 0 8.342-3.733 8.342-8.333s-3.733-8.333-8.342-8.333zM10 16.667c-3.683 0-6.667-2.983-6.667-6.667s2.983-6.667 6.667-6.667 6.667 2.983 6.667 6.667-2.983 6.667-6.667 6.667z"></path><path d="M10.417 5.833h-1.25v5l4.375 2.625 0.625-1.025-3.75-2.225z"></path></symbol><symbol id="icon-account-balance" viewBox="0 0 20 20"><title>account-balance</title><path d="M3.333 8.333v5.833h2.5v-5.833h-2.5zM8.333 8.333v5.833h2.5v-5.833h-2.5zM1.667 18.333h15.833v-2.5h-15.833v2.5zM13.333 8.333v5.833h2.5v-5.833h-2.5zM9.583 0.833l-7.917 4.167v1.667h15.833v-1.667l-7.917-4.167z"></path></symbol><symbol id="icon-account-circle" viewBox="0 0 20 20"><title>account-circle</title><path d="M10 1.667c-4.6 0-8.333 3.733-8.333 8.333s3.733 8.333 8.333 8.333 8.333-3.733 8.333-8.333-3.733-8.333-8.333-8.333zM10 4.167c1.383 0 2.5 1.117 2.5 2.5s-1.117 2.5-2.5 2.5-2.5-1.117-2.5-2.5 1.117-2.5 2.5-2.5zM10 16c-2.083 0-3.925-1.067-5-2.683 0.025-1.658 3.333-2.567 5-2.567 1.658 0 4.975 0.908 5 2.567-1.075 1.617-2.917 2.683-5 2.683z"></path></symbol><symbol id="icon-check-box" viewBox="0 0 20 20"><title>check-box</title><path d="M15.833 2.5h-11.667c-0.925 0-1.667 0.75-1.667 1.667v11.667c0 0.917 0.742 1.667 1.667 1.667h11.667c0.925 0 1.667-0.75 1.667-1.667v-11.667c0-0.917-0.742-1.667-1.667-1.667zM8.333 14.167l-4.167-4.167 1.175-1.175 2.992 2.983 6.325-6.325 1.175 1.183-7.5 7.5z"></path></symbol><symbol id="icon-check" viewBox="0 0 20 20"><title>check</title><path d="M7.5 13.475l-3.475-3.475-1.183 1.175 4.658 4.658 10-10-1.175-1.175z"></path></symbol><symbol id="icon-delete-forever" viewBox="0 0 20 20"><title>delete-forever</title><path d="M5 15.833c0 0.917 0.75 1.667 1.667 1.667h6.667c0.917 0 1.667-0.75 1.667-1.667v-10h-10v10zM7.050 9.9l1.175-1.175 1.775 1.767 1.767-1.767 1.175 1.175-1.767 1.767 1.767 1.767-1.175 1.175-1.767-1.767-1.767 1.767-1.175-1.175 1.767-1.767-1.775-1.767zM12.917 3.333l-0.833-0.833h-4.167l-0.833 0.833h-2.917v1.667h11.667v-1.667z"></path></symbol><symbol id="icon-filter-list" viewBox="0 0 20 20"><title>filter-list</title><path d="M8.333 15h3.333v-1.667h-3.333v1.667zM2.5 5v1.667h15v-1.667h-15zM5 10.833h10v-1.667h-10v1.667z"></path></symbol><symbol id="icon-local-pizza" viewBox="0 0 20 20"><title>local-pizza</title><path d="M10 1.667c-2.975 0-5.642 1.283-7.492 3.333l7.492 13.333 7.492-13.333c-1.842-2.042-4.517-3.333-7.492-3.333zM5.833 5.833c0-0.917 0.75-1.667 1.667-1.667s1.667 0.75 1.667 1.667-0.75 1.667-1.667 1.667-1.667-0.75-1.667-1.667zM10 12.5c-0.917 0-1.667-0.75-1.667-1.667s0.75-1.667 1.667-1.667 1.667 0.75 1.667 1.667-0.75 1.667-1.667 1.667z"></path></symbol><symbol id="icon-person-pin" viewBox="0 0 20 20"><title>person-pin</title><path d="M15.833 1.667h-11.667c-0.925 0-1.667 0.75-1.667 1.667v11.667c0 0.917 0.742 1.667 1.667 1.667h3.333l2.5 2.5 2.5-2.5h3.333c0.917 0 1.667-0.75 1.667-1.667v-11.667c0-0.917-0.75-1.667-1.667-1.667zM10 4.417c1.242 0 2.25 1.008 2.25 2.25s-1.008 2.25-2.25 2.25c-1.242 0-2.25-1.008-2.25-2.25s1.008-2.25 2.25-2.25zM15 13.333h-10v-0.75c0-1.667 3.333-2.583 5-2.583s5 0.917 5 2.583v0.75z"></path></symbol><symbol id="icon-phone" viewBox="0 0 20 20"><title>phone</title><path d="M5.517 8.992c1.2 2.358 3.133 4.283 5.492 5.492l1.833-1.833c0.225-0.225 0.558-0.3 0.85-0.2 0.933 0.308 1.942 0.475 2.975 0.475 0.458 0 0.833 0.375 0.833 0.833v2.908c0 0.458-0.375 0.833-0.833 0.833-7.825 0-14.167-6.342-14.167-14.167 0-0.458 0.375-0.833 0.833-0.833h2.917c0.458 0 0.833 0.375 0.833 0.833 0 1.042 0.167 2.042 0.475 2.975 0.092 0.292 0.025 0.617-0.208 0.85l-1.833 1.833z"></path></symbol><symbol id="icon-radio-button-checked" viewBox="0 0 20 20"><title>radio-button-checked</title><path d="M10 5.833c-2.3 0-4.167 1.867-4.167 4.167s1.867 4.167 4.167 4.167 4.167-1.867 4.167-4.167-1.867-4.167-4.167-4.167zM10 1.667c-4.6 0-8.333 3.733-8.333 8.333s3.733 8.333 8.333 8.333 8.333-3.733 8.333-8.333-3.733-8.333-8.333-8.333zM10 16.667c-3.683 0-6.667-2.983-6.667-6.667s2.983-6.667 6.667-6.667 6.667 2.983 6.667 6.667-2.983 6.667-6.667 6.667z"></path></symbol><symbol id="icon-radio-button-unchecked" viewBox="0 0 20 20"><title>radio-button-unchecked</title><path d="M10 1.667c-4.6 0-8.333 3.733-8.333 8.333s3.733 8.333 8.333 8.333 8.333-3.733 8.333-8.333-3.733-8.333-8.333-8.333zM10 16.667c-3.683 0-6.667-2.983-6.667-6.667s2.983-6.667 6.667-6.667 6.667 2.983 6.667 6.667-2.983 6.667-6.667 6.667z"></path></symbol><symbol id="icon-spa" viewBox="0 0 20 20"><title>spa</title><path fill="#607d8b" style="fill: var(--color1, #607d8b)" d="M7.125 10c-0.892-0.592-1.875-1.058-2.942-1.342 1.067 0.283 2.050 0.75 2.942 1.342zM15.817 8.658c-1.075 0.283-2.075 0.758-2.975 1.367 0.9-0.608 1.9-1.083 2.975-1.367z"></path><path fill="#000" style="fill: var(--color2, #000)" d="M12.908 8.025c-0.15-2.325-1.092-4.592-2.858-6.358-1.783 1.783-2.767 4.050-2.958 6.358 1.067 0.567 2.050 1.3 2.908 2.192 0.858-0.883 1.842-1.617 2.908-2.192zM7.492 10.233c-0.117-0.083-0.25-0.158-0.375-0.242 0.125 0.092 0.258 0.158 0.375 0.242zM12.842 10.025c-0.108 0.075-0.225 0.133-0.333 0.217 0.108-0.083 0.225-0.142 0.333-0.217zM10 12.875c-1.792-2.733-4.85-4.542-8.333-4.542 0 4.433 2.8 8.183 6.692 9.575 0.525 0.192 1.075 0.333 1.642 0.425 0.567-0.1 1.108-0.242 1.642-0.425 3.892-1.392 6.692-5.142 6.692-9.575-3.483 0-6.542 1.808-8.333 4.542z"></path></symbol><symbol id="icon-subway" viewBox="0 0 20 20"><title>subway</title><path d="M13.75 13.333c0 0.46-0.373 0.833-0.833 0.833s-0.833-0.373-0.833-0.833c0-0.46 0.373-0.833 0.833-0.833s0.833 0.373 0.833 0.833z"></path><path d="M7.917 13.333c0 0.46-0.373 0.833-0.833 0.833s-0.833-0.373-0.833-0.833c0-0.46 0.373-0.833 0.833-0.833s0.833 0.373 0.833 0.833z"></path><path d="M5.842 7.5h8.333v4.167h-8.333z"></path><path d="M14.833 2.333c-1.5-0.592-3.283-0.667-4.833-0.667s-3.333 0.075-4.833 0.667c-2.225 0.867-3.5 2.708-3.5 5.050v10.95h16.667v-10.95c0-2.342-1.275-4.183-3.5-5.050zM15 13.233c0 1.208-0.983 2.183-2.192 2.183l0.942 0.933v0.317h-1.25l-1.25-1.25h-2.358l-1.25 1.25h-1.392v-0.317l0.933-0.933c-1.2 0-2.183-0.983-2.183-2.183v-5.733c0-2.192 2.5-2.5 5-2.5 2.767 0 5 0.317 5 2.5v5.733z"></path></symbol><symbol id="icon-timer" viewBox="0 0 20 20"><title>timer</title><path d="M12.5 0.833h-5v1.667h5v-1.667zM9.167 11.667h1.667v-5h-1.667v5zM15.858 6.158l1.183-1.183c-0.358-0.425-0.75-0.825-1.175-1.175l-1.183 1.183c-1.292-1.033-2.917-1.65-4.683-1.65-4.142 0-7.5 3.358-7.5 7.5s3.35 7.5 7.5 7.5 7.5-3.358 7.5-7.5c0-1.767-0.617-3.392-1.642-4.675zM10 16.667c-3.225 0-5.833-2.608-5.833-5.833s2.608-5.833 5.833-5.833 5.833 2.608 5.833 5.833-2.608 5.833-5.833 5.833z"></path></symbol><symbol id="icon-verified-user" viewBox="0 0 20 20"><title>verified-user</title><path d="M10 0.833l-7.5 3.333v5c0 4.625 3.2 8.95 7.5 10 4.3-1.050 7.5-5.375 7.5-10v-5l-7.5-3.333zM8.333 14.167l-3.333-3.333 1.175-1.175 2.158 2.15 5.492-5.492 1.175 1.183-6.667 6.667z"></path></symbol><symbol id="icon-whatshot" viewBox="0 0 20 20"><title>whatshot</title><path d="M11.25 0.558s0.617 2.208 0.617 4c0 1.717-1.125 3.108-2.842 3.108-1.725 0-3.025-1.392-3.025-3.108l0.025-0.3c-1.683 2-2.692 4.592-2.692 7.408 0 3.683 2.983 6.667 6.667 6.667s6.667-2.983 6.667-6.667c0-4.492-2.158-8.5-5.417-11.108zM9.758 15.833c-1.483 0-2.683-1.167-2.683-2.617 0-1.35 0.875-2.3 2.342-2.6 1.475-0.3 3-1.008 3.85-2.15 0.325 1.075 0.492 2.208 0.492 3.367 0 2.208-1.792 4-4 4z"></path></symbol><symbol id="icon-youtube-searched" viewBox="0 0 20 20"><title>youtube-searched</title><path d="M14.175 11.667h-0.667l-0.225-0.225c0.817-0.95 1.308-2.175 1.308-3.525 0-2.992-2.425-5.417-5.417-5.417s-5.417 2.5-5.417 5.417h-2.092l3.2 3.333 3.467-3.333h-2.908c0-2.083 1.683-3.75 3.75-3.75s3.75 1.675 3.75 3.75c0 2.067-1.683 3.75-3.75 3.75-0.542 0-1.050-0.117-1.517-0.317l-1.233 1.233c0.808 0.475 1.742 0.75 2.75 0.75 1.342 0 2.567-0.492 3.517-1.308l0.225 0.225v0.658l4.175 4.158 1.242-1.233-4.158-4.167z"></path></symbol></defs></svg>'
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

function productToggle() {
	var elem = $('.productToggle');

	elem.on('click', function(){
		var elemHover  	= $(this).closest('.calcItem').find('.product__toggle-hover');
		var activeFirst = $(this).closest('.calcItem').find('.product__toggle-first');
		var activeLast 	= $(this).closest('.calcItem').find('.product__toggle-last');

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

function stepSelect() {
	var elem = $('.step__select');

	elem.on('focus || mouseenter', function(){
		$(this).closest('.step__select-box').find('.step__select-icon').addClass('active');
	});
	elem.on('mouseleave', function(){
		$(this).closest('.step__select-box').find('.step__select-icon').removeClass('active');
	});
}

	function stepValidation() {
		var form = $('.step');

		function stepForward(currentBox, formElem, inactiveBox, formElemNext){
			$(formElem).change(function(){
				$(formElem).each(function(index, item, array){
					var elem = $(item);
					if(elem.val() != ''){
						$(this).addClass('success');
						var stepSuccess = $(formElem + '.success');
						for(var i = 0; i < stepSuccess.length; i++){
							if(i >= 1){
								$(inactiveBox).removeClass('inactive');
								$(formElemNext).prop('disabled', false);
								$(currentBox).addClass('active');
							}else {
								$(inactiveBox).addClass('inactive');
								$(formElemNext).prop('disabled', 'disabled');
								$(currentBox).removeClass('active');
							}

						}
					}else {
						$(this).removeClass('success');
					}
				});
			});
		}

		stepForward('.stepBoxFirst', '.stepFirst', '.stepBoxSecond', '.stepSecond');
		stepForward('.stepBoxSecond', '.stepSecond', '.stepBoxThird', '.stepThird');
		stepForward('.stepBoxThird', '.stepThird', '.stepBoxFourth', '.stepFourth');

	}

window.onload = function() {
	//scrollEvents
	scrollEffects();

	//other
	phoneMask();
	checkbox('.product__checkbox');
	checkbox('.backet-order__checkbox');
	checkFix('.product__checkbox');
	checkFix('.step__checkbox');
	activeSiblings('.productToggle');
	productToggle();
	changeClassOnScroll();
	menuHover();
	stepSelect();

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

	//loading
	loading();


	//map
	map();

	//calc
	productCalc();
	cartCalc();

	//stepValidation
	stepValidation();
};

//other
bodyOverflow('.hamburger');
