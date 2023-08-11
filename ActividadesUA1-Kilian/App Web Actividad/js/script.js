$(document).ready(function () {
    // $('.acc1').click(function () { 
    //     $('body').toggleClass('.darkmode');
    // });
    document.querySelector('.acc1').addEventListener('click', function(){
        let darkmode = document.querySelector('body')
        darkmode.classList.toggle("darkmode")
    })
    $('#acc').on('click', function () { 
    $('#contenido').html('<h1>hola</h1>');  
    });

    $('.comotal').accordion()
    
});