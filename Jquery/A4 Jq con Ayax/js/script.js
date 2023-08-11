$(document).ready(function () {

  


    $('#formulario').submit(function (e) { 
        e.preventDefault();
        var usuario = {
            codigo: $('input[name="codigo"]').val(),
            nombre: $('input[name="nombre"]').val(),
            apellidos: $('input[name="apellidos"]').val(),
            correo: $('input[name="correo"]').val(),
            edad: $('input[name="edad"]').val(),
            foto: $('input[name="foto"]').val()
        }
        $.ajax({
            type: "POST",
            url: $(this).attr("action"),
            data: usuario,
            BeforeSend: function () {
                alert('Enviando información')
            },
            success: function (info) {
                console.log(info)
                const usuver = JSON.stringify(usuario)
                console.log(usuver)
            },
            error: function () {
              console.log("ERROR")  
            },
            timeout: 1000
        });
    });
    
    $.get("https://reqres.in/api/users", {page:2}, function (info) {
         
        info.data.forEach((element, index) => {
            $('#datos').append(`<p> ${element.first_name} ${element.last_name}</br>`)
        });
    },
);
});