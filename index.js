


let dollar = false;

function cha() {
    
    let wer1 = document.getElementById("Preis01").innerHTML;
    let wer2 = document.getElementById("Preis02").innerHTML;
    let wer3 = document.getElementById("Preis03").innerHTML;
    let wer4 = document.getElementById("Preis04").innerHTML;
    let wer5 = document.getElementById("Preis05").innerHTML;
    let wer6 = document.getElementById("Preis06").innerHTML;
    let wer7 = document.getElementById("Preis07").innerHTML;
    let wer8 = document.getElementById("Preis08").innerHTML;
    let wer9 = document.getElementById("Preis09").innerHTML;

    if (dollar === false){
        document.getElementById("changeTo").innerHTML ="Change to Euro";
        

        document.getElementById("Preis01").innerHTML=(Number(wer1)*1.14).toFixed(2);
        document.getElementById("changeTo01").innerHTML="$";
        document.getElementById("Preis02").innerHTML=(Number(wer2)*1.14).toFixed(2);
        document.getElementById("changeTo02").innerHTML="$";
        document.getElementById("Preis03").innerHTML=(Number(wer3)*1.14).toFixed(2);
        document.getElementById("changeTo03").innerHTML="$";
        document.getElementById("Preis04").innerHTML=(Number(wer4)*1.14).toFixed(2);
        document.getElementById("changeTo04").innerHTML="$";
        document.getElementById("Preis05").innerHTML=(Number(wer5)*1.14).toFixed(2);
        document.getElementById("changeTo05").innerHTML="$";
        document.getElementById("Preis06").innerHTML=(Number(wer6)*1.14).toFixed(2);
        document.getElementById("changeTo06").innerHTML="$";
        document.getElementById("Preis07").innerHTML=(Number(wer7)*1.14).toFixed(2);
        document.getElementById("changeTo07").innerHTML="$";
        document.getElementById("Preis08").innerHTML=(Number(wer8)*1.14).toFixed(2);
        document.getElementById("changeTo08").innerHTML="$";
        document.getElementById("Preis09").innerHTML=(Number(wer9)*1.14).toFixed(2);
        document.getElementById("changeTo09").innerHTML="$";


        
    } else {
        document.getElementById("changeTo").innerHTML ="Change to Dollar";

        document.getElementById("Preis01").innerHTML=(Number(wer1)/1.14).toFixed(2);
        document.getElementById("changeTo01").innerHTML="€";
        document.getElementById("Preis02").innerHTML=(Number(wer2)/1.14).toFixed(2);
        document.getElementById("changeTo02").innerHTML="€";
        document.getElementById("Preis03").innerHTML=(Number(wer3)/1.14).toFixed(2);
        document.getElementById("changeTo03").innerHTML="€";
        document.getElementById("Preis04").innerHTML=(Number(wer4)/1.14).toFixed(2);
        document.getElementById("changeTo04").innerHTML="€";
        document.getElementById("Preis05").innerHTML=(Number(wer5)/1.14).toFixed(2);
        document.getElementById("changeTo05").innerHTML="€";
        document.getElementById("Preis06").innerHTML=(Number(wer6)/1.14).toFixed(2);
        document.getElementById("changeTo06").innerHTML="€";
        document.getElementById("Preis07").innerHTML=(Number(wer7)/1.14).toFixed(2);
        document.getElementById("changeTo07").innerHTML="€";
        document.getElementById("Preis08").innerHTML=(Number(wer8)/1.14).toFixed(2);
        document.getElementById("changeTo08").innerHTML="€";
        document.getElementById("Preis09").innerHTML=(Number(wer9)/1.14).toFixed(2);
        document.getElementById("changeTo09").innerHTML="€";
    }
   dollar=!dollar;
}

