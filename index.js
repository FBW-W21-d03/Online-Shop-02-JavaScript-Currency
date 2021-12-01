let währung = false;

 function dollareuro() {
     let preis1 = document.getElementById("wert1").innerHTML;
     let preis2 = document.getElementById("wert2").innerHTML;
     let preis3 = document.getElementById("wert3").innerHTML;
     let preis4 = document.getElementById("wert4").innerHTML;
     let preis5 = document.getElementById("wert5").innerHTML;
     let preis6 = document.getElementById("wert6").innerHTML;
     let preis7 = document.getElementById("wert7").innerHTML;
     let preis8 = document.getElementById("wert8").innerHTML;
     let preis9 = document.getElementById("wert9").innerHTML;
     let preis10 = document.getElementById("wert10").innerHTML;
     let preis11 = document.getElementById("wert11").innerHTML;
     let preis12 = document.getElementById("wert12").innerHTML;
    
     if (währung == false) {
         document.getElementById("wert1").innerHTML = (Number(preis1) * 1.14).toFixed(2);
         document.getElementsByClassName("span").innerHTML = "$";

         document.getElementById("wert2").innerHTML = (Number(preis2) * 1.14).toFixed(2);

         document.getElementById("wert3").innerHTML = (Number(preis3) * 1.14).toFixed(2);
        
         document.getElementById("wert4").innerHTML = (Number(preis4) * 1.14).toFixed(2);
        
         document.getElementById("wert5").innerHTML = (Number(preis5) * 1.14).toFixed(2);
       
         document.getElementById("wert6").innerHTML = (Number(preis6) * 1.14).toFixed(2);
     
         document.getElementById("wert7").innerHTML = (Number(preis7) * 1.14).toFixed(2);   
         
         document.getElementById("wert8").innerHTML = (Number(preis8) * 1.14).toFixed(2);    
         
         document.getElementById("wert9").innerHTML = (Number(preis9) * 1.14).toFixed(2);
         document.getElementById("wert10").innerHTML = (Number(preis10) * 1.14).toFixed(2);
         document.getElementById("wert11").innerHTML = (Number(preis11) * 1.14).toFixed(2);
         document.getElementById("wert12").innerHTML = (Number(preis12) * 1.14).toFixed(2);

     } else {
         document.getElementById("wert1").innerHTML = (Number(preis1) / 1.14).toFixed(2);
         document.getElementsByClassName("zeichenändern").innerHTML = "€";

         document.getElementById("wert2").innerHTML = (Number(preis2) / 1.14).toFixed(2);

         document.getElementById("wert3").innerHTML = (Number(preis3) / 1.14).toFixed(2);

         document.getElementById("wert4").innerHTML = (Number(preis4) / 1.14).toFixed(2);

         document.getElementById("wert5").innerHTML = (Number(preis5) / 1.14).toFixed(2);

         document.getElementById("wert6").innerHTML = (Number(preis6) / 1.14).toFixed(2);

         document.getElementById("wert7").innerHTML = (Number(preis7) / 1.14).toFixed(2);

         document.getElementById("wert8").innerHTML = (Number(preis8) / 1.14).toFixed(2);

         document.getElementById("wert9").innerHTML = (Number(preis9) / 1.14).toFixed(2);
         document.getElementById("wert10").innerHTML = (Number(preis9) / 1.14).toFixed(2);
         document.getElementById("wert11").innerHTML = (Number(preis9) / 1.14).toFixed(2);
         document.getElementById("wert12").innerHTML = (Number(preis9) / 1.14).toFixed(2);
        
     }
     währung = !währung;

 }