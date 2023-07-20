var inicio = prompt("Usuario");
inicio = inicio.toLowerCase();
if(inicio == "admin") {
    var pass = prompt("Contraseña");
    if (pass == "Webmaster") {
        alert("Bienvenido");
    } else if(pass == "" || pass == null){
        alert("Cancelado");
    }else{
        alert("Incorecta");
    }


}else if(inicio == "" || inicio == null){
    alert("Has cancelado");
}else{
    alert("La Incorrecto");
}