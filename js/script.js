$(document).ready(function(){
   $('.logo').hover(function(){
      $(this).toggleClass('rate'); 
   });
    //fancybox
    $(".fancybox").fancybox();
    
    //social-likes
    (function() {
        if (window.pluso)if (typeof window.pluso.start == "function") return;
        if (window.ifpluso==undefined) { window.ifpluso = 1;
                                        var d = document, s = d.createElement('script'), g = 'getElementsByTagName';
                                        s.type = 'text/javascript'; s.charset='utf-8'; s.async = true;
                                        s.src = ('https:' == window.location.protocol ? 'https' : 'http')  + '://share.pluso.ru/pluso-like.js';
                                        var h=d[g]('body')[0];
                                        h.appendChild(s);
                                       }})();
});