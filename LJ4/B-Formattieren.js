// #region Daten
const testSeconds = [95, 60, 0, 3599];
const testAmounts = [4.5, 12, 0.1];
const playlist = [95, 185, 242, 198, 301, 160];
// #endregion

// ===== deine Funktionen: formatDuration, formatPrice, sumDurations =====

function formatDuration(seconds) {
  const m = Math.floor(seconds / 60);
  const s = String(seconds % 60).padStart(2,'0');
  return `${m}:${s}`;
}

const formatPrice = (amount) => {
  const f = Math.floor(amount);
  const r = String((100*amount) % 100).padStart(2,'0');

  return `CHF ${f}.${r}`
}

const sumDurations = (array) => {
  let result = 0;
  array.forEach( e => result += e)

  return result;
}

// ===== Ausgabe (nicht ändern) =====
for (const seconds of testSeconds) {
  console.log(`${seconds} → ${formatDuration(seconds)}`);
}
for (const amount of testAmounts) {
  console.log(`${amount} → ${formatPrice(amount)}`);
}
console.log(`Summe: ${formatDuration(sumDurations(playlist))}`);
console.log(`Leer: ${sumDurations([])}`);