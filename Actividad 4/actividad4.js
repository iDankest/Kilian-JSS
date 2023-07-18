var niños = parseInt(prompt("Dame numero"));//cambia Texto por Cantidad de niños
console.log(niños);

var niñas = parseInt(prompt("Dame niñas"));//cambia Texto por Cantidad de niñas
console.log(niñas)

proniño = niños*100/(niñas+niños);
proniña = 100-proniño;// es una forma de hacerlo lo recomendable realizar la operación

console.log("hay un "+ proniño + " % de niños");
console.log("hay un "+ proniña + " % de niñas");
