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

// function calcular(nu1, nu2, ver=false) {
//     if(ver==false){
//     document.write("Sumar: " + (nu1 + nu2) + "<br/>");
//     document.write("Resta: " + (nu1 - nu2) + "<br/>");
//     document.write("Multiplicación: " + (nu1 * nu2) + "<br/>");
//     document.write("División: " + (nu1 / nu2) + "<br/>");
//     document.write("<hr>")
//     }else{
//         document.write("No tengo nada que mostrar!!")
//     }
// }
// calcular(20, 5, true)

var age = parseInt(prompt("¿Que edad Tienes?"));
var inicio = prompt("Si o no quieres comprobar tu status");
inicio = inicio.toUpperCase();
if (inicio == "SI") {
    


switch (true) {
    case age >= 0 && age <= 12:
    document.write("Eres un niño");
      break;
    case age >= 13 && age <= 19:
    document.write("Eres un adolescente");
      break;
    case age >= 20 && age <= 35:
    document.write("Eres un adulto joven");
      break;
    case age >= 36 && age <= 55:
    document.write("Eres un adulto maduro");
      break;
    case age >= 56 && age <= 100:
      document.write("Eres un adulto mayor");
      break;
  }
  } else {
    document.write("Gracias por su visita")
}