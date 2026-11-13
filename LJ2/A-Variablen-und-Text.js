// #region Daten
const company = "SBW Neue Medien";
const year = 2;
// #endregion

// ===== A.1 likes =====
let likes = 0;
likes = likes + 1;
likes += 1;
likes++;
console.log(`Likes: ${likes}`);


// ===== A.2 Satz mit Template-String =====
console.log(`Ich bin im ${year}. Lehrjahr bei ${company}.`);

// ===== A.3 Gerades Lehrjahr =====
if( year %2 === 0 )
  console.log('Gerades Lehrjahr: true');
else
  console.log('Gerades Lehrjahr: false');

