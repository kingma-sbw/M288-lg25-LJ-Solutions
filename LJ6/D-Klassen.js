// #region Daten
const playlistName = "Morgen am See";
const trackData = [
  { title: "Soundcheck", artist: "Lakeside", seconds: 95 },
  { title: "Intro", artist: "Lakeside", seconds: 185 },
  { title: "Sunrise", artist: "Nordlicht", seconds: 242 },
  { title: "Lake Drive", artist: "Lakeside", seconds: 198 },
  { title: "Night Shift", artist: "Nordlicht", seconds: 301 },
  { title: "Outro", artist: "Lakeside", seconds: 160 },
];
// #endregion

// ===== class Track =====
class Track {
  constructor(title, artist, seconds) {
    this.title = title;
    this.artist = artist;
    this.seconds = seconds;
  }
  formatDuration() {
    return formatDuration(this.seconds);
  }
}

// ===== class Playlist =====
class Playlist {
  constructor(name) {
    this.name = name;
    this.tracks = [];
  }

  addTrack(track) {
    this.tracks.push(track);
  }

  totalSeconds() {
    const totalDuration = this.tracks.reduce(
      (sum, track) => sum + track.seconds,
      0,
    );
    return formatDuration(totalDuration);
  }

  longest() {
    if(this.tracks.length === 0 ) return undefined
    return this.tracks.reduce((longest, track) =>
      track.seconds > longest.seconds ? track : longest
    );
  }
  toString() {
    return this.tracks.reduce(
      (result, track, index) =>
        result +
        `\n${index + 1}. ${track.title} – ${track.artist} (${track.formatDuration()})`,
      `Playlist «${this.name}», ${this.tracks.length} Titel, ${this.totalSeconds()}`,
    );
  }
}

function formatDuration(seconds) {
  const min = Math.floor(seconds / 60);
  const sec = String(seconds % 60).padStart(2, "0");
  return `${min}:${sec}`;
}

// ===== Instanzen erzeugen und ausgeben =====
const playList = new Playlist(playlistName);

trackData.forEach((track) => {
  playList.addTrack(new Track(track.title, track.artist, track.seconds));
});

console.log(playList.toString());

const longest = playList.longest();
if (undefined === longest ) {
  console.log("Längster Titel: –");
} else {

  console.log(
    `Längster Titel: ${longest.title} – ${longest.artist} (${longest.formatDuration()})`,
  );
}
