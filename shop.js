// euro >> dollar
function euroInDollar(){

    let euro = document.getElementById("euro").value;

    let dollar = euro * 1.14;


 //   document.getElementById("dollar").value = dollar.toFixed(2);
let ch1 = document.getElementById("ch1").innerHTML= (document.getElementById("ch1").innerHTML * 1.14).toFixed(2);
console.log(ch1 , "$");

let ch2 = document.getElementById("ch2").innerHTML= (document.getElementById("ch2").innerHTML * 1.14).toFixed(2);
console.log(ch2 , "$");

let ch3 = document.getElementById("ch3").innerHTML= (document.getElementById("ch3").innerHTML * 1.14).toFixed(2);
console.log(ch3 , "$");

let ch4 = document.getElementById("ch4").innerHTML= (document.getElementById("ch4").innerHTML * 1.14).toFixed(2);
console.log(ch4 , "$");

let ch5 = document.getElementById("ch5").innerHTML= (document.getElementById("ch5").innerHTML * 1.14).toFixed(2);
console.log(ch5 , "$");

let ch6 = document.getElementById("ch6").innerHTML= (document.getElementById("ch6").innerHTML * 1.14).toFixed(2);
console.log(ch6 , "$");

let ch7 = document.getElementById("ch7").innerHTML= (document.getElementById("ch7").innerHTML * 1.14).toFixed(2);
console.log(ch7 , "$");

let ch8 = document.getElementById("ch8").innerHTML= (document.getElementById("ch8").innerHTML * 1.14).toFixed(2);
console.log(ch8 , "$");

let ch9 = document.getElementById("ch9").innerHTML= (document.getElementById("ch9").innerHTML * 1.14).toFixed(2);
console.log(ch9 , "$");
}

function dollarInEuro(){
    let dollar = document.getElementById("dollar").value;
    let euro = dollar * 0.86;

    document.getElementById("euro").value = euro.toFixed(2);
    let ch1 = (document.getElementById("ch1").innerHTML * 0.86).toFixed(2);
    console.log(ch1 , "€");
    let ch2 = (document.getElementById("ch2").innerHTML * 0.86).toFixed(2);
    console.log(ch2 , "€");
    let ch3 = (document.getElementById("ch3").innerHTML * 0.86).toFixed(2);
    console.log(ch3 , "€");
    let ch4 = (document.getElementById("ch4").innerHTML * 0.86).toFixed(2);
    console.log(ch4 , "€");
    let ch5 = (document.getElementById("ch5").innerHTML * 0.86).toFixed(2);
    console.log(ch5 , "€");
    let ch6 = (document.getElementById("ch6").innerHTML * 0.86).toFixed(2);
    console.log(ch6 , "€");
    let ch7 = (document.getElementById("ch7").innerHTML * 0.86).toFixed(2);
    console.log(ch7 , "€");
    let ch8 = (document.getElementById("ch8").innerHTML * 0.86).toFixed(2);
    console.log(ch8 , "€");
    let ch9 = (document.getElementById("ch9").innerHTML * 0.86).toFixed(2);
    console.log(ch9 , "€");
}

let ch1 = document.getElementById("ch1").innerHTML;
console.log(ch1);

let ch2 = document.getElementById("ch2").innerHTML;
console.log(ch2);

let ch3 = document.getElementById("ch3").innerHTML;
console.log(ch3);

let ch4 = document.getElementById("ch4").innerHTML;
console.log(ch4);

let ch5 = document.getElementById("ch5").innerHTML;
console.log(ch5);

let ch6 = document.getElementById("ch6").innerHTML;
console.log(ch6);

let ch7 = document.getElementById("ch7").innerHTML;
console.log(ch7);

let ch8 = document.getElementById("ch8").innerHTML;
console.log(ch8);

let ch9 = document.getElementById("ch9").innerHTML;
console.log(ch9);

