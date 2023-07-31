/* 
Peticiones Ayaxs en servidor Fake
 */
setTimeout(function(){
var div_usuarios = document.querySelector('#usuarios');
var usuarios = [];
fetch('https://reqres.in/api/users?page=2')
.then(data => data.json())
.then(user => {
    usuarios = user.data;
    console.log(usuarios);

    usuarios.map((user, i)=>{
        let nombre = document.createElement('h3');
        nombre.innerHTML = (i+1) + " " +user.first_name + " " + user.last_name;

        div_usuarios.append(nombre);

    })
})
}, 3000);

/* try es para ejecutar un código y probarlo después con catch podrías ejecutar una sentencia si falla */
