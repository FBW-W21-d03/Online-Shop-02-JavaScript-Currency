  
//   function myFunction() {
//   document.getElementById("price").innerHTML = document.getElementById("price").innerHTML * 1.19;
//   if(price){
//       document.getElementById("price").innerHTML = document.getElementById("price").innerHTML * 1.19;}else{
//         document.getElementById("price").innerHTML = document.getElementById("price").innerHTML / 1.19;
//       }
// }

let euro = false;
let werrung = false;


function myFunction(){
    //document = greift aus html seite zu
    //getElementById = greift auf die benannte Id zu
    
    console.log("es funkioniert");
    console.log(euro);

    euro = !euro
    werrung = !werrung
    if (euro){ document.getElementById("price").innerHTML = (document.getElementById("price").innerHTML * 1.14).toFixed(2);
             }
    else { document.getElementById("price").innerHTML = (document.getElementById("price").innerHTML / 1.14).toFixed(2);
         }
     
    if (werrung){ document.getElementById("werrung").innerHTML = "€";
             }
    else { document.getElementById("werrung").innerHTML = "$";
         }
    if (euro){ document.getElementById("price1").innerHTML = (document.getElementById("price1").innerHTML * 1.14).toFixed(2);
             }
    else { document.getElementById("price1").innerHTML = (document.getElementById("price1").innerHTML / 1.14).toFixed(2);
         }
     
    if (werrung){ document.getElementById("werrung1").innerHTML = "€";
             }
    else { document.getElementById("werrung1").innerHTML = "$";
         }
      if (euro){ document.getElementById("price2").innerHTML = (document.getElementById("price2").innerHTML * 1.14).toFixed(2);
             }
    else { document.getElementById("price2").innerHTML = (document.getElementById("price2").innerHTML / 1.14).toFixed(2);
         }
     
    if (werrung){ document.getElementById("werrung2").innerHTML = "€";
             }
    else { document.getElementById("werrung2").innerHTML = "$";
         }
    if (euro){ document.getElementById("price3").innerHTML = (document.getElementById("price3").innerHTML * 1.14).toFixed(2);
             }
    else { document.getElementById("price3").innerHTML = (document.getElementById("price3").innerHTML / 1.14).toFixed(2);
         }
     
    if (werrung){ document.getElementById("werrung3").innerHTML = "€";
             }
    else { document.getElementById("werrung3").innerHTML = "$";
         }           
    if (euro){ document.getElementById("price4").innerHTML = (document.getElementById("price4").innerHTML * 1.14).toFixed(2);
             }
    else { document.getElementById("price4").innerHTML = (document.getElementById("price4").innerHTML / 1.14).toFixed(2);
         }
     
    if (werrung){ document.getElementById("werrung4").innerHTML = "€";
             }
    else { document.getElementById("werrung4").innerHTML = "$";
         } 
    if (euro){ document.getElementById("price5").innerHTML = (document.getElementById("price5").innerHTML * 1.14).toFixed(2);
             }
    else { document.getElementById("price5").innerHTML = (document.getElementById("price5").innerHTML / 1.14).toFixed(2);
         }
     
    if (werrung){ document.getElementById("werrung5").innerHTML = "€";
             }
    else { document.getElementById("werrung5").innerHTML = "$";
         }
    if (euro){ document.getElementById("price6").innerHTML = (document.getElementById("price6").innerHTML * 1.14).toFixed(2);
             }
    else { document.getElementById("price6").innerHTML = (document.getElementById("price6").innerHTML / 1.14).toFixed(2);
         }
     
    if (werrung){ document.getElementById("werrung6").innerHTML = "€";
             }
    else { document.getElementById("werrung6").innerHTML = "$";
         }
    if (euro){ document.getElementById("price7").innerHTML = (document.getElementById("price7").innerHTML * 1.14).toFixed(2);
             }
    else { document.getElementById("price7").innerHTML = (document.getElementById("price7").innerHTML / 1.14).toFixed(2);
         }
     
    if (werrung){ document.getElementById("werrung7").innerHTML = "€";
             }
    else { document.getElementById("werrung7").innerHTML = "$";
         }
    if (euro){ document.getElementById("price8").innerHTML = (document.getElementById("price8").innerHTML * 1.14).toFixed(2);
             }
    else { document.getElementById("price8").innerHTML = (document.getElementById("price8").innerHTML / 1.14).toFixed(2);
         }
     
    if (werrung){ document.getElementById("werrung8").innerHTML = "€";
             }
    else { document.getElementById("werrung8").innerHTML = "$";
         }
    if (euro){ document.getElementById("price9").innerHTML = (document.getElementById("price9").innerHTML * 1.14).toFixed(2);
             }
    else { document.getElementById("price9").innerHTML = (document.getElementById("price9").innerHTML / 1.14).toFixed(2);
         }
     
    if (werrung){ document.getElementById("werrung9").innerHTML = "€";
             }
    else { document.getElementById("werrung9").innerHTML = "$";
         }
}