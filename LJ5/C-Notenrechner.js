// #region Daten
const limitVeryGood = 60;
const limitGood = 40;
const limitSufficient = 33;
const maxPoints = 66;
// #endregion
const gradeForm = document.querySelector("#grade-form");
const pointsInput = document.querySelector("#points");
const resultElement = document.querySelector("#result");

// ===== getRating(points) =====

function getRating(points) {
  if (points >= limitVeryGood) return "sehr gut";
  if (points >= limitGood) return "gut";
  if (points >= limitSufficient) return "genügend";
  return "ungenügend";
}

// ===== submit-Handler =====
gradeForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const points = pointsInput.valueAsNumber;
  if (Number.isInteger(points) && 0 <= points && points <= maxPoints) {
    resultElement.textContent = `${points} Punkte: ${getRating(points)}`;
    resultElement.classList.remove("error");
  } else {
    resultElement.textContent = `Bitte 0 bis ${maxPoints} Punkte eingeben`;
    resultElement.classList.add("error");
  }
  pointsInput.value = "";
  pointsInput.focus();
});
