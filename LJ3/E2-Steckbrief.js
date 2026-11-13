// #region Daten
const fullName = "Lea Muster";
const role = "Mediamatikerin EFZ, 2. Lehrjahr";
const skills = ["Fotografie", "HTML/CSS", "Video"];
const photo = "lea.jpg";
// #endregion

// ===== 1. Name und Rolle =====
const nameElement = document.querySelector("#name");
const roleElement = document.querySelector("#role")
console.log(nameElement)
nameElement.textContent = fullName
roleElement.textContent = role

// ===== 2. Foto: src und alt =====
const portraitElement = document.querySelector("#photo")
portraitElement.alt = `Foto von ${fullName}`
portraitElement.src = photo

// ===== 3. Fähigkeiten als Liste =====
const skillList = document.querySelector("#skills")
let first = true
skills.forEach( (skill) => {
  const li = document.createElement("li")
  li.textContent = skill
  if(first) {
    li.classList.add("main-skill")
    first = false
  }
  skillList.appendChild(li)
})


// ===== 4. Anzahl =====
const skillCountElement = document.querySelector("#skill-count")
if( skills.length === 0 ) {
  skillCountElement.textContent = "Noch keine Fähigkeiten"
  skillList.attributes.add("hidden")
} else {
  skillCountElement.textContent = `${skills.length} Fähigkeit${skills.length===0?"":"en"}`
}

