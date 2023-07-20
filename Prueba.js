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

// var age = parseInt(prompt("¿Que edad Tienes?"));
// var inicio = prompt("Si o no quieres comprobar tu status");
// inicio = inicio.toUpperCase();
// if (inicio === "SI") {
    


// switch (true) {
//     case age >= 0 && age <= 12:
//     document.write("Eres un niño");
//       break;
//     case age >= 13 && age <= 19:
//     document.write("Eres un adolescente");
//       break;
//     case age >= 20 && age <= 35:
//     document.write("Eres un adulto joven");
//       break;
//     case age >= 36 && age <= 55:
//     document.write("Eres un adulto maduro");
//       break;
//     case age >= 56 && age <= 100:
//       document.write("Eres un adulto mayor");
//       break;
//   }
//   } else {
//     document.write("Gracias por su visita")
// }

// function realizarOperacion() {
//   const operacion = prompt('Seleccione una operación: suma, resta, multiplicacion o division').toLowerCase();

//   if (['suma', 'resta', 'multiplicacion', 'division'].includes(operacion)) {
//     const numero1 = parseFloat(prompt('Ingrese el primer número:'));
//     const numero2 = parseFloat(prompt('Ingrese el segundo número:'));

//     let resultado;
//     switch (operacion) {
//       case 'suma':
//         resultado = numero1 + numero2;
//         break;
//       case 'resta':
//         resultado = numero1 - numero2;
//         break;
//       case 'multiplicacion':
//         resultado = numero1 * numero2;
//         break;
//       case 'division':
//         resultado = numero2 !== 0 ? numero1 / numero2 : 'Error: división por cero';
//         break;
//     }

//     console.log(`El resultado de la ${operacion} es:`, resultado);
//   } else {
//     console.log('Operación inválida.');
//   }
// }

// realizarOperacion();

function comprobarOperador(operando1, operando2, operador) {
  return eval(operando1 + operador + operando2);
}

var op1 = prompt("Ingresa el primer operando:");
var op2 = prompt("Ingresa el segundo operando:");
var op = prompt("Ingresa el operador (+, -, *, /):");

var res = (comprobarOperador(op1, op2, op));

alert(typeof(res))