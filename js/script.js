$(document).ready(function(){
    //тайтл и ссылка на товар используя форму отправки
    $('.text-block .button').click(function(){
       var title = $(this).prev().text();
        $('#product_name').val(title);
    });
    
    
    //header-scroll
    var menu = $('.menu');
    $(window).scroll(function(){
        var top = $(this).scrollTop();

        if (top > 125) {
            menu.addClass('fixed').fadeIn(400);
            $('.fixed .fa').show();
            $('.fixed .phone').show();

        } else {
            menu.removeClass('fixed');
            $('.menu .fa').hide();
            $('.menu .phone').hide();
        }
    }); 
    //mob-menu
        $('#mob-menu').click(function(){
           $(this).hide();
           $('#mob-close').show();
           $('.mob-switch').fadeIn(300);
        });
        $('#mob-close').click(function(){
           $(this).hide();
           $('.mob-switch').fadeOut(300);
           $('#mob-menu').show();
    }); 
    //slider
    $('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: true,
	  autoplay: true,
      autoplaySpeed: 5000,
	  pauseOnFocus: true,
      asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 10,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        focusOnSelect: true,
        arrows: false,
      responsive: [
        {
          breakpoint: 1601,
          settings: {
            slidesToShow: 8,
          }
        },
        {
          breakpoint: 1281,
          settings: {
            slidesToShow: 6,
          }
        },
        {
          breakpoint: 741,
          settings: {
            slidesToShow: 4,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 2,
          }
        },
        
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 1,
          }
        },
          
      ]
    });    
    //hover в слайдере
    $('.slick-prev').hover(function(){
       if ($(this).hover) {
           $('.fa-angle-left').toggleClass('hover');
       }
    });
    $('.slick-next').hover(function(){
       if ($(this).hover) {
           $('.fa-angle-right').toggleClass('hover');
       }
    });
    
    //соц. кнопки
    (function() {
      if (window.pluso)if (typeof window.pluso.start == "function") return;
      if (window.ifpluso==undefined) { window.ifpluso = 1;
        var d = document, s = d.createElement('script'), g = 'getElementsByTagName';
        s.type = 'text/javascript'; s.charset='UTF-8'; s.async = true;
        s.src = ('https:' == window.location.protocol ? 'https' : 'http')  + '://share.pluso.ru/pluso-like.js';
        var h=d[g]('body')[0];
        h.appendChild(s);
      }})();
    
    //fancybox
    $(".fancybox").fancybox();
    
    //form-popup
    $('.genplan .sale .text-block .button').click(function(){
       $('#form-popup').fadeIn(400); 
    });
    $('.genplan .price-table .green .cell:nth-child(4)').click(function(){
       $('#form-popup').fadeIn(400); 
    });
    $('#form-close').click(function(){
       $('#form-popup').fadeOut(400); 
    });
});