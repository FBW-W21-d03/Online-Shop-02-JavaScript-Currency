// Start-Einstellung von Geld ist Euro
let currency = "euro";
const dollarKurs = 1.13;

function switchCurrency() {
  // Button umbenennen
  if (currency == "euro") {
    currency = "dollar";
    document.getElementById("btn-currency").innerHTML =
      "Preise in Euro anzeigen";
    // nur else würde reichen, benutze else if () für Klarheit
  } else if (currency == "dollar") {
    currency = "euro";
    document.getElementById("btn-currency").innerHTML =
      "Preise in Dollar anzeigen";
  }
  let preise = document.getElementsByClassName("price");
  let preisText = preise[0].innerHTML;
  console.log("preisText:", preisText);
  console.log(zahlVonText(preisText));
}

function zahlVonText(text) {
  // Lösche ",00 €" - also die letzten 5 Zeichen - aus dem Text
  text = text.replace(",00 €", "");
  // Lösche den Tausender-Punkt aus dem Text, falls vorhanden
  let zahl = text.replace(".", "");
  console.log(zahl);
  return zahl;
}
