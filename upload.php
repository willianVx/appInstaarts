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

		echo "</br> $fileName, $fileSize, $fileType, $fileError";

		$fileExt = explode('.', $fileName);
		$fileActualExt = strtolower(end($fileExt)); 

		$allowed = array('jpg', 'jpeg', 'png', 'pdf');

		$fileNewName = (time()) . $fileName;

		if (in_array($fileActualExt, $allowed)) {
			if ($fileError === 0) {
				if ($fileSize < 2000000000) {
						
						if (move_uploaded_file($_FILES["file"]["tmp_name"], $target_file. $fileNewName)) {
					    echo "The file ". basename( $_FILES["file"]["name"]). " has been uploaded.";
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
						header("location: http://localhost/appInsta/appinstaartes.php");
					}else{
						echo "Sua imagem é muito grande";
					}
			}else{
				echo "Ocorreu algum erro ao fazer o Upload da imagem";
			}
		}else{
			echo "Por favor ecolha uma imagem nos formatos: jpg, png ou tif";
		}
	}
 ?>