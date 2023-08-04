$(document).ready(function () {
    $(".right-box").html(`
    <div>
    <h1>Entra en nuestra academia</h1>
    <p>Crea tu itinerario formativo</p>
    <button>INFORMACIÓN</button>
    </div>
    `)
    $("#inicio").click(function () {
        $(".right-box").html(`
        <div>
        <h1>Entra en nuestra academia</h1>
        <p>Crea tu itinerario formativo</p>
        <button>INFORMACIÓN</button>
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
    $("#accProfesor").click(function() {
        $(".modal").show();
      });
    
      $(".cerrar").click(function() {
        $(".modal").hide();
      });
    
    // $("#accProfesor").click(function () {
    //     $(".modal").css("opacity", "1");
    //     $(".modal").css("pointer-events", "unset");
    // })
    
    $(document).ready(function() {
        $("#accProfesor").click(function() {
          $(".modal").show();
        });
      });
})
