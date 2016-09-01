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
});