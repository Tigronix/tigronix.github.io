/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


(function($){
    $(function(){
       $('.our-service .list .carousel .carousel-inner .item, .our-reviews .list li').each(function(){
            $(this).click(function(e){
                if(this==e.target)
                {
                    $(this).find('img').trigger('click');
                    return false;
                }
            });
       });
       $('.slick').each(function(){
           var active = $();
           $(this).slick();
           $(this).on('setPosition',function(){
                var width = $(window).width();
                /*if(width>=1385)*/
                if(width>=1873)
                {
                    $(this).slick('slickSetOption','slidesToShow',4);
                }else if (width>=1300)
                {
                    $(this).slick('slickSetOption','slidesToShow',3);
                }else if(width>=1107)
                {
                    $(this).slick('slickSetOption','slidesToShow',2);
                }else
                {
                    $(this).slick('slickSetOption','slidesToShow',1);
                }
                var ref = $(this).find('.slick-active').attr('href');
                active.removeClass('active');
                active = $(ref);
                active.addClass('active');
           });
       });
       var width = $(window).width();
       if(width>680)
       {
            var ClientsUpdateCols = function(){
                var width = $(window).width();
                if(width>=1410)
                {
                   $(this).slick('slickSetOption','slidesToShow',5);
                }else if(width>=1118)
                {
                   $(this).slick('slickSetOption','slidesToShow',4);
                }else if(width>=1042)
                {
                    $(this).slick('slickSetOption','slidesToShow',3);
                }else if(width>=866)
                {
                    $(this).slick('slickSetOption','slidesToShow',2);
                }else
                {
                    $(this).slick('slickSetOption','slidesToShow',1);
                    $(this).slick('slickSetOption','slidesPerRow',4);
                }
            };
            ClientsUpdateCols.call($('.tizzers-our-clients ul').slick().on('setPosition',ClientsUpdateCols));
        }
    });
})(jQuery);