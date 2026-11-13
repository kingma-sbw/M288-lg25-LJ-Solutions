// #region Daten
const names = ["Lea", "Noah", "Mia"];
const gradeLists = [
  [45, 52, 38],
  [61, 58, 66],
  [30, 35, 28],
];
// #endregion

for( let lp=0;lp<names.length; lp++) {
  console.log(formatReport(names[lp], gradeLists[lp]))
}

function calculateAverage(grades) {
  let sum = 0;
  grades.forEach( grade => {
    sum += grade
  })
  return Math.round((sum / grades.length) * 10) / 10;
}
function getRating(g) {
  if( g >= 60 ) return "sehr gut";
  if( g >= 40 ) return "gut"
  if( g >= 33 ) return "genügend"
  return "ungenügend"
}

function formatReport( name, grades ) {
  const average = calculateAverage(grades)
  return `${name}: Durchschnitt ${average} Punkte, ${getRating(average)}`
}
/*
Lea: Durchschnitt 45 Punkte, gut
Noah: Durchschnitt 61.7 Punkte, sehr gut
Mia: Durchschnitt 31 Punkte, ungenügend
*/