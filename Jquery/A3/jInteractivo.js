$(document).ready(function () {
    $( function() {
        $( "#dialog" ).dialog({
          autoOpen: false,
          show: {
            effect: "blind",
            duration: 1000
          },
          hide: {
            effect: "explode",
            duration: 1000
          }
        });
     
        $( "#abrir" ).on( "click", function(e) {
            e.preventDefault();
            $( "#dialog" ).dialog( "option", "position", { my: "left top", at: "left bottom", of: e } );
            $( "#dialog" ).dialog( "open" );
        });
      } );
})