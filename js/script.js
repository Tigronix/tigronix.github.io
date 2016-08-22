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

});