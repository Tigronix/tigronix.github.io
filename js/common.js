"use strict"
$(document).ready(function() {
  //wow animation
  new WOW().init();

  //templates
  new Vue({
    el: '#global-svg',
    template: '<svg aria-hidden="true" style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><symbol id="icon-airport-shuttle" viewBox="0 0 32 32"><title>airport-shuttle</title><path d="M22.667 6.667h-18.667c-1.467 0-2.667 1.187-2.667 2.667v12h2.667c0 2.2 1.787 4 4 4s4-1.8 4-4h7.333c0 2.2 1.787 4 4 4s4-1.8 4-4h3.333v-6.667l-8-8zM4 14.667v-5.333h5.333v5.333h-5.333zM8 23.333c-1.107 0-2-0.893-2-2s0.893-2 2-2 2 0.893 2 2-0.893 2-2 2zM17.333 14.667h-5.333v-5.333h5.333v5.333zM23.333 23.333c-1.107 0-2-0.893-2-2s0.893-2 2-2 2 0.893 2 2-0.893 2-2 2zM20 14.667v-5.333h1.333l5.333 5.333h-6.667z"></path></symbol><symbol id="icon-arrow-back" viewBox="0 0 32 32"><title>arrow-back</title><path d="M26.667 14.667h-16.227l7.453-7.453-1.893-1.88-10.667 10.667 10.667 10.667 1.88-1.88-7.44-7.453h16.227v-2.667z"></path></symbol><symbol id="icon-arrow-drop-down" viewBox="0 0 32 32"><title>arrow-drop-down</title><path d="M9.333 13.333l6.667 6.667 6.667-6.667z"></path></symbol><symbol id="icon-arrow-forward" viewBox="0 0 32 32"><title>arrow-forward</title><path d="M16 5.333l-1.88 1.88 7.44 7.453h-16.227v2.667h16.227l-7.44 7.453 1.88 1.88 10.667-10.667z"></path></symbol><symbol id="icon-battery-charging-full" viewBox="0 0 32 32"><title>battery-charging-full</title><path d="M20.893 5.333h-2.227v-2.667h-5.333v2.667h-2.227c-0.973 0-1.773 0.8-1.773 1.773v20.44c0 0.987 0.8 1.787 1.773 1.787h9.773c0.987 0 1.787-0.8 1.787-1.773v-20.453c0-0.973-0.8-1.773-1.773-1.773zM14.667 26.667v-7.333h-2.667l5.333-10v7.333h2.667l-5.333 10z"></path></symbol><symbol id="icon-block" viewBox="0 0 32 32"><title>block</title><path d="M16 2.667c-7.36 0-13.333 5.973-13.333 13.333s5.973 13.333 13.333 13.333 13.333-5.973 13.333-13.333-5.973-13.333-13.333-13.333zM5.333 16c0-5.893 4.773-10.667 10.667-10.667 2.467 0 4.733 0.84 6.533 2.253l-14.947 14.947c-1.413-1.8-2.253-4.067-2.253-6.533zM16 26.667c-2.467 0-4.733-0.84-6.533-2.253l14.947-14.947c1.413 1.8 2.253 4.067 2.253 6.533 0 5.893-4.773 10.667-10.667 10.667z"></path></symbol><symbol id="icon-build" viewBox="0 0 32 32"><title>build</title><path d="M30.267 25.333l-12.133-12.133c1.2-3.067 0.533-6.667-2-9.2-2.667-2.667-6.667-3.2-9.867-1.733l5.733 5.733-4 4-5.867-5.733c-1.6 3.2-0.933 7.2 1.733 9.867 2.533 2.533 6.133 3.2 9.2 2l12.133 12.133c0.533 0.533 1.333 0.533 1.867 0l3.067-3.067c0.667-0.533 0.667-1.467 0.133-1.867z"></path></symbol><symbol id="icon-directions-car" viewBox="0 0 32 32"><title>directions-car</title><path d="M25.227 8.013c-0.267-0.787-1.013-1.347-1.893-1.347h-14.667c-0.88 0-1.613 0.56-1.893 1.347l-2.773 7.987v10.667c0 0.733 0.6 1.333 1.333 1.333h1.333c0.733 0 1.333-0.6 1.333-1.333v-1.333h16v1.333c0 0.733 0.6 1.333 1.333 1.333h1.333c0.733 0 1.333-0.6 1.333-1.333v-10.667l-2.773-7.987zM8.667 21.333c-1.107 0-2-0.893-2-2s0.893-2 2-2 2 0.893 2 2-0.893 2-2 2zM23.333 21.333c-1.107 0-2-0.893-2-2s0.893-2 2-2 2 0.893 2 2-0.893 2-2 2zM6.667 14.667l2-6h14.667l2 6h-18.667z"></path></symbol><symbol id="icon-edit-location" viewBox="0 0 32 32"><title>edit-location</title><path d="M16 2.667c-5.147 0-9.333 4.187-9.333 9.333 0 7 9.333 17.333 9.333 17.333s9.333-10.333 9.333-17.333c0-5.147-4.187-9.333-9.333-9.333zM13.92 16h-1.92v-1.92l4.467-4.453 1.907 1.907-4.453 4.467zM19.853 10.067l-0.933 0.933-1.92-1.92 0.933-0.933c0.2-0.2 0.52-0.2 0.72 0l1.2 1.2c0.2 0.2 0.2 0.52 0 0.72z"></path></symbol><symbol id="icon-invert-colors-off" viewBox="0 0 32 32"><title>invert-colors-off</title><path d="M27.533 27.827l-3.133-3.133-8.4-8.387-4.747-4.76-1.893-1.88-3.667-3.667-1.693 1.693 3.707 3.707c-3.4 4.187-3.147 10.347 0.747 14.253 2.080 2.080 4.813 3.12 7.547 3.12 2.387 0 4.76-0.787 6.707-2.373l3.6 3.6 1.693-1.693-0.467-0.48zM16 26.12c-2.133 0-4.147-0.827-5.653-2.347-1.52-1.52-2.347-3.52-2.347-5.653 0-1.76 0.573-3.427 1.613-4.8l6.387 6.373v6.427zM16 6.8v6.107l9.667 9.68c1.827-3.947 1.12-8.76-2.133-12.013l-7.533-7.547-4.933 4.933 1.88 1.88 3.053-3.040z"></path></symbol><symbol id="icon-keyboard-arrow-down" viewBox="0 0 32 32"><title>keyboard-arrow-down</title><path d="M9.88 10.453l6.12 6.107 6.12-6.107 1.88 1.88-8 8-8-8z"></path></symbol><symbol id="icon-local-gas-station" viewBox="0 0 32 32"><title>local-gas-station</title><path d="M26.36 9.64l0.013-0.013-4.96-4.96-1.413 1.413 2.813 2.813c-1.253 0.48-2.147 1.68-2.147 3.107 0 1.84 1.493 3.333 3.333 3.333 0.48 0 0.92-0.107 1.333-0.28v9.613c0 0.733-0.6 1.333-1.333 1.333s-1.333-0.6-1.333-1.333v-6c0-1.467-1.2-2.667-2.667-2.667h-1.333v-9.333c0-1.467-1.2-2.667-2.667-2.667h-8c-1.467 0-2.667 1.2-2.667 2.667v21.333h13.333v-10h2v6.667c0 1.84 1.493 3.333 3.333 3.333s3.333-1.493 3.333-3.333v-12.667c0-0.92-0.373-1.76-0.973-2.36zM16 13.333h-8v-6.667h8v6.667zM24 13.333c-0.733 0-1.333-0.6-1.333-1.333s0.6-1.333 1.333-1.333 1.333 0.6 1.333 1.333-0.6 1.333-1.333 1.333z"></path></symbol><symbol id="icon-lock" viewBox="0 0 32 32"><title>lock</title><path d="M24 10.667h-1.333v-2.667c0-3.68-2.987-6.667-6.667-6.667s-6.667 2.987-6.667 6.667v2.667h-1.333c-1.467 0-2.667 1.2-2.667 2.667v13.333c0 1.467 1.2 2.667 2.667 2.667h16c1.467 0 2.667-1.2 2.667-2.667v-13.333c0-1.467-1.2-2.667-2.667-2.667zM16 22.667c-1.467 0-2.667-1.2-2.667-2.667s1.2-2.667 2.667-2.667 2.667 1.2 2.667 2.667-1.2 2.667-2.667 2.667zM20.133 10.667h-8.267v-2.667c0-2.28 1.853-4.133 4.133-4.133s4.133 1.853 4.133 4.133v2.667z"></path></symbol><symbol id="icon-perm-data-setting" viewBox="0 0 32 32"><title>perm-data-setting</title><path d="M25.32 15.333c0.453 0 0.893 0.040 1.333 0.093l0.013-15.427-26.667 26.667h15.413c-0.053-0.44-0.093-0.88-0.093-1.333 0-5.52 4.48-10 10-10zM30.267 25.987c0.027-0.213 0.053-0.427 0.053-0.653s-0.013-0.44-0.053-0.653l1.413-1.107c0.12-0.107 0.16-0.28 0.080-0.427l-1.333-2.307c-0.080-0.147-0.253-0.2-0.413-0.147l-1.653 0.667c-0.347-0.267-0.72-0.493-1.133-0.653l-0.253-1.76c-0.013-0.16-0.16-0.28-0.32-0.28h-2.667c-0.16 0-0.307 0.12-0.333 0.28l-0.253 1.76c-0.4 0.173-0.787 0.387-1.133 0.653l-1.653-0.667c-0.147-0.053-0.32 0-0.413 0.147l-1.333 2.307c-0.080 0.147-0.053 0.32 0.080 0.427l1.413 1.107c-0.027 0.213-0.040 0.427-0.040 0.653s0.013 0.44 0.040 0.653l-1.413 1.107c-0.12 0.107-0.16 0.28-0.080 0.427l1.333 2.307c0.080 0.147 0.253 0.2 0.413 0.147l1.653-0.667c0.347 0.267 0.72 0.493 1.133 0.653l0.253 1.76c0.027 0.16 0.16 0.28 0.333 0.28h2.667c0.16 0 0.307-0.12 0.333-0.28l0.253-1.76c0.4-0.173 0.787-0.387 1.12-0.653l1.667 0.667c0.147 0.053 0.32 0 0.413-0.147l1.333-2.307c0.080-0.147 0.040-0.32-0.080-0.427l-1.427-1.107zM25.32 27.333c-1.107 0-2-0.893-2-2s0.893-2 2-2 2 0.893 2 2-0.893 2-2 2z"></path></symbol><symbol id="icon-phone-forwarded" viewBox="0 0 32 32"><title>phone-forwarded</title><path d="M24 14.667l6.667-6.667-6.667-6.667v4h-5.333v5.333h5.333v4zM26.667 20.667c-1.667 0-3.267-0.267-4.76-0.76-0.467-0.147-0.987-0.040-1.36 0.32l-2.933 2.933c-3.773-1.92-6.867-5-8.787-8.787l2.933-2.947c0.373-0.347 0.48-0.867 0.333-1.333-0.493-1.493-0.76-3.093-0.76-4.76 0-0.733-0.6-1.333-1.333-1.333h-4.667c-0.733 0-1.333 0.6-1.333 1.333 0 12.52 10.147 22.667 22.667 22.667 0.733 0 1.333-0.6 1.333-1.333v-4.667c0-0.733-0.6-1.333-1.333-1.333z"></path></symbol><symbol id="icon-radio-button-checked" viewBox="0 0 32 32"><title>radio-button-checked</title><path d="M16 9.333c-3.68 0-6.667 2.987-6.667 6.667s2.987 6.667 6.667 6.667 6.667-2.987 6.667-6.667-2.987-6.667-6.667-6.667zM16 2.667c-7.36 0-13.333 5.973-13.333 13.333s5.973 13.333 13.333 13.333 13.333-5.973 13.333-13.333-5.973-13.333-13.333-13.333zM16 26.667c-5.893 0-10.667-4.773-10.667-10.667s4.773-10.667 10.667-10.667 10.667 4.773 10.667 10.667-4.773 10.667-10.667 10.667z"></path></symbol><symbol id="icon-rotate-90-degrees" viewBox="0 0 32 32"><title>rotate-90-degrees</title><path d="M9.787 8.547l-8.64 8.653 8.653 8.64 8.653-8.64-8.667-8.653zM4.92 17.2l4.88-4.88 4.867 4.88-4.88 4.88-4.867-4.88zM25.813 8.853c-2.333-2.347-5.413-3.52-8.48-3.52v-4.32l-5.653 5.653 5.653 5.653v-4.32c2.387 0 4.773 0.907 6.6 2.733 3.64 3.64 3.64 9.56 0 13.2-1.827 1.827-4.213 2.733-6.6 2.733-1.293 0-2.587-0.28-3.787-0.813l-1.987 1.987c1.8 0.987 3.787 1.493 5.773 1.493 3.067 0 6.147-1.173 8.48-3.52 4.693-4.68 4.693-12.28 0-16.96z"></path></symbol><symbol id="icon-settings" viewBox="0 0 32 32"><title>settings</title><path d="M25.907 17.307c0.053-0.427 0.093-0.853 0.093-1.307s-0.040-0.88-0.093-1.307l2.813-2.2c0.253-0.2 0.32-0.56 0.16-0.853l-2.667-4.613c-0.16-0.293-0.52-0.4-0.813-0.293l-3.32 1.333c-0.693-0.533-1.44-0.973-2.253-1.307l-0.507-3.533c-0.040-0.32-0.32-0.56-0.653-0.56h-5.333c-0.333 0-0.613 0.24-0.653 0.56l-0.507 3.533c-0.813 0.333-1.56 0.787-2.253 1.307l-3.32-1.333c-0.307-0.12-0.653 0-0.813 0.293l-2.667 4.613c-0.173 0.293-0.093 0.653 0.16 0.853l2.813 2.2c-0.053 0.427-0.093 0.867-0.093 1.307s0.040 0.88 0.093 1.307l-2.813 2.2c-0.253 0.2-0.32 0.56-0.16 0.853l2.667 4.613c0.16 0.293 0.52 0.4 0.813 0.293l3.32-1.333c0.693 0.533 1.44 0.973 2.253 1.307l0.507 3.533c0.040 0.32 0.32 0.56 0.653 0.56h5.333c0.333 0 0.613-0.24 0.653-0.56l0.507-3.533c0.813-0.333 1.56-0.787 2.253-1.307l3.32 1.333c0.307 0.12 0.653 0 0.813-0.293l2.667-4.613c0.16-0.293 0.093-0.653-0.16-0.853l-2.813-2.2zM16 20.667c-2.573 0-4.667-2.093-4.667-4.667s2.093-4.667 4.667-4.667 4.667 2.093 4.667 4.667-2.093 4.667-4.667 4.667z"></path></symbol><symbol id="icon-show-chart" viewBox="0 0 32 32"><title>show-chart</title><path d="M4.667 24.653l8-8.013 5.333 5.333 11.333-12.747-1.88-1.88-9.453 10.627-5.333-5.333-10 10.013z"></path></symbol><symbol id="icon-track-changes" viewBox="0 0 32 32"><title>track-changes</title><path d="M25.427 6.573l-1.88 1.88c1.92 1.933 3.12 4.6 3.12 7.547 0 5.893-4.773 10.667-10.667 10.667s-10.667-4.773-10.667-10.667c0-5.44 4.067-9.92 9.333-10.573v2.693c-3.787 0.64-6.667 3.92-6.667 7.88 0 4.413 3.587 8 8 8s8-3.587 8-8c0-2.213-0.893-4.213-2.347-5.653l-1.88 1.88c0.96 0.973 1.56 2.307 1.56 3.773 0 2.947-2.387 5.333-5.333 5.333s-5.333-2.387-5.333-5.333c0-2.48 1.707-4.547 4-5.147v2.853c-0.8 0.467-1.333 1.307-1.333 2.293 0 1.467 1.2 2.667 2.667 2.667s2.667-1.2 2.667-2.667c0-0.987-0.533-1.84-1.333-2.293v-11.040h-1.333c-7.36 0-13.333 5.973-13.333 13.333s5.973 13.333 13.333 13.333 13.333-5.973 13.333-13.333c0-3.68-1.493-7.013-3.907-9.427z"></path></symbol><symbol id="icon-volume-up" viewBox="0 0 32 32"><title>volume-up</title><path d="M4 12v8h5.333l6.667 6.667v-21.333l-6.667 6.667h-5.333zM22 16c0-2.36-1.36-4.387-3.333-5.373v10.733c1.973-0.973 3.333-3 3.333-5.36zM18.667 4.307v2.747c3.853 1.147 6.667 4.72 6.667 8.947s-2.813 7.8-6.667 8.947v2.747c5.347-1.213 9.333-5.987 9.333-11.693s-3.987-10.48-9.333-11.693z"></path></symbol><symbol id="icon-warning_black" viewBox="0 0 32 32"><title>warning_black</title><path d="M1.333 28h29.333l-14.667-25.333-14.667 25.333zM17.333 24h-2.667v-2.667h2.667v2.667zM17.333 18.667h-2.667v-5.333h2.667v5.333z"></path></symbol></defs></svg>'
  })

  //animate
  function animate(button, content, animationIn, animationOut, hideTiming) {
    hideTiming = hideTiming || 1000;
		var elem = document.querySelector(content);
    $(button).on('click', function() {
      $(this).addClass('active');
      $(content).show();
      var animateContent = content;
      if ($(content).hasClass(animationIn)) {
        $(content).removeClass(animationIn).addClass(animationOut);

      } else {
        $(content).removeClass(animationOut).addClass(animationIn + ' animated');
      }

      elem.addEventListener('keyframeend', function(){
        alert(1);
      });
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
	  $('.' + content + ' > [data-tabnumber="' + number + '"]').show().addClass('active').css('display', 'flex').siblings().hide().removeClass('active');
	});
};

  //mobile menu
  function mobileMenu() {
    $('.menu__wrap').on('click', function() {
      if ($('.hamburger').hasClass('hamburgerActive')) {
        $('.hamburger').removeClass('hamburgerActive');
      } else {
        $('.hamburger').addClass('hamburgerActive');
      }
      if ($(window).width() < 769) {
        if ($('.hamburger').hasClass('hamburgerActive')) {
          $('body').addClass('overflow');
        } else {
          $('body').removeClass('overflow');
        }
      } else {
        $('body').removeClass('overflow');
      }
    });
  }

  //header-scroll
  $(window).scroll(function() {
    var header = $('.page-header');
    var height = header.innerHeight();
    var elem = document.querySelector('main');
    var top = $(this).scrollTop();
    if (top > 50) {
      header.addClass('page-header--fixed');
      elem.style.marginTop = height + 'px';
    } else {
      header.removeClass('page-header--fixed');
      elem.style.marginTop = '0px';
    }
  });

  //formsyler
  function selectStyle(elem) {
    $(elem).styler();
    $('.jq-selectbox__trigger-arrow').html('<svg class="icon icon-keyboard-arrow-down"><use xlink:href="#icon-keyboard-arrow-down"></use></svg>');
  }

  //product-slider
  $('.product-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    infinite: true,
    dots: true,
    prevArrow: '<div class="slick-prev"><i class="icon"><svg class="icon icon-chevron_left"><use xlink:href="#icon-chevron_left"></use></svg></i></div>',
    nextArrow: '<div class="slick-next"><i class="icon"><svg class="icon icon-chevron_right"><use xlink:href="#icon-chevron_right"></use></svg></i></div>'
  });

  //owl bug fixes
  function owlVerticalAlign(slider) {
    $(window).on('load && resize', function() {
      var height = $(slider + ' .owl-dots').innerHeight();
      var elem = document.querySelector(slider + ' .owl-nav');
      elem.style.marginTop = -height + 'px';
    });
  }

	//form inputs
	function formInput(elInput, elLabel) {
		var input = $(elInput);
		var label = $(elLabel);
		input.on('keyup', function(){
			var value = $(this).val();
			if(value == ''){
				$(this).next().show()
			}else{
				$(this).next().hide()
			}
		});
    input.on('keydown', function(){
        $(this).next().hide();
    });

		//Маска для телефона
		$(".formTel").mask("+7(999)999-99-99", {
			placeholder: "+7(___)___-__-__"
		});
	}

	tabs();
  mobileMenu();
  animate('.menu__wrap', '.nav', 'rotateIn', 'rotateOut')
  selectStyle('.selectStyle');
	formInput('.formInput', '.formLabel');  //popular-slider
  $('.popular-slider').owlCarousel({
    margin: 60,
    loop: true,
    nav: true,
    items: 1,
    dots: false,
    animateIn: 'slideInDown',
    animateOut: 'slideOutDown',
    navText: ['<svg class="icon icon-arrow-back"><use xlink:href="#icon-arrow-back"></use></svg>', '<svg class="icon icon-arrow-forward"><use xlink:href="#icon-arrow-forward"></use></svg>'],
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 2
      },
      768: {
        margin: 10
      },
      1024: {
        margin: 30,
      }
    }
  });
});





    (function($){
      // очищаем select
      $.fn.clearSelect = function() {
          return this.each(function(){
              if(this.tagName=='SELECT') {
                  this.options.length = 0;
                  $(this).attr('disabled','disabled');
              }
          });
      }
      // заполняем select
      $.fn.fillSelect = function(dataArray) {
          return this.clearSelect().each(function(){
              if(this.tagName=='SELECT') {
                  var currentSelect = this;
                  $.each(dataArray,function(index,data){
                      var option = new Option(data.text,data.value);
                      if($.support.cssFloat) {
                          currentSelect.add(option,null);
                      } else {
                          currentSelect.add(option);
                      }
                  });
              }
          });
      }
    })(jQuery);

    $(document).ready(function(){
        // seriesNotebook
            var seriesNotebook = [];
            //Audi
            seriesNotebook[1] = {
                "1":"Audi 100",
				"2":"Audi 80",
				"3":"Audi 90",
				"4":"Audi A1",
				"5":"Audi A3",
				"6":"Audi A4",
				"7":"Audi A5",
				"8":"Audi A6",
				"9":"Audi A7",
				"10":"Audi A8",
				"11":"Audi Q3",
				"12":"Audi Q5",
				"13":"Audi Q7",
				"14":"Audi R8",
				"15":"Audi RS 5",
				"16":"Audi RS 6",
				"17":"Audi RS 7",
				"18":"Audi S4",
				"19":"Audi S5",
				"20":"Audi S6",
				"21":"Audi S8",
				"22":"Audi SQ5",
				"23":"Audi TT",
            };

			//BMW
			seriesNotebook[2] = {
                "1":"BMW 1",
				"2":"BMW 2000",
				"3":"BMW 3",
				"4":"BMW 4",
				"5":"BMW 5",
				"6":"BMW 6",
				"7":"BMW 7",
				"8":"BMW I8",
				"9":"BMW M3",
				"10":"BMW M4",
				"11":"BMW M5",
				"12":"BMW X1",
				"13":"BMW X3",
				"14":"BMW X4",
				"15":"BMW X5",
				"16":"BMW X6",
				"17":"BMW Z4",
			};

			//Mercedes
            seriesNotebook[3] = {
                "1":"Mercedes-Benz 190",
				"2":"Mercedes-Benz A-klasse",
				"3":"Mercedes-Benz B-klasse",
				"4":"Mercedes-Benz CL-klasse",
				"5":"Mercedes-Benz CLA-klasse",
				"6":"Mercedes-Benz E-klasse",
				"7":"Mercedes-Benz G-klasse",
				"8":"Mercedes-Benz GLA-klasse X156",
				"9":"Mercedes-Benz GLC",
				"10":"Mercedes-Benz GLE",
				"11":"Mercedes-Benz GLK-klasse",
				"12":"Mercedes-Benz GLS-klasse",
				"13":"Mercedes-Benz Maybach S-klasse",
				"14":"Mercedes-Benz R-klasse",
				"15":"Mercedes-Benz SLK-klasse",
				"16":"Mercedes-Benz V-klasse",
				"17":"Mercedes-Benz Vaneo",
				"18":"Mercedes-Benz Vito",
				"19":"Mercedes-Benz W123",
				"20":"Mercedes-Benz W124",
			};

			//Hyundai
            seriesNotebook[4] = {
                "1":"Hyundai Accent",
				"2":"Hyundai Creta",
				"3":"Hyundai Elantra",
				"4":"Hyundai Equus",
				"5":"Hyundai Genesis",
				"6":"Hyundai Getz",
				"7":"Hyundai I20",
				"8":"Hyundai I30",
				"9":"Hyundai I40",
				"10":"Hyundai IX20",
				"11":"Hyundai IX35",
				"12":"Hyundai Matrix",
				"13":"Hyundai Santa Fe",
				"14":"Hyundai Solaris",
				"15":"Hyundai Sonata",
				"16":"Hyundai Starex",
				"17":"Hyundai Terracan",
				"18":"Hyundai Tiburon",
				"19":"Hyundai Tucson",
				"20":"Hyundai Verna",
			};

			//Kia
            seriesNotebook[5] = {
				"1":"Kia Carens",
				"2":"Kia Carnial",
				"3":"Kia Ceed GT",
				"4":"Kia Cerato",
				"5":"Kia Magentis",
				"6":"Kia Mohave",
				"7":"Kia Optima",
				"8":"Kia Picanto",
				"9":"Kia Rio",
				"10":"Kia Sorento",
				"11":"Kia Soul",
				"12":"Kia Spectra",
				"13":"Kia Sportage",
				"14":"Kia Venga",
			};

			//Honda
			seriesNotebook[6] = {
                "1":"Honda Accord",
				"2":"Honda Acty",
				"3":"Honda Airwae",
				"4":"Honda Avncier",
				"5":"Honda Capa",
				"6":"Honda City",
				"7":"Honda Civic Ferio",
				"8":"Honda CR-V",
				"9":"Honda Crosstour",
				"10":"Honda Domani",
				"11":"Honda Element",
				"12":"Honda Fit Aria",
				"13":"Honda FR-V",
				"14":"Honda Freed",
				"15":"Honda HR-V",
				"16":"Honda Insight",
				"17":"Honda Inspire",
				"18":"Honda Integra",
				"19":"Honda Jazz",
				"20":"Honda Legend",
				"21":"Honda Life",
				"22":"Honda Logo",
				"23":"Honda Odyssey",
				"24":"Honda Partner",
				"25":"Honda Passport",
				"26":"Honda Pilot",
				"27":"Honda Prelude",
				"28":"Honda Rafaga",
				"29":"Honda Ridgeline",
				"30":"Honda S-MX",
				"31":"Honda Saber",
				"32":"Honda Shuttle",
				"33":"Honda Stepwgn",
				"34":"Honda Stream",
				"35":"Honda Torneo",
			};

			//Lexus
            seriesNotebook[7] = {
				"1":"Lexus CT 200h",
				"2":"Lexus ES",
				"3":"Lexus GS",
				"4":"Lexus GX",
				"5":"Lexus IS",
				"6":"Lexus LX",
				"7":"Lexus NX",
				"8":"Lexus RX",
			};

			//Renault
            seriesNotebook[8] = {
				"1":"Renault 19",
				"2":"Renault Clio",
				"3":"Renault Duster",
				"4":"Renault Espace",
				"5":"Renault Fluence",
				"6":"Renault Kangoo",
				"7":"Renault Kaptur",
				"8":"Renault Koleos",
				"9":"Renault Laguna",
				"10":"Renault Latitude",
				"11":"Renault Logan",
				"12":"Renault Megane",
				"13":"Renault Sandero",
				"14":"Renault Scenic",
				"15":"Renault Symbol",
				"16":"Renault Twingo",
			};

			//Mitsubishi
            seriesNotebook[9] = {
				"1":"Mitsubishi ASX",
				"2":"Mitsubishi Carisma",
				"3":"Mitsubishi Chariot",
				"4":"Mitsubishi Colt",
				"5":"Mitsubishi Delica",
				"6":"Mitsubishi Diamante",
				"7":"Mitsubishi Eclipse",
				"8":"Mitsubishi EK",
				"9":"Mitsubishi Endeaor",
				"10":"Mitsubishi Galant",
				"11":"Mitsubishi Grandis",
				"12":"Mitsubishi L200",
				"13":"Mitsubishi Lancer",
				"14":"Mitsubishi Mirage",
				"15":"Mitsubishi Montero",
				"16":"Mitsubishi Outlander",
				"17":"Mitsubishi Pajero",
				"18":"Mitsubishi Sigma",
				"19":"Mitsubishi Space",
			};

			//Toyota
            seriesNotebook[10] = {
				"1":"Toyota 4Runner",
				"2":"Toyota Alphard",
				"3":"Toyota Auris",
				"4":"Toyota Avensis",
				"5":"Toyota Belta",
				"6":"Toyota Caldina",
				"7":"Toyota Camry",
				"8":"Toyota Carina",
				"9":"Toyota Celica",
				"10":"Toyota Chaser",
				"11":"Toyota Corolla ",
				"12":"Toyota Cresta",
				"13":"Toyota Crown",
				"14":"Toyota Estima",
				"15":"Toyota FJ Cruiser",
				"16":"Toyota FunCargo",
				"17":"Toyota Gaia",
				"18":"Toyota HiAce",
				"19":"Toyota Highlander",
				"20":"Toyota Hilux",
				"21":"Toyota Land Cruiser Prado",
				"22":"Toyota Land Cruiser",
				"23":"Toyota Mark",
				"24":"Toyota Passo Sette",
				"25":"Toyota Platz",
				"26":"Toyota Previa",
				"27":"Toyota Prius",
				"28":"Toyota Probox ",
				"29":"Toyota Ractis",
				"30":"Toyota RAV 4",
				"31":"Toyota Regius",
				"32":"Toyota Rush",
				"33":"Toyota Sequoia",
				"34":"Toyota Sprinter",
				"35":"Toyota TownAce",
				"36":"Toyota Tundra",
				"37":"Toyota Venza",
				"38":"Toyota Verso",
				"39":"Toyota Vista",
				"40":"Toyota Vitz",
				"41":"Toyota WiLL Cypha",
				"42":"Toyota Yaris",
			};

			//Volkswagen
            seriesNotebook[11] = {
				"1":"Volkswagen Amarok",
				"2":"Volkswagen Beetle",
				"3":"Volkswagen Bora",
				"4":"Volkswagen Caddy",
				"5":"Volkswagen Caravelle",
				"6":"Volkswagen Golf",
				"7":"Volkswagen Jetta",
				"8":"Volkswagen Multivan",
				"9":"Volkswagen Passat",
				"10":"Volkswagen Pointer",
				"11":"Volkswagen Polo",
				"12":"Volkswagen Scirocco",
				"13":"Volkswagen Tiguan",
				"14":"Volkswagen Touareg",
				"15":"Volkswagen Touran",
				"16":"Volkswagen Transporter",
				"17":"Volkswagen Vento",
			};

			//Nissan
            seriesNotebook[12] = {
				"1":"Nissan 350Z",
				"2":"Nissan AD",
				"3":"Nissan Almera",
				"4":"Nissan Bassara",
				"5":"Nissan Bluebird",
				"6":"Nissan Cefiro",
				"7":"Nissan Cube",
				"8":"Nissan Elgrand",
				"9":"Nissan Expert",
				"10":"Nissan Fuga",
				"11":"Nissan Juke",
				"12":"Nissan Maxima",
				"13":"Nissan Micra",
				"14":"Nissan Murano",
				"15":"Nissan Navara",
				"16":"Nissan Note",
				"17":"Nissan Pathfinder",
				"18":"Nissan Patrol",
				"19":"Nissan Pixo",
				"20":"Nissan Prairie",
				"21":"Nissan Primera",
				"22":"Nissan Qashqai",
				"23":"Nissan R'nessa",
				"24":"Nissan Sentra",
				"25":"Nissan Silvia",
				"26":"Nissan Skyline",
				"27":"Nissan Sunny",
				"28":"Nissan Teana",
				"29":"Nissan Terrano",
				"30":"Nissan Tiida",
				"31":"Nissan Wingroad",
				"32":"Nissan X-Trail",
			};

			//Bentley
            seriesNotebook[13] = {
				"1":"Bentley Arnage",
				"2":"Bentley Azure",
				"3":"Bentley Bentayga",
				"4":"Bentley Brooklands",
				"5":"Bentley Continental",
				"6":"Bentley Eight",
				"7":"Bentley Flying Spur",
				"8":"Bentley Mulsanne",
				"9":"Bentley R Type",
				"10":"Bentley S",
			};

			//LADA
            seriesNotebook[14] = {
				"1":"LADA (ВАЗ) 1111",
				"2":"LADA (ВАЗ) 2101",
				"3":"LADA (ВАЗ) 2104",
				"4":"LADA (ВАЗ) 2105",
				"5":"LADA (ВАЗ) 2106",
				"6":"LADA (ВАЗ) 2107",
				"7":"LADA (ВАЗ) 2108",
				"8":"LADA (ВАЗ) 2109",
				"9":"LADA (ВАЗ) 21099",
				"10":"LADA (ВАЗ) 2110",
				"11":"LADA (ВАЗ) 2111",
				"12":"LADA (ВАЗ) 2112",
				"13":"LADA (ВАЗ) 2113",
				"14":"LADA (ВАЗ) 2114",
				"15":"LADA (ВАЗ) 2115",
				"16":"LADA (ВАЗ) 2121",
				"17":"LADA (ВАЗ) Granta",
				"18":"LADA (ВАЗ) Kalina",
				"20":"LADA (ВАЗ) Largus",
				"21":"LADA (ВАЗ) Priora",
				"22":"LADA (ВАЗ) Vesta",
				"23":"LADA (ВАЗ) XRAY",
			};

			//Jaguar
            seriesNotebook[15] = {
				"1":"Jaguar E-type",
				"2":"Jaguar F-Pace",
				"3":"Jaguar F-Type",
				"4":"Jaguar Mark 2",
				"5":"Jaguar S-Type",
				"6":"Jaguar X-Type",
				"7":"Jaguar XE",
				"8":"Jaguar XF",
				"9":"Jaguar XFR",
				"10":"Jaguar XJ",
				"11":"Jaguar XJR",
				"12":"Jaguar XJS",
				"13":"Jaguar XK",
				"14":"Jaguar XKR",
			};

			 //Land Rover
            seriesNotebook[16] = {
				"1":"Land Rover Defender 110",
				"2":"Land Rover Defender 90",
				"3":"Land Rover Discovery",
				"4":"Land Rover Freelander",
			};

			//Skoda
            seriesNotebook[17] = {
				"1":"Skoda Fabia",
				"2":"Skoda Felicia",
				"3":"Skoda Octavia",
				"4":"Skoda Rapid",
				"5":"Skoda Roomster",
				"6":"Skoda Superb",
				"7":"Skoda Yeti",
			};

			//Porsche
            seriesNotebook[18] = {
				"1":"Porsche 718",
				"2":"Porsche 911",
				"3":"Porsche 924",
				"4":"Porsche 944",
				"5":"Porsche Boxster",
				"6":"Porsche Cayenne",
				"7":"Porsche Macan",
				"8":"Porsche Cayman",
				"9":"Porsche Panamera",
			};

			//рендж ровер
            seriesNotebook[19] = {
				"1":"Range Rover Evoque",
				"2":"Range Rover Velar",
			};



        // MODEL
        var modelNotebook = [];

            //Audi
            modelNotebook[1] = new Array;
           modelNotebook[1][1] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/audi/100/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/audi/100/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/audi/100/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/audi/100/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/audi/100/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/audi/100/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/audi/100/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/audi/100/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/audi/100/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/audi/100/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/audi/100/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/audi/100/":"замена стартера",
            };
modelNotebook[1][2] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/audi/80/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/audi/80/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/audi/80/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/audi/80/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/audi/80/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/audi/80/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/audi/80/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/audi/80/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/audi/80/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/audi/80/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/audi/80/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/audi/80/":"замена стартера",
            };
modelNotebook[1][3] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/audi/90/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/audi/90/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/audi/90/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/audi/90/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/audi/90/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/audi/90/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/audi/90/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/audi/90/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/audi/90/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/audi/90/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/audi/90/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/audi/90/":"замена стартера",
            };
modelNotebook[1][4] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/audi/a1/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/audi/a1/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/audi/a1/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/audi/a1/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/audi/a1/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/audi/a1/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/audi/a1/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/audi/a1/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/audi/a1/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/audi/a1/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/audi/a1/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/audi/a1/":"замена стартера",
            };
modelNotebook[1][5] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/audi/a3/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/audi/a3/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/audi/a3/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/audi/a3/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/audi/a3/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/audi/a3/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/audi/a3/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/audi/a3/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/audi/a3/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/audi/a3/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/audi/a3/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/audi/a3/":"замена стартера",
            };
modelNotebook[1][6] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/audi/a4/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/audi/a4/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/audi/a4/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/audi/a4/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/audi/a4/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/audi/a4/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/audi/a4/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/audi/a4/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/audi/a4/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/audi/a4/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/audi/a4/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/audi/a4/":"замена стартера",
            };
modelNotebook[1][7] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/audi/a5/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/audi/a5/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/audi/a5/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/audi/a5/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/audi/a5/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/audi/a5/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/audi/a5/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/audi/a5/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/audi/a5/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/audi/a5/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/audi/a5/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/audi/a5/":"замена стартера",
            };
modelNotebook[1][8] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/audi/a6/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/audi/a6/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/audi/a6/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/audi/a6/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/audi/a6/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/audi/a6/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/audi/a6/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/audi/a6/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/audi/a6/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/audi/a6/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/audi/a6/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/audi/a6/":"замена стартера",
            };
modelNotebook[1][9] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/audi/a7/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/audi/a7/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/audi/a7/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/audi/a7/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/audi/a7/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/audi/a7/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/audi/a7/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/audi/a7/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/audi/a7/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/audi/a7/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/audi/a7/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/audi/a7/":"замена стартера",
            };
modelNotebook[1][10] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/audi/a8/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/audi/a8/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/audi/a8/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/audi/a8/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/audi/a8/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/audi/a8/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/audi/a8/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/audi/a8/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/audi/a8/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/audi/a8/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/audi/a8/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/audi/a8/":"замена стартера",
            };
modelNotebook[1][11] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/audi/q3/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/audi/q3/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/audi/q3/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/audi/q3/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/audi/q3/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/audi/q3/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/audi/q3/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/audi/q3/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/audi/q3/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/audi/q3/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/audi/q3/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/audi/q3/":"замена стартера",
            };
modelNotebook[1][12] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/audi/q5/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/audi/q5/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/audi/q5/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/audi/q5/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/audi/q5/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/audi/q5/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/audi/q5/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/audi/q5/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/audi/q5/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/audi/q5/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/audi/q5/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/audi/q5/":"замена стартера",
            };
modelNotebook[1][13] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/audi/q7/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/audi/q7/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/audi/q7/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/audi/q7/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/audi/q7/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/audi/q7/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/audi/q7/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/audi/q7/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/audi/q7/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/audi/q7/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/audi/q7/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/audi/q7/":"замена стартера",
            };
modelNotebook[1][14] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/audi/r8/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/audi/r8/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/audi/r8/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/audi/r8/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/audi/r8/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/audi/r8/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/audi/r8/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/audi/r8/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/audi/r8/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/audi/r8/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/audi/r8/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/audi/r8/":"замена стартера",
            };
modelNotebook[1][15] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/audi/rs-5/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/audi/rs-5/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/audi/rs-5/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/audi/rs-5/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/audi/rs-5/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/audi/rs-5/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/audi/rs-5/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/audi/rs-5/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/audi/rs-5/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/audi/rs-5/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/audi/rs-5/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/audi/rs-5/":"замена стартера",
            };
modelNotebook[1][16] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/audi/rs-6/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/audi/rs-6/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/audi/rs-6/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/audi/rs-6/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/audi/rs-6/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/audi/rs-6/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/audi/rs-6/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/audi/rs-6/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/audi/rs-6/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/audi/rs-6/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/audi/rs-6/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/audi/rs-6/":"замена стартера",
            };
modelNotebook[1][17] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/audi/rs-7/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/audi/rs-7/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/audi/rs-7/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/audi/rs-7/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/audi/rs-7/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/audi/rs-7/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/audi/rs-7/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/audi/rs-7/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/audi/rs-7/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/audi/rs-7/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/audi/rs-7/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/audi/rs-7/":"замена стартера",
            };
modelNotebook[1][18] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/audi/s4/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/audi/s4/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/audi/s4/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/audi/s4/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/audi/s4/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/audi/s4/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/audi/s4/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/audi/s4/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/audi/s4/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/audi/s4/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/audi/s4/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/audi/s4/":"замена стартера",
            };
modelNotebook[1][19] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/audi/s5/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/audi/s5/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/audi/s5/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/audi/s5/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/audi/s5/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/audi/s5/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/audi/s5/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/audi/s5/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/audi/s5/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/audi/s5/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/audi/s5/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/audi/s5/":"замена стартера",
            };
modelNotebook[1][20] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/audi/s6/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/audi/s6/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/audi/s6/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/audi/s6/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/audi/s6/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/audi/s6/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/audi/s6/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/audi/s6/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/audi/s6/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/audi/s6/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/audi/s6/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/audi/s6/":"замена стартера",
            };
modelNotebook[1][21] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/audi/s8/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/audi/s8/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/audi/s8/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/audi/s8/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/audi/s8/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/audi/s8/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/audi/s8/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/audi/s8/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/audi/s8/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/audi/s8/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/audi/s8/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/audi/s8/":"замена стартера",
            };
modelNotebook[1][22] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/audi/sq5/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/audi/sq5/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/audi/sq5/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/audi/sq5/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/audi/sq5/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/audi/sq5/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/audi/sq5/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/audi/sq5/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/audi/sq5/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/audi/sq5/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/audi/sq5/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/audi/sq5/":"замена стартера",
            };
modelNotebook[1][23] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/audi/tt/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/audi/tt/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/audi/tt/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/audi/tt/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/audi/tt/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/audi/tt/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/audi/tt/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/audi/tt/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/audi/tt/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/audi/tt/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/audi/tt/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/audi/tt/":"замена стартера",
            };




            //BMW
            modelNotebook[2] = new Array;
modelNotebook[2][1] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/bmw/1/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/bmw/1/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/bmw/1/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/bmw/1/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/bmw/1/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/bmw/1/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/bmw/1/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/bmw/1/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/bmw/1/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/bmw/1/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/bmw/1/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/bmw/1/":"замена стартера",
            };
modelNotebook[2][2] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/bmw/2000/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/bmw/2000/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/bmw/2000/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/bmw/2000/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/bmw/2000/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/bmw/2000/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/bmw/2000/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/bmw/2000/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/bmw/2000/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/bmw/2000/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/bmw/2000/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/bmw/2000/":"замена стартера",
            };
modelNotebook[2][3] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/bmw/3/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/bmw/3/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/bmw/3/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/bmw/3/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/bmw/3/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/bmw/3/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/bmw/3/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/bmw/3/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/bmw/3/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/bmw/3/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/bmw/3/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/bmw/3/":"замена стартера",
            };
modelNotebook[2][4] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/bmw/4/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/bmw/4/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/bmw/4/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/bmw/4/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/bmw/4/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/bmw/4/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/bmw/4/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/bmw/4/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/bmw/4/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/bmw/4/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/bmw/4/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/bmw/4/":"замена стартера",
            };
modelNotebook[2][5] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/bmw/5/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/bmw/5/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/bmw/5/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/bmw/5/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/bmw/5/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/bmw/5/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/bmw/5/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/bmw/5/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/bmw/5/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/bmw/5/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/bmw/5/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/bmw/5/":"замена стартера",
            };
modelNotebook[2][6] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/bmw/6/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/bmw/6/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/bmw/6/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/bmw/6/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/bmw/6/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/bmw/6/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/bmw/6/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/bmw/6/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/bmw/6/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/bmw/6/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/bmw/6/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/bmw/6/":"замена стартера",
            };
modelNotebook[2][7] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/bmw/7/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/bmw/7/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/bmw/7/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/bmw/7/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/bmw/7/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/bmw/7/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/bmw/7/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/bmw/7/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/bmw/7/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/bmw/7/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/bmw/7/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/bmw/7/":"замена стартера",
            };
modelNotebook[2][8] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/bmw/i8/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/bmw/i8/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/bmw/i8/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/bmw/i8/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/bmw/i8/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/bmw/i8/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/bmw/i8/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/bmw/i8/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/bmw/i8/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/bmw/i8/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/bmw/i8/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/bmw/i8/":"замена стартера",
            };
modelNotebook[2][9] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/bmw/m3/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/bmw/m3/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/bmw/m3/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/bmw/m3/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/bmw/m3/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/bmw/m3/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/bmw/m3/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/bmw/m3/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/bmw/m3/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/bmw/m3/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/bmw/m3/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/bmw/m3/":"замена стартера",
            };
modelNotebook[2][10] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/bmw/m4/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/bmw/m4/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/bmw/m4/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/bmw/m4/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/bmw/m4/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/bmw/m4/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/bmw/m4/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/bmw/m4/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/bmw/m4/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/bmw/m4/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/bmw/m4/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/bmw/m4/":"замена стартера",
            };
modelNotebook[2][11] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/bmw/m5/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/bmw/m5/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/bmw/m5/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/bmw/m5/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/bmw/m5/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/bmw/m5/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/bmw/m5/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/bmw/m5/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/bmw/m5/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/bmw/m5/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/bmw/m5/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/bmw/m5/":"замена стартера",
            };
modelNotebook[2][12] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/bmw/x1/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/bmw/x1/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/bmw/x1/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/bmw/x1/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/bmw/x1/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/bmw/x1/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/bmw/x1/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/bmw/x1/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/bmw/x1/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/bmw/x1/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/bmw/x1/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/bmw/x1/":"замена стартера",
            };
modelNotebook[2][13] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/bmw/x3/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/bmw/x3/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/bmw/x3/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/bmw/x3/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/bmw/x3/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/bmw/x3/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/bmw/x3/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/bmw/x3/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/bmw/x3/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/bmw/x3/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/bmw/x3/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/bmw/x3/":"замена стартера",
            };
modelNotebook[2][14] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/bmw/x4/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/bmw/x4/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/bmw/x4/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/bmw/x4/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/bmw/x4/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/bmw/x4/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/bmw/x4/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/bmw/x4/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/bmw/x4/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/bmw/x4/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/bmw/x4/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/bmw/x4/":"замена стартера",
            };
modelNotebook[2][15] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/bmw/x5/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/bmw/x5/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/bmw/x5/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/bmw/x5/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/bmw/x5/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/bmw/x5/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/bmw/x5/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/bmw/x5/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/bmw/x5/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/bmw/x5/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/bmw/x5/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/bmw/x5/":"замена стартера",
            };
modelNotebook[2][16] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/bmw/x6/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/bmw/x6/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/bmw/x6/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/bmw/x6/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/bmw/x6/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/bmw/x6/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/bmw/x6/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/bmw/x6/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/bmw/x6/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/bmw/x6/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/bmw/x6/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/bmw/x6/":"замена стартера",
            };
modelNotebook[2][17] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/bmw/z4/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/bmw/z4/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/bmw/z4/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/bmw/z4/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/bmw/z4/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/bmw/z4/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/bmw/z4/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/bmw/z4/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/bmw/z4/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/bmw/z4/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/bmw/z4/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/bmw/z4/":"замена стартера",
            };




            //Mercedes
            modelNotebook[3] = new Array;
			modelNotebook[3][1] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/mercedes/190/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/mercedes/190/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/mercedes/190/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/mercedes/190/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/mercedes/190/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/mercedes/190/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/mercedes/190/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/mercedes/190/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/mercedes/190/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/mercedes/190/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/mercedes/190/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/mercedes/190/":"замена стартера",
            };
modelNotebook[3][2] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/mercedes/a-klasse/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/mercedes/a-klasse/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/mercedes/a-klasse/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/mercedes/a-klasse/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/mercedes/a-klasse/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/mercedes/a-klasse/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/mercedes/a-klasse/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/mercedes/a-klasse/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/mercedes/a-klasse/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/mercedes/a-klasse/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/mercedes/a-klasse/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/mercedes/a-klasse/":"замена стартера",
            };
modelNotebook[3][3] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/mercedes/b-klasse/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/mercedes/b-klasse/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/mercedes/b-klasse/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/mercedes/b-klasse/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/mercedes/b-klasse/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/mercedes/b-klasse/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/mercedes/b-klasse/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/mercedes/b-klasse/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/mercedes/b-klasse/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/mercedes/b-klasse/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/mercedes/b-klasse/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/mercedes/b-klasse/":"замена стартера",
            };
modelNotebook[3][4] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/mercedes/cla-klasse/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/mercedes/cla-klasse/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/mercedes/cla-klasse/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/mercedes/cla-klasse/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/mercedes/cla-klasse/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/mercedes/cla-klasse/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/mercedes/cla-klasse/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/mercedes/cla-klasse/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/mercedes/cla-klasse/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/mercedes/cla-klasse/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/mercedes/cla-klasse/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/mercedes/cla-klasse/":"замена стартера",
            };
modelNotebook[3][5] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/mercedes/cl-klasse/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/mercedes/cl-klasse/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/mercedes/cl-klasse/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/mercedes/cl-klasse/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/mercedes/cl-klasse/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/mercedes/cl-klasse/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/mercedes/cl-klasse/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/mercedes/cl-klasse/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/mercedes/cl-klasse/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/mercedes/cl-klasse/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/mercedes/cl-klasse/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/mercedes/cl-klasse/":"замена стартера",
            };
modelNotebook[3][6] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/mercedes/e-klasse/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/mercedes/e-klasse/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/mercedes/e-klasse/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/mercedes/e-klasse/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/mercedes/e-klasse/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/mercedes/e-klasse/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/mercedes/e-klasse/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/mercedes/e-klasse/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/mercedes/e-klasse/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/mercedes/e-klasse/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/mercedes/e-klasse/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/mercedes/e-klasse/":"замена стартера",
            };
modelNotebook[3][7] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/mercedes/g-klasse/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/mercedes/g-klasse/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/mercedes/g-klasse/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/mercedes/g-klasse/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/mercedes/g-klasse/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/mercedes/g-klasse/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/mercedes/g-klasse/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/mercedes/g-klasse/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/mercedes/g-klasse/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/mercedes/g-klasse/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/mercedes/g-klasse/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/mercedes/g-klasse/":"замена стартера",
            };
modelNotebook[3][8] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/mercedes/gla-klasse-x156/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/mercedes/gla-klasse-x156/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/mercedes/gla-klasse-x156/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/mercedes/gla-klasse-x156/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/mercedes/gla-klasse-x156/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/mercedes/gla-klasse-x156/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/mercedes/gla-klasse-x156/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/mercedes/gla-klasse-x156/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/mercedes/gla-klasse-x156/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/mercedes/gla-klasse-x156/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/mercedes/gla-klasse-x156/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/mercedes/gla-klasse-x156/":"замена стартера",
            };
modelNotebook[3][9] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/mercedes/glc/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/mercedes/glc/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/mercedes/glc/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/mercedes/glc/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/mercedes/glc/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/mercedes/glc/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/mercedes/glc/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/mercedes/glc/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/mercedes/glc/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/mercedes/glc/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/mercedes/glc/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/mercedes/glc/":"замена стартера",
            };
modelNotebook[3][10] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/mercedes/gle/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/mercedes/gle/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/mercedes/gle/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/mercedes/gle/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/mercedes/gle/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/mercedes/gle/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/mercedes/gle/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/mercedes/gle/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/mercedes/gle/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/mercedes/gle/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/mercedes/gle/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/mercedes/gle/":"замена стартера",
            };
modelNotebook[3][11] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/mercedes/glk-klasse/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/mercedes/glk-klasse/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/mercedes/glk-klasse/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/mercedes/glk-klasse/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/mercedes/glk-klasse/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/mercedes/glk-klasse/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/mercedes/glk-klasse/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/mercedes/glk-klasse/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/mercedes/glk-klasse/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/mercedes/glk-klasse/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/mercedes/glk-klasse/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/mercedes/glk-klasse/":"замена стартера",
            };
modelNotebook[3][12] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/mercedes/gls-klasse/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/mercedes/gls-klasse/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/mercedes/gls-klasse/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/mercedes/gls-klasse/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/mercedes/gls-klasse/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/mercedes/gls-klasse/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/mercedes/gls-klasse/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/mercedes/gls-klasse/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/mercedes/gls-klasse/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/mercedes/gls-klasse/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/mercedes/gls-klasse/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/mercedes/gls-klasse/":"замена стартера",
            };
modelNotebook[3][13] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/mercedes/maybach-s-klasse/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/mercedes/maybach-s-klasse/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/mercedes/maybach-s-klasse/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/mercedes/maybach-s-klasse/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/mercedes/maybach-s-klasse/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/mercedes/maybach-s-klasse/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/mercedes/maybach-s-klasse/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/mercedes/maybach-s-klasse/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/mercedes/maybach-s-klasse/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/mercedes/maybach-s-klasse/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/mercedes/maybach-s-klasse/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/mercedes/maybach-s-klasse/":"замена стартера",
            };
modelNotebook[3][14] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/mercedes/r-klasse/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/mercedes/r-klasse/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/mercedes/r-klasse/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/mercedes/r-klasse/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/mercedes/r-klasse/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/mercedes/r-klasse/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/mercedes/r-klasse/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/mercedes/r-klasse/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/mercedes/r-klasse/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/mercedes/r-klasse/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/mercedes/r-klasse/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/mercedes/r-klasse/":"замена стартера",
            };
modelNotebook[3][15] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/mercedes/slk-klasse/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/mercedes/slk-klasse/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/mercedes/slk-klasse/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/mercedes/slk-klasse/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/mercedes/slk-klasse/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/mercedes/slk-klasse/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/mercedes/slk-klasse/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/mercedes/slk-klasse/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/mercedes/slk-klasse/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/mercedes/slk-klasse/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/mercedes/slk-klasse/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/mercedes/slk-klasse/":"замена стартера",
            };
modelNotebook[3][16] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/mercedes/vaneo/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/mercedes/vaneo/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/mercedes/vaneo/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/mercedes/vaneo/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/mercedes/vaneo/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/mercedes/vaneo/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/mercedes/vaneo/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/mercedes/vaneo/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/mercedes/vaneo/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/mercedes/vaneo/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/mercedes/vaneo/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/mercedes/vaneo/":"замена стартера",
            };
modelNotebook[3][17] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/mercedes/vito/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/mercedes/vito/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/mercedes/vito/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/mercedes/vito/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/mercedes/vito/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/mercedes/vito/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/mercedes/vito/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/mercedes/vito/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/mercedes/vito/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/mercedes/vito/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/mercedes/vito/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/mercedes/vito/":"замена стартера",
            };
modelNotebook[3][18] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/mercedes/v-klasse/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/mercedes/v-klasse/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/mercedes/v-klasse/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/mercedes/v-klasse/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/mercedes/v-klasse/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/mercedes/v-klasse/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/mercedes/v-klasse/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/mercedes/v-klasse/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/mercedes/v-klasse/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/mercedes/v-klasse/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/mercedes/v-klasse/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/mercedes/v-klasse/":"замена стартера",
            };
modelNotebook[3][19] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/mercedes/w123/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/mercedes/w123/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/mercedes/w123/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/mercedes/w123/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/mercedes/w123/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/mercedes/w123/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/mercedes/w123/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/mercedes/w123/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/mercedes/w123/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/mercedes/w123/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/mercedes/w123/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/mercedes/w123/":"замена стартера",
            };
modelNotebook[3][20] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/mercedes/w124/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/mercedes/w124/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/mercedes/w124/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/mercedes/w124/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/mercedes/w124/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/mercedes/w124/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/mercedes/w124/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/mercedes/w124/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/mercedes/w124/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/mercedes/w124/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/mercedes/w124/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/mercedes/w124/":"замена стартера",
            };




            //Hyundai
            modelNotebook[4] = new Array;
			modelNotebook[4][1] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/hyundai/accent/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/hyundai/accent/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/hyundai/accent/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/hyundai/accent/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/hyundai/accent/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/hyundai/accent/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/hyundai/accent/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/hyundai/accent/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/hyundai/accent/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/hyundai/accent/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/hyundai/accent/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/hyundai/accent/":"замена стартера",
            };
modelNotebook[4][2] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/hyundai/creta/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/hyundai/creta/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/hyundai/creta/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/hyundai/creta/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/hyundai/creta/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/hyundai/creta/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/hyundai/creta/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/hyundai/creta/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/hyundai/creta/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/hyundai/creta/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/hyundai/creta/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/hyundai/creta/":"замена стартера",
            };
modelNotebook[4][3] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/hyundai/elantra/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/hyundai/elantra/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/hyundai/elantra/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/hyundai/elantra/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/hyundai/elantra/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/hyundai/elantra/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/hyundai/elantra/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/hyundai/elantra/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/hyundai/elantra/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/hyundai/elantra/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/hyundai/elantra/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/hyundai/elantra/":"замена стартера",
            };
modelNotebook[4][4] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/hyundai/equus/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/hyundai/equus/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/hyundai/equus/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/hyundai/equus/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/hyundai/equus/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/hyundai/equus/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/hyundai/equus/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/hyundai/equus/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/hyundai/equus/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/hyundai/equus/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/hyundai/equus/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/hyundai/equus/":"замена стартера",
            };
modelNotebook[4][5] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/hyundai/genesis/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/hyundai/genesis/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/hyundai/genesis/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/hyundai/genesis/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/hyundai/genesis/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/hyundai/genesis/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/hyundai/genesis/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/hyundai/genesis/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/hyundai/genesis/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/hyundai/genesis/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/hyundai/genesis/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/hyundai/genesis/":"замена стартера",
            };
modelNotebook[4][6] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/hyundai/getz/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/hyundai/getz/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/hyundai/getz/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/hyundai/getz/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/hyundai/getz/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/hyundai/getz/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/hyundai/getz/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/hyundai/getz/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/hyundai/getz/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/hyundai/getz/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/hyundai/getz/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/hyundai/getz/":"замена стартера",
            };
modelNotebook[4][7] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/hyundai/i20/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/hyundai/i20/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/hyundai/i20/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/hyundai/i20/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/hyundai/i20/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/hyundai/i20/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/hyundai/i20/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/hyundai/i20/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/hyundai/i20/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/hyundai/i20/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/hyundai/i20/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/hyundai/i20/":"замена стартера",
            };
modelNotebook[4][8] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/hyundai/i30/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/hyundai/i30/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/hyundai/i30/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/hyundai/i30/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/hyundai/i30/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/hyundai/i30/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/hyundai/i30/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/hyundai/i30/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/hyundai/i30/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/hyundai/i30/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/hyundai/i30/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/hyundai/i30/":"замена стартера",
            };
modelNotebook[4][9] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/hyundai/i40/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/hyundai/i40/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/hyundai/i40/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/hyundai/i40/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/hyundai/i40/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/hyundai/i40/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/hyundai/i40/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/hyundai/i40/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/hyundai/i40/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/hyundai/i40/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/hyundai/i40/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/hyundai/i40/":"замена стартера",
            };
modelNotebook[4][10] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/hyundai/ix20/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/hyundai/ix20/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/hyundai/ix20/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/hyundai/ix20/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/hyundai/ix20/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/hyundai/ix20/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/hyundai/ix20/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/hyundai/ix20/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/hyundai/ix20/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/hyundai/ix20/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/hyundai/ix20/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/hyundai/ix20/":"замена стартера",
            };
modelNotebook[4][11] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/hyundai/ix35/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/hyundai/ix35/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/hyundai/ix35/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/hyundai/ix35/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/hyundai/ix35/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/hyundai/ix35/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/hyundai/ix35/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/hyundai/ix35/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/hyundai/ix35/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/hyundai/ix35/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/hyundai/ix35/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/hyundai/ix35/":"замена стартера",
            };
modelNotebook[4][12] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/hyundai/matrix/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/hyundai/matrix/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/hyundai/matrix/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/hyundai/matrix/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/hyundai/matrix/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/hyundai/matrix/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/hyundai/matrix/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/hyundai/matrix/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/hyundai/matrix/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/hyundai/matrix/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/hyundai/matrix/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/hyundai/matrix/":"замена стартера",
            };
modelNotebook[4][13] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/hyundai/santa-fe/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/hyundai/santa-fe/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/hyundai/santa-fe/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/hyundai/santa-fe/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/hyundai/santa-fe/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/hyundai/santa-fe/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/hyundai/santa-fe/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/hyundai/santa-fe/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/hyundai/santa-fe/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/hyundai/santa-fe/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/hyundai/santa-fe/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/hyundai/santa-fe/":"замена стартера",
            };
modelNotebook[4][14] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/hyundai/solaris/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/hyundai/solaris/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/hyundai/solaris/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/hyundai/solaris/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/hyundai/solaris/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/hyundai/solaris/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/hyundai/solaris/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/hyundai/solaris/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/hyundai/solaris/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/hyundai/solaris/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/hyundai/solaris/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/hyundai/solaris/":"замена стартера",
            };
modelNotebook[4][15] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/hyundai/sonata/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/hyundai/sonata/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/hyundai/sonata/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/hyundai/sonata/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/hyundai/sonata/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/hyundai/sonata/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/hyundai/sonata/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/hyundai/sonata/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/hyundai/sonata/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/hyundai/sonata/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/hyundai/sonata/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/hyundai/sonata/":"замена стартера",
            };
modelNotebook[4][16] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/hyundai/starex/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/hyundai/starex/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/hyundai/starex/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/hyundai/starex/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/hyundai/starex/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/hyundai/starex/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/hyundai/starex/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/hyundai/starex/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/hyundai/starex/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/hyundai/starex/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/hyundai/starex/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/hyundai/starex/":"замена стартера",
            };
modelNotebook[4][17] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/hyundai/terracan/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/hyundai/terracan/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/hyundai/terracan/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/hyundai/terracan/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/hyundai/terracan/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/hyundai/terracan/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/hyundai/terracan/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/hyundai/terracan/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/hyundai/terracan/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/hyundai/terracan/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/hyundai/terracan/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/hyundai/terracan/":"замена стартера",
            };
modelNotebook[4][18] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/hyundai/tiburon/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/hyundai/tiburon/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/hyundai/tiburon/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/hyundai/tiburon/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/hyundai/tiburon/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/hyundai/tiburon/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/hyundai/tiburon/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/hyundai/tiburon/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/hyundai/tiburon/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/hyundai/tiburon/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/hyundai/tiburon/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/hyundai/tiburon/":"замена стартера",
            };
modelNotebook[4][19] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/hyundai/tucson/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/hyundai/tucson/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/hyundai/tucson/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/hyundai/tucson/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/hyundai/tucson/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/hyundai/tucson/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/hyundai/tucson/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/hyundai/tucson/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/hyundai/tucson/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/hyundai/tucson/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/hyundai/tucson/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/hyundai/tucson/":"замена стартера",
            };
modelNotebook[4][20] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/hyundai/verna/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/hyundai/verna/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/hyundai/verna/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/hyundai/verna/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/hyundai/verna/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/hyundai/verna/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/hyundai/verna/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/hyundai/verna/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/hyundai/verna/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/hyundai/verna/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/hyundai/verna/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/hyundai/verna/":"замена стартера",
            };




			//Kia
            modelNotebook[5] = new Array;
			modelNotebook[5][1] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/kia/carens/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/kia/carens/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/kia/carens/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/kia/carens/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/kia/carens/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/kia/carens/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/kia/carens/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/kia/carens/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/kia/carens/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/kia/carens/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/kia/carens/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/kia/carens/":"замена стартера",
            };
modelNotebook[5][2] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/kia/carnial/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/kia/carnial/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/kia/carnial/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/kia/carnial/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/kia/carnial/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/kia/carnial/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/kia/carnial/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/kia/carnial/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/kia/carnial/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/kia/carnial/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/kia/carnial/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/kia/carnial/":"замена стартера",
            };
modelNotebook[5][3] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/kia/ceed-gt/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/kia/ceed-gt/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/kia/ceed-gt/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/kia/ceed-gt/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/kia/ceed-gt/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/kia/ceed-gt/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/kia/ceed-gt/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/kia/ceed-gt/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/kia/ceed-gt/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/kia/ceed-gt/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/kia/ceed-gt/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/kia/ceed-gt/":"замена стартера",
            };
modelNotebook[5][4] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/kia/cerato/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/kia/cerato/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/kia/cerato/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/kia/cerato/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/kia/cerato/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/kia/cerato/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/kia/cerato/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/kia/cerato/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/kia/cerato/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/kia/cerato/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/kia/cerato/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/kia/cerato/":"замена стартера",
            };
modelNotebook[5][5] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/kia/magentis/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/kia/magentis/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/kia/magentis/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/kia/magentis/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/kia/magentis/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/kia/magentis/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/kia/magentis/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/kia/magentis/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/kia/magentis/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/kia/magentis/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/kia/magentis/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/kia/magentis/":"замена стартера",
            };
modelNotebook[5][6] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/kia/mohave/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/kia/mohave/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/kia/mohave/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/kia/mohave/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/kia/mohave/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/kia/mohave/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/kia/mohave/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/kia/mohave/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/kia/mohave/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/kia/mohave/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/kia/mohave/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/kia/mohave/":"замена стартера",
            };
modelNotebook[5][7] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/kia/optima/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/kia/optima/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/kia/optima/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/kia/optima/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/kia/optima/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/kia/optima/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/kia/optima/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/kia/optima/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/kia/optima/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/kia/optima/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/kia/optima/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/kia/optima/":"замена стартера",
            };
modelNotebook[5][8] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/kia/picanto/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/kia/picanto/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/kia/picanto/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/kia/picanto/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/kia/picanto/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/kia/picanto/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/kia/picanto/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/kia/picanto/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/kia/picanto/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/kia/picanto/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/kia/picanto/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/kia/picanto/":"замена стартера",
            };
modelNotebook[5][9] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/kia/rio/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/kia/rio/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/kia/rio/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/kia/rio/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/kia/rio/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/kia/rio/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/kia/rio/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/kia/rio/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/kia/rio/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/kia/rio/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/kia/rio/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/kia/rio/":"замена стартера",
            };
modelNotebook[5][10] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/kia/sorento/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/kia/sorento/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/kia/sorento/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/kia/sorento/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/kia/sorento/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/kia/sorento/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/kia/sorento/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/kia/sorento/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/kia/sorento/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/kia/sorento/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/kia/sorento/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/kia/sorento/":"замена стартера",
            };
modelNotebook[5][11] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/kia/soul/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/kia/soul/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/kia/soul/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/kia/soul/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/kia/soul/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/kia/soul/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/kia/soul/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/kia/soul/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/kia/soul/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/kia/soul/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/kia/soul/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/kia/soul/":"замена стартера",
            };
modelNotebook[5][12] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/kia/spectra/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/kia/spectra/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/kia/spectra/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/kia/spectra/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/kia/spectra/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/kia/spectra/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/kia/spectra/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/kia/spectra/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/kia/spectra/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/kia/spectra/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/kia/spectra/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/kia/spectra/":"замена стартера",
            };
modelNotebook[5][13] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/kia/sportage/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/kia/sportage/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/kia/sportage/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/kia/sportage/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/kia/sportage/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/kia/sportage/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/kia/sportage/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/kia/sportage/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/kia/sportage/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/kia/sportage/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/kia/sportage/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/kia/sportage/":"замена стартера",
            };
modelNotebook[5][14] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/kia/venga/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/kia/venga/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/kia/venga/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/kia/venga/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/kia/venga/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/kia/venga/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/kia/venga/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/kia/venga/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/kia/venga/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/kia/venga/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/kia/venga/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/kia/venga/":"замена стартера",
            };




            //Honda
            modelNotebook[6] = new Array;
			modelNotebook[6][1] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/honda/accord/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/honda/accord/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/honda/accord/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/honda/accord/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/honda/accord/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/honda/accord/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/honda/accord/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/honda/accord/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/honda/accord/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/honda/accord/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/honda/accord/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/honda/accord/":"замена стартера",
            };
modelNotebook[6][2] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/honda/acty/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/honda/acty/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/honda/acty/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/honda/acty/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/honda/acty/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/honda/acty/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/honda/acty/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/honda/acty/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/honda/acty/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/honda/acty/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/honda/acty/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/honda/acty/":"замена стартера",
            };
modelNotebook[6][3] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/honda/airwae/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/honda/airwae/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/honda/airwae/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/honda/airwae/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/honda/airwae/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/honda/airwae/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/honda/airwae/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/honda/airwae/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/honda/airwae/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/honda/airwae/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/honda/airwae/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/honda/airwae/":"замена стартера",
            };
modelNotebook[6][4] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/honda/avncier/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/honda/avncier/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/honda/avncier/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/honda/avncier/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/honda/avncier/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/honda/avncier/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/honda/avncier/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/honda/avncier/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/honda/avncier/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/honda/avncier/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/honda/avncier/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/honda/avncier/":"замена стартера",
            };
modelNotebook[6][5] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/honda/capa/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/honda/capa/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/honda/capa/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/honda/capa/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/honda/capa/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/honda/capa/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/honda/capa/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/honda/capa/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/honda/capa/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/honda/capa/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/honda/capa/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/honda/capa/":"замена стартера",
            };
modelNotebook[6][6] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/honda/city/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/honda/city/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/honda/city/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/honda/city/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/honda/city/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/honda/city/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/honda/city/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/honda/city/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/honda/city/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/honda/city/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/honda/city/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/honda/city/":"замена стартера",
            };
modelNotebook[6][7] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/honda/civic-ferio/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/honda/civic-ferio/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/honda/civic-ferio/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/honda/civic-ferio/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/honda/civic-ferio/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/honda/civic-ferio/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/honda/civic-ferio/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/honda/civic-ferio/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/honda/civic-ferio/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/honda/civic-ferio/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/honda/civic-ferio/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/honda/civic-ferio/":"замена стартера",
            };
modelNotebook[6][8] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/honda/crosstour/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/honda/crosstour/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/honda/crosstour/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/honda/crosstour/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/honda/crosstour/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/honda/crosstour/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/honda/crosstour/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/honda/crosstour/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/honda/crosstour/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/honda/crosstour/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/honda/crosstour/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/honda/crosstour/":"замена стартера",
            };
modelNotebook[6][9] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/honda/cr-v/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/honda/cr-v/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/honda/cr-v/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/honda/cr-v/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/honda/cr-v/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/honda/cr-v/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/honda/cr-v/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/honda/cr-v/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/honda/cr-v/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/honda/cr-v/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/honda/cr-v/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/honda/cr-v/":"замена стартера",
            };
modelNotebook[6][10] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/honda/domani/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/honda/domani/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/honda/domani/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/honda/domani/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/honda/domani/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/honda/domani/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/honda/domani/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/honda/domani/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/honda/domani/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/honda/domani/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/honda/domani/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/honda/domani/":"замена стартера",
            };
modelNotebook[6][11] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/honda/element/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/honda/element/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/honda/element/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/honda/element/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/honda/element/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/honda/element/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/honda/element/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/honda/element/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/honda/element/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/honda/element/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/honda/element/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/honda/element/":"замена стартера",
            };
modelNotebook[6][12] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/honda/fit-aria/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/honda/fit-aria/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/honda/fit-aria/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/honda/fit-aria/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/honda/fit-aria/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/honda/fit-aria/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/honda/fit-aria/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/honda/fit-aria/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/honda/fit-aria/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/honda/fit-aria/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/honda/fit-aria/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/honda/fit-aria/":"замена стартера",
            };
modelNotebook[6][13] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/honda/freed/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/honda/freed/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/honda/freed/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/honda/freed/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/honda/freed/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/honda/freed/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/honda/freed/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/honda/freed/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/honda/freed/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/honda/freed/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/honda/freed/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/honda/freed/":"замена стартера",
            };
modelNotebook[6][14] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/honda/fr-v/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/honda/fr-v/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/honda/fr-v/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/honda/fr-v/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/honda/fr-v/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/honda/fr-v/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/honda/fr-v/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/honda/fr-v/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/honda/fr-v/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/honda/fr-v/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/honda/fr-v/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/honda/fr-v/":"замена стартера",
            };
modelNotebook[6][15] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/honda/hr-v/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/honda/hr-v/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/honda/hr-v/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/honda/hr-v/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/honda/hr-v/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/honda/hr-v/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/honda/hr-v/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/honda/hr-v/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/honda/hr-v/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/honda/hr-v/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/honda/hr-v/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/honda/hr-v/":"замена стартера",
            };
modelNotebook[6][16] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/honda/insight/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/honda/insight/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/honda/insight/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/honda/insight/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/honda/insight/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/honda/insight/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/honda/insight/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/honda/insight/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/honda/insight/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/honda/insight/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/honda/insight/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/honda/insight/":"замена стартера",
            };
modelNotebook[6][17] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/honda/inspire/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/honda/inspire/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/honda/inspire/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/honda/inspire/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/honda/inspire/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/honda/inspire/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/honda/inspire/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/honda/inspire/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/honda/inspire/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/honda/inspire/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/honda/inspire/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/honda/inspire/":"замена стартера",
            };
modelNotebook[6][18] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/honda/integra/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/honda/integra/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/honda/integra/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/honda/integra/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/honda/integra/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/honda/integra/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/honda/integra/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/honda/integra/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/honda/integra/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/honda/integra/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/honda/integra/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/honda/integra/":"замена стартера",
            };
modelNotebook[6][19] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/honda/jazz/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/honda/jazz/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/honda/jazz/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/honda/jazz/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/honda/jazz/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/honda/jazz/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/honda/jazz/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/honda/jazz/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/honda/jazz/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/honda/jazz/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/honda/jazz/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/honda/jazz/":"замена стартера",
            };
modelNotebook[6][20] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/honda/legend/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/honda/legend/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/honda/legend/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/honda/legend/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/honda/legend/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/honda/legend/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/honda/legend/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/honda/legend/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/honda/legend/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/honda/legend/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/honda/legend/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/honda/legend/":"замена стартера",
            };
modelNotebook[6][21] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/honda/life/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/honda/life/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/honda/life/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/honda/life/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/honda/life/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/honda/life/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/honda/life/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/honda/life/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/honda/life/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/honda/life/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/honda/life/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/honda/life/":"замена стартера",
            };
modelNotebook[6][22] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/honda/logo/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/honda/logo/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/honda/logo/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/honda/logo/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/honda/logo/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/honda/logo/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/honda/logo/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/honda/logo/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/honda/logo/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/honda/logo/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/honda/logo/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/honda/logo/":"замена стартера",
            };
modelNotebook[6][23] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/honda/odyssey/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/honda/odyssey/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/honda/odyssey/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/honda/odyssey/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/honda/odyssey/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/honda/odyssey/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/honda/odyssey/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/honda/odyssey/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/honda/odyssey/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/honda/odyssey/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/honda/odyssey/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/honda/odyssey/":"замена стартера",
            };
modelNotebook[6][24] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/honda/partner/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/honda/partner/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/honda/partner/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/honda/partner/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/honda/partner/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/honda/partner/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/honda/partner/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/honda/partner/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/honda/partner/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/honda/partner/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/honda/partner/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/honda/partner/":"замена стартера",
            };
modelNotebook[6][25] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/honda/passport/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/honda/passport/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/honda/passport/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/honda/passport/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/honda/passport/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/honda/passport/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/honda/passport/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/honda/passport/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/honda/passport/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/honda/passport/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/honda/passport/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/honda/passport/":"замена стартера",
            };
modelNotebook[6][26] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/honda/pilot/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/honda/pilot/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/honda/pilot/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/honda/pilot/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/honda/pilot/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/honda/pilot/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/honda/pilot/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/honda/pilot/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/honda/pilot/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/honda/pilot/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/honda/pilot/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/honda/pilot/":"замена стартера",
            };
modelNotebook[6][27] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/honda/prelude/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/honda/prelude/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/honda/prelude/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/honda/prelude/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/honda/prelude/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/honda/prelude/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/honda/prelude/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/honda/prelude/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/honda/prelude/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/honda/prelude/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/honda/prelude/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/honda/prelude/":"замена стартера",
            };
modelNotebook[6][28] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/honda/rafaga/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/honda/rafaga/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/honda/rafaga/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/honda/rafaga/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/honda/rafaga/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/honda/rafaga/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/honda/rafaga/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/honda/rafaga/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/honda/rafaga/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/honda/rafaga/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/honda/rafaga/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/honda/rafaga/":"замена стартера",
            };
modelNotebook[6][29] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/honda/ridgeline/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/honda/ridgeline/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/honda/ridgeline/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/honda/ridgeline/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/honda/ridgeline/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/honda/ridgeline/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/honda/ridgeline/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/honda/ridgeline/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/honda/ridgeline/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/honda/ridgeline/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/honda/ridgeline/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/honda/ridgeline/":"замена стартера",
            };
modelNotebook[6][30] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/honda/saber/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/honda/saber/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/honda/saber/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/honda/saber/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/honda/saber/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/honda/saber/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/honda/saber/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/honda/saber/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/honda/saber/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/honda/saber/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/honda/saber/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/honda/saber/":"замена стартера",
            };
modelNotebook[6][31] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/honda/shuttle/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/honda/shuttle/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/honda/shuttle/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/honda/shuttle/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/honda/shuttle/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/honda/shuttle/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/honda/shuttle/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/honda/shuttle/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/honda/shuttle/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/honda/shuttle/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/honda/shuttle/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/honda/shuttle/":"замена стартера",
            };
modelNotebook[6][32] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/honda/s-mx/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/honda/s-mx/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/honda/s-mx/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/honda/s-mx/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/honda/s-mx/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/honda/s-mx/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/honda/s-mx/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/honda/s-mx/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/honda/s-mx/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/honda/s-mx/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/honda/s-mx/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/honda/s-mx/":"замена стартера",
            };
modelNotebook[6][33] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/honda/stepwgn/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/honda/stepwgn/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/honda/stepwgn/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/honda/stepwgn/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/honda/stepwgn/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/honda/stepwgn/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/honda/stepwgn/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/honda/stepwgn/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/honda/stepwgn/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/honda/stepwgn/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/honda/stepwgn/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/honda/stepwgn/":"замена стартера",
            };
modelNotebook[6][34] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/honda/stream/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/honda/stream/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/honda/stream/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/honda/stream/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/honda/stream/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/honda/stream/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/honda/stream/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/honda/stream/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/honda/stream/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/honda/stream/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/honda/stream/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/honda/stream/":"замена стартера",
            };
modelNotebook[6][35] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/honda/torneo/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/honda/torneo/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/honda/torneo/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/honda/torneo/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/honda/torneo/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/honda/torneo/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/honda/torneo/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/honda/torneo/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/honda/torneo/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/honda/torneo/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/honda/torneo/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/honda/torneo/":"замена стартера",
            };




			//Lexus
			modelNotebook[7] = new Array;
modelNotebook[7][1] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/lexus/ct-200h/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/lexus/ct-200h/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/lexus/ct-200h/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/lexus/ct-200h/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/lexus/ct-200h/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/lexus/ct-200h/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/lexus/ct-200h/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/lexus/ct-200h/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/lexus/ct-200h/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/lexus/ct-200h/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/lexus/ct-200h/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/lexus/ct-200h/":"замена стартера",
            };
modelNotebook[7][2] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/lexus/es/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/lexus/es/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/lexus/es/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/lexus/es/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/lexus/es/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/lexus/es/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/lexus/es/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/lexus/es/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/lexus/es/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/lexus/es/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/lexus/es/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/lexus/es/":"замена стартера",
            };
modelNotebook[7][3] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/lexus/gs/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/lexus/gs/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/lexus/gs/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/lexus/gs/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/lexus/gs/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/lexus/gs/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/lexus/gs/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/lexus/gs/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/lexus/gs/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/lexus/gs/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/lexus/gs/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/lexus/gs/":"замена стартера",
            };
modelNotebook[7][4] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/lexus/gx/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/lexus/gx/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/lexus/gx/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/lexus/gx/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/lexus/gx/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/lexus/gx/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/lexus/gx/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/lexus/gx/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/lexus/gx/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/lexus/gx/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/lexus/gx/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/lexus/gx/":"замена стартера",
            };
modelNotebook[7][5] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/lexus/is/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/lexus/is/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/lexus/is/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/lexus/is/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/lexus/is/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/lexus/is/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/lexus/is/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/lexus/is/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/lexus/is/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/lexus/is/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/lexus/is/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/lexus/is/":"замена стартера",
            };
modelNotebook[7][6] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/lexus/lx/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/lexus/lx/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/lexus/lx/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/lexus/lx/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/lexus/lx/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/lexus/lx/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/lexus/lx/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/lexus/lx/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/lexus/lx/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/lexus/lx/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/lexus/lx/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/lexus/lx/":"замена стартера",
            };
modelNotebook[7][7] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/lexus/nx/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/lexus/nx/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/lexus/nx/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/lexus/nx/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/lexus/nx/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/lexus/nx/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/lexus/nx/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/lexus/nx/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/lexus/nx/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/lexus/nx/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/lexus/nx/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/lexus/nx/":"замена стартера",
            };
modelNotebook[7][8] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/lexus/rx/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/lexus/rx/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/lexus/rx/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/lexus/rx/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/lexus/rx/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/lexus/rx/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/lexus/rx/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/lexus/rx/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/lexus/rx/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/lexus/rx/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/lexus/rx/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/lexus/rx/":"замена стартера",
            };



			///Renault
			modelNotebook[8] = new Array;
modelNotebook[8][1] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/renault/19/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/renault/19/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/renault/19/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/renault/19/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/renault/19/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/renault/19/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/renault/19/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/renault/19/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/renault/19/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/renault/19/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/renault/19/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/renault/19/":"замена стартера",
            };
modelNotebook[8][2] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/renault/clio/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/renault/clio/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/renault/clio/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/renault/clio/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/renault/clio/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/renault/clio/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/renault/clio/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/renault/clio/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/renault/clio/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/renault/clio/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/renault/clio/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/renault/clio/":"замена стартера",
            };
modelNotebook[8][3] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/renault/duster/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/renault/duster/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/renault/duster/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/renault/duster/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/renault/duster/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/renault/duster/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/renault/duster/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/renault/duster/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/renault/duster/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/renault/duster/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/renault/duster/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/renault/duster/":"замена стартера",
            };
modelNotebook[8][4] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/renault/espace/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/renault/espace/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/renault/espace/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/renault/espace/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/renault/espace/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/renault/espace/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/renault/espace/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/renault/espace/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/renault/espace/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/renault/espace/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/renault/espace/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/renault/espace/":"замена стартера",
            };
modelNotebook[8][5] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/renault/fluence/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/renault/fluence/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/renault/fluence/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/renault/fluence/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/renault/fluence/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/renault/fluence/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/renault/fluence/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/renault/fluence/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/renault/fluence/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/renault/fluence/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/renault/fluence/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/renault/fluence/":"замена стартера",
            };
modelNotebook[8][6] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/renault/kangoo/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/renault/kangoo/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/renault/kangoo/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/renault/kangoo/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/renault/kangoo/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/renault/kangoo/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/renault/kangoo/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/renault/kangoo/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/renault/kangoo/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/renault/kangoo/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/renault/kangoo/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/renault/kangoo/":"замена стартера",
            };
modelNotebook[8][7] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/renault/kaptur/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/renault/kaptur/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/renault/kaptur/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/renault/kaptur/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/renault/kaptur/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/renault/kaptur/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/renault/kaptur/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/renault/kaptur/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/renault/kaptur/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/renault/kaptur/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/renault/kaptur/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/renault/kaptur/":"замена стартера",
            };
modelNotebook[8][8] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/renault/koleos/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/renault/koleos/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/renault/koleos/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/renault/koleos/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/renault/koleos/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/renault/koleos/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/renault/koleos/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/renault/koleos/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/renault/koleos/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/renault/koleos/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/renault/koleos/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/renault/koleos/":"замена стартера",
            };
modelNotebook[8][9] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/renault/laguna/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/renault/laguna/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/renault/laguna/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/renault/laguna/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/renault/laguna/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/renault/laguna/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/renault/laguna/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/renault/laguna/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/renault/laguna/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/renault/laguna/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/renault/laguna/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/renault/laguna/":"замена стартера",
            };
modelNotebook[8][10] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/renault/latitude/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/renault/latitude/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/renault/latitude/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/renault/latitude/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/renault/latitude/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/renault/latitude/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/renault/latitude/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/renault/latitude/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/renault/latitude/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/renault/latitude/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/renault/latitude/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/renault/latitude/":"замена стартера",
            };
modelNotebook[8][11] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/renault/logan/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/renault/logan/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/renault/logan/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/renault/logan/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/renault/logan/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/renault/logan/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/renault/logan/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/renault/logan/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/renault/logan/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/renault/logan/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/renault/logan/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/renault/logan/":"замена стартера",
            };
modelNotebook[8][12] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/renault/megane/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/renault/megane/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/renault/megane/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/renault/megane/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/renault/megane/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/renault/megane/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/renault/megane/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/renault/megane/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/renault/megane/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/renault/megane/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/renault/megane/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/renault/megane/":"замена стартера",
            };
modelNotebook[8][13] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/renault/sandero/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/renault/sandero/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/renault/sandero/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/renault/sandero/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/renault/sandero/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/renault/sandero/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/renault/sandero/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/renault/sandero/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/renault/sandero/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/renault/sandero/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/renault/sandero/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/renault/sandero/":"замена стартера",
            };
modelNotebook[8][14] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/renault/scenic/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/renault/scenic/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/renault/scenic/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/renault/scenic/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/renault/scenic/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/renault/scenic/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/renault/scenic/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/renault/scenic/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/renault/scenic/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/renault/scenic/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/renault/scenic/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/renault/scenic/":"замена стартера",
            };
modelNotebook[8][15] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/renault/symbol/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/renault/symbol/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/renault/symbol/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/renault/symbol/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/renault/symbol/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/renault/symbol/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/renault/symbol/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/renault/symbol/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/renault/symbol/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/renault/symbol/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/renault/symbol/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/renault/symbol/":"замена стартера",
            };
modelNotebook[8][16] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/renault/twingo/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/renault/twingo/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/renault/twingo/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/renault/twingo/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/renault/twingo/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/renault/twingo/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/renault/twingo/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/renault/twingo/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/renault/twingo/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/renault/twingo/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/renault/twingo/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/renault/twingo/":"замена стартера",
            };





					//Mitsubishi
		modelNotebook[9] = new Array;
modelNotebook[9][1] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/mitsubishi/asx/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/mitsubishi/asx/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/mitsubishi/asx/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/mitsubishi/asx/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/mitsubishi/asx/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/mitsubishi/asx/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/mitsubishi/asx/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/mitsubishi/asx/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/mitsubishi/asx/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/mitsubishi/asx/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/mitsubishi/asx/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/mitsubishi/asx/":"замена стартера",
            };
modelNotebook[9][2] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/mitsubishi/carisma/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/mitsubishi/carisma/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/mitsubishi/carisma/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/mitsubishi/carisma/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/mitsubishi/carisma/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/mitsubishi/carisma/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/mitsubishi/carisma/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/mitsubishi/carisma/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/mitsubishi/carisma/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/mitsubishi/carisma/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/mitsubishi/carisma/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/mitsubishi/carisma/":"замена стартера",
            };
modelNotebook[9][3] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/mitsubishi/chariot/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/mitsubishi/chariot/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/mitsubishi/chariot/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/mitsubishi/chariot/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/mitsubishi/chariot/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/mitsubishi/chariot/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/mitsubishi/chariot/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/mitsubishi/chariot/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/mitsubishi/chariot/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/mitsubishi/chariot/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/mitsubishi/chariot/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/mitsubishi/chariot/":"замена стартера",
            };
modelNotebook[9][4] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/mitsubishi/colt/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/mitsubishi/colt/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/mitsubishi/colt/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/mitsubishi/colt/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/mitsubishi/colt/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/mitsubishi/colt/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/mitsubishi/colt/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/mitsubishi/colt/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/mitsubishi/colt/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/mitsubishi/colt/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/mitsubishi/colt/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/mitsubishi/colt/":"замена стартера",
            };
modelNotebook[9][5] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/mitsubishi/delica/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/mitsubishi/delica/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/mitsubishi/delica/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/mitsubishi/delica/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/mitsubishi/delica/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/mitsubishi/delica/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/mitsubishi/delica/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/mitsubishi/delica/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/mitsubishi/delica/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/mitsubishi/delica/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/mitsubishi/delica/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/mitsubishi/delica/":"замена стартера",
            };
modelNotebook[9][6] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/mitsubishi/diamante/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/mitsubishi/diamante/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/mitsubishi/diamante/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/mitsubishi/diamante/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/mitsubishi/diamante/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/mitsubishi/diamante/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/mitsubishi/diamante/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/mitsubishi/diamante/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/mitsubishi/diamante/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/mitsubishi/diamante/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/mitsubishi/diamante/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/mitsubishi/diamante/":"замена стартера",
            };
modelNotebook[9][7] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/mitsubishi/eclipse/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/mitsubishi/eclipse/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/mitsubishi/eclipse/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/mitsubishi/eclipse/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/mitsubishi/eclipse/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/mitsubishi/eclipse/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/mitsubishi/eclipse/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/mitsubishi/eclipse/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/mitsubishi/eclipse/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/mitsubishi/eclipse/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/mitsubishi/eclipse/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/mitsubishi/eclipse/":"замена стартера",
            };
modelNotebook[9][8] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/mitsubishi/ek/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/mitsubishi/ek/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/mitsubishi/ek/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/mitsubishi/ek/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/mitsubishi/ek/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/mitsubishi/ek/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/mitsubishi/ek/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/mitsubishi/ek/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/mitsubishi/ek/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/mitsubishi/ek/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/mitsubishi/ek/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/mitsubishi/ek/":"замена стартера",
            };
modelNotebook[9][9] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/mitsubishi/endeaor/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/mitsubishi/endeaor/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/mitsubishi/endeaor/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/mitsubishi/endeaor/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/mitsubishi/endeaor/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/mitsubishi/endeaor/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/mitsubishi/endeaor/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/mitsubishi/endeaor/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/mitsubishi/endeaor/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/mitsubishi/endeaor/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/mitsubishi/endeaor/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/mitsubishi/endeaor/":"замена стартера",
            };
modelNotebook[9][10] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/mitsubishi/galant/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/mitsubishi/galant/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/mitsubishi/galant/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/mitsubishi/galant/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/mitsubishi/galant/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/mitsubishi/galant/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/mitsubishi/galant/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/mitsubishi/galant/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/mitsubishi/galant/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/mitsubishi/galant/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/mitsubishi/galant/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/mitsubishi/galant/":"замена стартера",
            };
modelNotebook[9][11] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/mitsubishi/grandis/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/mitsubishi/grandis/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/mitsubishi/grandis/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/mitsubishi/grandis/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/mitsubishi/grandis/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/mitsubishi/grandis/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/mitsubishi/grandis/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/mitsubishi/grandis/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/mitsubishi/grandis/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/mitsubishi/grandis/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/mitsubishi/grandis/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/mitsubishi/grandis/":"замена стартера",
            };
modelNotebook[9][12] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/mitsubishi/l200/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/mitsubishi/l200/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/mitsubishi/l200/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/mitsubishi/l200/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/mitsubishi/l200/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/mitsubishi/l200/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/mitsubishi/l200/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/mitsubishi/l200/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/mitsubishi/l200/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/mitsubishi/l200/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/mitsubishi/l200/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/mitsubishi/l200/":"замена стартера",
            };
modelNotebook[9][13] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/mitsubishi/lancer/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/mitsubishi/lancer/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/mitsubishi/lancer/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/mitsubishi/lancer/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/mitsubishi/lancer/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/mitsubishi/lancer/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/mitsubishi/lancer/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/mitsubishi/lancer/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/mitsubishi/lancer/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/mitsubishi/lancer/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/mitsubishi/lancer/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/mitsubishi/lancer/":"замена стартера",
            };
modelNotebook[9][14] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/mitsubishi/mirage/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/mitsubishi/mirage/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/mitsubishi/mirage/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/mitsubishi/mirage/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/mitsubishi/mirage/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/mitsubishi/mirage/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/mitsubishi/mirage/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/mitsubishi/mirage/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/mitsubishi/mirage/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/mitsubishi/mirage/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/mitsubishi/mirage/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/mitsubishi/mirage/":"замена стартера",
            };
modelNotebook[9][15] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/mitsubishi/montero/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/mitsubishi/montero/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/mitsubishi/montero/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/mitsubishi/montero/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/mitsubishi/montero/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/mitsubishi/montero/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/mitsubishi/montero/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/mitsubishi/montero/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/mitsubishi/montero/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/mitsubishi/montero/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/mitsubishi/montero/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/mitsubishi/montero/":"замена стартера",
            };
modelNotebook[9][16] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/mitsubishi/outlander/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/mitsubishi/outlander/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/mitsubishi/outlander/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/mitsubishi/outlander/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/mitsubishi/outlander/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/mitsubishi/outlander/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/mitsubishi/outlander/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/mitsubishi/outlander/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/mitsubishi/outlander/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/mitsubishi/outlander/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/mitsubishi/outlander/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/mitsubishi/outlander/":"замена стартера",
            };
modelNotebook[9][17] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/mitsubishi/pajero/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/mitsubishi/pajero/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/mitsubishi/pajero/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/mitsubishi/pajero/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/mitsubishi/pajero/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/mitsubishi/pajero/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/mitsubishi/pajero/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/mitsubishi/pajero/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/mitsubishi/pajero/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/mitsubishi/pajero/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/mitsubishi/pajero/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/mitsubishi/pajero/":"замена стартера",
            };
modelNotebook[9][18] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/mitsubishi/sigma/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/mitsubishi/sigma/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/mitsubishi/sigma/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/mitsubishi/sigma/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/mitsubishi/sigma/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/mitsubishi/sigma/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/mitsubishi/sigma/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/mitsubishi/sigma/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/mitsubishi/sigma/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/mitsubishi/sigma/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/mitsubishi/sigma/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/mitsubishi/sigma/":"замена стартера",
            };
modelNotebook[9][19] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/mitsubishi/space/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/mitsubishi/space/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/mitsubishi/space/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/mitsubishi/space/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/mitsubishi/space/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/mitsubishi/space/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/mitsubishi/space/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/mitsubishi/space/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/mitsubishi/space/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/mitsubishi/space/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/mitsubishi/space/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/mitsubishi/space/":"замена стартера",
            };




					//Toyota
		modelNotebook[10] = new Array;
modelNotebook[10][1] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/toyota/4runner/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/toyota/4runner/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/toyota/4runner/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/toyota/4runner/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/toyota/4runner/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/toyota/4runner/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/toyota/4runner/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/toyota/4runner/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/toyota/4runner/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/toyota/4runner/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/toyota/4runner/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/toyota/4runner/":"замена стартера",
            };
modelNotebook[10][2] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/toyota/alphard/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/toyota/alphard/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/toyota/alphard/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/toyota/alphard/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/toyota/alphard/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/toyota/alphard/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/toyota/alphard/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/toyota/alphard/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/toyota/alphard/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/toyota/alphard/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/toyota/alphard/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/toyota/alphard/":"замена стартера",
            };
modelNotebook[10][3] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/toyota/auris/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/toyota/auris/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/toyota/auris/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/toyota/auris/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/toyota/auris/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/toyota/auris/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/toyota/auris/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/toyota/auris/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/toyota/auris/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/toyota/auris/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/toyota/auris/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/toyota/auris/":"замена стартера",
            };
modelNotebook[10][4] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/toyota/avensis/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/toyota/avensis/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/toyota/avensis/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/toyota/avensis/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/toyota/avensis/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/toyota/avensis/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/toyota/avensis/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/toyota/avensis/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/toyota/avensis/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/toyota/avensis/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/toyota/avensis/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/toyota/avensis/":"замена стартера",
            };
modelNotebook[10][5] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/toyota/belta/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/toyota/belta/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/toyota/belta/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/toyota/belta/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/toyota/belta/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/toyota/belta/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/toyota/belta/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/toyota/belta/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/toyota/belta/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/toyota/belta/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/toyota/belta/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/toyota/belta/":"замена стартера",
            };
modelNotebook[10][6] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/toyota/caldina/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/toyota/caldina/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/toyota/caldina/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/toyota/caldina/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/toyota/caldina/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/toyota/caldina/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/toyota/caldina/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/toyota/caldina/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/toyota/caldina/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/toyota/caldina/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/toyota/caldina/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/toyota/caldina/":"замена стартера",
            };
modelNotebook[10][7] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/toyota/camry/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/toyota/camry/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/toyota/camry/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/toyota/camry/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/toyota/camry/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/toyota/camry/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/toyota/camry/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/toyota/camry/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/toyota/camry/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/toyota/camry/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/toyota/camry/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/toyota/camry/":"замена стартера",
            };
modelNotebook[10][8] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/toyota/carina/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/toyota/carina/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/toyota/carina/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/toyota/carina/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/toyota/carina/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/toyota/carina/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/toyota/carina/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/toyota/carina/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/toyota/carina/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/toyota/carina/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/toyota/carina/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/toyota/carina/":"замена стартера",
            };
modelNotebook[10][9] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/toyota/celica/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/toyota/celica/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/toyota/celica/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/toyota/celica/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/toyota/celica/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/toyota/celica/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/toyota/celica/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/toyota/celica/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/toyota/celica/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/toyota/celica/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/toyota/celica/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/toyota/celica/":"замена стартера",
            };
modelNotebook[10][10] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/toyota/chaser/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/toyota/chaser/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/toyota/chaser/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/toyota/chaser/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/toyota/chaser/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/toyota/chaser/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/toyota/chaser/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/toyota/chaser/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/toyota/chaser/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/toyota/chaser/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/toyota/chaser/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/toyota/chaser/":"замена стартера",
            };
modelNotebook[10][11] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/toyota/corolla/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/toyota/corolla/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/toyota/corolla/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/toyota/corolla/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/toyota/corolla/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/toyota/corolla/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/toyota/corolla/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/toyota/corolla/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/toyota/corolla/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/toyota/corolla/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/toyota/corolla/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/toyota/corolla/":"замена стартера",
            };
modelNotebook[10][12] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/toyota/cresta/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/toyota/cresta/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/toyota/cresta/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/toyota/cresta/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/toyota/cresta/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/toyota/cresta/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/toyota/cresta/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/toyota/cresta/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/toyota/cresta/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/toyota/cresta/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/toyota/cresta/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/toyota/cresta/":"замена стартера",
            };
modelNotebook[10][13] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/toyota/crown/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/toyota/crown/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/toyota/crown/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/toyota/crown/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/toyota/crown/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/toyota/crown/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/toyota/crown/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/toyota/crown/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/toyota/crown/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/toyota/crown/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/toyota/crown/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/toyota/crown/":"замена стартера",
            };
modelNotebook[10][14] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/toyota/estima/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/toyota/estima/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/toyota/estima/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/toyota/estima/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/toyota/estima/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/toyota/estima/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/toyota/estima/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/toyota/estima/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/toyota/estima/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/toyota/estima/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/toyota/estima/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/toyota/estima/":"замена стартера",
            };
modelNotebook[10][15] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/toyota/fj-cruiser/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/toyota/fj-cruiser/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/toyota/fj-cruiser/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/toyota/fj-cruiser/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/toyota/fj-cruiser/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/toyota/fj-cruiser/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/toyota/fj-cruiser/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/toyota/fj-cruiser/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/toyota/fj-cruiser/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/toyota/fj-cruiser/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/toyota/fj-cruiser/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/toyota/fj-cruiser/":"замена стартера",
            };
modelNotebook[10][16] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/toyota/funcargo/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/toyota/funcargo/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/toyota/funcargo/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/toyota/funcargo/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/toyota/funcargo/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/toyota/funcargo/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/toyota/funcargo/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/toyota/funcargo/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/toyota/funcargo/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/toyota/funcargo/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/toyota/funcargo/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/toyota/funcargo/":"замена стартера",
            };
modelNotebook[10][17] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/toyota/gaia/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/toyota/gaia/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/toyota/gaia/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/toyota/gaia/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/toyota/gaia/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/toyota/gaia/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/toyota/gaia/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/toyota/gaia/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/toyota/gaia/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/toyota/gaia/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/toyota/gaia/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/toyota/gaia/":"замена стартера",
            };
modelNotebook[10][18] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/toyota/hiace/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/toyota/hiace/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/toyota/hiace/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/toyota/hiace/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/toyota/hiace/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/toyota/hiace/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/toyota/hiace/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/toyota/hiace/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/toyota/hiace/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/toyota/hiace/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/toyota/hiace/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/toyota/hiace/":"замена стартера",
            };
modelNotebook[10][19] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/toyota/highlander/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/toyota/highlander/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/toyota/highlander/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/toyota/highlander/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/toyota/highlander/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/toyota/highlander/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/toyota/highlander/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/toyota/highlander/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/toyota/highlander/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/toyota/highlander/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/toyota/highlander/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/toyota/highlander/":"замена стартера",
            };
modelNotebook[10][20] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/toyota/hilux/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/toyota/hilux/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/toyota/hilux/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/toyota/hilux/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/toyota/hilux/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/toyota/hilux/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/toyota/hilux/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/toyota/hilux/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/toyota/hilux/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/toyota/hilux/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/toyota/hilux/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/toyota/hilux/":"замена стартера",
            };
modelNotebook[10][21] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/toyota/land-cruiser/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/toyota/land-cruiser/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/toyota/land-cruiser/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/toyota/land-cruiser/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/toyota/land-cruiser/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/toyota/land-cruiser/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/toyota/land-cruiser/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/toyota/land-cruiser/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/toyota/land-cruiser/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/toyota/land-cruiser/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/toyota/land-cruiser/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/toyota/land-cruiser/":"замена стартера",
            };
modelNotebook[10][22] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/toyota/land-cruiser-prado/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/toyota/land-cruiser-prado/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/toyota/land-cruiser-prado/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/toyota/land-cruiser-prado/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/toyota/land-cruiser-prado/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/toyota/land-cruiser-prado/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/toyota/land-cruiser-prado/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/toyota/land-cruiser-prado/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/toyota/land-cruiser-prado/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/toyota/land-cruiser-prado/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/toyota/land-cruiser-prado/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/toyota/land-cruiser-prado/":"замена стартера",
            };
modelNotebook[10][23] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/toyota/mark/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/toyota/mark/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/toyota/mark/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/toyota/mark/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/toyota/mark/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/toyota/mark/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/toyota/mark/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/toyota/mark/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/toyota/mark/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/toyota/mark/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/toyota/mark/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/toyota/mark/":"замена стартера",
            };
modelNotebook[10][24] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/toyota/passo-sette/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/toyota/passo-sette/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/toyota/passo-sette/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/toyota/passo-sette/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/toyota/passo-sette/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/toyota/passo-sette/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/toyota/passo-sette/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/toyota/passo-sette/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/toyota/passo-sette/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/toyota/passo-sette/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/toyota/passo-sette/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/toyota/passo-sette/":"замена стартера",
            };
modelNotebook[10][25] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/toyota/platz/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/toyota/platz/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/toyota/platz/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/toyota/platz/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/toyota/platz/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/toyota/platz/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/toyota/platz/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/toyota/platz/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/toyota/platz/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/toyota/platz/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/toyota/platz/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/toyota/platz/":"замена стартера",
            };
modelNotebook[10][26] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/toyota/previa/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/toyota/previa/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/toyota/previa/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/toyota/previa/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/toyota/previa/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/toyota/previa/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/toyota/previa/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/toyota/previa/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/toyota/previa/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/toyota/previa/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/toyota/previa/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/toyota/previa/":"замена стартера",
            };
modelNotebook[10][27] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/toyota/prius/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/toyota/prius/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/toyota/prius/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/toyota/prius/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/toyota/prius/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/toyota/prius/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/toyota/prius/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/toyota/prius/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/toyota/prius/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/toyota/prius/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/toyota/prius/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/toyota/prius/":"замена стартера",
            };
modelNotebook[10][28] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/toyota/probox/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/toyota/probox/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/toyota/probox/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/toyota/probox/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/toyota/probox/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/toyota/probox/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/toyota/probox/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/toyota/probox/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/toyota/probox/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/toyota/probox/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/toyota/probox/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/toyota/probox/":"замена стартера",
            };
modelNotebook[10][29] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/toyota/probox-/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/toyota/probox-/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/toyota/probox-/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/toyota/probox-/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/toyota/probox-/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/toyota/probox-/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/toyota/probox-/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/toyota/probox-/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/toyota/probox-/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/toyota/probox-/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/toyota/probox-/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/toyota/probox-/":"замена стартера",
            };
modelNotebook[10][30] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/toyota/ractis/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/toyota/ractis/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/toyota/ractis/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/toyota/ractis/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/toyota/ractis/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/toyota/ractis/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/toyota/ractis/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/toyota/ractis/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/toyota/ractis/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/toyota/ractis/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/toyota/ractis/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/toyota/ractis/":"замена стартера",
            };
modelNotebook[10][31] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/toyota/rav-4/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/toyota/rav-4/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/toyota/rav-4/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/toyota/rav-4/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/toyota/rav-4/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/toyota/rav-4/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/toyota/rav-4/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/toyota/rav-4/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/toyota/rav-4/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/toyota/rav-4/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/toyota/rav-4/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/toyota/rav-4/":"замена стартера",
            };
modelNotebook[10][32] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/toyota/regius/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/toyota/regius/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/toyota/regius/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/toyota/regius/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/toyota/regius/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/toyota/regius/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/toyota/regius/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/toyota/regius/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/toyota/regius/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/toyota/regius/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/toyota/regius/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/toyota/regius/":"замена стартера",
            };
modelNotebook[10][33] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/toyota/rush/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/toyota/rush/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/toyota/rush/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/toyota/rush/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/toyota/rush/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/toyota/rush/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/toyota/rush/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/toyota/rush/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/toyota/rush/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/toyota/rush/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/toyota/rush/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/toyota/rush/":"замена стартера",
            };
modelNotebook[10][34] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/toyota/sequoia/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/toyota/sequoia/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/toyota/sequoia/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/toyota/sequoia/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/toyota/sequoia/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/toyota/sequoia/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/toyota/sequoia/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/toyota/sequoia/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/toyota/sequoia/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/toyota/sequoia/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/toyota/sequoia/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/toyota/sequoia/":"замена стартера",
            };
modelNotebook[10][35] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/toyota/sprinter/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/toyota/sprinter/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/toyota/sprinter/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/toyota/sprinter/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/toyota/sprinter/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/toyota/sprinter/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/toyota/sprinter/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/toyota/sprinter/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/toyota/sprinter/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/toyota/sprinter/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/toyota/sprinter/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/toyota/sprinter/":"замена стартера",
            };
modelNotebook[10][36] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/toyota/townace/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/toyota/townace/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/toyota/townace/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/toyota/townace/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/toyota/townace/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/toyota/townace/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/toyota/townace/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/toyota/townace/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/toyota/townace/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/toyota/townace/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/toyota/townace/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/toyota/townace/":"замена стартера",
            };
modelNotebook[10][37] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/toyota/tundra/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/toyota/tundra/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/toyota/tundra/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/toyota/tundra/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/toyota/tundra/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/toyota/tundra/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/toyota/tundra/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/toyota/tundra/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/toyota/tundra/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/toyota/tundra/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/toyota/tundra/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/toyota/tundra/":"замена стартера",
            };
modelNotebook[10][38] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/toyota/venza/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/toyota/venza/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/toyota/venza/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/toyota/venza/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/toyota/venza/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/toyota/venza/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/toyota/venza/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/toyota/venza/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/toyota/venza/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/toyota/venza/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/toyota/venza/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/toyota/venza/":"замена стартера",
            };
modelNotebook[10][39] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/toyota/verso/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/toyota/verso/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/toyota/verso/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/toyota/verso/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/toyota/verso/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/toyota/verso/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/toyota/verso/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/toyota/verso/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/toyota/verso/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/toyota/verso/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/toyota/verso/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/toyota/verso/":"замена стартера",
            };
modelNotebook[10][40] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/toyota/vista/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/toyota/vista/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/toyota/vista/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/toyota/vista/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/toyota/vista/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/toyota/vista/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/toyota/vista/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/toyota/vista/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/toyota/vista/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/toyota/vista/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/toyota/vista/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/toyota/vista/":"замена стартера",
            };
modelNotebook[10][41] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/toyota/vitz/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/toyota/vitz/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/toyota/vitz/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/toyota/vitz/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/toyota/vitz/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/toyota/vitz/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/toyota/vitz/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/toyota/vitz/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/toyota/vitz/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/toyota/vitz/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/toyota/vitz/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/toyota/vitz/":"замена стартера",
            };
modelNotebook[10][42] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/toyota/will-cypha/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/toyota/will-cypha/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/toyota/will-cypha/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/toyota/will-cypha/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/toyota/will-cypha/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/toyota/will-cypha/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/toyota/will-cypha/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/toyota/will-cypha/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/toyota/will-cypha/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/toyota/will-cypha/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/toyota/will-cypha/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/toyota/will-cypha/":"замена стартера",
            };
modelNotebook[10][43] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/toyota/yaris/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/toyota/yaris/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/toyota/yaris/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/toyota/yaris/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/toyota/yaris/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/toyota/yaris/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/toyota/yaris/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/toyota/yaris/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/toyota/yaris/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/toyota/yaris/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/toyota/yaris/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/toyota/yaris/":"замена стартера",
            };




					//Volkswagen
		modelNotebook[11] = new Array;
modelNotebook[11][1] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/volkswagen/amarok/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/volkswagen/amarok/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/volkswagen/amarok/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/volkswagen/amarok/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/volkswagen/amarok/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/volkswagen/amarok/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/volkswagen/amarok/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/volkswagen/amarok/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/volkswagen/amarok/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/volkswagen/amarok/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/volkswagen/amarok/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/volkswagen/amarok/":"замена стартера",
            };
modelNotebook[11][2] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/volkswagen/beetle/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/volkswagen/beetle/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/volkswagen/beetle/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/volkswagen/beetle/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/volkswagen/beetle/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/volkswagen/beetle/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/volkswagen/beetle/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/volkswagen/beetle/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/volkswagen/beetle/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/volkswagen/beetle/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/volkswagen/beetle/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/volkswagen/beetle/":"замена стартера",
            };
modelNotebook[11][3] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/volkswagen/bora/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/volkswagen/bora/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/volkswagen/bora/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/volkswagen/bora/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/volkswagen/bora/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/volkswagen/bora/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/volkswagen/bora/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/volkswagen/bora/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/volkswagen/bora/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/volkswagen/bora/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/volkswagen/bora/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/volkswagen/bora/":"замена стартера",
            };
modelNotebook[11][4] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/volkswagen/caddy/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/volkswagen/caddy/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/volkswagen/caddy/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/volkswagen/caddy/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/volkswagen/caddy/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/volkswagen/caddy/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/volkswagen/caddy/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/volkswagen/caddy/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/volkswagen/caddy/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/volkswagen/caddy/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/volkswagen/caddy/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/volkswagen/caddy/":"замена стартера",
            };
modelNotebook[11][5] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/volkswagen/caravelle/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/volkswagen/caravelle/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/volkswagen/caravelle/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/volkswagen/caravelle/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/volkswagen/caravelle/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/volkswagen/caravelle/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/volkswagen/caravelle/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/volkswagen/caravelle/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/volkswagen/caravelle/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/volkswagen/caravelle/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/volkswagen/caravelle/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/volkswagen/caravelle/":"замена стартера",
            };
modelNotebook[11][6] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/volkswagen/golf/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/volkswagen/golf/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/volkswagen/golf/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/volkswagen/golf/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/volkswagen/golf/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/volkswagen/golf/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/volkswagen/golf/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/volkswagen/golf/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/volkswagen/golf/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/volkswagen/golf/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/volkswagen/golf/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/volkswagen/golf/":"замена стартера",
            };
modelNotebook[11][7] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/volkswagen/jetta/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/volkswagen/jetta/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/volkswagen/jetta/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/volkswagen/jetta/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/volkswagen/jetta/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/volkswagen/jetta/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/volkswagen/jetta/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/volkswagen/jetta/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/volkswagen/jetta/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/volkswagen/jetta/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/volkswagen/jetta/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/volkswagen/jetta/":"замена стартера",
            };
modelNotebook[11][8] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/volkswagen/multivan/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/volkswagen/multivan/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/volkswagen/multivan/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/volkswagen/multivan/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/volkswagen/multivan/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/volkswagen/multivan/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/volkswagen/multivan/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/volkswagen/multivan/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/volkswagen/multivan/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/volkswagen/multivan/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/volkswagen/multivan/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/volkswagen/multivan/":"замена стартера",
            };
modelNotebook[11][9] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/volkswagen/passat/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/volkswagen/passat/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/volkswagen/passat/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/volkswagen/passat/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/volkswagen/passat/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/volkswagen/passat/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/volkswagen/passat/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/volkswagen/passat/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/volkswagen/passat/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/volkswagen/passat/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/volkswagen/passat/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/volkswagen/passat/":"замена стартера",
            };
modelNotebook[11][10] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/volkswagen/pointer/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/volkswagen/pointer/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/volkswagen/pointer/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/volkswagen/pointer/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/volkswagen/pointer/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/volkswagen/pointer/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/volkswagen/pointer/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/volkswagen/pointer/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/volkswagen/pointer/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/volkswagen/pointer/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/volkswagen/pointer/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/volkswagen/pointer/":"замена стартера",
            };
modelNotebook[11][11] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/volkswagen/polo/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/volkswagen/polo/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/volkswagen/polo/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/volkswagen/polo/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/volkswagen/polo/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/volkswagen/polo/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/volkswagen/polo/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/volkswagen/polo/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/volkswagen/polo/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/volkswagen/polo/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/volkswagen/polo/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/volkswagen/polo/":"замена стартера",
            };
modelNotebook[11][12] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/volkswagen/scirocco/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/volkswagen/scirocco/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/volkswagen/scirocco/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/volkswagen/scirocco/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/volkswagen/scirocco/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/volkswagen/scirocco/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/volkswagen/scirocco/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/volkswagen/scirocco/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/volkswagen/scirocco/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/volkswagen/scirocco/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/volkswagen/scirocco/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/volkswagen/scirocco/":"замена стартера",
            };
modelNotebook[11][13] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/volkswagen/tiguan/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/volkswagen/tiguan/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/volkswagen/tiguan/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/volkswagen/tiguan/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/volkswagen/tiguan/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/volkswagen/tiguan/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/volkswagen/tiguan/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/volkswagen/tiguan/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/volkswagen/tiguan/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/volkswagen/tiguan/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/volkswagen/tiguan/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/volkswagen/tiguan/":"замена стартера",
            };
modelNotebook[11][14] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/volkswagen/touareg/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/volkswagen/touareg/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/volkswagen/touareg/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/volkswagen/touareg/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/volkswagen/touareg/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/volkswagen/touareg/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/volkswagen/touareg/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/volkswagen/touareg/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/volkswagen/touareg/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/volkswagen/touareg/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/volkswagen/touareg/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/volkswagen/touareg/":"замена стартера",
            };
modelNotebook[11][15] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/volkswagen/touran/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/volkswagen/touran/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/volkswagen/touran/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/volkswagen/touran/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/volkswagen/touran/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/volkswagen/touran/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/volkswagen/touran/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/volkswagen/touran/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/volkswagen/touran/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/volkswagen/touran/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/volkswagen/touran/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/volkswagen/touran/":"замена стартера",
            };
modelNotebook[11][16] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/volkswagen/transporter/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/volkswagen/transporter/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/volkswagen/transporter/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/volkswagen/transporter/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/volkswagen/transporter/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/volkswagen/transporter/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/volkswagen/transporter/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/volkswagen/transporter/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/volkswagen/transporter/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/volkswagen/transporter/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/volkswagen/transporter/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/volkswagen/transporter/":"замена стартера",
            };
modelNotebook[11][17] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/volkswagen/vento/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/volkswagen/vento/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/volkswagen/vento/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/volkswagen/vento/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/volkswagen/vento/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/volkswagen/vento/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/volkswagen/vento/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/volkswagen/vento/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/volkswagen/vento/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/volkswagen/vento/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/volkswagen/vento/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/volkswagen/vento/":"замена стартера",
            };





					//Nissan
		modelNotebook[12] = new Array;
modelNotebook[12][1] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/nissan/350z/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/nissan/350z/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/nissan/350z/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/nissan/350z/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/nissan/350z/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/nissan/350z/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/nissan/350z/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/nissan/350z/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/nissan/350z/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/nissan/350z/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/nissan/350z/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/nissan/350z/":"замена стартера",
            };
modelNotebook[12][2] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/nissan/ad/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/nissan/ad/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/nissan/ad/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/nissan/ad/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/nissan/ad/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/nissan/ad/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/nissan/ad/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/nissan/ad/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/nissan/ad/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/nissan/ad/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/nissan/ad/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/nissan/ad/":"замена стартера",
            };
modelNotebook[12][3] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/nissan/almera/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/nissan/almera/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/nissan/almera/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/nissan/almera/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/nissan/almera/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/nissan/almera/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/nissan/almera/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/nissan/almera/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/nissan/almera/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/nissan/almera/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/nissan/almera/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/nissan/almera/":"замена стартера",
            };
modelNotebook[12][4] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/nissan/bassara/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/nissan/bassara/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/nissan/bassara/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/nissan/bassara/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/nissan/bassara/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/nissan/bassara/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/nissan/bassara/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/nissan/bassara/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/nissan/bassara/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/nissan/bassara/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/nissan/bassara/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/nissan/bassara/":"замена стартера",
            };
modelNotebook[12][5] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/nissan/bluebird/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/nissan/bluebird/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/nissan/bluebird/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/nissan/bluebird/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/nissan/bluebird/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/nissan/bluebird/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/nissan/bluebird/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/nissan/bluebird/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/nissan/bluebird/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/nissan/bluebird/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/nissan/bluebird/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/nissan/bluebird/":"замена стартера",
            };
modelNotebook[12][6] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/nissan/cefiro/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/nissan/cefiro/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/nissan/cefiro/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/nissan/cefiro/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/nissan/cefiro/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/nissan/cefiro/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/nissan/cefiro/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/nissan/cefiro/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/nissan/cefiro/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/nissan/cefiro/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/nissan/cefiro/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/nissan/cefiro/":"замена стартера",
            };
modelNotebook[12][7] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/nissan/cube/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/nissan/cube/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/nissan/cube/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/nissan/cube/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/nissan/cube/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/nissan/cube/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/nissan/cube/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/nissan/cube/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/nissan/cube/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/nissan/cube/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/nissan/cube/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/nissan/cube/":"замена стартера",
            };
modelNotebook[12][8] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/nissan/elgrand/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/nissan/elgrand/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/nissan/elgrand/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/nissan/elgrand/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/nissan/elgrand/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/nissan/elgrand/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/nissan/elgrand/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/nissan/elgrand/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/nissan/elgrand/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/nissan/elgrand/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/nissan/elgrand/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/nissan/elgrand/":"замена стартера",
            };
modelNotebook[12][9] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/nissan/expert/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/nissan/expert/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/nissan/expert/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/nissan/expert/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/nissan/expert/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/nissan/expert/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/nissan/expert/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/nissan/expert/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/nissan/expert/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/nissan/expert/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/nissan/expert/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/nissan/expert/":"замена стартера",
            };
modelNotebook[12][10] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/nissan/fuga/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/nissan/fuga/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/nissan/fuga/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/nissan/fuga/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/nissan/fuga/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/nissan/fuga/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/nissan/fuga/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/nissan/fuga/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/nissan/fuga/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/nissan/fuga/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/nissan/fuga/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/nissan/fuga/":"замена стартера",
            };
modelNotebook[12][11] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/nissan/juke/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/nissan/juke/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/nissan/juke/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/nissan/juke/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/nissan/juke/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/nissan/juke/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/nissan/juke/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/nissan/juke/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/nissan/juke/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/nissan/juke/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/nissan/juke/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/nissan/juke/":"замена стартера",
            };
modelNotebook[12][12] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/nissan/maxima/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/nissan/maxima/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/nissan/maxima/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/nissan/maxima/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/nissan/maxima/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/nissan/maxima/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/nissan/maxima/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/nissan/maxima/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/nissan/maxima/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/nissan/maxima/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/nissan/maxima/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/nissan/maxima/":"замена стартера",
            };
modelNotebook[12][13] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/nissan/micra/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/nissan/micra/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/nissan/micra/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/nissan/micra/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/nissan/micra/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/nissan/micra/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/nissan/micra/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/nissan/micra/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/nissan/micra/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/nissan/micra/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/nissan/micra/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/nissan/micra/":"замена стартера",
            };
modelNotebook[12][14] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/nissan/murano/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/nissan/murano/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/nissan/murano/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/nissan/murano/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/nissan/murano/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/nissan/murano/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/nissan/murano/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/nissan/murano/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/nissan/murano/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/nissan/murano/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/nissan/murano/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/nissan/murano/":"замена стартера",
            };
modelNotebook[12][15] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/nissan/navara/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/nissan/navara/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/nissan/navara/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/nissan/navara/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/nissan/navara/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/nissan/navara/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/nissan/navara/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/nissan/navara/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/nissan/navara/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/nissan/navara/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/nissan/navara/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/nissan/navara/":"замена стартера",
            };
modelNotebook[12][16] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/nissan/note/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/nissan/note/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/nissan/note/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/nissan/note/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/nissan/note/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/nissan/note/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/nissan/note/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/nissan/note/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/nissan/note/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/nissan/note/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/nissan/note/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/nissan/note/":"замена стартера",
            };
modelNotebook[12][17] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/nissan/pathfinder/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/nissan/pathfinder/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/nissan/pathfinder/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/nissan/pathfinder/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/nissan/pathfinder/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/nissan/pathfinder/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/nissan/pathfinder/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/nissan/pathfinder/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/nissan/pathfinder/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/nissan/pathfinder/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/nissan/pathfinder/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/nissan/pathfinder/":"замена стартера",
            };
modelNotebook[12][18] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/nissan/patrol/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/nissan/patrol/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/nissan/patrol/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/nissan/patrol/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/nissan/patrol/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/nissan/patrol/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/nissan/patrol/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/nissan/patrol/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/nissan/patrol/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/nissan/patrol/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/nissan/patrol/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/nissan/patrol/":"замена стартера",
            };
modelNotebook[12][19] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/nissan/pixo/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/nissan/pixo/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/nissan/pixo/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/nissan/pixo/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/nissan/pixo/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/nissan/pixo/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/nissan/pixo/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/nissan/pixo/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/nissan/pixo/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/nissan/pixo/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/nissan/pixo/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/nissan/pixo/":"замена стартера",
            };
modelNotebook[12][20] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/nissan/prairie/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/nissan/prairie/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/nissan/prairie/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/nissan/prairie/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/nissan/prairie/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/nissan/prairie/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/nissan/prairie/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/nissan/prairie/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/nissan/prairie/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/nissan/prairie/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/nissan/prairie/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/nissan/prairie/":"замена стартера",
            };
modelNotebook[12][21] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/nissan/primera/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/nissan/primera/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/nissan/primera/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/nissan/primera/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/nissan/primera/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/nissan/primera/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/nissan/primera/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/nissan/primera/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/nissan/primera/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/nissan/primera/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/nissan/primera/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/nissan/primera/":"замена стартера",
            };
modelNotebook[12][22] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/nissan/qashqai/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/nissan/qashqai/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/nissan/qashqai/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/nissan/qashqai/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/nissan/qashqai/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/nissan/qashqai/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/nissan/qashqai/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/nissan/qashqai/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/nissan/qashqai/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/nissan/qashqai/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/nissan/qashqai/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/nissan/qashqai/":"замена стартера",
            };
modelNotebook[12][23] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/nissan/r'nessa/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/nissan/r'nessa/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/nissan/r'nessa/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/nissan/r'nessa/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/nissan/r'nessa/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/nissan/r'nessa/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/nissan/r'nessa/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/nissan/r'nessa/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/nissan/r'nessa/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/nissan/r'nessa/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/nissan/r'nessa/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/nissan/r'nessa/":"замена стартера",
            };
modelNotebook[12][24] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/nissan/sentra/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/nissan/sentra/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/nissan/sentra/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/nissan/sentra/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/nissan/sentra/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/nissan/sentra/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/nissan/sentra/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/nissan/sentra/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/nissan/sentra/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/nissan/sentra/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/nissan/sentra/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/nissan/sentra/":"замена стартера",
            };
modelNotebook[12][25] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/nissan/silvia/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/nissan/silvia/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/nissan/silvia/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/nissan/silvia/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/nissan/silvia/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/nissan/silvia/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/nissan/silvia/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/nissan/silvia/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/nissan/silvia/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/nissan/silvia/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/nissan/silvia/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/nissan/silvia/":"замена стартера",
            };
modelNotebook[12][26] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/nissan/skyline/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/nissan/skyline/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/nissan/skyline/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/nissan/skyline/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/nissan/skyline/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/nissan/skyline/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/nissan/skyline/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/nissan/skyline/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/nissan/skyline/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/nissan/skyline/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/nissan/skyline/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/nissan/skyline/":"замена стартера",
            };
modelNotebook[12][27] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/nissan/sunny/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/nissan/sunny/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/nissan/sunny/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/nissan/sunny/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/nissan/sunny/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/nissan/sunny/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/nissan/sunny/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/nissan/sunny/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/nissan/sunny/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/nissan/sunny/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/nissan/sunny/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/nissan/sunny/":"замена стартера",
            };
modelNotebook[12][28] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/nissan/teana/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/nissan/teana/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/nissan/teana/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/nissan/teana/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/nissan/teana/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/nissan/teana/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/nissan/teana/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/nissan/teana/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/nissan/teana/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/nissan/teana/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/nissan/teana/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/nissan/teana/":"замена стартера",
            };
modelNotebook[12][29] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/nissan/terrano/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/nissan/terrano/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/nissan/terrano/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/nissan/terrano/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/nissan/terrano/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/nissan/terrano/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/nissan/terrano/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/nissan/terrano/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/nissan/terrano/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/nissan/terrano/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/nissan/terrano/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/nissan/terrano/":"замена стартера",
            };
modelNotebook[12][30] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/nissan/tiida/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/nissan/tiida/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/nissan/tiida/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/nissan/tiida/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/nissan/tiida/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/nissan/tiida/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/nissan/tiida/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/nissan/tiida/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/nissan/tiida/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/nissan/tiida/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/nissan/tiida/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/nissan/tiida/":"замена стартера",
            };
modelNotebook[12][31] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/nissan/wingroad/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/nissan/wingroad/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/nissan/wingroad/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/nissan/wingroad/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/nissan/wingroad/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/nissan/wingroad/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/nissan/wingroad/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/nissan/wingroad/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/nissan/wingroad/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/nissan/wingroad/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/nissan/wingroad/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/nissan/wingroad/":"замена стартера",
            };
modelNotebook[12][32] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/nissan/x-trail/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/nissan/x-trail/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/nissan/x-trail/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/nissan/x-trail/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/nissan/x-trail/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/nissan/x-trail/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/nissan/x-trail/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/nissan/x-trail/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/nissan/x-trail/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/nissan/x-trail/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/nissan/x-trail/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/nissan/x-trail/":"замена стартера",
            };





					//Bentley
		modelNotebook[13] = new Array;
modelNotebook[13][1] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/bentley/arnage/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/bentley/arnage/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/bentley/arnage/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/bentley/arnage/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/bentley/arnage/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/bentley/arnage/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/bentley/arnage/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/bentley/arnage/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/bentley/arnage/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/bentley/arnage/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/bentley/arnage/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/bentley/arnage/":"замена стартера",
            };
modelNotebook[13][2] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/bentley/azure/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/bentley/azure/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/bentley/azure/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/bentley/azure/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/bentley/azure/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/bentley/azure/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/bentley/azure/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/bentley/azure/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/bentley/azure/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/bentley/azure/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/bentley/azure/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/bentley/azure/":"замена стартера",
            };
modelNotebook[13][3] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/bentley/bentayga/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/bentley/bentayga/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/bentley/bentayga/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/bentley/bentayga/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/bentley/bentayga/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/bentley/bentayga/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/bentley/bentayga/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/bentley/bentayga/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/bentley/bentayga/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/bentley/bentayga/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/bentley/bentayga/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/bentley/bentayga/":"замена стартера",
            };
modelNotebook[13][4] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/bentley/brooklands/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/bentley/brooklands/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/bentley/brooklands/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/bentley/brooklands/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/bentley/brooklands/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/bentley/brooklands/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/bentley/brooklands/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/bentley/brooklands/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/bentley/brooklands/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/bentley/brooklands/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/bentley/brooklands/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/bentley/brooklands/":"замена стартера",
            };
modelNotebook[13][5] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/bentley/continental/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/bentley/continental/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/bentley/continental/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/bentley/continental/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/bentley/continental/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/bentley/continental/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/bentley/continental/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/bentley/continental/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/bentley/continental/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/bentley/continental/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/bentley/continental/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/bentley/continental/":"замена стартера",
            };
modelNotebook[13][6] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/bentley/eight/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/bentley/eight/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/bentley/eight/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/bentley/eight/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/bentley/eight/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/bentley/eight/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/bentley/eight/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/bentley/eight/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/bentley/eight/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/bentley/eight/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/bentley/eight/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/bentley/eight/":"замена стартера",
            };
modelNotebook[13][7] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/bentley/flying-spur/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/bentley/flying-spur/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/bentley/flying-spur/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/bentley/flying-spur/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/bentley/flying-spur/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/bentley/flying-spur/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/bentley/flying-spur/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/bentley/flying-spur/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/bentley/flying-spur/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/bentley/flying-spur/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/bentley/flying-spur/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/bentley/flying-spur/":"замена стартера",
            };
modelNotebook[13][8] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/bentley/mulsanne/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/bentley/mulsanne/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/bentley/mulsanne/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/bentley/mulsanne/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/bentley/mulsanne/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/bentley/mulsanne/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/bentley/mulsanne/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/bentley/mulsanne/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/bentley/mulsanne/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/bentley/mulsanne/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/bentley/mulsanne/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/bentley/mulsanne/":"замена стартера",
            };
modelNotebook[13][9] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/bentley/r-type/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/bentley/r-type/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/bentley/r-type/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/bentley/r-type/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/bentley/r-type/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/bentley/r-type/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/bentley/r-type/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/bentley/r-type/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/bentley/r-type/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/bentley/r-type/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/bentley/r-type/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/bentley/r-type/":"замена стартера",
            };
modelNotebook[13][10] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/bentley/s/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/bentley/s/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/bentley/s/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/bentley/s/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/bentley/s/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/bentley/s/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/bentley/s/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/bentley/s/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/bentley/s/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/bentley/s/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/bentley/s/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/bentley/s/":"замена стартера",
            };





					//Lada
		modelNotebook[14] = new Array;
modelNotebook[14][1] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/lada/1111/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/lada/1111/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/lada/1111/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/lada/1111/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/lada/1111/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/lada/1111/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/lada/1111/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/lada/1111/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/lada/1111/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/lada/1111/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/lada/1111/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/lada/1111/":"замена стартера",
            };
modelNotebook[14][2] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/lada/2101/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/lada/2101/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/lada/2101/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/lada/2101/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/lada/2101/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/lada/2101/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/lada/2101/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/lada/2101/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/lada/2101/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/lada/2101/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/lada/2101/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/lada/2101/":"замена стартера",
            };
modelNotebook[14][3] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/lada/2104/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/lada/2104/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/lada/2104/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/lada/2104/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/lada/2104/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/lada/2104/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/lada/2104/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/lada/2104/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/lada/2104/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/lada/2104/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/lada/2104/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/lada/2104/":"замена стартера",
            };
modelNotebook[14][4] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/lada/2105/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/lada/2105/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/lada/2105/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/lada/2105/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/lada/2105/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/lada/2105/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/lada/2105/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/lada/2105/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/lada/2105/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/lada/2105/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/lada/2105/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/lada/2105/":"замена стартера",
            };
modelNotebook[14][5] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/lada/2106/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/lada/2106/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/lada/2106/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/lada/2106/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/lada/2106/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/lada/2106/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/lada/2106/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/lada/2106/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/lada/2106/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/lada/2106/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/lada/2106/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/lada/2106/":"замена стартера",
            };
modelNotebook[14][6] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/lada/2107/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/lada/2107/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/lada/2107/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/lada/2107/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/lada/2107/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/lada/2107/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/lada/2107/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/lada/2107/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/lada/2107/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/lada/2107/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/lada/2107/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/lada/2107/":"замена стартера",
            };
modelNotebook[14][7] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/lada/2108/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/lada/2108/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/lada/2108/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/lada/2108/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/lada/2108/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/lada/2108/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/lada/2108/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/lada/2108/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/lada/2108/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/lada/2108/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/lada/2108/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/lada/2108/":"замена стартера",
            };
modelNotebook[14][8] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/lada/2109/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/lada/2109/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/lada/2109/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/lada/2109/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/lada/2109/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/lada/2109/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/lada/2109/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/lada/2109/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/lada/2109/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/lada/2109/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/lada/2109/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/lada/2109/":"замена стартера",
            };
modelNotebook[14][9] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/lada/21099/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/lada/21099/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/lada/21099/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/lada/21099/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/lada/21099/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/lada/21099/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/lada/21099/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/lada/21099/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/lada/21099/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/lada/21099/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/lada/21099/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/lada/21099/":"замена стартера",
            };
modelNotebook[14][10] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/lada/2110/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/lada/2110/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/lada/2110/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/lada/2110/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/lada/2110/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/lada/2110/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/lada/2110/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/lada/2110/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/lada/2110/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/lada/2110/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/lada/2110/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/lada/2110/":"замена стартера",
            };
modelNotebook[14][11] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/lada/2111/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/lada/2111/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/lada/2111/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/lada/2111/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/lada/2111/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/lada/2111/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/lada/2111/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/lada/2111/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/lada/2111/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/lada/2111/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/lada/2111/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/lada/2111/":"замена стартера",
            };
modelNotebook[14][12] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/lada/2112/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/lada/2112/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/lada/2112/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/lada/2112/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/lada/2112/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/lada/2112/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/lada/2112/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/lada/2112/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/lada/2112/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/lada/2112/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/lada/2112/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/lada/2112/":"замена стартера",
            };
modelNotebook[14][13] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/lada/2113/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/lada/2113/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/lada/2113/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/lada/2113/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/lada/2113/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/lada/2113/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/lada/2113/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/lada/2113/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/lada/2113/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/lada/2113/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/lada/2113/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/lada/2113/":"замена стартера",
            };
modelNotebook[14][14] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/lada/2114/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/lada/2114/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/lada/2114/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/lada/2114/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/lada/2114/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/lada/2114/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/lada/2114/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/lada/2114/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/lada/2114/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/lada/2114/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/lada/2114/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/lada/2114/":"замена стартера",
            };
modelNotebook[14][15] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/lada/2115/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/lada/2115/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/lada/2115/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/lada/2115/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/lada/2115/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/lada/2115/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/lada/2115/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/lada/2115/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/lada/2115/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/lada/2115/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/lada/2115/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/lada/2115/":"замена стартера",
            };
modelNotebook[14][16] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/lada/2121/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/lada/2121/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/lada/2121/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/lada/2121/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/lada/2121/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/lada/2121/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/lada/2121/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/lada/2121/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/lada/2121/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/lada/2121/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/lada/2121/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/lada/2121/":"замена стартера",
            };
modelNotebook[14][17] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/lada/granta/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/lada/granta/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/lada/granta/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/lada/granta/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/lada/granta/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/lada/granta/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/lada/granta/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/lada/granta/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/lada/granta/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/lada/granta/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/lada/granta/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/lada/granta/":"замена стартера",
            };
modelNotebook[14][18] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/lada/kalina/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/lada/kalina/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/lada/kalina/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/lada/kalina/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/lada/kalina/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/lada/kalina/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/lada/kalina/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/lada/kalina/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/lada/kalina/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/lada/kalina/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/lada/kalina/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/lada/kalina/":"замена стартера",
            };
modelNotebook[14][19] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/lada/largus/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/lada/largus/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/lada/largus/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/lada/largus/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/lada/largus/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/lada/largus/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/lada/largus/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/lada/largus/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/lada/largus/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/lada/largus/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/lada/largus/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/lada/largus/":"замена стартера",
            };
modelNotebook[14][20] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/lada/priora/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/lada/priora/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/lada/priora/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/lada/priora/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/lada/priora/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/lada/priora/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/lada/priora/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/lada/priora/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/lada/priora/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/lada/priora/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/lada/priora/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/lada/priora/":"замена стартера",
            };
modelNotebook[14][21] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/lada/vesta/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/lada/vesta/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/lada/vesta/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/lada/vesta/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/lada/vesta/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/lada/vesta/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/lada/vesta/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/lada/vesta/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/lada/vesta/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/lada/vesta/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/lada/vesta/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/lada/vesta/":"замена стартера",
            };
modelNotebook[14][22] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/lada/xray/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/lada/xray/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/lada/xray/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/lada/xray/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/lada/xray/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/lada/xray/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/lada/xray/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/lada/xray/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/lada/xray/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/lada/xray/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/lada/xray/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/lada/xray/":"замена стартера",
            };





					//Jaguar
		modelNotebook[15] = new Array;
modelNotebook[15][1] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/jaguar/e-type/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/jaguar/e-type/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/jaguar/e-type/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/jaguar/e-type/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/jaguar/e-type/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/jaguar/e-type/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/jaguar/e-type/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/jaguar/e-type/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/jaguar/e-type/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/jaguar/e-type/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/jaguar/e-type/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/jaguar/e-type/":"замена стартера",
            };
modelNotebook[15][2] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/jaguar/f-pace/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/jaguar/f-pace/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/jaguar/f-pace/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/jaguar/f-pace/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/jaguar/f-pace/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/jaguar/f-pace/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/jaguar/f-pace/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/jaguar/f-pace/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/jaguar/f-pace/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/jaguar/f-pace/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/jaguar/f-pace/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/jaguar/f-pace/":"замена стартера",
            };
modelNotebook[15][3] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/jaguar/f-type/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/jaguar/f-type/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/jaguar/f-type/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/jaguar/f-type/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/jaguar/f-type/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/jaguar/f-type/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/jaguar/f-type/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/jaguar/f-type/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/jaguar/f-type/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/jaguar/f-type/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/jaguar/f-type/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/jaguar/f-type/":"замена стартера",
            };
modelNotebook[15][4] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/jaguar/mark-2/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/jaguar/mark-2/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/jaguar/mark-2/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/jaguar/mark-2/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/jaguar/mark-2/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/jaguar/mark-2/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/jaguar/mark-2/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/jaguar/mark-2/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/jaguar/mark-2/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/jaguar/mark-2/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/jaguar/mark-2/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/jaguar/mark-2/":"замена стартера",
            };
modelNotebook[15][5] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/jaguar/s-type/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/jaguar/s-type/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/jaguar/s-type/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/jaguar/s-type/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/jaguar/s-type/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/jaguar/s-type/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/jaguar/s-type/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/jaguar/s-type/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/jaguar/s-type/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/jaguar/s-type/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/jaguar/s-type/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/jaguar/s-type/":"замена стартера",
            };
modelNotebook[15][6] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/jaguar/xe/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/jaguar/xe/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/jaguar/xe/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/jaguar/xe/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/jaguar/xe/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/jaguar/xe/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/jaguar/xe/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/jaguar/xe/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/jaguar/xe/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/jaguar/xe/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/jaguar/xe/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/jaguar/xe/":"замена стартера",
            };
modelNotebook[15][7] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/jaguar/xf/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/jaguar/xf/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/jaguar/xf/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/jaguar/xf/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/jaguar/xf/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/jaguar/xf/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/jaguar/xf/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/jaguar/xf/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/jaguar/xf/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/jaguar/xf/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/jaguar/xf/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/jaguar/xf/":"замена стартера",
            };
modelNotebook[15][8] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/jaguar/xfr/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/jaguar/xfr/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/jaguar/xfr/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/jaguar/xfr/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/jaguar/xfr/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/jaguar/xfr/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/jaguar/xfr/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/jaguar/xfr/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/jaguar/xfr/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/jaguar/xfr/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/jaguar/xfr/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/jaguar/xfr/":"замена стартера",
            };
modelNotebook[15][9] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/jaguar/xj/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/jaguar/xj/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/jaguar/xj/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/jaguar/xj/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/jaguar/xj/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/jaguar/xj/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/jaguar/xj/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/jaguar/xj/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/jaguar/xj/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/jaguar/xj/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/jaguar/xj/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/jaguar/xj/":"замена стартера",
            };
modelNotebook[15][10] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/jaguar/xjr/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/jaguar/xjr/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/jaguar/xjr/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/jaguar/xjr/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/jaguar/xjr/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/jaguar/xjr/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/jaguar/xjr/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/jaguar/xjr/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/jaguar/xjr/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/jaguar/xjr/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/jaguar/xjr/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/jaguar/xjr/":"замена стартера",
            };
modelNotebook[15][11] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/jaguar/xjs/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/jaguar/xjs/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/jaguar/xjs/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/jaguar/xjs/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/jaguar/xjs/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/jaguar/xjs/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/jaguar/xjs/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/jaguar/xjs/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/jaguar/xjs/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/jaguar/xjs/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/jaguar/xjs/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/jaguar/xjs/":"замена стартера",
            };
modelNotebook[15][12] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/jaguar/xk/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/jaguar/xk/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/jaguar/xk/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/jaguar/xk/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/jaguar/xk/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/jaguar/xk/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/jaguar/xk/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/jaguar/xk/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/jaguar/xk/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/jaguar/xk/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/jaguar/xk/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/jaguar/xk/":"замена стартера",
            };
modelNotebook[15][13] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/jaguar/xkr/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/jaguar/xkr/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/jaguar/xkr/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/jaguar/xkr/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/jaguar/xkr/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/jaguar/xkr/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/jaguar/xkr/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/jaguar/xkr/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/jaguar/xkr/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/jaguar/xkr/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/jaguar/xkr/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/jaguar/xkr/":"замена стартера",
            };
modelNotebook[15][14] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/jaguar/x-type/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/jaguar/x-type/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/jaguar/x-type/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/jaguar/x-type/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/jaguar/x-type/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/jaguar/x-type/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/jaguar/x-type/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/jaguar/x-type/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/jaguar/x-type/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/jaguar/x-type/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/jaguar/x-type/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/jaguar/x-type/":"замена стартера",
            };





					//Land Rover
		modelNotebook[16] = new Array;
modelNotebook[16][1] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/land-rover/defender-110/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/land-rover/defender-110/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/land-rover/defender-110/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/land-rover/defender-110/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/land-rover/defender-110/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/land-rover/defender-110/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/land-rover/defender-110/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/land-rover/defender-110/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/land-rover/defender-110/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/land-rover/defender-110/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/land-rover/defender-110/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/land-rover/defender-110/":"замена стартера",
            };
modelNotebook[16][2] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/land-rover/defender-90/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/land-rover/defender-90/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/land-rover/defender-90/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/land-rover/defender-90/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/land-rover/defender-90/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/land-rover/defender-90/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/land-rover/defender-90/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/land-rover/defender-90/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/land-rover/defender-90/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/land-rover/defender-90/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/land-rover/defender-90/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/land-rover/defender-90/":"замена стартера",
            };
modelNotebook[16][3] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/land-rover/discovery/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/land-rover/discovery/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/land-rover/discovery/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/land-rover/discovery/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/land-rover/discovery/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/land-rover/discovery/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/land-rover/discovery/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/land-rover/discovery/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/land-rover/discovery/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/land-rover/discovery/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/land-rover/discovery/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/land-rover/discovery/":"замена стартера",
            };
modelNotebook[16][4] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/land-rover/freelander/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/land-rover/freelander/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/land-rover/freelander/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/land-rover/freelander/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/land-rover/freelander/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/land-rover/freelander/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/land-rover/freelander/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/land-rover/freelander/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/land-rover/freelander/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/land-rover/freelander/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/land-rover/freelander/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/land-rover/freelander/":"замена стартера",
            };
modelNotebook[16][5] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/land-rover/rover-defender-110/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/land-rover/rover-defender-110/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/land-rover/rover-defender-110/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/land-rover/rover-defender-110/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/land-rover/rover-defender-110/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/land-rover/rover-defender-110/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/land-rover/rover-defender-110/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/land-rover/rover-defender-110/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/land-rover/rover-defender-110/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/land-rover/rover-defender-110/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/land-rover/rover-defender-110/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/land-rover/rover-defender-110/":"замена стартера",
            };
modelNotebook[16][6] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/land-rover/rover-defender-90/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/land-rover/rover-defender-90/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/land-rover/rover-defender-90/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/land-rover/rover-defender-90/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/land-rover/rover-defender-90/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/land-rover/rover-defender-90/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/land-rover/rover-defender-90/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/land-rover/rover-defender-90/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/land-rover/rover-defender-90/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/land-rover/rover-defender-90/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/land-rover/rover-defender-90/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/land-rover/rover-defender-90/":"замена стартера",
            };
modelNotebook[16][7] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/land-rover/rover-discovery/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/land-rover/rover-discovery/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/land-rover/rover-discovery/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/land-rover/rover-discovery/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/land-rover/rover-discovery/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/land-rover/rover-discovery/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/land-rover/rover-discovery/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/land-rover/rover-discovery/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/land-rover/rover-discovery/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/land-rover/rover-discovery/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/land-rover/rover-discovery/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/land-rover/rover-discovery/":"замена стартера",
            };
modelNotebook[16][8] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/land-rover/rover-freelander/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/land-rover/rover-freelander/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/land-rover/rover-freelander/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/land-rover/rover-freelander/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/land-rover/rover-freelander/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/land-rover/rover-freelander/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/land-rover/rover-freelander/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/land-rover/rover-freelander/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/land-rover/rover-freelander/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/land-rover/rover-freelander/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/land-rover/rover-freelander/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/land-rover/rover-freelander/":"замена стартера",
            };






					//Skoda
		modelNotebook[17] = new Array;
modelNotebook[17][1] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/skoda/fabia/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/skoda/fabia/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/skoda/fabia/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/skoda/fabia/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/skoda/fabia/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/skoda/fabia/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/skoda/fabia/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/skoda/fabia/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/skoda/fabia/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/skoda/fabia/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/skoda/fabia/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/skoda/fabia/":"замена стартера",
            };
modelNotebook[17][2] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/skoda/felicia/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/skoda/felicia/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/skoda/felicia/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/skoda/felicia/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/skoda/felicia/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/skoda/felicia/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/skoda/felicia/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/skoda/felicia/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/skoda/felicia/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/skoda/felicia/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/skoda/felicia/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/skoda/felicia/":"замена стартера",
            };
modelNotebook[17][3] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/skoda/octavia/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/skoda/octavia/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/skoda/octavia/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/skoda/octavia/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/skoda/octavia/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/skoda/octavia/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/skoda/octavia/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/skoda/octavia/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/skoda/octavia/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/skoda/octavia/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/skoda/octavia/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/skoda/octavia/":"замена стартера",
            };
modelNotebook[17][4] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/skoda/rapid/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/skoda/rapid/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/skoda/rapid/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/skoda/rapid/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/skoda/rapid/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/skoda/rapid/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/skoda/rapid/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/skoda/rapid/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/skoda/rapid/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/skoda/rapid/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/skoda/rapid/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/skoda/rapid/":"замена стартера",
            };
modelNotebook[17][5] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/skoda/roomster/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/skoda/roomster/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/skoda/roomster/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/skoda/roomster/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/skoda/roomster/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/skoda/roomster/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/skoda/roomster/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/skoda/roomster/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/skoda/roomster/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/skoda/roomster/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/skoda/roomster/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/skoda/roomster/":"замена стартера",
            };
modelNotebook[17][6] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/skoda/superb/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/skoda/superb/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/skoda/superb/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/skoda/superb/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/skoda/superb/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/skoda/superb/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/skoda/superb/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/skoda/superb/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/skoda/superb/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/skoda/superb/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/skoda/superb/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/skoda/superb/":"замена стартера",
            };
modelNotebook[17][7] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/skoda/yeti/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/skoda/yeti/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/skoda/yeti/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/skoda/yeti/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/skoda/yeti/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/skoda/yeti/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/skoda/yeti/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/skoda/yeti/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/skoda/yeti/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/skoda/yeti/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/skoda/yeti/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/skoda/yeti/":"замена стартера",
            };






					//Porsche
		modelNotebook[18] = new Array;
modelNotebook[18][1] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/porsche/718/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/porsche/718/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/porsche/718/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/porsche/718/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/porsche/718/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/porsche/718/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/porsche/718/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/porsche/718/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/porsche/718/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/porsche/718/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/porsche/718/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/porsche/718/":"замена стартера",
            };
modelNotebook[18][2] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/porsche/911/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/porsche/911/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/porsche/911/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/porsche/911/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/porsche/911/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/porsche/911/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/porsche/911/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/porsche/911/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/porsche/911/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/porsche/911/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/porsche/911/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/porsche/911/":"замена стартера",
            };
modelNotebook[18][3] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/porsche/924/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/porsche/924/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/porsche/924/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/porsche/924/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/porsche/924/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/porsche/924/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/porsche/924/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/porsche/924/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/porsche/924/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/porsche/924/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/porsche/924/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/porsche/924/":"замена стартера",
            };
modelNotebook[18][4] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/porsche/944/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/porsche/944/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/porsche/944/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/porsche/944/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/porsche/944/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/porsche/944/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/porsche/944/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/porsche/944/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/porsche/944/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/porsche/944/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/porsche/944/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/porsche/944/":"замена стартера",
            };
modelNotebook[18][5] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/porsche/boxster/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/porsche/boxster/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/porsche/boxster/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/porsche/boxster/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/porsche/boxster/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/porsche/boxster/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/porsche/boxster/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/porsche/boxster/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/porsche/boxster/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/porsche/boxster/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/porsche/boxster/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/porsche/boxster/":"замена стартера",
            };
modelNotebook[18][6] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/porsche/cayenne/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/porsche/cayenne/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/porsche/cayenne/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/porsche/cayenne/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/porsche/cayenne/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/porsche/cayenne/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/porsche/cayenne/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/porsche/cayenne/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/porsche/cayenne/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/porsche/cayenne/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/porsche/cayenne/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/porsche/cayenne/":"замена стартера",
            };
modelNotebook[18][7] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/porsche/cayman/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/porsche/cayman/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/porsche/cayman/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/porsche/cayman/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/porsche/cayman/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/porsche/cayman/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/porsche/cayman/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/porsche/cayman/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/porsche/cayman/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/porsche/cayman/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/porsche/cayman/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/porsche/cayman/":"замена стартера",
            };
modelNotebook[18][8] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/porsche/macan/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/porsche/macan/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/porsche/macan/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/porsche/macan/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/porsche/macan/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/porsche/macan/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/porsche/macan/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/porsche/macan/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/porsche/macan/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/porsche/macan/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/porsche/macan/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/porsche/macan/":"замена стартера",
            };
modelNotebook[18][9] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/porsche/panamera/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/porsche/panamera/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/porsche/panamera/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/porsche/panamera/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/porsche/panamera/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/porsche/panamera/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/porsche/panamera/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/porsche/panamera/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/porsche/panamera/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/porsche/panamera/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/porsche/panamera/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/porsche/panamera/":"замена стартера",
            };







					//range rover
		modelNotebook[19] = new Array;
modelNotebook[19][1] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/range-rover/evoque/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/range-rover/evoque/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/range-rover/evoque/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/range-rover/evoque/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/range-rover/evoque/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/range-rover/evoque/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/range-rover/evoque/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/range-rover/evoque/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/range-rover/evoque/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/range-rover/evoque/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/range-rover/evoque/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/range-rover/evoque/":"замена стартера",
            };
modelNotebook[19][2] ={
                "https://www.tehpomosch-autoelektrik.ru/avarijnoe-vskrytie-avtomobilya/range-rover/velar/":"не заводится",
                "https://www.tehpomosch-autoelektrik.ru/avarijnyj-sliv-topliva/range-rover/velar/":"слив топлива",
                "https://www.tehpomosch-autoelektrik.ru/otkruchivanie-prikipevshih-boltov/range-rover/velar/":"откручивание прикипевших болтов",
                "https://www.tehpomosch-autoelektrik.ru/otogrev-na-moroze-avtomobilya/range-rover/velar/":"отогрев автомобиля на морозе",
                "https://www.tehpomosch-autoelektrik.ru/podvoz-topliva-k-vashemu-avtomobilyu/range-rover/velar/":"закончился бензин",
                "https://www.tehpomosch-autoelektrik.ru/prikurit-akkumulyator-avtomobilya/range-rover/velar/":"прикурить автомобиль",
                "https://www.tehpomosch-autoelektrik.ru/remont-i-diagnostika-startera/range-rover/velar/":"ремонт стартера",
                "https://www.tehpomosch-autoelektrik.ru/remont-signalizacii-avtomobilya-s-vyezdom/range-rover/velar/":"ремонт сигнализации",
                "https://www.tehpomosch-autoelektrik.ru/snyat-sekretki-s-koles/range-rover/velar/":"снять секретки",
                "https://www.tehpomosch-autoelektrik.ru/zamena-avtomobilnogo-akkumulyatora/range-rover/velar/":"замена автомобильного аккумулятора",
                "https://www.tehpomosch-autoelektrik.ru/zamena-koles-avtomobilya/range-rover/velar/":"заменить колесо",
                "https://www.tehpomosch-autoelektrik.ru/zamena-startera-v-avtomobile/range-rover/velar/":"замена стартера",
            };







        //скрипт для удобства копирования моделей со старого скрипта
        var test = [];
        test.forEach(function(item, i, arr) {
           console.log( '\t"'+item.value+'":"'+item.text+'",');
        });


        function getOptions(obj, label){
            var options = '<option value="">'+label+'</option>';
            for (var key in obj) {
                options = options + '<option value="'+key+'">'+obj[key]+'</option>';
            }
            return options;
        }


      // выбор серии
      function adjustseries(){
        var productionValue = $('#production').val();
        var tmpSelect = $('#series');
        if(productionValue.length == 0) {
            tmpSelect.attr('disabled','disabled');
            //tmpSelect.clearSelect();
            adjustModel();
        } else {
            tmpSelect.html( getOptions(seriesNotebook[productionValue],'Модель авто')).removeAttr('disabled');
            adjustModel();
        }
      };

      // выбор модели
      function adjustModel(){
        var productionValue = $('#production').val();
        var seriesValue = $('#series').val();
        var tmpSelect = $('#model');
        if(productionValue.length == 0||seriesValue.length == 0) {
            tmpSelect.attr('disabled','disabled');
            //tmpSelect.clearSelect();
        } else {
            console.log(modelNotebook[productionValue][seriesValue]);
            tmpSelect.html( getOptions(modelNotebook[productionValue][seriesValue],'Выберите неисправность') ).removeAttr('disabled');
        }
      };

      //перелинковка
      $('#production').change(function(){
      $(document).on('change', '#production', function(){
          adjustseries();
      });
      }).change();

      $('#series').change(adjustModel);

      $('#model').change(function(){
        //if($(this).val().length != 0) { alert('Выбор сделан!'); }
        location.href = $(this).val();
      });

    });
