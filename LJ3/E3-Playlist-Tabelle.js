// #region Daten
const titles = ["Soundcheck", "Intro", "Sunrise", "Lake Drive", "Night Shift", "Outro"];
const durations = [95, 185, 242, 198, 301, 160];
// #endregion

// ===== 1.–2. Zeilen erzeugen, lange Titel markieren =====
const tracksElement = document.querySelector("#tracks")
let totalDuration = 0

const longestIndex = durations.reduce(
  (prev,curr,index,arr) => 
    curr > arr[prev]?index:prev, 0
)

for(let track=0;track < titles.length; track++) {
  const row = document.createElement("tr")
  const nrCol = document.createElement("td")
  nrCol.textContent = track+1
  const titleCol = document.createElement("td")
  titleCol.textContent = titles[track]

  totalDuration += durations[track]
  const durationCol = document.createElement("td")
  const m = Math.floor(durations[track] / 60)
  const s = String(durations[track] % 60).padStart(2,"0")
  durationCol.textContent = `${m}:${s}`

  if( longestIndex === track )
    row.classList.add("longest")
  if( durations[track] > 240 )
    row.classList.add("long")

  row.appendChild(nrCol)
  row.appendChild(titleCol)
  row.appendChild(durationCol)
  tracksElement.appendChild(row)
}
// ===== 3. Gesamtdauer =====
const totalElement = document.querySelector("#total")

const m = Math.floor(totalDuration / 60)
const s = String(totalDuration % 60).padStart(2, "0")
totalElement.textContent = `${m}:${s}`

// ===== 4. Längster Titel =====

