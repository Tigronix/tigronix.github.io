$(document).ready(function(){
    //mob-menu
    $('#mob-menu').click(function(){
        $(this).fadeOut(300);
        $('#mob-close').fadeIn(300);
        $('.mob-switch').addClass('on').fadeIn(300);
    });
    $('#mob-close').click(function(){
        $(this).fadeOut(300);
        $('.mob-switch').removeClass('on').fadeOut(300);
        $('#mob-menu').fadeIn(300);
    });
    //slider-main
    $('.slider-main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        /*autoplay: true,
        autoplaySpeed: 5000,*/
        pauseOnFocus: true
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
    //header-scroll
    var header = $('.header');
    $(window).scroll(function(){
        var top = $(this).scrollTop();
        if (top > 100) {
            header.addClass('header__small');
        }
        else {
            header.removeClass('header__small');
        }
    });
	//fancbyox
	$(".fancybox").fancybox();
});
