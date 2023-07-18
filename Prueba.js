// function calcular(nu1, nu2) {
//     document.write("Sumar: " + (nu1 + nu2) + "<br/>");
//     document.write("Resta: " + (nu1 - nu2) + "<br/>");
//     document.write("Multiplicación: " + (nu1 * nu2) + "<br/>");
//     document.write("División: " + (nu1 / nu2) + "<br/>");
//     document.write("<hr>")
// }
// // calcular(10, 5);
// // calcular(25, 32);

// for (var n=1; n<=5; n++){
//     document.write(n + "<br/>");
//     calcular(n, 5);
// }

function calcular(nu1, nu2, ver=false) {
    if(ver==false){
    document.write("Sumar: " + (nu1 + nu2) + "<br/>");
    document.write("Resta: " + (nu1 - nu2) + "<br/>");
    document.write("Multiplicación: " + (nu1 * nu2) + "<br/>");
    document.write("División: " + (nu1 / nu2) + "<br/>");
    document.write("<hr>")
    }else{
        document.write("No tengo nada que mostrar!!")
    }
}
calcular(20, 5, true)