let währung = false;

 function dollareuro() {
     let preis1 = document.getElementById("preis1").innerHTML;
     let preis2 = document.getElementById("preis2").innerHTML;
     let preis3 = document.getElementById("preis3").innerHTML;
     let preis4 = document.getElementById("preis4").innerHTML;
     let preis5 = document.getElementById("preis5").innerHTML;
     let preis6 = document.getElementById("preis6").innerHTML;
     let preis7 = document.getElementById("preis7").innerHTML;
     let preis8 = document.getElementById("preis8").innerHTML;
     let preis9 = document.getElementById("preis9").innerHTML;
     let preis10 = document.getElementById("preis10").innerHTML;
     let preis11 = document.getElementById("preis11").innerHTML;
     let preis12 = document.getElementById("preis12").innerHTML;
    
     if (währung == false) {
         document.getElementById("preis1").innerHTML = (Number(wert1) * 1.14).toFixed(2);
         document.getElementsByClassName("span").innerHTML = "$";

         document.getElementById("preis2").innerHTML = (Number(wert2) * 1.14).toFixed(2);

         document.getElementById("preis3").innerHTML = (Number(wert3) * 1.14).toFixed(2);
        
         document.getElementById("preis4").innerHTML = (Number(wert4) * 1.14).toFixed(2);
        
         document.getElementById("preis5").innerHTML = (Number(wert5) * 1.14).toFixed(2);
       
         document.getElementById("preis6").innerHTML = (Number(wert6) * 1.14).toFixed(2);
     
         document.getElementById("preis7").innerHTML = (Number(wert7) * 1.14).toFixed(2);   
         
         document.getElementById("preis8").innerHTML = (Number(wert8) * 1.14).toFixed(2);    
         
         document.getElementById("preis9").innerHTML = (Number(wert9) * 1.14).toFixed(2)

         document.getElementById("btn").innerHTML = "In € anzeigen";

     } else {
         document.getElementById("preis1").innerHTML = (Number(wert1) / 1.14).toFixed(2);
         document.getElementsByClassName("zeichenändern").innerHTML = "€";

         document.getElementById("preis2").innerHTML = (Number(wert2) / 1.14).toFixed(2);

         document.getElementById("preis3").innerHTML = (Number(wert3) / 1.14).toFixed(2);

         document.getElementById("preis4").innerHTML = (Number(wert4) / 1.14).toFixed(2);

         document.getElementById("preis5").innerHTML = (Number(wert5) / 1.14).toFixed(2);

         document.getElementById("preis6").innerHTML = (Number(wert6) / 1.14).toFixed(2);

         document.getElementById("preis7").innerHTML = (Number(wert7) / 1.14).toFixed(2);

         document.getElementById("preis8").innerHTML = (Number(wert8) / 1.14).toFixed(2);

         document.getElementById("preis9").innerHTML = (Number(wert9) / 1.14).toFixed(2);

         document.getElementById("btn").innerHTML = "In $ anzeigen";
     }
     währung = !währung;

 }