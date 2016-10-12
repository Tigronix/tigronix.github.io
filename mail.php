<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
	if (isset($_POST['name'])) {$name = $_POST['name'];}
	if (isset($_POST['phone'])) {$phone = $_POST['phone'];}
	if (isset($_POST['number'])) {$number = $_POST['number'];}
	if (isset($_POST['message'])) {$message = $_POST['message'];}

	$to = "scooter5@mail.ru";
	$sendfrom   = "Заявка_с_сайта_Ёлки";
	$headers  = "From: " . strip_tags($sendfrom) . "\r\n";
	$headers .= "Reply-To: ". strip_tags($sendfrom) . "\r\n";
	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-Type: text/html;charset=utf-8 \r\n";
	$subject = "$formData";
	$message = "$formData
		<p><b>Имя:</b> $name</p>
		<p><b>Телефон:</b> $phone</p>
		<p><b>Колличество:</b> $number</p>
		<p><b>Сообщение:</b> $message</p>
	";
	$send = mail ($to, $sendfrom, $message, $headers);
	if ($send == 'true')
	{
		echo '<div class="success"></div>';
	}
	else
	{
		echo '<div class="false"></div>';
	}
}?>