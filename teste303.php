<?php 
	include "conexao.php";
	$sql = "INSERT INTO pedido (largura, altura, acabamento, moldura, preco, amazonLink)
VALUES ('10', '80', 'acm', 'basel', '7000', 'www.zemob.com.br/image1')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();

 ?>