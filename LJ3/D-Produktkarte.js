// #region Daten
const discount = 10;
// #endregion

// ===== 1. Werte aus dem DOM lesen =====
const productCards = document.querySelectorAll(".product")
const price = Number(productCards[0].dataset.price)
const stock = Number(productCards[0].dataset.stock)

// ===== 2.–4. Preis mit Rabatt, Total, Klasse sale =====
const priceElement = productCards[0].querySelector(".price")
const discountPrice = ((100-discount)/100 * price).toFixed(2)
priceElement.textContent = discountPrice

if(discount > 0)
  priceElement.classList.add("sale")

const quantityElement = productCards[0].querySelector("#quantity")
const quantity = Number(quantityElement.value)

const totalElement = productCards[0].querySelector(".total")
totalElement.textContent = quantity * discountPrice
// ===== 5.–6. Lagerbestand =====
const stockElement = productCards[0].querySelector(".stock")
if( stock < 5 )
  stockElement.textContent = `Nur noch ${stock} an Lager`

if( quantity > stock )
  productCards[0].classList.add("unavailable")