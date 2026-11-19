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
tracks.forEach((track, index) => {
  console.log(
    `${index + 1}. ${track.title} – ${track.artist} (${formatDuration(track.seconds)})`,
  );
});

// ===== 2. Gesamtdauer =====
const totalSeconds = tracks.reduce((sum, track) => sum + track.seconds, 0);
console.log(`Gesamtdauer: ${formatDuration(totalSeconds)}`);

// ===== 3. längster Titel =====
const indexLongest = tracks.reduce(
  (longest, track, index) =>
    track.seconds > tracks[longest].seconds ? index : longest,
  0,
);
console.log(
  `Längster Titel: ${tracks[indexLongest].title} (${formatDuration(tracks[indexLongest].seconds)})`,
);

// ===== 4. Anzahl pro Genre (Objekt countByGenre) =====
const countByGenre = {};
tracks.forEach((track) => {
  if (countByGenre.hasOwnProperty(track.genre)) {
    countByGenre[track.genre].count++;
  } else {
    countByGenre[track.genre] = { count: 1 };
  }
});

for (const genre in countByGenre) {
  console.log(`${genre}: ${countByGenre[genre].count}`);
}

// ===== 5. Werte der Eigenschaft aus sortField =====
const arrayField = tracks.map((track) => track[sortField]);

console.log(arrayField.join(", "));
