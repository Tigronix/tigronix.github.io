$(document).ready(function(){
	 //mob-menu-плавное появление
    $('.header__open').click(function () {
        $(this).hide();
        $('.header__close').show();
        $('.room__nav').show();
        $('.side__menu').addClass('bounceInDownn').show().fadeIn();
        $('.mob_phone2').addClass('bounceInDownn').addClass('header__on').fadeIn();
        $('.header').addClass('z_index');
        $('.blackout').fadeIn(400);
        $('.global_wrapper').addClass('body_overflow');
    });
    $('.header__close').click(function () {
        $(this).hide();
        $('.room__nav').fadeOut();
        $('.side__menu').removeClass('bounceInDownn').fadeOut();
        $('.mob_phone2').removeClass('bounceInDownn').fadeOut();
        $('.header__open').show();
        $('.blackout').fadeOut(400);
        $('.header').removeClass('z_index');
        $('.global_wrapper').removeClass('body_overflow');
    });
    $('.blackout').click(function () {
        $(this).fadeOut(400);
        $('.header__close').removeClass('bounceInDownn').fadeOut();
        $('.header__open').removeClass('bounceInDownn').fadeIn();
        $('.room__nav').fadeOut(400);
        $('.side__menu').fadeOut(400);
        $('.mob_phone2').fadeOut(400);
        $('.header').removeClass('z_index');
        $('.global_wrapper').removeClass('body_overflow');
    });
});