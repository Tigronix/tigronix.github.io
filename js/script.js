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
    //форма отправки
    document.getElementById('feedback-form').addEventListener('submit', function(evt){
      var http = new XMLHttpRequest(), f = this;
      evt.preventDefault();
      http.open("POST", "contacts.php", true);
      http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      http.send("nameFF=" + f.nameFF.value + "&contactFF=" + f.contactFF.value + "&messageFF=" + f.messageFF.value);
      http.onreadystatechange = function() {
        if (http.readyState == 4 && http.status == 200) {
          alert(http.responseText + ', Ваше сообщение получено.\nНаши специалисты ответят Вам в течении 2-х дней.\nБлагодарим за интерес к нашей фирме!');    
          f.messageFF.removeAttribute('value'); // очистить поле сообщения (две строки)
          f.messageFF.value='';
        }
      }
      http.onerror = function() {
        alert('Извините, данные не были переданы');
      }
    }, false);    
});