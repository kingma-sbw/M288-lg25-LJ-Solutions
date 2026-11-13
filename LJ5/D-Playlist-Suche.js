// #region Daten
const titles = [
  "Soundcheck",
  "Intro",
  "Sunrise",
  "Lake Drive",
  "Night Shift",
  "Outro",
];
const durations = [95, 185, 242, 198, 301, 160];
// #endregion

// ===== formatDuration(seconds) =====
function formatDuration(duration) {
  return `${Math.floor(duration / 60)}:${String(duration % 60).padStart(2, "0")}`;
}
// ===== Liste beim Laden erzeugen =====
const summaryElement = document.querySelector("#summary");
document.addEventListener("DOMContentLoaded", (event) => {
  loadList();
});
const tracksList = document.querySelector("#tracks");
function loadList() {
  for (let track = 0; track < titles.length; track++) {
    const li = document.createElement("li");
    li.textContent = `${titles[track]} – ${formatDuration(durations[track])}`;
    tracksList.appendChild(li);
  }
  summaryElement.textContent = `${titles.length} Titel`;
}

// ===== Suche: input-Handler =====
let searchText = "";
const searchInput = document.querySelector("#search");
searchInput.addEventListener("input", (event) => {
  const filtered = titles.filter((t, i) =>
    t.toLocaleLowerCase().includes(searchInput.value.toLowerCase()),
  );
  const listElements = tracksList.querySelectorAll("li");
  if (filtered.length === 0) {
    summaryElement.textContent = `Keine Treffer für «${searchInput.value}»`;
  } else if (searchInput.value.length === 0) {
    summaryElement.textContent = `${titles.length} Titel`;
  } else {
    summaryElement.textContent = `${filtered.length} von ${titles.length} Titeln`;
  }
  for (let track = 0; track < titles.length; track++) {
    listElements[track].hidden = !filtered.includes(titles[track]);
  }
});
