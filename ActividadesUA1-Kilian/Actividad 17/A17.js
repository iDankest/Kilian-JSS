function pulsar(){
    var arr=[];
    arr = document.formulario.miarea.value.split(" ");
    var n = arr.length;
    var p = arr[0];
    var u =arr[arr.length-1];

    document.getElementById("res").innerHTML="Numero de palabras: "+n+"<br/> Primera palabra: " +p+ " <br/> Ultima palabra:  "+u;
}