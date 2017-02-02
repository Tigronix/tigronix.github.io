$(document).ready(function(){
  //photo_slider
  $('.photo_slider').owlCarousel({
        items: 4, 
        autoplay: true,
        autoplayHoverPause: true, 
        smartSpeed: 1000,
        nav: true,
        loop: true,
        margin: 36,
        responsive: {
            0 : {
               items: 1,
            },
            480 : {
               items: 2,
            },
            769 : {
               items: 3,
            },
            1025: {
                items: 4,
            }
        }
     });
    //slider-main
    var owl = $('.slider-main');
        owl.owlCarousel({
        animateOut: 'fadeOut', 
        animateIn: 'zoomOut', 
        items: 1, 
        nav: true,
        loop: true,
		autoplay: true,
		smartSpeed: .5,
		autoplayTimeout: 4000
        
     });
    // Listen to owl events:
    owl.on('changed.owl.carousel', function(event) {
        //$('.slider-nav_item:eq('+event.page.index+')').addClass('active-slide').siblings().removeClass('active-slide');
		$("#os-phrases > h2").lettering('words').children("span").lettering().children("span").lettering();
    })
    
    //Мобильное меню
    $('.header__open').click(function () {
        $(this).hide();
        $('.header__close').show();
        $('.header__nav').addClass('bounceInDownn').fadeIn(400);
        $('.mob_phone2').addClass('bounceInDownn').addClass('header__on').fadeIn();
        $('.blackout').fadeIn(400);
        //$('.global_wrapper').addClass('body_overflow');
        $('.header_phone').fadeOut(400);
    });
    $('.header__close').click(function () {
        $(this).hide
        $('.header__nav').removeClass('bounceInDownn').fadeOut(400);
        $('.mob_phone2').removeClass('bounceInDownn').fadeOut(400);
        $('.header__open').fadeIn(400);
        $('.header__close').fadeOut(400);
        $('.blackout').fadeOut(400);
        //$('.global_wrapper').removeClass('body_overflow');
        $('.header_phone').fadeIn(400);
    });
    $('.blackout').click(function () {
        $(this).fadeOut(400);
        $('.header__close').removeClass('bounceInDownn').fadeOut(400);
        $('.header__open').removeClass('bounceInDownn').fadeIn(400);
        $('.header__nav').fadeOut(400);
        $('.mob_phone2').fadeOut(400);
        //$('.global_wrapper').removeClass('body_overflow');
        $('.header_phone').fadeIn(400);
    });
	
    
    
	// media query event handler
if (matchMedia) {
  var mq = window.matchMedia("(min-width: 1024px)");
  mq.addListener(WidthChange);
  WidthChange(mq);
}

// media query change
function WidthChange(mq) {
  if (mq.matches) {
    // window width is at least 500px
  } else {
    // window width is less than 500px
	  $('.angle').click(function () {
        $('.blackout').fadeOut(400);
        $('.header__close').removeClass('bounceInDownn').fadeOut(400);
        $('.header__open').removeClass('bounceInDownn').fadeIn(400);
        $('.header__nav').fadeOut(400);
        $('.mob_phone2').fadeOut(400);
        $('.header_phone').fadeIn(400);
    });
  }

}
	
    //fancybox
    $(".fancybox").fancybox();     
    
    //header-scroll
    var header = $('.header');
    $(window).scroll(function(){
        var top = $(this).scrollTop();
        if (top > 100) {
            header.addClass('header_opacity');
        }
        else {
            header.removeClass('header_opacity');
        }
    });
	
	//popup
		$('.popup__open').click(function(){
			$('.popup_wrap').fadeIn(400);
		});
	
		$(document).mouseup(function (e) {
			var container = $(".popup_wrap");
			if (container.has(e.target).length === 0){
				container.fadeOut(400);
			}
		});
		$('.popup_close').click(function(){
			$('.popup_wrap').fadeOut(400);
		});

		$(".popup__phone").mask("+7(999)999-99-99",{placeholder:"+7(___)___-__-__"});
	
	//Плавный скролл для ссылок
	$("a.angle").click(function() {
		var elementClick = $(this).attr("href")
		var destination = $(elementClick).offset().top - 120;
		jQuery("html:not(:animated),body:not(:animated)").animate({
		  scrollTop: destination
		}, 800);
		return false;
	});
	
	//text
	$('.owl-carousel').owlCarousel({
		onDragged: callback
	});
	function callback(event) {
		
	}
	$("#os-phrases > h2").lettering('words').children("span").lettering().children("span").lettering();
});