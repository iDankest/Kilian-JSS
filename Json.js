/*
JSON - JavaScript Object Notation
Nos permite crear objeto de forma rápida
*/

var alumno = {
    nombre: "Super López",
    correo: "Superlopez@gmail.com",
    telefono: "5555 555 55 55"
}
// var alumnodos = {
//     nombre: "Pepe López",
//     correo: "Pepelopez@gmail.com",
//     telefono: "5555 455 55 55"
// }

// alumno.nombre = "Super López López";

// console.log(alumno.nombre)

// var alumnos = [alumno, alumnodos];

// console.log(alumnos);

// var total_alumnos = document.querySelector("#totalalumnos");

// var indice;
// for(indice in alumnos){
//     var p =  document.createElement("p");
//     p.append(alumnos[indice].nombre + "-----");
//     p.append(alumnos[indice].correo + "-----");
//     p.append(`${alumnos[indice].telefono} -----`);
//     total_alumnos.append(p);
// }
/*
LocalStorage
Memoria en el navegador
Comprobación de la disponibilidad del LocalStorage 
*/
if(typeof(Storage)!== 'undefined'){
    console.log("Disponible");
}else{
    console.log("No disponible");
}
// Guardar datos (setItem)
localStorage.setItem("Listado", "Listado de alumnos");
//Recuperar datos (getItem)
localStorage.getItem("Listado");

//Guardar objetos en JSON
localStorage.setItem("alumno", JSON.stringify(alumno));
//Recuperar Objeto en JSON
var alumnojs =JSON.parse(localStorage.getItem("alumno"))

document.querySelector("#totalalumnos").append(alumnojs.nombre + "------" + alumnojs.correo + "-----" + alumnojs.telefono);