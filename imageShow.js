/*function readURL(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    $('#imageShow')
                        .attr('src', e.target.result)
                        .width(400)                       
                };
                reader.readAsDataURL(input.files[0]);
            }
        }
 */
 $(document).ready(function(){
     /* #imagem é o id do input, ao alterar o conteudo do input execurará a função baixo */
     $('#imagem').live('change',function(){
         $('#imageShow').html('<img src="ajax-loader.gif" alt="Enviando..."/> Enviando...');
        /* Efetua o Upload sem dar refresh na pagina */           $('#formulario').ajaxForm({
            target:'#imageShow' // o callback será no elemento com o id #imageShow
     });
 })       