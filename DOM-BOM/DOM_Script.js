// DOM - Document Object Model

var contenedor = document.getElementById("contenedor");

contenedor.innerHTML="Contenido en el contenedor";
contenedor.style.background="Blue";
contenedor.style.padding="20px";
contenedor.style.color="white";

contenedor.className="contenedor";

function cambiarColor(color){
    contenedor.style.background="green";
}

//var contenedor = document.querySelector("#contenedor"); Es Igual que el get.elementById pero mas rápido y mejor

var elementos = document.getElementsByTagName('div');
console.log(elementos);
var contenido_tres = elementos[2];
contenido_tres.innerHTML = "Contenido añadido";
contenido_tres.style.backgroundColor = "yellow";
contenido_tres.style.color = "black";

var valor; 
for(valor in elementos){
    console.log(elementos[valor]);
    if(typeof elementos[valor].textContent == 'string'){
        var parrafo =document.createElement("p");
        var texto = document.createTextNode(elementos[valor].textContent);
        parrafo.append(texto);
        document.querySelector("#seleccion_una").append(parrafo);
    }
}
var divcaja = document.getElementsByClassName('caja');
var div;
for(div in divcaja){
    if(divcaja[div].className == "caja"){
        divcaja[div].style.color="blue";
    }
}
var solouno = document.querySelector("#solo_uno");
console.log(solouno)

var varios = document.querySelectorAll('div');
console.log(varios);