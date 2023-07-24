// function Aform() {
//     let arr = [];

//     arr.push(document.form.codigo.value);
//     arr.push(document.form.dni.value);
//     arr.push(document.form.none.value);
//     arr.push(document.form.mail.value);
//     arr.push(document.form.age.value);
//     arr.push(document.form.seleccion.value);
//     console.log(arr.join("<br/>"))
    
//     document.getElementById("ress").innerHTML = arr.join("<br/>")
// }
function Aform() {
    const arr = Object.values(document.form).map(input => input.value);
    const result = arr.join("<br/>");

    console.log(result);
    document.getElementById("ress").innerHTML = result;
}