$(document).ready(function(){
    //popup
   $('#open-feed').click(function(){
        $('#feed-popup').fadeToggle(300)
        $('.popup--content').fadeToggle(300)
        $(document).mouseup(function (e) {
            var container = $(".popup--content");
            if (container.has(e.target).length === 0){
            container.hide(300);
            $('#feed-popup').hide(300);
            }
        });  
   });
    $('#popup-close').click(function(){
       $('#feed-popup').hide(300) 
       $('.popup--content').hide(300) 
    });
    //validation
   // $('.form-box').parsley(); 
    $('.form-box').submit(function(e) {
      e.preventDefault();
      $(this).find('.required input, .required textarea').each(function() {
        if(!$(this).val()) {
            $(this).parent().addClass('has-error');
          $(this).attr('placeholder', 'Поле обязательно для заполнения');
        }
        else {
            $(this).parent().removeClass('has-error');
          $(this).attr('placeholder', '');
        }
      });
    });    
    
    //slider-index
    $('#slider').slick({
      arrows: true
    });
    
    //accordion
    $("#accordion > li > div").click(function(){

    if(false == $(this).next().is(':visible')) {
        $('#accordion ul').slideUp(300);
    }
    $(this).next().slideToggle(300);
    });

    $('#accordion ul:eq(0)').show();
});