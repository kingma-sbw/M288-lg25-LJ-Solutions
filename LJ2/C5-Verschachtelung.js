// #region Daten
const durations = [185, 242, 198, 301];
const rows = 3;
const columns = 4;
// #endregion

// ===== C5.1 Bedingung in der Schleife =====
let counter = 0;
for( const duration of durations) {
  counter += (duration>240)
}
console.log (`Länger als 4 Minuten: ${counter}`)


// ===== C5.2 Schleife in der Schleife =====
let imageCount = 0;
for(let r=1;r<=rows;r++) {
  for(let c=1;c<=columns;c++) {
    console.log (`Reihe ${r}, Bild ${c}`)
    imageCount++;
  }
}
console.log(`Bilder total: ${imageCount}`)

