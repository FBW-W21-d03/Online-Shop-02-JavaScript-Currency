// euro >> dollar
function euroInDollar(){

    let euro = document.getElementById("euro").value;

    let dollar = euro * 1.14;


    document.getElementById("dollar").value = dollar.toFixed(2);
}

function dollarInEuro(){
    let dollar = document.getElementById("dollar").value;
    let euro = dollar * 0.86;
    document.getElementById("euro").value = euro.toFixed(2);
}

