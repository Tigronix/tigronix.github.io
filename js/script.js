$(document).ready(function(){
    //калькулятор
    var initialPrice = 5500;
    $('#matrix').on('change', function () {
        $('#number').text(initialPrice + parseInt($(this).val()));
    });
    
    //Слайдер на странице товара
    $('#product-slider').slick({
        dots:true,
        arrows: true
    });  
    //hover в слайдере
    $('.slick-prev').hover(function(){
       if ($(this).hover) {
           $('.left-ar').toggleClass('green')
       }
    });
    $('.slick-next').hover(function(){
       if ($(this).hover) {
           $('.right-ar').toggleClass('green')
       }
    });
    
    //тайтл и ссылка на товар используя форму отправки
    var pathname = window.location.pathname;
    var title = $('title').text();
    $('#product-name').val(title + pathname);
    //прилипание над футером    
    $(document).ready(function() {
            goTop();
            $(document).on('click', '.go-top', function(){
                $('body,html').animate({scrollTop: 0}, 500);
            });
        });
        function goTop(){
            var scroll = $(document).scrollTop();

            if (scroll >= $(window).height()){
                $('.go-top').addClass('go-top--show');
            }else{
                $('.go-top').removeClass('go-top--show');
            }

            if (scroll >= $(document).height() - $(window).height() - 0){
                $('.go-top').addClass('go-top--bottom');
            }else{
                $('.go-top').removeClass('go-top--bottom');
            }
        }

        window.onscroll = function() {
            goTop();
        }

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
