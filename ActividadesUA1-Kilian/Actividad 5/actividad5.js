/*
InicioProceso
Escribir “escribe el importe de la compra”
Leer importe //Int
Escribir “Introduce el mes”
Leer mes // String
//Si el mes es octubre, se aplicará el descuento
Si (mes=”octubre”) Entonces
total<-importe*0.85
Sino
total<-importe
FinSi
Escribir total
FinProceso
*/

var impor = parseInt(prompt("Introduce importe de la compra"));
document.write(impor + "<br/>");
var mes = prompt("Introduce el mes");
document.write(mes+ "<br/>");
mes.toUpperCase();

if (mes=="OCTUBRE") {
    document.write("Se aplica el descuento "+ (impor*0.85));
} else {
    document.write("el importe es " + impor);
}
