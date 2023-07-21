// function Act2(num, num2, res=0){
//     let miarry = [];
//     num = parseInt(prompt("Introduce el primer numero"));
//     miarry.push("El numero introducido  es "+num);
//     num2 = parseInt(prompt("Introduce el segundo numero"));
//     miarry.push("El segundo numero es "+num2);
//     res = num + num2;
//     miarry.push("El resulado de la suma de "+num+" y "+num2+" es "+res);
//     res = num - num2;
//     miarry.push("El resulado de la resta de "+num+" y "+num2+" es "+res);
//     res = num * num2;
//     miarry.push("El resulado de la multiplicacion de "+num+" y "+num2+" es "+res);
//     res = num / num2;
//     miarry.push("El resulado de la division de "+num+" y "+num2);
//     document.getElementById("sumita").innerHTML =miarry.join();
// }

function act3(nume, nume2){
nume = parseInt(prompt("Introduce el primer numero"));
console.log(nume)
nume2 = parseInt(prompt("Introduce el segundo numero"));
console.log(nume2)

if (nume>=nume2){
    if(nume==nume2){
        console.log("Son iguales");
    }else{
        console.log(nume+" mayor");
    }
}else{
    console.log(nume2 + " Es mayor");
}
}

function act4(niños, niñas){
    niños = parseInt(prompt("Dame numero"));//cambia Texto por Cantidad de niños
    console.log(niños);
    
    niñas = parseInt(prompt("Dame niñas"));//cambia Texto por Cantidad de niñas
    console.log(niñas)
    
    proniño = niños*100/(niñas+niños);
    proniña = 100-proniño;// es una forma de hacerlo lo recomendable realizar la operación
    
    console.log("hay un "+ proniño + " % de niños");
    console.log("hay un "+ proniña + " % de niñas");
    
}
function act5(impor, mes){
impor = parseInt(prompt("Introduce importe de la compra"));
document.write(impor + "<br/>");
mes = prompt("Introduce el mes");
document.write(mes+ "<br/>");
mes.toUpperCase();

if (mes=="OCTUBRE") {
    document.write("Se aplica el descuento "+ (impor*0.85));
} else {
    document.write("el importe es " + impor);
}

}
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

//     function tabla() {
//         var resultados = [];
//         //1
// var n = parseInt(prompt("n tabla"))
// for(i=1; i<=10; i++){
//     resultados.push(i+" x "+n+" = "+i*n + "<br/>");

// }
// //2
// for(i=1; i<=10; i++){
//     resultados.push("La tabla del "+i+ "<br/>");

//     for(j=1; j<=10; j++){
//         resultados.push(i+" x "+j+" = "+i*j+"<br/>")
//     }

// }
// // 3 
// var t =0;
// do {
//     var r = parseInt(prompt("Hasta qué tabla quieres que te cuente?"));
//     for(i=1; i<=r; i++){
//         resultados.push("La tabla del "+i+ "<br/>");
    
//         for(j=1; j<=10; j++){
//             resultados.push(i+" x "+j+" = "+i*j+"<br/>");
//         }
//     }
//     t++
// } while (t>=r);

// // return resultados;
// // var misResultados = tabla();

// // var resultadosHTML = misResultados.join("<br/>")


// // document.getElementById("resss2").innerHTML = resultadosHTML;
    // }


function meses() {
    var impor = parseInt(prompt("Introduce importe de la compra"));
document.write(impor + "<br/>");
var mes = prompt("Introduce el mes");
document.write(mes+ "<br/>");
mes=(mes.toUpperCase());
 console.log(mes);

switch (mes) {
    case "AGOSTO":
        document.write("El importe es de un valor de "+(impor*0.85));
       
        break;
    case "ENERO" || "FEBRERO":
        document.write("El importe es de un valor de "+(impor*0.80));
        break;
    case "NOVIEMBRE" || "DICIEMBRE":
        document.write("El importe es de un valor de "+(impor*0.75));
        break;

    default:
        document.write("El importe es de un valor de "+(impor));
        break;
}
    
}

function contraseñas() {
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
}
function comprobar(){
    let operador = document.getElementById("Operadores").value;
    resultado = eval(operador);
    document.getElementById("resultado").innerHTML="Resultado" + resultado;
}

// document.getElementById("Ptabla").innerHTML=tabla();
function tabla() {
    var resultados = []; // Creamos un array vacío para almacenar los resultados

    // 1
    var n = parseInt(document.getElementById("tabla1").value); 
    for (i = 1; i <= 10; i++) {
        resultados.push(i + " x " + n + " = " + i * n); // Guardamos cada resultado en el array
    }

    // 2
    for (i = 1; i <= 10; i++) {
        resultados.push("La tabla del " + i);

        for (j = 1; j <= 10; j++) {
            resultados.push(i + " x " + j + " = " + i * j);
        }
    }

    // 3
    do {
        var r = parseInt(document.getElementById("tabla2").value); 
        for (i = 1; i <= r; i++) {
            resultados.push("La tabla del " + i);

            for (j = 1; j <= 10; j++) {
                resultados.push(i + " x " + j + " = " + i * j);
            }
        }
    } while (r >= 1); // Corregimos la condición del bucle

    return resultados; // Devolvemos el array con los resultados
}

function mostrarTabla() {
    var resultados = tabla(); // Obtener los resultados generados por la función

    // Convertir el array en una cadena de texto
    var resultadosHTML = resultados.join("<br/>");

    // Insertar los resultados en el elemento con id "resss2"
    document.getElementById("resss2").innerHTML = resultadosHTML;
    document.querySelector('button[onclick="mostrarTabla()"]').disabled = true;
}
function limpiarTabla() {
    // Limpiar el contenido del elemento con id "resss2"
    document.getElementById("resss2").innerHTML = "";

    // Habilitar el botón "Generar tabla" para poder generar una nueva tabla
    document.querySelector('button[onclick="mostrarTabla()"]').disabled = false;
}

function Act2(num, num2, res=0){
    let miarry = [];
    num = parseInt(prompt("Introduce el primer numero"));
    miarry.push(`El numero introducido  es ${num}`);
    num2 = parseInt(prompt("Introduce el segundo numero"));
    miarry.push(`El segundo numero es ${num2}`);
    res = num + num2;
    miarry.push(`El resulado de la suma de ${num} y ${num2} es ${res} `);
    res = num - num2;
    miarry.push(`El resulado de la resta de ${num} y ${num2} es ${res} `);
    res = num * num2;
    miarry.push(`El resulado de la multiplicacion de ${num} y ${num2} es ${res} `);
    res = num / num2;
    miarry.push(`El resulado de la division de ${num} y ${num2} es ${res}`);
    console.log(miarry)
    document.getElementById("sumita").innerHTML =miarry.join("<br/>");
   
}
