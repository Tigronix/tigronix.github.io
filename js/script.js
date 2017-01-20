$(document).ready(function(){
  $('.photo').owlCarousel({
        animateOut: 'fadeOut', 
        animateIn: 'zoomOut', 
        items: 4, 
        autoplay: true,
        autoplayHoverPause: true, 
        autoplayTimeout: 3000,
        nav: true,
        loop: true,
        margin: 36,
        responsive: {
            0 : {
               nav: false
            },
            769: {
                nav: true
            }
        }
     });
    $('.slider_main').owlCarousel({
        animateOut: 'fadeOut', 
        animateIn: 'zoomOut', 
        items: 1, 
        autoplay: true,
        autoplayHoverPause: true, 
        autoplayTimeout: 3000,
        nav: true,
        loop: true,
        margin: 36,
        responsive: {
            0 : {
               nav: false
            },
            769: {
                nav: true
            }
        }
     });
    
});