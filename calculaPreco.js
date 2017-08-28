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
    if (tipoMoldura == 2) {
        if (somaMoldura != 0){
                    somaMoldura = 320;
                }
    }  
    if (tipoMoldura == 1) {
        if (somaMoldura != 0){
                    somaMoldura = 160;
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
    if (tipoMoldura == 2) {
        if (somaMoldura != 0){
                    somaMoldura = 320;
                }
    }   
     if (tipoMoldura == 1) {
        if (somaMoldura != 0){
                    somaMoldura = 160;
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
    if (tipoMoldura == 2) {
        if (somaMoldura != 0){
                    somaMoldura = 345;
                }
    }   
     if (tipoMoldura == 1) {
        if (somaMoldura != 0){
                    somaMoldura = 153;
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
    if (tipoMoldura == 2) {
        if (somaMoldura != 0){
                    somaMoldura = 160;
                }
    }   
     if (tipoMoldura == 1) {
        if (somaMoldura != 0){
                    somaMoldura = 0;
                }
    }  
    window.meta3mm = 1265;
    window.precoBase = window.meta3mm;
    document.getElementById("s-metacrilato").innerHTML = "Metacrilato 3mm" + " ";
    formulaTotal();
}
function acm5(){
    if (tipoMoldura == 3) {
        if (somaMoldura != 0){
                    somaMoldura = 480;
                }
    } 
    if (tipoMoldura == 2) {
        if (somaMoldura != 0){
                    somaMoldura = 320;
                }
    }          
     if (tipoMoldura == 1) {
        if (somaMoldura != 0){
                    somaMoldura = 160;
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
    if (tipoMoldura == 2) {
        if (somaMoldura != 0){
                    somaMoldura = 320;
                }
    }   
     if (tipoMoldura == 1) {
        if (somaMoldura != 0){
                    somaMoldura = 160;
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
    if (tipoMoldura == 2) {
        if (somaMoldura != 0){
                    somaMoldura = 320;
                }
    }   
     if (tipoMoldura == 1) {
        if (somaMoldura != 0){
                    somaMoldura = 160;
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


function instambul(){
    molduraTipo3();
    document.getElementById("s-moldura").innerHTML = "Istambul" + " ";
    formulaTotal();
}

function paris(){ 
    molduraTipo3();
    document.getElementById("s-moldura").innerHTML = "Paris" + " ";
    formulaTotal();
}

function roma(){
     molduraTipo1();
    document.getElementById("s-moldura").innerHTML = "Roma" + " ";
    formulaTotal();

}

//contemporanea

function atenas(){
     molduraTipo1();
    document.getElementById("s-moldura").innerHTML = "Atenas" + " ";
    formulaTotal();
  
}
function basel(){
     molduraTipo2();
    document.getElementById("s-moldura").innerHTML = "Basel" + " ";
    formulaTotal();
}
function berlim(){
    molduraTipo3();
    document.getElementById("s-moldura").innerHTML = "Berlim" + " ";
    formulaTotal();
}
function miami(){
     molduraTipo1();
    document.getElementById("s-moldura").innerHTML = "Miami" + " ";
    formulaTotal();
 
}
function novaYork(){
    molduraTipo2();
    document.getElementById("s-moldura").innerHTML = "New York" + " ";
    formulaTotal();

}
function saoPaulo(){
    molduraTipo2();
    document.getElementById("s-moldura").innerHTML = "São Paulo" + " ";
    formulaTotal();
}

//moderna

function amazonas(){
    molduraTipo2();
    document.getElementById("s-moldura").innerHTML = "Amazonas" + " ";
    formulaTotal();
}
function amsterdam(){
    molduraTipo1();
    document.getElementById("s-moldura").innerHTML = "amsterdam" + " ";
    formulaTotal();
}
function buenosAires(){
     molduraTipo1();
    document.getElementById("s-moldura").innerHTML = "Buenos Aires" + " ";
    formulaTotal();
}
function londres(){
     molduraTipo1();
    document.getElementById("s-moldura").innerHTML = "Londres" + " ";
    formulaTotal();

}
function santiago(){
     molduraTipo1();
    document.getElementById("s-moldura").innerHTML = "Santiago" + " ";
    formulaTotal();
}
function formulaTotal(){
        //alert(window.precoBase);
        //alert(window.somaMoldura);
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
function molduraTipo2(){
    tipoMoldura = 2;
    if (precoBase == meta3mm) {
        somaMoldura = 160;
    }else if (precoBase == meta4mm) {
        somaMoldura = 345;
    }
    else{
        somaMoldura = 320;
    }
}
function molduraTipo1(){
    tipoMoldura = 1;
    if (precoBase == meta3mm) {
        somaMoldura = 0;
    }else if (precoBase == meta4mm) {
        somaMoldura = 153;
    }
    else{
        somaMoldura = 160;
    }
}
function semMoldura(){
        window.somaMoldura = 0;
        formulaTotal();
        document.getElementById("s-moldura").innerHTML = "Sem Moldura";
}







