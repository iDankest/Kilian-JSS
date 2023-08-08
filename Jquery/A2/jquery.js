$(document).ready(function () {
    var rojo = $('#rojo');
    rojo.css('background-color', 'red').css('color', 'white');
    $('#amarillo').css('background-color', 'yellow').css('color', 'black');
    $('#verde').css('background-color', 'green').css('color', 'white');
    //Una buena practica es utilizar variables para no saturar el DOM y tener .recuadro mas a mano
    rojo.addClass('recuadro');
    //Elimina una clase a un elemento de DOM(Clase)
    $('#amarillo').removeClass('recuadro');
    var elemento = $(".recuadro");

    elemento.css('border', '2px solid black').css('font-size', '1.5em');

    $('[title="google"]').css({
        color: 'red',
        textDecoration: 'none'
    });
    
    var contenedor = $('#contenedor');
    // // contenedor.mouseover(function () {
    // //     $(this).css("background", 'red');
    // // })
    // // contenedor.mouseout(function () {
    // //     $(this).css('background', 'green')
    // // })
    // //Hace lo mismo que el de arriba 
    function cambiaRojo() {
        $(this).css("background", 'red');
    };
    function cambiaVerde() {
        $(this).css("background", 'green');
    };
    contenedor.hover(cambiaRojo, cambiaVerde);

    $(document).mousemove(function () {
        $('html').css('cursor', 'none');
        $('#sigueme').css('left', event.clientX).css('top', event.clientY);
    });
    $('#add-button').click(function () {
        $('#menu').append('<li><a href="' + $('#add-link').val() + '"</a>' + $('#add-link').val().replace("https://www.", "").replace(".com/", "").replace("https://") + '</li>');
        $('#add-link').val('');
    })
    function reloadlinks() {
        $('a').each(function (index) {
            var esto = $(this);
            var enlace = esto.attr("href");
            esto.attr("target", "_blank");
            esto.text(enlace);
            console.log(esto);
        })
    }
    // $("#animar").click(function () {
        // var caja = $("#contenedor");

        // caja.animate({
        //     marginLeft: '400px',
        //     fontSize: '40px',
        //     height: '120px'}, "slow")
        //     .animate({
        //         borderRadius: '25px',
        //         marginTop: '200px'}, 3600)
    // })
    $('#contenedor').draggable();
    $(function () {
        $('#accordion').accordion({
            collapsible: true,
            active: false,
            icons:{header:"ui-icon-caret-1-s", activeHeader:"ui-icon-caret-1-n"},
            animate: 1500,
            event: "mouseover"
        });
        })
        $('#accordion').on('mouseleave', function() {
            $('#accordion').accordion("option", "active", false);
        })
        $('#menu-desplegable').accordion({
            collapsible: true,
            active: false,
            icons: { header: "ui-icon-caret-1-s", activeHeader: "ui-icon-caret-1-n" },
            animate: 1500,
            event: "click"
          });
});