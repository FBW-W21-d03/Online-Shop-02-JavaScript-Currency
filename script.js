let currency = "euro"; // merkt sich aktuelle Währung
const dollarKurs = 1.13; // Kurs nur hier ändern

function switchCurrency() {
  // von den nächsten zwei Zeilen nicht verwirren lassen
  // hatten wir noch nicht.
  let preise = document.getElementsByClassName("price");
  let preisText = preise[0].innerHTML;
  let preisZahl = zahlVonText(preisText);

  if (currency == "euro") {
    // aktive Währung wechseln
    currency = "dollar";
    // Button umbenennen
    document.getElementById("btn-currency").innerHTML =
      "Preise in Euro anzeigen";
    // 1. Preis ändern
    preise[0].innerHTML = "$ " + (preisZahl * dollarKurs).toFixed(2);
    // nur else würde reichen, benutze else if () für Klarheit
  } else if (currency == "dollar") {
    // aktive Währung wechseln
    currency = "euro";
    // Button umbenennen
    document.getElementById("btn-currency").innerHTML =
      "Preise in Dollar anzeigen";
    // 1. Preis ändern
    preise[0].innerHTML = (preisZahl / dollarKurs).toFixed(2) + " €";
  }
}

// Funktion die Preis (String) in eine Zahl umwandelt und
// zurück gibt (return)
function zahlVonText(text) {
  text = text.replace(",00", ""); // für Start
  text = text.replace(" €", ""); // für Umwandlung € -> $
  text = text.replace("$ ", ""); // für Umwandlung $ -> €
  return text;
}
