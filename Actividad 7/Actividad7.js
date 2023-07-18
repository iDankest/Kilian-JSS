function Act2(num, num2, res=0){

    num = parseInt(prompt("Introduce el primer numero"));
    console.log(num);
    num2 = parseInt(prompt("Introduce el segundo numero"));
    console.log(num2);
    res = num + num2;
    console.log(res);
    res = num - num2;
    console.log(res)
    res = num * num2;
    console.log(res)
    res = num / num2;
    console.log(res);
    document.write(res); //Visualizar en el documento HTML(Boddy)
}

function act3(nume, nume2){
nume = parseInt(prompt("Introduce el primer numero"));
console.log(nume)
num2 = parseInt(prompt("Introduce el segundo numero"));
console.log(nume2)

if (nume>=nume2){
    if(num==num2){
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