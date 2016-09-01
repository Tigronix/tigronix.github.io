<!doctype html>
<html>
<head>
   <meta charset="UTF-8">
   <title>Ваше сообщение успешно отправлено</title>
</head>
 
<body>
 
<?php
   $back = "<p><a href=\"javascript: history.back()\">Вернуться назад</a></p>";
 
   if(!empty($_POST['name']) and !empty($_POST['tel']))
    {
      $name = trim(strip_tags($_POST['name']));
      $tel = trim(strip_tags($_POST['tel']));
      $message = trim(strip_tags($_POST['message']));
 
      mail('vditold@yandex.ru', 'Письмо с kopaem.su', 
      'Вам написал: '.$name.'<br />Его номер: '.$tel.'<br />Его почта: '.$mail.'<br />
      Его сообщение: '.$message,"Content-type:text/html;charset=windows-1251");
 
      echo "Ваше сообщение успешно отправлено!<Br> Вы получите ответ в 
      ближайшее время<Br> $back";
 
      exit;
   } 
   else {
      echo "Для отправки сообщения заполните все поля! $back";
      exit;
   }
?>
</body>
</html>