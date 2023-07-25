function Aform() {
    let n = parseInt(document.form.nalum.value);
    let arrb = [[]];

    for(let i=0; i<n; i++){
        let arr = [];
        
        arr.push(document.form.codigo.value);
        arr.push(document.form.dni.value);
        arr.push(document.form.none.value);
        arr.push(document.form.mail.value);
        arr.push(document.form.age.value);
        arr.push(document.form.selecion.value);

        arrb.push(arr);
    }

    console.log(arrb);
    document.getElementById("ress").innerHTML = arrb.join("<br/>");
}

// function Aform() {
//     const arr = Object.values(document.form).map(input => input.value);
//     const result = arr.join("<br/>");

//     console.log(result);
//     document.getElementById("ress").innerHTML = result;
// }