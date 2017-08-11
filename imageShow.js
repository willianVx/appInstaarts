function readURL(input) {
        $("#status").show();


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


        }