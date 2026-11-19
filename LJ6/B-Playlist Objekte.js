// #region Daten
const tracks = [
  { title: "Soundcheck", artist: "Lakeside", seconds: 95, genre: "ambient" },
  { title: "Intro", artist: "Lakeside", seconds: 185, genre: "pop" },
  { title: "Sunrise", artist: "Nordlicht", seconds: 242, genre: "ambient" },
  { title: "Lake Drive", artist: "Lakeside", seconds: 198, genre: "pop" },
  { title: "Night Shift", artist: "Nordlicht", seconds: 301, genre: "rock" },
  { title: "Outro", artist: "Lakeside", seconds: 160, genre: "pop" },
];
const sortField = "artist";
// #endregion

// ===== formatDuration(seconds) =====
function formatDuration(duration) {
  return `${Math.floor(duration / 60)}:${String(duration % 60).padStart(2, "0")}`;
}

// ===== 1. alle Titel =====
tracks.forEach( (track, index) => {
  console.log(`${index+1}. ${track.title} – ${formatDuration(track.seconds)}`)
})

// ===== 2. Gesamtdauer =====
let totalSeconds = 0;
tracks.map( track => totalSeconds += track.seconds )
console.log(`Gesamtdauer: ${formatDuration(totalSeconds)}`)

// ===== 3. längster Titel =====
const indexLongest = tracks.reduce(
  (best, track, i) => track.seconds > tracks[best].seconds ? i : best,
  0
);
console.log(`Längster Titel: ${tracks[indexLongest].title} (${formatDuration(tracks[indexLongest].seconds)})`)

// ===== 4. Anzahl pro Genre (Objekt countByGenre) =====
const countByGenres = {}
tracks.forEach( track => {
  if(countByGenres.hasOwnProperty(track.genre) )
  countByGenres[track.genre] ++
  else
  countByGenres[track.genre] = 1
})
// sortieren nach Genre value
const sortedGenres = Object.entries(countByGenres).sort((a,b) => b[1] - a[1])
console.log("Anzahl pro Genre:")
sortedGenres.forEach( ([genre, count]) => console.log(`- ${genre}: ${count}`) ) 

// ===== 5. Werte der Eigenschaft aus sortField =====
const selectedFieldValues = tracks.map( track => track[sortField] )
console.log(`Werte der Eigenschaft «${sortField}»: ${selectedFieldValues.join(", ")}`)

