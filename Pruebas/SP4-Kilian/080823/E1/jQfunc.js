$(document).ready(function () {
   
    $(function () {
        $('#seccion3').accordion({
            collapsible: true,
            active: false,
            event: "mouseover",
            animate: 1000
        });
    });
    $('#seccion3').on('mouseleave', function () {
        $(this).accordion({
            active: false
        })
    })
    $('#lunaicon').click(function () {
        $('body').toggleClass('modo-oscuro')
        $('a').toggleClass('modo-oscuro')
        $('.ui-accordion-header').toggleClass('active')
        $('.ui-accordion-content').toggleClass('active')
        $('ul img').toggleClass('modo-oscuro')
    });
    $('#accicon').click(function () {
        $('body').toggleClass('active')
    })
    $( function() {
        $( document ).tooltip();
      } );
});