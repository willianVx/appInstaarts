$(document).ready(function(){
		$("#tPapel").hide();
		$("#tUv").hide();
		$("#m-contemporanea").hide();
		$("#m-moderna").hide();

		$("#bMeta").click(function(){
        $("#tMeta").show();

        $("#tPapel").hide();
		$("#tUv").hide();
    });
		$("#bPrints").click(function(){
        $("#tPapel").show();

        $("#tMeta").hide();
		$("#tUv").hide();
    });
		$("#bUv").click(function(){
        $("#tUv").show();

        $("#tPapel").hide();
		$("#tMeta").hide();
    });
		$("#b-classica").click(function(){
        $("#m-classica").show();

        $("#m-contemporanea").hide();
		$("#m-moderna").hide();
    });
		$("#b-contemporanea").click(function(){
        $("#m-contemporanea").show();

        $("#m-classica").hide();
		$("#m-moderna").hide();
    });
		$("#b-moderna").click(function(){
        $("#m-moderna").show();

        $("#m-classica").hide();
		$("#m-contemporanea").hide();
    });
});