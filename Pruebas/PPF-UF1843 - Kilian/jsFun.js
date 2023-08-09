$(document).ready(function () {
    $('#uno')
    
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
        $('.cont3').dialog();
    })
    $('#seis').on('click', function () {
        $('.cont3').dialog();
    })
    $('#siete').on('click', function () {
        $('.cont3').dialog();
    })
    $('#ocho').on('click', function () {
        $('.cont3').dialog();
    })
    $('#nueve').on('click', function () {
        $('.cont3').dialog();
    })
    $('#diez').on('click', function () {
        $('.cont3').dialog();
    })
    $('#once').on('click', function () {
        $('.cont3').dialog();
    })
    $('#doce').on('click', function () {
        $('.cont3').dialog();
    })

});