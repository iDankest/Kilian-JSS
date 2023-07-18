
function inicio(clave){

for(var n =0; n<3; n++){
    clave = parseInt(prompt("Intorduce clave"));
    if (clave===123456) {
        document.write("Estas dentro");
        break;
    } else {
        document.write("Te quedan " + (n + 1) + " intentos " + "<br/>");
    }
    
}
    if (n === 3) {
    document.write("Has excedido el número máximo de intentos");
  }
}
inicio();