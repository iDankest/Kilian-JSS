$(document).ready(function () {
    $(document).tooltip();
    $('#uno').click(function () { 
        $('.modal').toggleClass('active');
        
    });
    $('.cerrar_modal').click(function(){
        $('.modal').toggleClass("active");
    })
    
    $('#dos').on('click', function () {
        $('#principal').sortable();
        $('#principal').disableSelection();
    });
    $('#tres').on('click', function () {
        $('.cont3').dialog();
    })
    var myboolean = true
    $('#cuatro').on('click', function () {
        if (myboolean) {
            $('.cont4').animate({
                backgroundColor: 'black',
                color: 'white',
                width: '300px'
            }, 1000)
        } else {
            $('.cont4').animate({
                backgroundColor: 'white',
                color: 'black',
                width: '20vh'
            }, 1000)
        }
        myboolean = !myboolean;
    })
    $('#cinco').on('click', function () {
        if (myboolean) {
          $('.cont5').css({
            backgroundColor: 'blue',
            color: 'white',
            fontSize: '30px'
        })  
        } else {
            $('.cont5').css({
                backgroundColor: 'white',
                color: 'black',
                fontSize: '19px'
            }) 
        }
        myboolean = !myboolean;
    })
    $('#seis').on('click', function () {
        $('.cont6').hide();
    })
    $('#siete').on('click', function () {
        $('.cont6').show();
    })
    $('#ocho').on('click', function () {
        $('.cont13').show();
    })
    $('#nueve').on('click', function () {
        $('#principal').hide(1000, function () {
            $('#principal').before('<h1 class="bb">Hola</h1>');
        });
    })
    $('#diez').on('click', function () {
        $('.bb').remove();
        $('#principal').show(1000, function () {
            alert('de locos')
        });
    })
    $('#once').on('click', function () {
        $('#principal').toggle("fade" ,1000);
    })
    $('#doce').on('click', function () {
        $('.cont9').toggle(1000, function () {
            $('.cont9').html(`
                <ul>
                    <li>Inicio</li>
                    <li>Curso</li>
                    <li>Contacto</li>
                </ul> 
            `);
        });
    })
    $('#trece').click(function () { 
        $('body').fadeOut(1000, function () {
            location.reload();
        });
    });
});