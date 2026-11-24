// #region Daten
const limit = 10;
// #endregion

// ===== Elemente =====
const formElement = document.querySelector("#search");
const statusElement = document.querySelector("#status");
const stationElement = document.querySelector("#search #station");
const stationNameElement = document.querySelector("#station-name");
const departuresElement = document.querySelector("#departures");

// ===== loadBoard(station): fetch, response.ok, response.json() =====
async function loadBoard(station) {
  const url = `https://transport.opendata.ch/v1/stationboard?limit=${limit}&station=${encodeURIComponent(station)}`;
  const response = await fetch(url);
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  const data = await response.json();

  stationNameElement.textContent = data.station.name;
  departuresElement.replaceChildren();
  data.stationboard.forEach((departure) =>
    departuresElement.append(
      createRow(
        formatTime(departure.stop.departure),
        `${departure.category}${departure.number}`,
        departure.to,
        departure.stop.platform,
        departure.stop.delay,
      ),
    ),
  );
}

// ===== formatTime, createRow, renderBoard, showError =====
function formatTime(time) {
  return time.slice(11, 16);
}
function createRow(departure, line, direction, platform, delay) {
  const row = document.createElement("tr");
  const timeCol = document.createElement("td");
  timeCol.textContent = `${departure} +${delay}'`;
  const lineCol = document.createElement("td");
  lineCol.textContent = line;
  const toCol = document.createElement("td");
  toCol.textContent = direction;
  const platformCol = document.createElement("td");
  platformCol.textContent = platform ?? "?";

  row.append(timeCol);
  row.append(lineCol);
  row.append(toCol);
  row.append(platformCol);

  if (delay>0) row.classList.add("delayed");

  return row;
}

// ===== submit-Handler und erstes Laden =====
async function showBoard(station) {
  statusElement.classList.remove("error");

  try {
    statusElement.textContent = "Lade ...";

    await loadBoard(station);
  } catch (exception) {
    statusElement.textContent = "Fehler beim Laden";
    statusElement.classList.add("error");
  } finally {
    statusElement.textContent = "";
  }
}
formElement.addEventListener("submit", async (event) => {
  event.preventDefault();
  showBoard(stationElement.value);
});

// initialer Anzeige
showBoard(stationElement.value)