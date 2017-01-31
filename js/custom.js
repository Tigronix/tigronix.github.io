$(document).ready(function(){
	//Мобильное меню
    $('.header__open').click(function () {
        $(this).hide();
        $('.header__close').show();
        $('.header__nav').addClass('bounceInDownn').fadeIn(400);
        $('.mob_phone2').addClass('bounceInDownn').addClass('header__on').fadeIn();
        $('.blackout').fadeIn(400);
        $('.global_wrapper').addClass('body_overflow');
    });
    $('.header__close').click(function () {
        $(this).hide
        $('.header__nav').removeClass('bounceInDownn').fadeOut(400);
        $('.mob_phone2').removeClass('bounceInDownn').fadeOut(400);
        $('.header__open').fadeIn(400);
        $('.header__close').fadeOut(400);
        $('.blackout').fadeOut(400);
        $('.global_wrapper').removeClass('body_overflow');
    });
    $('.blackout').click(function () {
        $(this).fadeOut(400);
        $('.header__close').removeClass('bounceInDownn').fadeOut(400);
        $('.header__open').removeClass('bounceInDownn').fadeIn(400);
        $('.header__nav').fadeOut(400);
        $('.mob_phone2').fadeOut(400);
        $('.global_wrapper').removeClass('body_overflow');
    });
});
$('.tbl_spec_in_title1').click(function() {
	$('.tbl_spec_in1').slideToggle(500);	
});
$('.tbl_spec_in_title3').click(function() {
	$('.tbl_spec_in3').slideToggle(500);	
});	
$(function(){
	$('.bxslider').bxSlider({
        mode: 'fade',
        pager: true,
		controls: true,
		nextText: 'Next',
		prevText: 'Prev',
		//auto: true,
		pause: 10000
	});
	$('.bxslider_left').bxSlider({
        mode: 'fade',
        pager: true,
		controls: true,
		nextText: 'Next',
		prevText: 'Prev',
		//auto: true,
		pause: 4000
	});
	$('.lic a').lightBox();
});
	$(".form_zayavka").validate({
        
       rules:{ 
        
            name:{
                required: true,
                minlength: 3,
                maxlength: 20,
            },
            
            phone:{
                required: true,
                minlength: 9,
                maxlength: 11,
            },
       },
    });