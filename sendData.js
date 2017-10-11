
//send data to PHP by click and set progress bar 
$(function(){
	$('#myForm').ajaxForm({
		beforeSend:function(){
			$(".progress").show();
		},
		uploadProgress:function(event,position,total,percentComplete){
			$(".progress-bar").width(percentComplete+"%");
			//$(".sr-only").html(percentComplete+"%");
		},
		success:function(){
			$(".progress").hide();
		},
		complete:function(response){
			//$(".image").html("<img src='"+response.response.Text+"'width='100%'/>")
		}
	});
	$(".progress").hide();
});