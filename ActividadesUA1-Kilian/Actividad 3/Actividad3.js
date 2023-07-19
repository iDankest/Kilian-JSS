var num = parseInt(prompt("Introduce el primer numero"));
console.log(num)
var num2 = parseInt(prompt("Introduce el segundo numero"));
console.log(num2)

if (num>=num2){
    if(num==num2){
        console.log("Son iguales");
    }else{
        console.log(num+" mayor");
    }
}else{
    console.log(num2 + " Es mayor");
}
// if (num===num2) {
//     console.log("Son iguales");
// }else if(num>num2){
//     console.log(num+" Es mayor");
// }else{
//     console.log(num2 + " Es mayor");
// }
