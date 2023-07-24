let diaSemana;// Actividad 14
console.log(diaSemana);
diaSemana =new Array(7);
console.log(diaSemana);
diaSemana = ['Lunes' , "Martes", "Miercoles", "Jueves", "Viernes", "Sabado" , "Domingo"];
document.write(`Actividad 14 <br/> Dia semana ${diaSemana.join(", ")} <br/>`)
document.write(`Dia semana ${diaSemana[2]} <br/> <hr>Actividad 15 <br/>`)
//Actividad 15
for(i=0; i<diaSemana.length; i++){

    document.write(`${i +1} El dia es ${diaSemana[i]} <br/>`)
    
}
//Actividad 16
// let numerosMatriz = [
//     ["1", "2", "3"],
//     ["4", "5", "6"],
//     ['7', `8`, "9"]
// ];
// document.write(numerosMatriz[1].join("<br/>") + "<hr>")

// for(let n = 0; n<numerosMatriz.length; n++){
//     document.write(numerosMatriz[n].join("<br/>")+ "<br/>");
// }

let numerosMatriz = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ['7', `8`, "9"]
];
// vesion uno a uno con dos bucles for anidados
document.write("<hr> Actividad 16 <br/>"+numerosMatriz[1].join("<br/>")+ "<br/>");

for(let n = 0; n < numerosMatriz.length; n++){
    for(let m = 0; m < numerosMatriz[n].length; m++){
        document.write(numerosMatriz[n][m] + "<br/>");
    }
    document.write("<br/>");
}
