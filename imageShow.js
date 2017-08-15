function readURL(input) {
        var imageName = input.value;
        var extension = imageName.substring(imageName.lastIndexOf('.')+1).toLowerCase();
        $("#status").show();
        if (extension == "jpg" || extension == "png" || extension == "jpeg" || extension == "bmp") {
            if (input.files && input.files[0]) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    $('#imageShow')
                        .attr('src', e.target.result)
                        .width(200)     
                    $("#status").hide();
                };
                reader.readAsDataURL(input.files[0]);
            }
        }else{
                alert("Por favor escolha um formato válido");
                $("#status").hide();
            }    
}






