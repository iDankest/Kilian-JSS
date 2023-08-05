$(document).ready(function () {
    $(".right-box").html(`
    <div>
    <h1>Entra en nuestra academia</h1>
    <p>Crea tu itinerario formativo</p>
    <button id='hd'>INFORMACIÓN</button>
    </div>
    `)
    $("#inicio").click(function () {
        $(".right-box").html(`
        <div>
        <h1>Entra en nuestra academia</h1>
        <p>Crea tu itinerario formativo</p>
        <button id='hd'>INFORMACIÓN</button>
        </div>
        `)
    })
    $("#q1").click(function () {
        $(".fondocurso").css("background-color", "black");
    })

    $("#curso").click(function () {
        $(".right-box").html(`
        <div>
        <div>
            <img src="" alt=""><video controls src="media/VideoClase.mp4"></video>
        </div>
        <p>Hola mundo</p>
        </div>
        `)
    })
    $("#contacto").click(function () {
        $(".right-box").html(`
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
        `)
    })

    $('#accProfesor').click(function(){
        $('.modal').toggleClass("active");
    })
    $('#accAlumno').click(function(){
        alert('En construcción')
    })
    $('.cerrar_modal').click(function(){
        $('.modal').toggleClass("active");
    })
    $('#hd').click(function() {
        $('.right-box').toggleClass('active')
    })    
    $('.luna').click(function(){
        $("body").toggleClass("darkmode");
        $('.main-contenedor').toggleClass('darkmode');
        $('button').toggleClass('darkmode');
        $('li').toggleClass('darkmode');
        $('.modal').toggleClass('darkmode');
    })
  

})
