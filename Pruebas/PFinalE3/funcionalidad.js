let inicio, curso, contacto;
inicio = document.querySelector("#inicio");
curso = document.querySelector("#curso");
contacto = document.querySelector("#contacto");
inicio.addEventListener('click', function(){
    window.location.href = 'inicio.html'
})
curso.addEventListener('click', function(){
    window.location.href = 'curso.html'
})
contacto.addEventListener('click', function(){
    window.location.href = 'contacto.html'
})

function saveALocal(llave, vSave){
    localStorage.setItem(llave, JSON.stringify(vSave))
}
function gALocal(llave){
    const datos = JSON.parse(localStorage.getItem(llave));
    return datos;
}

let alumnos = gALocal('alumnos') || [];
let mensaje = document.getElementById('mensaje');

var addAlumno = document.getElementById('nombre');
var addApellido = document.getElementById('email');
var addEmail = document.getElementById('asunto');
var addImagen = document.getElementById('mensaje');

document.getElementById('addbutton').addEventListener('click', function(event){
    event.preventDefault()
    let alumnoAdd = addAlumno.value;
    let apellidoAdd = addApellido.value;
    let emailAdd = addEmail.value;
    let imagenAdd = addImagen.value;

    let van = true;

    if(alumnoAdd == '' || apellidoAdd == '' || emailAdd == '' || imagenAdd == ''){
        mensaje.classList.add('llenarCampos');
        setTimeout(() => {mensaje.classList.remove('llenarCampos')
    }, 5000);
    van=false;
    }
    else{
        for(let i = 0; i< alumnos.length; i++){
            if(alumnos[i].nombre== alumnoAdd){
                mensaje.classList.add('repetidoError');
                setTimeout(()=> {
                    mensaje.classList.remove('repetidoError')
                }, 2500);
                van = false
            }
        }
    }
    if(van == true){
        alumnos.push({
            nombre: alumnoAdd,
            email: apellidoAdd,
            asunto: emailAdd,
            mensaje: imagenAdd
        })
        mensaje.classList.add('realizado');
        setTimeout(()=>{
            mensaje.classList.remove('realizado');
            window.reload();
        }, 1500)
    }
    saveALocal('alumnos', alumnos);
})

var bienvenido = document.getElementById('bienvenido')
bienvenido.innerHTML =`bienvenido ${alumnos[1].nombre}`
var mostrarEmail = document.getElementById('mostrarEmail').innerHTML =`Email ${alumnos[1].email}`
bienvenido.style.color = "red";
