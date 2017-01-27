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
        autoplay: true,
        autoplayHoverPause: true, 
        autoplayTimeout: 3000,
        nav: true,
        loop: true,
        
     });
    // Listen to owl events:
    owl.on('changed.owl.carousel', function(event) {
        console.log(event.page.index);
        $('.slider-nav_item:eq('+event.page.index+')').addClass('active-slide').siblings().removeClass('active-slide');
    })
    
    //Мобильное меню
    $('.header__open').click(function () {
        $(this).hide();
        $('.header__close').show();
        $('.header__nav').addClass('bounceInDownn').fadeIn(400);
        $('.mob_phone2').addClass('bounceInDownn').addClass('header__on').fadeIn();
        $('.blackout').fadeIn(400);
        $('.global_wrapper').addClass('body_overflow');
        $('.header_phone').fadeOut(400);
    });
    $('.header__close').click(function () {
        $(this).hide
        $('.header__nav').removeClass('bounceInDownn').fadeOut(400);
        $('.mob_phone2').removeClass('bounceInDownn').fadeOut(400);
        $('.header__open').fadeIn(400);
        $('.header__close').fadeOut(400);
        $('.blackout').fadeOut(400);
        $('.global_wrapper').removeClass('body_overflow');
        $('.header_phone').fadeIn(400);
    });
    $('.blackout').click(function () {
        $(this).fadeOut(400);
        $('.header__close').removeClass('bounceInDownn').fadeOut(400);
        $('.header__open').removeClass('bounceInDownn').fadeIn(400);
        $('.header__nav').fadeOut(400);
        $('.mob_phone2').fadeOut(400);
        $('.global_wrapper').removeClass('body_overflow');
        $('.header_phone').fadeIn(400);
    });
    
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
});