<?php
if (isset($_POST['name'])) {$name = $_POST['name'];}
if (isset($_POST['phone'])) {$phone = $_POST['phone'];}
if (isset($_POST['textarea'])) {$textarea = $_POST['textarea'];}
	
$to = "homebog@yandex.ru"; /*Укажите ваш адрес электоронной почты logonklinika@mail.ru, homebog@yandex.ru*/
$headers = "Content-type: text/plain; charset = utf-8";
$subject = "Сообщение с сайта med-klinik.ru";
$message = "Имя: $name \nТелефон: $phone \nОписание проблемы: $textarea";
$send = mail ($to, $subject, $message, $headers);
if ($send == 'true')
{
echo "<b>Спасибо за отправку вашей заявки!</b><p>";
echo "<a href=index.php>Нажмите,</a> чтобы вернуться на главную страницу";
}
else 
{
echo "<p><b>Ошибка. Сообщение не отправлено!</b>";
}
?>