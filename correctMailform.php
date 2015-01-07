<?php  
 
require("PHPMailer/PHPMailerAutoload.php"); // path to the PHPMailer class

$mail = new PHPmailer;

$mail->isSMTP();
$mail->SMTPAuth = true;
$mail->SMTPDebug = 3;
$mail->Host = 'smtp.gmail.com';
$mail->Username = 'sndrem@gmail.com';
$mail->Password = 'handball:11';
$mail->SMTPSecure = 'ssl';
$mail->Port = 587;

$mail->From = 'sndrem@gmail.com';
$mail->FromName = 'Sindre Moldeklev';
$mail->addReplyTo('sndrem@gmail.com', 'Reply adress');
$mail->addAddress('sndrem@gmail.com', 'Sindre Moldeklev');

$mail->Subject = 'Here is an email';
$mail->Body = 'This is the body of the email';
$mail->AltBody = 'This is the alternative body';

var_dump($mail->send());


?>