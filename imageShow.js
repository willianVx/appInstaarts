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
 $(document).ready(function() { 
            // bind 'myForm' and provide a simple callback function 
            $('#formulario').ajaxForm(function() { 
                alert("foi!!"); 
            }); 
        }); */

 // wait for the DOM to be loaded 
$('#file-input').change(function() { 
    // bind 'myForm' and provide a simple callback function 
    $('#form1').ajaxForm({ 
        url: 'upload.php',
        type: 'post',
        succes: function(data){
            alert('churros');
        } 
    }).submit(); 
}); 
