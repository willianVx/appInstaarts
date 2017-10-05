<?php 
	include "conexao.php";
	if (isset($_POST['submit'])) {
		$file = $_FILES['file'];

		$fileName = $_FILES['file']['name'];
		$fileTmpName = $_FILES['file']['tmp_name'];
		$fileSize = $_FILES['file']['size'];
		$fileError = $file['error'];
		$fileType = $_FILES['file']['type'];

		$target_dir = "uploads/";
		$target_file = $target_dir . basename($_FILES["file"]["name"]);

		//echo "</br> $fileName, $fileSize, $fileType, $fileError";

		$fileExt = explode('.', $fileName);
		$fileActualExt = strtolower(end($fileExt)); 

		$allowed = array('jpg', 'jpeg', 'png', 'bmp');

		$fileNewName = md5(date("h:i:sa")).$fileName;

		if (in_array($fileActualExt, $allowed)) {
			if ($fileError === 0) {
				if ($fileSize < 2000000000) {
						if (move_uploaded_file($_FILES["file"]["tmp_name"], $target_file. $fileNewName)) {
					    echo "A imagem ". basename( $_FILES["file"]["name"]). " foi salva";
					    } else {
					    echo "n";
					    }
					    $sql = "INSERT INTO image1 (name, size, type, linkName)
						VALUES ('$fileName', '$fileSize', '$fileType', '$target_file.$fileNewName')";
						if ($conn->query($sql) === TRUE) {
						} else {
						    echo "Error: " . $sql . "<br>" . $conn->error;
						}
						$conn->close();
						echo "http://localhost/appInsta/".$target_file.$fileNewName;
						//header("location: http://localhost/appInsta/appinstaartes.php");
					}else{
						echo "Sua imagem é muito grande";
					}
			}else{
				echo "Ocorreu algum erro ao fazer o Upload da imagem";
			}
		}else{
			echo "Por favor ecolha uma imagem nos formatos: jpg, png ou bmp";
		}
	}
 ?>
 <!DOCTYPE html>
 <html>
 <head>
 	<title>Upload</title>
 	<script type="text/javascript" src="imageShow.js"></script>
 	<link rel="stylesheet" type="text/css" href="estilo.css">
	<script class="jsbin" src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
 </head>
 <body>
 <div class="col-xs-12">
 	<div class="col-xs-6">
 	<img src="img/upload-icon.png" id="imageShow" class="well well-sm">
 	<span id="status" style="display: none;"><img src="img/loader.gif" alt="Enviando..." />Processando</span>
 	</div>
 	<div class="col-xs-6">
 	<form action="upload.php" method="POST" enctype="multipart/form-data" class="form-group">
          <input id="imageShow" type="file" onchange="readURL(this)" name="file"> <br>
          <button type="submit" name="submit" class="btn btn-default" id="btnUsarImagem">Usar essa imagem</button> 
    </form>
    </div>
</div>    
 </body>
 </html>









