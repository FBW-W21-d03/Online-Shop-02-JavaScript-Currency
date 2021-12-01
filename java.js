let euro = false


function myFunction(){
    //document = greift aus html seite zu
    //getElementById = greift auf die benannte Id zu
    
    console.log("es funkioniert")
    console.log(euro)
    euro = !euro
    if (euro){ document.getElementById("card-link").innerHTML = (document.getElementById("card-link").innerHTML * 1.14).toFixed()  ;
             }
    else { document.getElementById("card-link").innerHTML = (document.getElementById("card-link").innerHTML / 1.14).toFixed();
         }
}

