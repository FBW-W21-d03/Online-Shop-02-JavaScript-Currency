 let currency = false;

 function dollerToEuro() {
     //Der Preis wird in die Variable gespeichert
     let wert1 = document.getElementById("preis1").innerHTML;
     let wert2 = document.getElementById("preis2").innerHTML;
     let wert3 = document.getElementById("preis3").innerHTML;
     let wert4 = document.getElementById("preis4").innerHTML;
     let wert5 = document.getElementById("preis5").innerHTML;
     let wert6 = document.getElementById("preis6").innerHTML;
     let wert7 = document.getElementById("preis7").innerHTML;
     let wert8 = document.getElementById("preis8").innerHTML;
     let wert9 = document.getElementById("preis9").innerHTML;

     // Mit Number() wird der String in eine nummer umgewandelt
     if (currency == false) {

         document.getElementById("preis1").innerHTML = (Number(wert1) * 1.14).toFixed(2);
         document.getElementById("wechsel1").innerHTML = "$";

         document.getElementById("preis2").innerHTML = (Number(wert2) * 1.14).toFixed(2);
         document.getElementById("wechsel2").innerHTML = "$";

         document.getElementById("preis3").innerHTML = (Number(wert3) * 1.14).toFixed(2);
         document.getElementById("wechsel3").innerHTML = "$";
        
         document.getElementById("preis4").innerHTML = (Number(wert4) * 1.14).toFixed(2);
         document.getElementById("wechsel4").innerHTML = "$";
        
         document.getElementById("preis5").innerHTML = (Number(wert5) * 1.14).toFixed(2);
         document.getElementById("wechsel5").innerHTML = "$";
         
         document.getElementById("preis6").innerHTML = (Number(wert6) * 1.14).toFixed(2);
         document.getElementById("wechsel6").innerHTML = "$";
         
         document.getElementById("preis7").innerHTML = (Number(wert7) * 1.14).toFixed(2);
         document.getElementById("wechsel7").innerHTML = "$";
         
         document.getElementById("preis8").innerHTML = (Number(wert8) * 1.14).toFixed(2);
         document.getElementById("wechsel8").innerHTML = "$";
         
         document.getElementById("preis9").innerHTML = (Number(wert9) * 1.14).toFixed(2);
         document.getElementById("wechsel9").innerHTML = "$";

         document.getElementById("btn").innerHTML = "In € anzeigen";

     } else {

         document.getElementById("preis1").innerHTML = (Number(wert1) / 1.14).toFixed(2);
         document.getElementById("wechsel1").innerHTML = "€";

         document.getElementById("preis2").innerHTML = (Number(wert2) / 1.14).toFixed(2);
         document.getElementById("wechsel2").innerHTML = "€";

         document.getElementById("preis3").innerHTML = (Number(wert3) / 1.14).toFixed(2);
         document.getElementById("wechsel3").innerHTML = "€";

         document.getElementById("preis4").innerHTML = (Number(wert4) / 1.14).toFixed(2);
         document.getElementById("wechsel4").innerHTML = "€";

         document.getElementById("preis5").innerHTML = (Number(wert5) / 1.14).toFixed(2);
         document.getElementById("wechsel5").innerHTML = "€";

         document.getElementById("preis6").innerHTML = (Number(wert6) / 1.14).toFixed(2);
         document.getElementById("wechsel6").innerHTML = "€";

         document.getElementById("preis7").innerHTML = (Number(wert7) / 1.14).toFixed(2);
         document.getElementById("wechsel7").innerHTML = "€";

         document.getElementById("preis8").innerHTML = (Number(wert8) / 1.14).toFixed(2);
         document.getElementById("wechsel8").innerHTML = "€";

         document.getElementById("preis9").innerHTML = (Number(wert9) / 1.14).toFixed(2);
         document.getElementById("wechsel9").innerHTML = "€";

         


         document.getElementById("btn").innerHTML = "In $ anzeigen";
     }
     currency = !currency;

 }