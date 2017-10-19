<?php 
	include "conexao.php";
	if (isset($_POST['preco'])) {
		$moldura = $_POST['moldura'];
		$acabamento = $_POST['acabamento'];
		$x = $_POST['largura'];
		$y = $_POST['largura'];
		$preco = $_POST['preco'];

		$sql = "INSERT INTO pedido (largura, altura, acabamento, moldura, preco, amazonLink)
		VALUES ('$x', '$y', '$acabamento', '$moldura', '$preco', 'www.zemob.com.br/image1')";

			if ($conn->query($sql) === TRUE) {
		    	echo "Ordem de compra salva com sucesso!";
				} else {
		    	echo "Error: " . $sql . "<br>" . $conn->error;
				}

				$conn->close();

			}
 ?>