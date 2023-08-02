// //BOM Browser Object Model

// console.log(window.innerWidth);
// console.log(window.innerHeight);

// console.log(screen.width);
// console.log(screen.height);

// console.log(window.location);
// function redirect(){
//     window.location.href = "www.google.com";
// }
// function nuevaVentana(url){
//     // window.open(url)
//     window.open(url,"", "with=400px", "heigth=300px")
// }

window.addEventListener('load', () =>{
    

    function cambiarColor(){
        if(boton.style.background=="green"){
            boton.style.background="red"
        }else{
            boton.style.background="green"
        }
    }
    var boton = document.querySelector('#boton2');
    boton.addEventListener('click', function(){
        cambiarColor();
        this.style.border = "10px solid black"
    })
    
})