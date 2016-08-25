$(document).ready(function(){
    //Слайдер на странице товара
    $('#product-slider').slick();  
    
    //Для прилипания над футером
    var Elem = $('.footer').offset().top;
    var footer = $('footer').innerHeight();
    $(window).scroll(function(){
        if ($(this).scrollTop() > Elem - footer ) {
            $('.header').addClass('unfixed');
        }
        else {
            $('.header').removeClass('unfixed');
        }
    });
    
    //Мобильное меню
    $('#mob-menu').click(function(){
       $(this).hide()
       $('#mob-close').show()
       $('.mob-switch').show()
    });
    $('#mob-close').click(function(){
       $(this).hide()
       $('.mob-switch').hide()
       $('#mob-menu').show()
    });
    
    //Стилизованные селекты и т.п.
    (function($) {
        $(function() {

          $('input, select').styler();

        });
    })(jQuery);    

});