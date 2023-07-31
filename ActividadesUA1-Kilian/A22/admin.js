function saveALocal(llave, vSave){
    localStorage.setItem(llave, JSON.stringify(vSave))
}
function gALocal(llave){
    const datos = JSON.parse(localStorage.getItem(llave));
    return datos;
}

let alumnos = gALocal('alumnos') || [];
let mensaje = document.getElementById('mensaje');

var addAlumno = document.getElementById('addAlumno');
var addApellido = document.getElementById('addApellido');
var addEmail = document.getElementById('addEmail');
var addImagen = document.getElementById('addImagen');

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
            apellido: apellidoAdd,
            email: emailAdd,
            urlImagen: imagenAdd
        })
        mensaje.classList.add('realizado');
        setTimeout(()=>{
            mensaje.classList.remove('realizado');
            window.reload();
        }, 1500)
    }
    saveALocal('alumnos', alumnos);
})
document.getElementById('botonEditar').addEventListener('click', function(event){
    event.preventDefault();
     // Obtener los valores seleccionados y el nuevo atributo ingresado
    let alumnoSeleccionado = document.getElementById('alumnoEditar').value;
    let atributoSeleccionado = document.getElementById('atributoEditar').value;
    let nuevoAtributo = document.getElementById('nuevoAtributo').value;
     // Verificar que se haya seleccionado un alumno y un atributo
    if(alumnoSeleccionado == '' || atributoSeleccionado == '' || nuevoAtributo == ''){
        // Mostrar mensaje de error
        mensaje.classList.add('llenarCampos');
        setTimeout(() => {mensaje.classList.remove('llenarCampos')}, 5000);
        return;
    }
     // Buscar el alumno en la lista
    let alumnoEncontrado = alumnos.find(function(alumno){
        return alumno.nombre == alumnoSeleccionado;
    });
     // Verificar si se encontró el alumno
    if(alumnoEncontrado){
        // Actualizar el atributo del alumno
        alumnoEncontrado[atributoSeleccionado] = nuevoAtributo;
         // Mostrar mensaje de éxito
        mensaje.classList.add('realizado');
        setTimeout(() => {
            mensaje.classList.remove('realizado');
            window.reload();
        }, 1500);
    } else {
        // Mostrar mensaje de error si no se encontró el alumno
        mensaje.classList.add('error');
        setTimeout(() => {mensaje.classList.remove('error')}, 2500);
    }
     // Guardar la lista actualizada en el almacenamiento local
    saveALocal('alumnos', alumnos);
});