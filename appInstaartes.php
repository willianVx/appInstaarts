<?php 
include 'conexao.php';
?>
<!DOCTYPE html>
<html>
<head>
	<title>Teste Aplicação Instaartes Final</title>
	<link rel="stylesheet" type="text/css" href="estilo.css">
	<script type="text/javascript" src="imageShow.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

	<meta charset="utf-8">
	
	<meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

	<script type="text/javascript" src="http://feather.aviary.com/imaging/v3/editor.js"></script>

	<link class="jsbin" href="http://ajax.googleapis.com/ajax/libs/jqueryui/1/themes/base/jquery-ui.css" rel="stylesheet" type="text/css" />
	<script class="jsbin" src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
	<script class="jsbin" src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.0/jquery-ui.min.js"></script>

  <script type="text/javascript" src="bar.js"></script>
  <script type="text/javascript" src="somaPedido.js"></script>
  <script type="text/javascript" src="definePreco.js"></script>
</head>
<body onload="formulaTotal()">
<script type="text/javascript">
	var featherEditor = new Aviary.Feather({
        apiKey: '995ec79f58ba414eadd228d643192c39',
        theme: `light`,
        language: `pt_BR`,
        tools: ['effects','overlays','orientation','crop','resize','lighting','color','focus','vignette'],
       // para forçar a ativação de uma unica ferramenta exemplo --> initTool:'crop', 
        onSave: function(imageID, newURL) {
            var img = document.getElementById(imageID);
            img.src = newURL;
            featherEditor.close();
        }
    });
    function launchEditor(id, src) {
        featherEditor.launch({
            image: id,
            url: src
        });
        return false;
    }
    var featherEditor = new Aviary.Feather(configObj);
</script>
	<div class="row">
		<div class="col-md-12" id="envelope">
			<div class="col-md-12">
			 <div id="canvas">
			 <img src="img/imagem-1.jpg" id= "imageShow">
			 </div>
			</div>
      <section id="up-image">
				<button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Subir Imagem</button>
      </section>
  <!-- Modal -->
    <div class="modal fade" id="myModal" role="dialog">
      <div class="modal-dialog">
        <!-- Modal content-->
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">Escolha Sua imagem</h4>
          </div>
        <div class="modal-body">
          <span>Por favor ecolha uma imagem nos formatos: jpg, png ou pdf</span><br><br>
          <form action="upload.php" method="POST" enctype="multipart/form-data" >
          <input id="imageShow" type="file" onchange="readURL(this);" name="file" required>  
          <button type="submit" name="submit">Salvar</button> 
          </form>
        </div>
         <div class="modal-footer">
          <button type="button" type="submit" name="submit" class="btn btn-default" data-dismiss="modal">Ok</button>
        </div>
        </div>
      </div>
      </div>
				<p>ou</p>
				<span><a href="#">Use uma das nossas</a></span>
				<a href="#" onclick="return launchEditor('imageShow', 'http://localhost/appInsta/img/imagem-1.jpg')" >Editar!</a>

    <div class="somaProdutos">
      <span id="s-tamanho">40x60cm</span><span id="s-metacrilato">Metacrilato 3mm</span><span id="s-moldura"></span>=<span id="s-preco">Preço</span>
    </div>  
      <div class="tamanhoMaterial">
          <div class="b_tamanho col-sm-4">
                <!-- Trigger the modal with a button -->
                <button type="button" class="btn btn-default btn-lg" data-toggle="modal" data-target="#tamanho">Tamanho</button>
                <!-- Modal -->
                <div class="modal fade" id="tamanho" role="dialog">
                  <div class="modal-dialog">
                    <!-- Modal content-->
                    <div class="modal-content">
                      <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title">Tamanhos padrão</h4>
                      </div>
                      <div class="modal-body">
                        <div class="checkbox">
                          <form>
                            <div id="retangulares" class="col-sm-4">
                            <p>Retangulares</p>
                            <label onclick="T12x18()"><input type="radio" name="tamanho" value="12x18"> 12x18</label><br>
                            <label onclick="T20x30()"><input type="radio" name="tamanho" value="20x30"> 20x30</label><br>
                            <label onclick="T30x45()"><input type="radio" name="tamanho" value="30x45"> 30x45</label><br>
                            <label onclick="T40x60()"><input type="radio" name="tamanho" value="40x60" checked> 40x60</label><br>
                            <label onclick="T60x90()"><input type="radio" name="tamanho" value="60x90"> 60x90</label><br>
                            <label onclick="T90x45()"><input type="radio" name="tamanho" value="90x45"> 90x45</label><br>
                            </div>
                            <div id="quadrados" class="col-sm-4">
                            <p>Quadrados</p>
                            <label onclick="T20x20()"><input type="radio" name="tamanho" value="20x20"> 20x20</label><br>
                            <label onclick="T30x30()"><input type="radio" name="tamanho" value="30x30"> 30x30</label><br>
                            <label onclick="T45x45()"><input type="radio" name="tamanho" value="45x45"> 45x45</label><br>
                            <label onclick="T60x60()"><input type="radio" name="tamanho" value="60x60"> 60x60</label><br>
                            <label onclick="T90x90()"><input type="radio" name="tamanho" value="90x90"> 90x90</label><br>
                            </div>
                            <div id="panoramicos" class="col-sm-4">
                            <p>Panoramicos</p>
                            <label onclick="T18x12()"><input type="radio" name="tamanho" value="18x12"> 18x12</label><br>
                            <label onclick="T20x30()"><input type="radio" name="tamanho" value="20x30"> 20x30</label><br>
                            <label onclick="T30x45()"><input type="radio" name="tamanho" value="30x45"> 30x45</label><br>
                            <label onclick="T40x60()"><input type="radio" name="tamanho" value="40x60"> 40x60</label><br>
                            </div>

                          </form>
                              <div class="col-sm-6">
                              </div>  
                        </div>
                          </div>
                          <form class="col-sm-6">
                            <h4>Tamanho personalizado</h4>
                              <div class="form-group">
                                  <label>X:</label>
                                  <input type="number" id="x" class="form-control" placeholder="Comprimento em cm">
                              </div>
                              <div class="form-group">    
                                  <label>Y:</label>
                                  <input type="number" id="y" class="form-control" placeholder="Largura em cm">
                              </div>    
                                  <button type="button" class="btn btn-default" data-dismiss="modal" onclick="tamanhoUsuario()">Usar tamanho personalizado</button>
                            </form>
                          <div class="modal-footer">
                                  <button type="button" class="btn btn-default" data-dismiss="modal">OK</button>
                          </div>
                        </div>
                      </div>
                    </div>
    			</div>
              <!-- tamanho material e moldura -->
          <div class="container m_material col-sm-4">
              <!-- Trigger the modal with a button -->
                <button type="button" class="btn btn-default btn-lg" data-toggle="modal" data-target="#material">Acabamento</button>

                <!-- Modal -->
                <div class="modal fade" id="material" role="dialog">
                  <div class="modal-dialog">
                  
                    <!-- Modal content-->
                    <div class="modal-content">
                      <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title">Acabamento</h4>
                      </div>
                      <div class="modal-body">
                                      <div class="checkbox">
                                        <nav class="navbar navbar-inverse">
                              <div class="container-fluid">
                                <div class="navbar-header"></div>
                                <ul class="nav navbar-nav">
                                  <li id ="bMeta"><a href="#">Metacrilato</a></li>
                                  <li id ="bPrints"><a href="#">Prints</a></li>
                                  <li id ="bUv"><a href="#">UV Print</a></li>
                                </ul>
                              </div>
                            </nav>
                            <div id="tMeta">
                              <label onclick="meta7()"><ul class="bnt btn-default">META 7mm</ul></label>
                              <label onclick="meta5()"><ul class="bnt btn-default">META 5mm</ul></label>
                              <label onclick="meta4()"><ul class="bnt btn-default" >META 4mm</ul></label>
                              <label onclick="meta3()"><ul class="bnt btn-default">META 3mm</ul></label>
                              <label onclick="photob()"><ul class="bnt btn-default">Photobloco</ul></label>
                              <label onclick="acm5()"><ul class="bnt btn-default">ACM 5mm</ul></label>
                            </div>
                            <div id="tPapel">
                            <label onclick="papelAlgodao()"><ul class="bnt btn-default">Papel algodão</ul></label>
                            <label onclick="acetinato()"><ul class="bnt btn-default">Acetinato</ul></label>
                            <label onclick="brilhante()"><ul class="bnt btn-default">Brilhante</ul></label>
                            <label onclick="fosco()"><ul class="bnt btn-default">Fosco</ul></label>
                            <label onclick="canvas()"><ul class="bnt btn-default">Canvas</ul></label>
                            </div>
                            <div id="tUv">
                            <label onclick="uvPs()"><ul class="bnt btn-default">UV Sobre PS</ul></label>
                            <label onclick="uvAcm()"><ul class="bnt btn-default">UV Sobre ACM</ul></label>
                            </div>
                        </div>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Ok</button>
                      </div>
                    </div>
                  </div>
                </div>       
          </div>
          <div class="moldura col-sm-4">
  <!-- Trigger the modal with a button -->
  <button type="button" class="btn btn-default btn-lg" data-toggle="modal" data-target="#moldura">Moldura</button>

  <!-- Modal -->
  <div class="modal fade" id="moldura" role="dialog">
    <div class="modal-dialog">
      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">Moldura</h4>
        </div>
        <div class="modal-body">
                        <div class="checkbox">
                        <nav class="navbar navbar-inverse">
                <div class="container-fluid">
                  <div class="navbar-header"></div>
                  <ul class="nav navbar-nav">
                    <li id="b-classica"><a href="#">Classica</a></li>
                    <li id="b-contemporanea"><a href="#">Contemporanea</a></li>
                    <li id="b-moderna"><a href="#">Moderna</a></li>
                  </ul>
                </div>
              </nav>
                    <div id="bMoldura">
                      <div id="m-classica">
                       <label onclick="florenca()"><ul>Florença</ul></label>
                       <label onclick="instambul()"><ul>Istambul</ul></label>
                       <label onclick="paris()"><ul>Paris</ul></label>
                       <label onclick="roma()"><ul>Roma</ul></label>
                      </div>
                      <div id="m-contemporanea">
                       <label onclick="atenas()"><ul>Atenas</ul></label>
                       <label onclick="basel()"><ul>Basel</ul></label>
                       <label onclick="berlim()"><ul>Berlim</ul></label>
                       <label onclick="miami()"><ul>Miami</ul></label>
                       <label onclick="novaYork()"><ul>Nova York</ul></label>
                       <label onclick="saoPaulo()"><ul>São Paulo</ul></label>
                      </div>
                      <div id="m-moderna">
                       <label onclick="amazonas()"><ul>Amazonas</ul></label>
                       <label onclick="amsterdam()"><ul>Amsterdam</ul></label>
                       <label onclick="buenosAires()"><ul>Buenos Aires</ul></label>
                       <label onclick="londres()"><ul>Londres</ul></label>
                       <label onclick="santiago()"><ul>Santiago</ul></label>
                      </div>
                    </div>
                    </div>
        </div>
        <div class="modal-footer">
          <span><input type="radio" name="semMoldura">Sem Moldura</span>
          <button type="button" class="btn btn-default" data-dismiss="modal">Ok</button>
        </div>
      </div>
      
    </div>
  </div>
  
</div>
    </div>  
</div>
</div>
</body>
</html>