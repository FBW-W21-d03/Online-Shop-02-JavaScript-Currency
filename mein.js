/* function ToDolar(){
    document.getElementById("hp").innerHTML= (180*1.13).toFixed(2)+ "$";
    document.getElementById("head").innerHTML= (55*1.13).toFixed(2)+ "$";
    document.getElementById("think").innerHTML= (255*1.13).toFixed(2)+ "$";
    document.getElementById("ipad").innerHTML= (425*1.13).toFixed(2)+ "$";
    document.getElementById("Hea-set").innerHTML= (75*1.13).toFixed(2)+ "$";
    document.getElementById("sum-lap").innerHTML= (454*1.13).toFixed(2)+ "$";
    document.getElementById("smart-phone").innerHTML= (195*1.13).toFixed(2)+ "$";
    document.getElementById("asus").innerHTML= (265*1.13).toFixed(2)+ "$";
    document.getElementById("camera").innerHTML= (425*1.13).toFixed(2)+ "$";
    
} */

let euro = false;
let Dollar = false;

function ToDolar() {
  console.log("es funkioniert");
  console.log(euro);

  euro = !euro;
  Dollar = !Dollar;
  if (euro) {
    document.getElementById("price").innerHTML = (
      document.getElementById("price").innerHTML * 1.14
    ).toFixed(2);
  }
  if (euro) {
    document.getElementById("price").innerHTML = "€";
  } else {
    document.getElementById("price").innerHTML = "$";
  }
  if (euro) {
    document.getElementById("Dollar").innerHTML = (
      document.getElementById("Dollar").innerHTML * 1.14
    ).toFixed(2);
  }
  if (euro) {
    document.getElementById("Dollar").innerHTML = "€";
  } else {
    document.getElementById("Dollar").innerHTML = "$";
  }
  if (euro) {
    document.getElementById("price1").innerHTML = (
      document.getElementById("price1").innerHTML * 1.14
    ).toFixed(2);
  } else {
    document.getElementById("price1").innerHTML = (
      document.getElementById("price1").innerHTML / 1.14
    ).toFixed(2);
  }

  if (Dollar) {
    document.getElementById("Dollar1").innerHTML = "€";
  } else {
    document.getElementById("Dollar1").innerHTML = "$";
  }
  if (euro) {
    document.getElementById("price2").innerHTML = (
      document.getElementById("price2").innerHTML * 1.14
    ).toFixed(2);
  } else {
    document.getElementById("price2").innerHTML = (
      document.getElementById("price2").innerHTML / 1.14
    ).toFixed(2);
  }

  if (Dollar) {
    document.getElementById("Dollar2").innerHTML = "€";
  } else {
    document.getElementById("Dollar2").innerHTML = "$";
  }
  if (euro) {
    document.getElementById("price3").innerHTML = (
      document.getElementById("price3").innerHTML * 1.14
    ).toFixed(2);
  } else {
    document.getElementById("price3").innerHTML = (
      document.getElementById("price3").innerHTML / 1.14
    ).toFixed(2);
  }

  if (Dollar) {
    document.getElementById("Dollar3").innerHTML = "€";
  } else {
    document.getElementById("Dollar3").innerHTML = "$";
  }
  if (euro) {
    document.getElementById("price4").innerHTML = (
      document.getElementById("price4").innerHTML * 1.14
    ).toFixed(2);
  } else {
    document.getElementById("price4").innerHTML = (
      document.getElementById("price4").innerHTML / 1.14
    ).toFixed(2);
  }

  if (Dollar) {
    document.getElementById("Dollar4").innerHTML = "€";
  } else {
    document.getElementById("Dollar4").innerHTML = "$";
  }
  if (euro) {
    document.getElementById("price5").innerHTML = (
      document.getElementById("price5").innerHTML * 1.14
    ).toFixed(2);
  } else {
    document.getElementById("price5").innerHTML = (
      document.getElementById("price5").innerHTML / 1.14
    ).toFixed(2);
  }

  if (Dollar) {
    document.getElementById("Dollar5").innerHTML = "€";
  } else {
    document.getElementById("Dollar5").innerHTML = "$";
  }
  if (euro) {
    document.getElementById("price6").innerHTML = (
      document.getElementById("price6").innerHTML * 1.14
    ).toFixed(2);
  } else {
    document.getElementById("price6").innerHTML = (
      document.getElementById("price6").innerHTML / 1.14
    ).toFixed(2);
  }

  if (Dollar) {
    document.getElementById("Dollar6").innerHTML = "€";
  } else {
    document.getElementById("Dollar6").innerHTML = "$";
  }
  if (euro) {
    document.getElementById("price7").innerHTML = (
      document.getElementById("price7").innerHTML * 1.14
    ).toFixed(2);
  } else {
    document.getElementById("price7").innerHTML = (
      document.getElementById("price7").innerHTML / 1.14
    ).toFixed(2);
  }

  if (Dollar) {
    document.getElementById("Dollar7").innerHTML = "€";
  } else {
    document.getElementById("Dollar7").innerHTML = "$";
  }
  if (euro) {
    document.getElementById("price8").innerHTML = (
      document.getElementById("price8").innerHTML * 1.14
    ).toFixed(2);
  } else {
    document.getElementById("price8").innerHTML = (
      document.getElementById("price8").innerHTML / 1.14
    ).toFixed(2);
  }

  if (Dollar) {
    document.getElementById("Dollar8").innerHTML = "€";
  } else {
    document.getElementById("Dollar8").innerHTML = "$";
  }
  if (euro) {
    document.getElementById("price9").innerHTML = (
      document.getElementById("price9").innerHTML * 1.14
    ).toFixed(2);
  } else {
    document.getElementById("price9").innerHTML = (
      document.getElementById("price9").innerHTML / 1.14
    ).toFixed(2);
  }

  if (Dollar) {
    document.getElementById("Dollar9").innerHTML = "€";
  } else {
    document.getElementById("Dollar9").innerHTML = "$";
  }
}
