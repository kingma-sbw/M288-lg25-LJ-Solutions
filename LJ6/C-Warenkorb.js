// #region Daten
const actions = [
  ["add", "Notizblock", 4.5, 3],
  ["add", "Kugelschreiber", 1.2, 2],
  ["add", "Notizblock", 4.5, 1],
  ["remove", "Radiergummi"],
];
// #endregion

// ===== Objekt cart mit items, add, remove, count, total =====
const cart = {
  items: [],
  // add if not existing, else increase quantity
  add: function (name, price, quantity) {
    const existingItem = this.items.find((item) => item.name === name);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.items.push({ name, price, quantity });
    }
  },

  // remove item by name
  remove: function (name) {
    const index = this.items.findIndex((item) => item.name === name);
    if (index !== -1) {
      this.items.splice(index, 1);
      return true;
    }
    return false;
  },

  // count total items
  count: function () {
    return this.items.reduce((total, item) => total + item.quantity, 0);
  },

  // calculate total price
  total: function () {
    return this.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  },
};
// ===== Ausgabe (nicht ändern) =====
for (const action of actions) {
  if (action[0] === "add") {
    cart.add(action[1], action[2], action[3]);
  } else {
    console.log(
      `Entfernen ${action[1]}: ${cart.remove(action[1]) ? "ja" : "nicht vorhanden"}`,
    );
  }
}
for (const item of cart.items) {
  console.log(`${item.name} × ${item.quantity} à CHF ${item.price.toFixed(2)}`);
}
console.log(`Stück: ${cart.count()}`);
console.log(`Total: CHF ${cart.total().toFixed(2)}`);
