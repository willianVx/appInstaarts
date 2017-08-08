/*
    Funcoes definem o tamanho
*/
   // var material, x, y, moldura;
    var x = 40;
    var y = 60; 
    //var moldura = 0;
    var somaMoldura = 0; 

    var meta3mm = 1265;
    var meta7mm = 2467;
    var meta5mm = 1771;
    var meta4mm = 1392;
    var acm5mm = 1518;
    var uvPsmm = 1265;
    var uv_acm = 1553;
    var precoBase = meta3mm;

    var florencaM = 2947;

    var tipoMoldura = 0;

function T12x18(){
	//document.getElementById("s-tamanho").innerHTML = "12x18cm" + " ";
    window.x = 12;
    window.y = 18;
    document.getElementById("s-tamanho").innerHTML = x + "x" + y + "cm ";
    formulaTotal();
    //var preco = (x * y * material/10000) + 40;
    //document.getElementById("s-preco").innerHTML = "R$: " + preco.toFixed(2);
}
function T20x30(){
	//document.getElementById("s-tamanho").innerHTML = "20x30cm" + " ";
    window.x = 20;
    window.y = 30;
    document.getElementById("s-tamanho").innerHTML = x + "x" + y + "cm ";
    formulaTotal();
}
function T30x45(){
	//document.getElementById("s-tamanho").innerHTML = "30x45cm" + " ";
    window.x = 30;
    window.y = 45;
    document.getElementById("s-tamanho").innerHTML = x + "x" + y + "cm ";
    formulaTotal();
}
function T40x60(){
	//document.getElementById("s-tamanho").innerHTML = "40x60cm" + " ";
    window.x = 40;
    window.y = 60;
    document.getElementById("s-tamanho").innerHTML = x + "x" + y + "cm ";
    formulaTotal();
}
function T60x90(){
	//document.getElementById("s-tamanho").innerHTML = "60x90cm" + " ";
    window.x = 60;
    window.y = 90;
    document.getElementById("s-tamanho").innerHTML = x + "x" + y + "cm ";
    formulaTotal();
}
function T90x45(){
	//document.getElementById("s-tamanho").innerHTML = "90x45cm" + " ";
    window.x = 90;
    window.y = 45;
    document.getElementById("s-tamanho").innerHTML = x + "x" + y + "cm ";
    formulaTotal();
}

function T20x20(){
	//document.getElementById("s-tamanho").innerHTML = "20x20cm" + " ";
    window.x = 20;
    window.y = 20;
    document.getElementById("s-tamanho").innerHTML = x + "x" + y + "cm ";
    formulaTotal();
}
function T30x30(){
	//document.getElementById("s-tamanho").innerHTML = "30x30cm" + " ";
    window.x = 30;
    window.y = 30;
    document.getElementById("s-tamanho").innerHTML = x + "x" + y + "cm ";
    formulaTotal();
}
function T45x45(){
	//document.getElementById("s-tamanho").innerHTML = "45x45cm" + " ";
    window.x = 45;
    window.y = 45;
    document.getElementById("s-tamanho").innerHTML = x + "x" + y + "cm ";
    formulaTotal();
}
function T60x60(){
	//document.getElementById("s-tamanho").innerHTML = "60x60cm" + " ";
    window.x = 60;
    window.y = 60;
    document.getElementById("s-tamanho").innerHTML = x + "x" + y + "cm ";
    formulaTotal();
}
function T90x90(){
	//document.getElementById("s-tamanho").innerHTML = "90x90cm" + " ";
    window.x = 90;
    window.y = 90;
    document.getElementById("s-tamanho").innerHTML = x + "x" + y + "cm ";
    formulaTotal();
}

function T18x12(){
	//document.getElementById("s-tamanho").innerHTML = "18x12cm" + " ";
    window.x = 18;
    window.y = 12;
    document.getElementById("s-tamanho").innerHTML = x + "x" + y + "cm ";
    formulaTotal();
}
function T20x30(){
	//document.getElementById("s-tamanho").innerHTML = "20x30cm" + " ";
    window.x = 20;
    window.y = 30;
    document.getElementById("s-tamanho").innerHTML = x + "x" + y + "cm ";
    formulaTotal();
}
function T30x45(){
	//document.getElementById("s-tamanho").innerHTML = "30x45cm" + " ";
    window.x = 30;
    window.y = 45;
    document.getElementById("s-tamanho").innerHTML = x + "x" + y + "cm ";
    formulaTotal();
}
function T40x60(){
	//document.getElementById("s-tamanho").innerHTML = "40x60cm" + " ";
    window.x = 40;
    window.y = 60;
    document.getElementById("s-tamanho").innerHTML = x + "x" + y + "cm ";
    formulaTotal();
}
/*function tamanhoUsuario(){
	var x, y,text;

    x = document.getElementById("x").value;
    y = document.getElementById("y").value;

    if (isNaN(x) || x <= 0 || x > 100) {
    	alert("O comprimento deve ser menor que 100");
    }else if (isNaN(y) || y <= 0 || y > 200){
    	alert("A largura deve ser menor que 200");
    }else{
    	document.getElementById("s-tamanho").innerHTML = x + "x" + y + "cm ";
    }if (isNaN(y) || y <= 0 || y > 200) {
        alert("Insira valores validos");	
        }
    if (isNaN(x) || x <= 0 || x > 100) {
        alert("Insira valores validos");
    } else {
        text = "Input OK";
        document.getElementById("s-tamanho").innerHTML = x + "x" + y + "cm ";
    	} 
}
/*
    Checa tamanho personalizado
*/

function tamanhoUsuario(){

    window.x = document.getElementById("x").value;
    window.y = document.getElementById("y").value;

    valor = "Não é um valor válido";

    if (isNaN(x) || x < 10 || x > 100) {
        alert(valor);
    }else if (isNaN(y) || y < 10 || y > 200){
        alert(valor);
    }else{
        document.getElementById("s-tamanho").innerHTML = x + "x" + y + "cm ";
        formulaTotal();
    }
}
/* 
    define material
*/

//metacrilato dsa 
function meta7(){
    if (tipoMoldura == 3) {
        if (somaMoldura != 0){
                    somaMoldura = 480;
                }
    }        
    var meta7mm = 2467;
    window.precoBase = meta7mm;
    document.getElementById("s-metacrilato").innerHTML = "Metacrilato 7mm" + " ";
    /*var preco = ((x * y * material / 10000)+moldura)+40; 
    document.getElementById("s-preco").innerHTML = preco;*/
    formulaTotal();
}
function meta5(){
      if (tipoMoldura == 3) {
        if (somaMoldura != 0){
                    somaMoldura = 480;
                }
    } 
    window.meta5mm = 1771;
    window.precoBase = window.meta5mm;
    document.getElementById("s-metacrilato").innerHTML = "Metacrilato 5mm" + " ";
    formulaTotal();
}
function meta4(){
    if (tipoMoldura == 3) {
        if (somaMoldura != 0){
                    somaMoldura = 506;
                }
    } 
    window.meta4mm = 1392;
    window.precoBase = window.meta4mm;
    document.getElementById("s-metacrilato").innerHTML = "Metacrilato 4mm" + " ";
    formulaTotal();
}
function meta3(){
    if (tipoMoldura == 3) {
        if (somaMoldura != 0){
                    somaMoldura = 320;
                }
    }        
    window.meta3mm = 1265;
    window.precoBase = window.meta3mm;
    document.getElementById("s-metacrilato").innerHTML = "Metacrilato 3mm" + " ";
    formulaTotal();
}
/*function photob(){
    window.material = 9900;
    window.x = 10;
    window.y = 10;
    document.getElementById("s-metacrilato").innerHTML = "Photobloco" + " ";
    document.getElementById("s-tamanho").innerHTML = x + "x" + y + "cm ";
    formulaTotal();
}*/
function acm5(){
    if (tipoMoldura == 3) {
        if (somaMoldura != 0){
                    somaMoldura = 480;
                }
    }        
    window.acm5mm = 1518;
    window.precoBase = window.acm5mm;
    document.getElementById("s-metacrilato").innerHTML = "ACM 5mm" + " ";
    formulaTotal();
}

// papeis

function papelAlgodao(){
    window.material = 552;
    document.getElementById("s-metacrilato").innerHTML = "Papel algodão" + " ";
    formulaTotal();
   
}
function acetinato(){
    window.material = 460;
    document.getElementById("s-metacrilato").innerHTML = "Acetinato" + " ";
    formulaTotal();
}
function brilhante(){
    window.material = 437;
    document.getElementById("s-metacrilato").innerHTML = "Brilhante" + " ";
    formulaTotal();
}
function fosco(){
    window.material = 414;
    document.getElementById("s-metacrilato").innerHTML = "Fosco" + " ";
    formulaTotal();
}
function canvas(){
    window.material = 633;
    document.getElementById("s-metacrilato").innerHTML = "canvas" + " ";
    formulaTotal();
}

//Impressão UV 

function uvPs(){
    if (tipoMoldura == 3) {
        if (somaMoldura != 0){
                    somaMoldura = 480;
                }
    }        
    window.uvPsmm = 1265;
    window.precoBase = window.uvPsmm;
    document.getElementById("s-metacrilato").innerHTML = "UV Sobre PS" + " ";
    formulaTotal();
}

function uvAcm(){
    if (tipoMoldura == 3) {
        if (somaMoldura != 0){
                    somaMoldura = 480;
                }
    }        
    window.uv_acm = 1553;
    window.precoBase = window.uv_acm;    
    document.getElementById("s-metacrilato").innerHTML = "UV Sobre ACM" + " ";
    formulaTotal();
}

/*
    Define MOLDURA
*/

//classica


function florenca(){
    molduraTipo3();
    document.getElementById("s-moldura").innerHTML = "Florença" + " ";
    formulaTotal();
}

/*
function instambul(){
     if (material = 1265) {
        window.moldura = 193;
    }else{
        window.moldura = 480;
    }
    document.getElementById("s-moldura").innerHTML = "Istambul" + " ";
    var preco = (x * y * material/10000) + 40;
    document.getElementById("s-preco").innerHTML = "R$: " + preco;
}

function paris(){ 
    if (material = 1265) {
        window.moldura = 193;
    }else{
        window.moldura = 480;
    }
    document.getElementById("s-moldura").innerHTML = "Paris" + " ";
    var preco = (x * y * material/10000) + 40;
    document.getElementById("s-preco").innerHTML = "R$: " + preco;
}

function roma(){
     if (material = 1265) {
        window.moldura = 193;
    }else{
        window.moldura = 480;
    }
    document.getElementById("s-moldura").innerHTML = "Roma" + " ";
    var preco = (x * y * material/10000) + 40;
    document.getElementById("s-preco").innerHTML = "R$: " + preco;
}

//contemporanea

function atenas(){
     if (material = 1265) {
        window.moldura = 0;
    }else{
        window.moldura = 160;
    }
    document.getElementById("s-moldura").innerHTML = "Atenas" + " ";
    var preco = (x * y * material/10000) + 40;
    document.getElementById("s-preco").innerHTML = "R$: " + preco;
}
function basel(){
    if (material = 1392) {
        window.moldura = 345;
    }else if (material = 1265){
        window.moldura = 160;    
    }else{
        window.moldura = 320;
    }
    document.getElementById("s-moldura").innerHTML = "Basel" + " ";
    var preco = (x * y * material/10000) + 40;
    document.getElementById("s-preco").innerHTML = "R$: " + preco;
}
function berlim(){
    if (material = 1392) {
        window.moldura = 345;
    }else if (material = 1265){
        window.moldura = 160;    
    }else{
        window.moldura = 320;
    }
    document.getElementById("s-moldura").innerHTML = "Berlim" + " ";
    var preco = (x * y * material/10000) + 40;
    document.getElementById("s-preco").innerHTML = "R$: " + preco;
}
function miami(){
    if (material = 1265) {
        window.moldura = 0;
    }else{
        window.moldura = 160;
    }
    document.getElementById("s-moldura").innerHTML = "Mimi" + " ";
    var preco = (x * y * material/10000) + 40;
    document.getElementById("s-preco").innerHTML = "R$: " + preco;
}
function novaYork(){
    if (material = 1392) {
        window.moldura = 345;
    }else if (material = 1265){
        window.moldura = 160;    
    }else{
        window.moldura = 320;
    }
    document.getElementById("s-moldura").innerHTML = "Nova York" + " ";
    var preco = (x * y * material/10000) + 40;
    document.getElementById("s-preco").innerHTML = "R$: " + preco;
}
function saoPaulo(){
    if (material = 1392) {
        window.moldura = 345;
    }else if (material = 1265){
        window.moldura = 160;    
    }else{
        window.moldura = 320;
    }
    document.getElementById("s-moldura").innerHTML = "São Paulo" + " ";
    var preco = (x * y * material/10000) + 40;
    document.getElementById("s-preco").innerHTML = "R$: " + preco;
}

//moderna

function amazonas(){
    if (material = 1392) {
        window.moldura = 345;
    }else if (material = 1265){
        window.moldura = 160;    
    }else{
        window.moldura = 320;
    }
    document.getElementById("s-moldura").innerHTML = "Amazonas" + " ";
    var preco = (x * y * material/10000) + 40;
    document.getElementById("s-preco").innerHTML = "R$: " + preco;
}
function amsterdam(){
    if (material = 1265) {
        window.moldura = 0;
    }else{
        window.moldura = 160;
    }
    document.getElementById("s-moldura").innerHTML = "Amsterdam" + " ";
    var preco = (x * y * material/10000) + 40;
    document.getElementById("s-preco").innerHTML = "R$: " + preco;
}
function buenosAires(){
    if (material = 1265) {
        window.moldura = 0;
    }else{
        window.moldura = 160;
    }
    document.getElementById("s-moldura").innerHTML = "Buenos Aires" + " ";
    var preco = (x * y * material/10000) + 40;
    document.getElementById("s-preco").innerHTML = "R$: " + preco;
}
function londres(){
    if (material = 1265) {
        window.moldura = 0;
    }else{
        window.moldura = 160;
    }
    document.getElementById("s-moldura").innerHTML = "Londres" + " ";
    var preco = (x * y * material/10000) + 40;
    document.getElementById("s-preco").innerHTML = "R$: " + preco;
}
function santiago(){
    if (material = 1392) {
        window.moldura = 345;
    }else if (material = 1265){
        window.moldura = 160;    
    }else{
        window.moldura = 320;
    }
    document.getElementById("s-moldura").innerHTML = "Santiago" + " ";
    var preco = (x * y * material/10000) + 40;
    document.getElementById("s-preco").innerHTML = "R$: " + preco;
}

/*function formula(x,y){
    var r = x * y;
    return r;
}

function formula2(material){
    var r2 = material * 40;
    return r2;
}

function formula3(formula,formula2){
    var r3 = r * r2/10000;
}*/
function formulaTotal(){
        alert(window.precoBase);
        alert(window.somaMoldura);
        var precoBase = window.precoBase + window.somaMoldura;
        var preco = (x * y * precoBase/10000) + 40;
        document.getElementById("s-preco").innerHTML = "R$: " + preco.toFixed(2);
    }
function molduraTipo3(){
        tipoMoldura = 3;
        if (precoBase == meta3mm) {
            somaMoldura = 320;
        }else if (precoBase == meta4mm) {
            somaMoldura = 506;
        }
        else{
            somaMoldura = 480;
        }
}










