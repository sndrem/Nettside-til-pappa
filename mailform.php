
<?php 
	
	/* subject and Email variables */
	$emailSubject = 'Crazy php scripting!';
	$webMaster = 'sndrem@gmail.com';

	/* Gathering data variables */
	$emailField = $_POST['email'];
	$fullNameField = $_POST['fullName'];
	$adressField = $_POST['adress'];
	$phoneField = $_POST['phone'];
	$modelField = $_POST['model'];
	$widthField = $_POST['width'];
	$lengthField = $_POST['length'];
	$tableTopField = $_POST['finish'];
	$legField = $_POST['legs'];
	$message = $_POST['comment'];

	$body = <<<EOD
<br><hr><br>
<h1>Takk for at din bestilling.</h1> <br>
Du har bestilt et bord av typen $modelField.

Email: $emailField <br>
Adresse: $adressField <br>
Telefon: $phoneField <br>
Modell: $modelField <br>
Bredde: $widthField <br>
Lengde: $lengthField <br>
Finish: $tableTopField <br>
Bein: $legField <br>
Melding: $message <br> <hr>
EOD;

	$headers = "From: $emailField\r\n";
	$headers .= "Content-type: text/html\r\n";
	$success = mail($webMaster, $emailSubject, $body, $headers);

	/* Results rendered as HTML */

	$theResult = <<<EOD
<!DOCTYPE HTML>
<html>
	<head>
		<meta charset="utf-8">
		<title>Takk</title>
	</head>

	<body>
	<h1>Takk for din bestilling</h1>
	<p>Gratulerer med kjøp av nytt bord</p>

	</body>	
</html>
EOD;

echo "$theResult";
?>
