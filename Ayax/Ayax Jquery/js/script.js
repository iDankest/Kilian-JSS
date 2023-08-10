$(document).ready(function (){
console.log("Hasta aquí todo bien!!!")
    // $('#datos').load("https://reqres.in/");
//Peticiones de Ayax con Jquery
//Get y Post
    $.get("https://reqres.in/api/users", { page: 2 }, function (respuesta){
        
        respuesta.data.forEach((element, index)=>{
            $('#datos').append("<p>"+element.first_name+" "+element.last_name+"</p>");
            
        });
    });

    $('#formulario').submit(function (e) { 
        e.preventDefault();
        var usuario = {
            nombre: $('input[name="nombre"').val(),
            web: $('input[name="web"').val()
        };

    //     $.post($(this).attr("action"), usuario, function (respuesta) {
    //         console.log(respuesta);
    //     }).done(function () {
    //         alert('Usuario añadido')
    //     });
    
        $.ajax({
            type: "POST",
            url: $(this).attr("action"),
            data: usuario,
            beforeSend: function () {
                console.log('Enviando usuario...')
            } ,
            // dataType: "dataType",
            success: function (respuesta) {
                console.log(respuesta)
            },
            error: function () {
                console.log("A ocurrido un error")
            },
            timeout: 1000
        });
    });
});