"use strict"
$(document).ready(function() {
  //wow animation
  new WOW().init();

  //templates
  new Vue({
    el: '#global-svg',
    template: '<svg aria-hidden="true" style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><symbol id="icon-access-time" viewBox="0 0 20 20"><title>access-time</title><path d="M9.992 1.667c-4.6 0-8.325 3.733-8.325 8.333s3.725 8.333 8.325 8.333c4.608 0 8.342-3.733 8.342-8.333s-3.733-8.333-8.342-8.333zM10 16.667c-3.683 0-6.667-2.983-6.667-6.667s2.983-6.667 6.667-6.667 6.667 2.983 6.667 6.667-2.983 6.667-6.667 6.667z"></path><path d="M10.417 5.833h-1.25v5l4.375 2.625 0.625-1.025-3.75-2.225z"></path></symbol><symbol id="icon-add-to-photos" viewBox="0 0 20 20"><title>add-to-photos</title><path d="M3.333 5h-1.667v11.667c0 0.917 0.75 1.667 1.667 1.667h11.667v-1.667h-11.667v-11.667zM16.667 1.667h-10c-0.917 0-1.667 0.75-1.667 1.667v10c0 0.917 0.75 1.667 1.667 1.667h10c0.917 0 1.667-0.75 1.667-1.667v-10c0-0.917-0.75-1.667-1.667-1.667zM15.833 9.167h-3.333v3.333h-1.667v-3.333h-3.333v-1.667h3.333v-3.333h1.667v3.333h3.333v1.667z"></path></symbol><symbol id="icon-assignment-turned-in" viewBox="0 0 20 20"><title>assignment-turned-in</title><path d="M15.833 2.5h-3.483c-0.35-0.967-1.267-1.667-2.35-1.667s-2 0.7-2.35 1.667h-3.483c-0.917 0-1.667 0.75-1.667 1.667v11.667c0 0.917 0.75 1.667 1.667 1.667h11.667c0.917 0 1.667-0.75 1.667-1.667v-11.667c0-0.917-0.75-1.667-1.667-1.667zM10 2.5c0.458 0 0.833 0.375 0.833 0.833s-0.375 0.833-0.833 0.833-0.833-0.375-0.833-0.833 0.375-0.833 0.833-0.833zM8.333 14.167l-3.333-3.333 1.175-1.175 2.158 2.15 5.492-5.492 1.175 1.183-6.667 6.667z"></path></symbol><symbol id="icon-check-box" viewBox="0 0 20 20"><title>check-box</title><path d="M15.833 2.5h-11.667c-0.925 0-1.667 0.75-1.667 1.667v11.667c0 0.917 0.742 1.667 1.667 1.667h11.667c0.925 0 1.667-0.75 1.667-1.667v-11.667c0-0.917-0.742-1.667-1.667-1.667zM8.333 14.167l-4.167-4.167 1.175-1.175 2.992 2.983 6.325-6.325 1.175 1.183-7.5 7.5z"></path></symbol><symbol id="icon-check-circle" viewBox="0 0 20 20"><title>check-circle</title><path d="M10 1.667c-4.6 0-8.333 3.733-8.333 8.333s3.733 8.333 8.333 8.333 8.333-3.733 8.333-8.333-3.733-8.333-8.333-8.333zM8.333 14.167l-4.167-4.167 1.175-1.175 2.992 2.983 6.325-6.325 1.175 1.183-7.5 7.5z"></path></symbol><symbol id="icon-my-location" viewBox="0 0 20 20"><title>my-location</title><path d="M10 6.667c-1.842 0-3.333 1.492-3.333 3.333s1.492 3.333 3.333 3.333 3.333-1.492 3.333-3.333-1.492-3.333-3.333-3.333zM17.45 9.167c-0.383-3.475-3.142-6.233-6.617-6.617v-1.717h-1.667v1.717c-3.475 0.383-6.233 3.142-6.617 6.617h-1.717v1.667h1.717c0.383 3.475 3.142 6.233 6.617 6.617v1.717h1.667v-1.717c3.475-0.383 6.233-3.142 6.617-6.617h1.717v-1.667h-1.717zM10 15.833c-3.225 0-5.833-2.608-5.833-5.833s2.608-5.833 5.833-5.833 5.833 2.608 5.833 5.833-2.608 5.833-5.833 5.833z"></path></symbol><symbol id="icon-phone" viewBox="0 0 20 20"><title>phone</title><path d="M5.517 8.992c1.2 2.358 3.133 4.283 5.492 5.492l1.833-1.833c0.225-0.225 0.558-0.3 0.85-0.2 0.933 0.308 1.942 0.475 2.975 0.475 0.458 0 0.833 0.375 0.833 0.833v2.908c0 0.458-0.375 0.833-0.833 0.833-7.825 0-14.167-6.342-14.167-14.167 0-0.458 0.375-0.833 0.833-0.833h2.917c0.458 0 0.833 0.375 0.833 0.833 0 1.042 0.167 2.042 0.475 2.975 0.092 0.292 0.025 0.617-0.208 0.85l-1.833 1.833z"></path></symbol><symbol id="icon-send" viewBox="0 0 20 20"><title>send</title><path d="M1.675 17.5l17.492-7.5-17.492-7.5-0.008 5.833 12.5 1.667-12.5 1.667z"></path></symbol><symbol id="icon-settings-phone" viewBox="0 0 20 20"><title>settings-phone</title><path d="M10.833 7.5h-1.667v1.667h1.667v-1.667zM14.167 7.5h-1.667v1.667h1.667v-1.667zM16.667 12.917c-1.042 0-2.042-0.167-2.975-0.475-0.292-0.092-0.617-0.025-0.85 0.2l-1.833 1.833c-2.358-1.2-4.292-3.125-5.492-5.483l1.833-1.842c0.233-0.225 0.3-0.55 0.208-0.842-0.308-0.933-0.475-1.933-0.475-2.975 0-0.458-0.375-0.833-0.833-0.833h-2.917c-0.458 0-0.833 0.375-0.833 0.833 0 7.825 6.342 14.167 14.167 14.167 0.458 0 0.833-0.375 0.833-0.833v-2.917c0-0.458-0.375-0.833-0.833-0.833zM15.833 7.5v1.667h1.667v-1.667h-1.667z"></path></symbol></defs></svg>'
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
        $('.nav').css('display', 'none');
      } else {
        $('.hamburger').addClass('hamburgerActive');
        $('.nav').css('display', 'flex');
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
  animate('.menu__wrap', '.nav', 'slideInDown', 'slideOutUp')
	formInput('.formInput', '.formLabel');
});
