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