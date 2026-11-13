// #region Daten
const playlist = ["Intro", "Sunrise", "Lake Drive", "Night Shift"];
const durations = [185, 242, 198, 301];
// #endregion

// ===== B.1 Outro hinten anhängen =====
playlist.push("Outro")
console.log(playlist)

// ===== B.2 Soundcheck vorne einfügen =====
playlist.unshift("Soundcheck")
console.log(playlist)

// ===== B.3 letztes Element entfernen =====
const removed = playlist.pop();
console.log(`Entfernt: ${removed}`)
console.log(playlist)


// ===== B.4 Abfragen =====
console.log( `Sunrise enthalten: ${playlist.includes("Sunrise")}` )
console.log( `Position Lake Drive: ${playlist.indexOf("Lake Drive")}` )

// ===== B.5 Dauer =====

console.log(`Zweiter Titel: ${durations[1]} Sekunden`);
console.log(`Erster und letzter Titel: ${durations[0]+durations[durations.length-1]} Sekunden`)