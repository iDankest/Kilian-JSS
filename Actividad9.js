var n = parseInt(prompt("n tabla"))
for(i=1; i<=10; i++){
    document.write(i+" x "+n+" = "+i*n + "<br/>");

}

for(i=1; i<=10; i++){
    document.write("La tabla del "+i+ "<br/>");

    for(j=1; j<=10; j++){
        document.write(i+" x "+j+" = "+i*j+"<br/>")
    }

}

do {
    var r = parseInt(prompt("Hasta qué tabla quieres que te cuente?"));
    for(i=1; i<=r; i++){
        document.write("La tabla del "+i+ "<br/>");
    
        for(j=1; j<=10; j++){
            document.write(i+" x "+j+" = "+i*j+"<br/>");
        }
    }
} while (t>=r);
