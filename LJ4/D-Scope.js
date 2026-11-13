// #region Daten
const tracks = ["Intro", "Sunrise", "Lake Drive", "Night Shift", "Outro"];
const genres = ["pop", "ambient", "pop", "rock", "ambient"];
const wanted = "pop";
// #endregion

// Erwartete Ausgabe bei den Startdaten:
// Auswertung POP
// pop: 2 Titel
// Titel: Intro, Lake Drive
// ambient: Sunrise, Outro

// Überschrift

// Korrektur: heading global
let heading = ""
if (wanted !== "") {
  heading = `Auswertung ${wanted.toUpperCase()}`;
}
console.log(heading);

// Anzahl Titel eines Genres
function countGenre(genre) {
  let count = 0;
  for (let i = 0; i < genres.length; i++) {
    if (genres[i] === genre) {
      // Korrektur: let weg
      count = count + 1;
    }
  }
  return count;
}

// Titel eines Genres, durch Komma getrennt

function listTitles(genre) {
// Korrektur: found in function
  const found = [];
  for (let i = 0; i < tracks.length; i++) {
    if (genres[i] === genre) {
      found.push(tracks[i]);
    }
  }
  return found.join(", ");
}

console.log(`${wanted}: ${countGenre(wanted)} Titel`);
console.log(`Titel: ${listTitles(wanted)}`);
console.log(`ambient: ${listTitles("ambient")}`);
