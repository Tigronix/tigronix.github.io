$(document).ready(function(){
    //тайтл и ссылка на товар используя форму отправки
    var pathname = window.location.pathname;
    var title = $('title').text();
    $('#product-name').val(title + pathname);
    
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
      asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
      slidesToShow: 10,
      slidesToScroll: 1,
      asNavFor: '.slider-for',
      focusOnSelect: true
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
});