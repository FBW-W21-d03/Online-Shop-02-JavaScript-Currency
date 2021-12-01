let Euro =true;
function currency () {
    Euro = !Euro;
}

}
if (Euro){ document.getElementById("myButton ").innerHTML = (document.getElementById("myButton").innerHTML * 1.14).toFixed(2)  ;
}
else { document.getElementById("myButton").innerHTML = (document.getElementById("myButton").innerHTML / 1.14).toFixed(2);
}

let euro = false


function myFunction(){
    
    
    console.log("es funkioniert")
    console.log(euro)
    euro = !euro
     
    if (euro) { document.getElementById("wert").innerHTML = ("$")}
    
    else { document.getElementById("wert").innerHTML = ("€")
    }
