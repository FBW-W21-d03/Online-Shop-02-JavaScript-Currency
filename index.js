




let europa =false;
let zeige=true;

function Preis() {
    zeige=!zeige;
    if (zeige==true) {
        document.getElementById("dollar").innerHTML = "Preis $ ";
    } else {
        document.getElementById("dollar").innerHTML = "Preis € ";
    }
    // console.log(zeige);
    

//     let erstepreis= document.getElementById("Preis-Asus").innerHTML="699$";
//    document.getElementById(Preis-Asus).innerHTML=erstepreis;

europa=!europa
if (europa) {
    document.getElementById("Preis-Asus").innerHTML=(document.getElementById( "Preis-Asus").innerHTML*1.14).toFixed() ;
} else {
    document.getElementById("Preis-Asus").innerHTML=(document.getElementById("Preis-Asus").innerHTML/1.14).toFixed() ;
}

if (europa) {document.getElementById("eu").innerHTML="$"
    
} else {
    document.getElementById("eu").innerHTML="€";
}
//2
if (europa) {
    document.getElementById("Preis-Asus2").innerHTML=(document.getElementById( "Preis-Asus2").innerHTML*1.14).toFixed() ;
} else {
    document.getElementById("Preis-Asus2").innerHTML=(document.getElementById("Preis-Asus2").innerHTML/1.14).toFixed() ;
}

if (europa) {document.getElementById("eu2").innerHTML="$"
    
} else {
    document.getElementById("eu2").innerHTML="€";
}
//3
if (europa) {
    document.getElementById("lap-samsung").innerHTML=(document.getElementById( "lap-samsung").innerHTML*1.14).toFixed() ;
} else {
    document.getElementById("lap-samsung").innerHTML=(document.getElementById("lap-samsung").innerHTML/1.14).toFixed() ;
}

if (europa) {document.getElementById("eu3").innerHTML="$"
    
} else {
    document.getElementById("eu3").innerHTML="€";
}
//4
if (europa) {
    document.getElementById("sony-tab").innerHTML=(document.getElementById( "sony-tab").innerHTML*1.14).toFixed() ;
} else {
    document.getElementById("sony-tab").innerHTML=(document.getElementById("sony-tab").innerHTML/1.14).toFixed() ;
}

if (europa) {document.getElementById("eu4").innerHTML="$"
    
} else {
    document.getElementById("eu4").innerHTML="€";
}
//5
if (europa) {
    document.getElementById("sony-head").innerHTML=(document.getElementById( "sony-head").innerHTML*1.14).toFixed() ;
} else {
    document.getElementById("sony-head").innerHTML=(document.getElementById("sony-head").innerHTML/1.14).toFixed() ;
}

if (europa) {document.getElementById("eu5").innerHTML="$"
    
} else {
    document.getElementById("eu5").innerHTML="€";
}
//6
if (europa) {
    document.getElementById("msi").innerHTML=(document.getElementById( "msi").innerHTML*1.14).toFixed() ;
} else {
    document.getElementById("msi").innerHTML=(document.getElementById("msi").innerHTML/1.14).toFixed() ;
}

if (europa) {document.getElementById("eu6").innerHTML="$"
    
} else {
    document.getElementById("eu6").innerHTML="€";
}
//7
if (europa) {
    document.getElementById("galaxy").innerHTML=(document.getElementById( "galaxy").innerHTML*1.14).toFixed() ;
} else {
    document.getElementById("galaxy").innerHTML=(document.getElementById("galaxy").innerHTML/1.14).toFixed() ;
}

if (europa) {document.getElementById("eu7").innerHTML="$"
    
} else {
    document.getElementById("eu7").innerHTML="€";
}
//8
if (europa) {
    document.getElementById("asuss").innerHTML=(document.getElementById( "asuss").innerHTML*1.14).toFixed() ;
} else {
    document.getElementById("asuss").innerHTML=(document.getElementById("asuss").innerHTML/1.14).toFixed() ;
}

if (europa) {document.getElementById("eu8").innerHTML="$"
    
} else {
    document.getElementById("eu8").innerHTML="€";
}
//9
if (europa) {
    document.getElementById("kamera").innerHTML=(document.getElementById( "kamera").innerHTML*1.14).toFixed() ;
} else {
    document.getElementById("kamera").innerHTML=(document.getElementById("kamera").innerHTML/1.14).toFixed() ;
}

if (europa) {document.getElementById("eu9").innerHTML="$"
    
} else {
    document.getElementById("eu9").innerHTML="€";
}

  }
  