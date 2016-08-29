$(document).ready(function(){
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
    
    //Для прилипания над футером
    /*var fixed = $('.fixed-menu').offset().top;
    var Elem = $('.footer').offset().top;
    var footer = $('.footer').innerHeight();
    console.log(fixed);
    console.log(footer);
    console.log(Elem);
    $(window).scroll(function(){
        if (fixed >= Elem + footer) {
            $('.fixed-menu').addClass('unfixed');
        }
        else {
            $('.fixed-menu').removeClass('unfixed');
        }
    });*/
    	$(document).ready(function() {
		goTop();
		$(document).on('click', '.go-top', function(){
			$('body,html').animate({scrollTop: 0}, 500);
		});
	});
	function goTop(){
		var scroll = $('.fixed-menu').offset().top;
        var footer = $('.footer').offset().top;
        var footer_size = $('.footer').innerHeight();
        var true_class = $('.go-top').hasClass('go-top--show');
        console.log(true_class);
		
		if (scroll >= footer){
			$('.go-top').addClass('go-top--show');
			
		}else{
			$('.go-top').removeClass('go-top--show');
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