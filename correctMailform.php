<?php  
 
require("PHPMailer/PHPMailerAutoload.php"); // path to the PHPMailer class

$mail = new PHPmailer;

$mail->isSMTP();
$mail->SMTPAuth = true;
$mail->SMTPDebug = 4;
$mail->Mailer = 'smtp';
$mail->SMTPSecure = 'ssl';
$mail->Host = 'smtp.gmail.com';
$mail->setFrom('sndrem@gmail.com', 'Sindre Moldeklev');
$mail->Port = 465;
$mail->Username = 'sndrem@gmail.com';
$mail->Password = 'handball:11';


$mail->From = 'sndrem@gmail.com';
$mail->FromName = 'Sindre Moldeklev';
$mail->addReplyTo('sim@tv2.no', 'Reply adress');
$mail->addAddress('sim@tv2.no', 'Sindre Moldeklev');

$mail->Subject = 'Here is an email';
$mail->Body = 'This is the body of the email';
$mail->AltBody = 'This is the alternative body';

echo (extension_loaded('openssl')?'SSL loaded':'SSL not loaded')."\n"; 

var_dump($mail->send());


?>