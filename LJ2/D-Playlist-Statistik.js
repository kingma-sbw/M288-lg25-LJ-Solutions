// #region Daten
const titles = ["Soundcheck", "Intro", "Sunrise", "Lake Drive", "Night Shift", "Outro"];
const durations = [95, 185, 242, 198, 301, 160];
// #endregion

// ===== D1 Titel mit Dauer m:ss =====
for(let title=0; title < titles.length; title++) {
  const m = Math.floor( durations[title] / 60 )
  const s = String( durations[title] % 60 ).padStart( 2, '0' )
  console.log(`${title+1}. ${titles[title]} - ${m}:${s}`);
}

// ===== D2 Gesamtdauer =====
let sum = 0;
durations.forEach(d => { sum+=d })

let m = Math.floor(sum/60)
let s = String(sum%60).padStart(2, '0')
console.log(`Gesamtdauer: ${m}:${s}`)

// ===== D3 Längster Titel =====
let longestIndex = 0
durations.forEach((duration, index) => {
  if( duration > durations[longestIndex]) {
    longestIndex = index
  }
})
m = Math.floor(durations[longestIndex] / 60)
s = String(durations[longestIndex] % 60).padStart(2, '0')
console.log( "Längster Titel: ", titles[longestIndex], `– ${m}:${s}` )

// ===== D4 Titel unter 3 Minuten =====
const shorts = durations.filter((duration) => duration < 180 )
console.log("Titel unter 3 Minuten: ", shorts.length)
// ===== D5 Bewertung EP / Album =====

console.log( sum < 15*60 ? "EP": "Album" );