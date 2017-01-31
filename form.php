<?php
if (isset($_POST['name'])) {$name = $_POST['name'];}
if (isset($_POST['phone'])) {$phone = $_POST['phone'];}
if (isset($_POST['textarea'])) {$textarea = $_POST['textarea'];}


require 'mail/PHPMailerAutoload.php';

$mail = new PHPMailer;

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'mail.kuhnistil.ru';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'zakaz@kuhnistil.ru';                 // SMTP username
$mail->Password = 'R2n9V5p4';                           // SMTP password
$mail->CharSet = "Windows-1251";
//$mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
//$mail->Port = 25;                                    // TCP port to connect to

$mail->setFrom('zakaz@kuhnistil.ru', 'Med-Klinik');
$mail->addAddress('homebog@yandex.ru', 'Получатель');     // Add a recipient
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');

//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = mb_convert_encoding('Сообщение с сайта med-klinik.ru', "CP1251", "UTF-8");
$mail->Body    = mb_convert_encoding('Имя: '.$name.' <br>Телефон: '.$phone.' <br>Описание проблемы:'. $textarea, "CP1251", "UTF-8");;
$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

if(!$mail->send()) {
    echo "<p><b>Ошибка. Сообщение не отправлено!</b>";
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo "<b>Спасибо за отправку вашей заявки!</b><p>";
	echo "<a href=index.php>Нажмите,</a> чтобы вернуться на главную страницу";
}	
echo "</p>";

?>