let euro = false


function myFunction(){
    //document = greift aus html seite zu
    //getElementById = greift auf die benannte Id zu
    
    console.log("es funkioniert")
    console.log(euro)
    euro = !euro
     
    if (euro) { document.getElementById("wert").innerHTML = ("$")}
    
    else { document.getElementById("wert").innerHTML = ("€")
    }

    if (euro) { document.getElementById("wert1").innerHTML = ("$")}
    
    else { document.getElementById("wert1").innerHTML = ("€")
    }

    if (euro) { document.getElementById("wert2").innerHTML = ("$")}
    
    else { document.getElementById("wert2").innerHTML = ("€")
    }

    if (euro) { document.getElementById("wert3").innerHTML = ("$")}
    
    else { document.getElementById("wert3").innerHTML = ("€")
    }

    if (euro) { document.getElementById("wert4").innerHTML = ("$")}
    
    else { document.getElementById("wert4").innerHTML = ("€")
    }

    if (euro) { document.getElementById("wert5").innerHTML = ("$")}
    
    else { document.getElementById("wert5").innerHTML = ("€")
    }

    if (euro) { document.getElementById("wert6").innerHTML = ("$")}
    
    else { document.getElementById("wert6").innerHTML = ("€")
    }

    if (euro) { document.getElementById("wert7").innerHTML = ("$")}
    
    else { document.getElementById("wert7").innerHTML = ("€")
    }

    if (euro) { document.getElementById("wert8").innerHTML = ("$")}
    
    else { document.getElementById("wert8").innerHTML = ("€")
    }
     
    if (euro){ document.getElementById("card-link").innerHTML = (document.getElementById("card-link").innerHTML * 1.14).toFixed(2)  ;
             }
    else { document.getElementById("card-link").innerHTML = (document.getElementById("card-link").innerHTML / 1.14).toFixed(2);
         }

         if (euro){ document.getElementById("card-link1").innerHTML = (document.getElementById("card-link1").innerHTML * 1.14).toFixed(2)  ;
             }
    else { document.getElementById("card-link1").innerHTML = (document.getElementById("card-link1").innerHTML / 1.14).toFixed(2);
         }

         if (euro){ document.getElementById("card-link2").innerHTML = (document.getElementById("card-link2").innerHTML * 1.14).toFixed(2)  ;
             }
    else { document.getElementById("card-link2").innerHTML = (document.getElementById("card-link2").innerHTML / 1.14).toFixed(2);
         }

         if (euro){ document.getElementById("card-link3").innerHTML = (document.getElementById("card-link3").innerHTML * 1.14).toFixed(2)  ;
             }
    else { document.getElementById("card-link3").innerHTML = (document.getElementById("card-link3").innerHTML / 1.14).toFixed(2);
         }

         if (euro){ document.getElementById("card-link4").innerHTML = (document.getElementById("card-link4").innerHTML * 1.14).toFixed(2)  ;
             }
    else { document.getElementById("card-link4").innerHTML = (document.getElementById("card-link4").innerHTML / 1.14).toFixed(2);
         }

         if (euro){ document.getElementById("card-link5").innerHTML = (document.getElementById("card-link5").innerHTML * 1.14).toFixed(2)  ;
             }
    else { document.getElementById("card-link5").innerHTML = (document.getElementById("card-link5").innerHTML / 1.14).toFixed(2);
         }

         if (euro){ document.getElementById("card-link6").innerHTML = (document.getElementById("card-link6").innerHTML * 1.14).toFixed(2)  ;
             }
    else { document.getElementById("card-link6").innerHTML = (document.getElementById("card-link6").innerHTML / 1.14).toFixed(2);
         }

         if (euro){ document.getElementById("card-link7").innerHTML = (document.getElementById("card-link7").innerHTML * 1.14).toFixed(2)  ;
             }
    else { document.getElementById("card-link7").innerHTML = (document.getElementById("card-link7").innerHTML / 1.14).toFixed(2);
         }
         
         if (euro){ document.getElementById("card-link8").innerHTML = (document.getElementById("card-link8").innerHTML * 1.14).toFixed(2)  ;
        }
    else { document.getElementById("card-link8").innerHTML = (document.getElementById("card-link8").innerHTML / 1.14).toFixed(2);
    }
}

