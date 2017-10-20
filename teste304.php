<?php 
	session_start();
	$_SESSION["Testando"] = "apple!!";
	echo $_SESSION["Testando"];
	print_r($_SESSION);
 ?>
 <!DOCTYPE html>
 <html>
 <head>
 	<title></title>
 </head>
 <body>
 	<a href="teste305.php">teste305 agora vai</a>
 </body>
 </html>