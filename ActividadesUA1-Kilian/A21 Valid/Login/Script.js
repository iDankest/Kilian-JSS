/*
var formulario = document.querySelector('.formulario');
var inputs = document.querySelectorAll('.formulario input');
var myArry = [];

*/
const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, números, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 dígitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 números.
}/*
function validar (nameform, nombreholder){
	if (expresiones.usuario.test(nameform)) {
			 myArry.push(`${nameform} Es un nombre permitido`)
		}else{
			myArry.push(`${nombreholder} No es valido`)
		}
}
const validarFormulario =(e) =>{
	switch(e.target.placeholder){
		case "- Nombre":
		validar(e.target.value, e.target.placeholder, 'usuario');
		break;
		case "- Correo":
		validar(e.target.value, e.target.placeholder);
		break;
		case "- Contraseña":
		validar(e.target.value, e.target.placeholder);
		break;
		case "- Repetir contraseña":
		validar(e.target.value, e.target.placeholder);
		break;
	}
	document.getElementById('avisos').innerHTML = myArry.join("<br/>")
}

inputs.forEach((input)=>{
	input.addEventListener('keyup', validarFormulario)
	input.addEventListener('blur', validarFormulario)

})

formulario.addEventListener('submit', (e) =>{
    e.preventDefault();
})
*/
var nombre, email, pass, form, parrafo, pass2;

nombre = document.querySelector("[name=nombre]")
email = document.querySelector("[name=email]")
pass = document.querySelector("[name=pass]")
pass2 = document.querySelector("[name=pass2]")
form = document.querySelector(".formulario")
parrafo = document.querySelector("#avisos")

form.addEventListener("submit", e=>{
	e.preventDefault()
	let avisos= ""
	let entrar = false
	if(!expresiones.usuario.test(nombre.value)){
		avisos +=`El nombre no es valido <br>`
		entrar = true
	}if(!expresiones.correo.test(email.value)){
		avisos +=`El Email no es valido <br>`
		entrar = true
	}if(!expresiones.password.test(pass.value)){
		avisos +=`La contraseña no es valido <br>`
		entrar = true
	}if(pass.value !== pass2.value){
		avisos +=`Las contraseñas no coinciden no es valido <br>`
		entrar = true
	}if (entrar) {
		parrafo.innerHTML = avisos
	} else {
		localStorage.setItem('nombre', nombre.value);
		localStorage.setItem('email' , email.value);
		parrafo.innerHTML = 'Enviado, Espere 1 s'
		setTimeout(function() {
			//window.open("logout.html", "_blank");
			window.location.href = "logout.html"
		  }, 1500);
	}
})
var body = document.querySelector("body");
var dark = document.getElementById('dark');
dark.addEventListener("click", function(){
	body.classList.toggle("dark");
  })

  //Mostrar datos en logout
//   var nombreElement = document.getElementById("dateNombre");
//   var emailElement = document.getElementById("dateEmail");

//   var dateNombre = localStorage.getItem('nombre');
//   var dateEmail = localStorage.getItem('email');

//   nombreElement.innerHTML = "Nombre: " + dateNombre;
//   emailElement.innerHTML = "Email: " + dateEmail;