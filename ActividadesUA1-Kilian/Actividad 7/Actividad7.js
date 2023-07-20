function Act2(num, num2, res=0){

    num = parseInt(prompt("Introduce el primer numero"));
    document.write("El numero introducido  es "+num+ "<br/>");
    num2 = parseInt(prompt("Introduce el segundo numero"));
    document.write("El segundo numero es "+num2+"<br/>");
    res = num + num2;
    document.write("El resulado de la suma de "+num+" y "+num2+" es "+res+ "<br/>");
    res = num - num2;
    document.write("El resulado de la resta de "+num+" y "+num2+" es "+res+ "<br/>");
    res = num * num2;
    document.write("El resulado de la multiplicacion de "+num+" y "+num2+" es "+res+ "<br/>");
    res = num / num2;
    document.write("El resulado de la division de "+num+" y "+num2+" es "+res+ "<br/>");
    // document.write(res); //Visualizar en el documento HTML(Boddy)
}

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

    function tabla() {
        //1
var n = parseInt(prompt("n tabla"))
for(i=1; i<=10; i++){
    document.write(i+" x "+n+" = "+i*n + "<br/>");

}
//2
for(i=1; i<=10; i++){
    document.write("La tabla del "+i+ "<br/>");

    for(j=1; j<=10; j++){
        document.write(i+" x "+j+" = "+i*j+"<br/>")
    }

}
// 3 
do {
    var r = parseInt(prompt("Hasta qué tabla quieres que te cuente?"));
    for(i=1; i<=r; i++){
        document.write("La tabla del "+i+ "<br/>");
    
        for(j=1; j<=10; j++){
            document.write(i+" x "+j+" = "+i*j+"<br/>");
        }
    }
} while (t>=r);

    }

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