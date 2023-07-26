
var titulo = prompt("¿Tienes bachiller?");
titulo = titulo.toUpperCase();
if (titulo === "SI") {
    document.write("Puedes acceder al grado superior");
} else {
    var prueA = prompt("¿Tienes la prueba de acceso superada?");
    prueA = prueA.toUpperCase();
    if (prueA === "SI") {
        document.write("Tienes acceso al grado superior");
    } else {
        document.write("No tienes acceso al superior");
    }
}

