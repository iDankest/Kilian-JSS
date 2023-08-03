// window.addEventListener('load', ()=>{
    var box = document.querySelector(".right-box");
    let inicio, curso, contacto;
    inicio = document.querySelector("#inicio");
    curso = document.querySelector("#curso");
    contacto = document.querySelector("#contacto");
    box.innerHTML=`
<div>
    <h1>Entra en nuestra academia</h1>
    <p>Crea tu itinerario formativo</p>
    <button>INFORMACIÓN</button>
</div>
`
    inicio.addEventListener('click', function(){    //Inicio
        box.innerHTML=`
    <div>
        <h1>Entra en nuestra academia</h1>
        <p>Crea tu itinerario formativo</p>
        <button>INFORMACIÓN</button>
    </div>
    `
})


curso.addEventListener('click', function(){ //Cursos
    // box.innerHTML=` `
    box.innerHTML=`
    <div>
    <div>
        <img src="" alt=""><video controls src="media/VideoClase.mp4"></video>
    </div>
    <p>Hola mundo</p>
    </div>
    `
})

contacto.addEventListener('click', function(){  //Formulario
    box.innerHTML=`
    <form  class="formulario">
    <label for="Nombre">Nombre
        <input type="text" id="nombre">
    </label>
    <label for="Correo">Correo
        <input type="email" id="email">
    </label>
    <label for="Asunto">Asunto
        <input type="text" id="asunto">
    </label>
    <label for="Mensaje">Mensaje
        <input type="text" id="mensaje">
    </label>
    <button id="addbutton" onclick= "formulario()">ENVIAR</button>
</form>
    `
})

function saveALocal(llave, vSave){
    localStorage.setItem(llave, JSON.stringify(vSave))
}
function gALocal(llave){
    const datos = JSON.parse(localStorage.getItem(llave));
    return datos;
}

let alumnos = gALocal('alumnos') || [];

function formulario(){
    var alumno= {

        nombre: document.querySelector("#nombre").value,
        correo: document.querySelector("#email").value,
        asunto: document.querySelector("#asunto").value,
        mensaje: document.querySelector("#mensaje").value
        
    }
    
    alumnos.push(alumno);
    saveALocal('alumnos', alumnos);
    
}












// var addAlumno = document.getElementById('nombre');
// var addApellido = document.getElementById('email');
// var addEmail = document.getElementById('asunto');
// var addImagen = document.getElementById('mensaje');

// document.getElementById('addbutton').addEventListener('click', function(event){
//     event.preventDefault()
//     let alumnoAdd = addAlumno.value;
//     let apellidoAdd = addApellido.value;
//     let emailAdd = addEmail.value;
//     let imagenAdd = addImagen.value;

//     let van = true;

//     if(alumnoAdd == '' || apellidoAdd == '' || emailAdd == '' || imagenAdd == ''){
//         mensaje.classList.add('llenarCampos');
//         setTimeout(() => {mensaje.classList.remove('llenarCampos')
//     }, 5000);
//     van=false;
//     }
//     else{
//         for(let i = 0; i< alumnos.length; i++){
//             if(alumnos[i].nombre== alumnoAdd){
//                 mensaje.classList.add('repetidoError');
//                 setTimeout(()=> {
//                     mensaje.classList.remove('repetidoError')
//                 }, 2500);
//                 van = false
//             }
//         }
//     }
//     if(van == true){
//         alumnos.push({
//             nombre: alumnoAdd,
//             email: apellidoAdd,
//             asunto: emailAdd,
//             mensaje: imagenAdd
//         })
//         mensaje.classList.add('realizado');
//         setTimeout(()=>{
//             mensaje.classList.remove('realizado');
//             window.reload();
//         }, 1500)
//     }
//     saveALocal('alumnos', alumnos);
// })

// var bienvenido = document.getElementById('bienvenido')
// bienvenido.innerHTML =`bienvenido ${alumnos[1].nombre}`
// var mostrarEmail = document.getElementById('mostrarEmail').innerHTML =`Email ${alumnos[1].email}`
// bienvenido.style.color = "red";

// })
// let inicio, curso, contacto;
// inicio = document.querySelector("#inicio");
// curso = document.querySelector("#curso");
// contacto = document.querySelector("#contacto");


