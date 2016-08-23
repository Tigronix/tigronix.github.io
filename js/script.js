$(document).ready(function(){
    $('#index-slider').slick();  
    
    //header-scroll
    var header = $('.header');
    $(window).scroll(function(){
        var top = $(this).scrollTop();
        console.log(top);

        if (top > 100) {
            header.addClass('fixed');

        } else {
            header.removeClass('fixed');
        }
    });
    
    //mob-menu
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

});