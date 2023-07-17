var niños = parseInt(prompt("Dame numero"));
console.log(niños);
var niñas = parseInt(prompt("Dame niñas"));
console.log(niñas)

proniño = niños*100/(niñas+niños);
proniña = 100-proniño;

console.log("hay un "+ proniño + " % de niños");
console.log("hay un "+ proniña + " % de niñas");