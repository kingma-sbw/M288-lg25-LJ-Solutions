// #region Daten
const values = [18, 22, 25, 21];
// #endregion

let sum = 0;
// hier sollte nur bis und nicht bis und mit gezählt werden
for (let index = 0; index < values.length; index++) {
  sum = sum + values[index];
  debugger;
}
console.log("Anzahl Messwerte: " + values.length);
console.log("Durchschnitt: " + sum / values.length);
