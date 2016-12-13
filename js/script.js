$(document).ready(function(){
   //same_rooms
    $('.same_rooms').owlCarousel({
        items: 3, 
        nav: true,
        loop: true,
        margin: 80,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2,
                margin: 20
            },
            768:{
                items:2,
                margin: 20
            },
            769:{
                items:3,
                margin: 20
            }
            
        }
     }); 
});