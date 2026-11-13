// #region Daten
const startLikes = 0;
// #endregion
let likes;
// ===== Elemente und Zähler =====
const countElement = document.querySelector("#count")
const likeButton = document.querySelector("#like")
const resetButton = document.querySelector("#reset")
addEventListener("DOMContentLoaded", event => {
  likes = startLikes;
  countElement.textContent = formatLikes(likes)
})

// ===== formatLikes(count) =====
function formatLikes(likes) {
  return `${likes} Lik${likes===1?"e":"es"}`
}

// ===== Handler für #like und #reset =====
likeButton.addEventListener("click", clickLike)
resetButton.addEventListener("click", resetLikes)
function clickLike() {
  likes++;
  countElement.textContent = formatLikes(likes)
  if( likes >= 10)
    countElement.classList.add("popular")
}

function resetLikes() {
  likes = startLikes
  countElement.textContent = formatLikes(likes)
  countElement.classList.remove("popular")
}