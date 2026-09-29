// feature that has been created
// 1. click for income
// 2. upgrade increment per click

import { getIncrementPrice } from "./data/config.js";
import { saveGame } from "./data/control.js";
import updateUI from "./ui/updateUI.js";

// Variable and DOM Declaration
const clickArea = document.getElementById("click-area");
const upIncomeBtn = document.getElementById("upgrade-income-button");

const uiElements = {
  coinAmount: document.getElementById("coin-amount"),
  increment: {
    amount: document.getElementById("increment-amount"),
    level: document.getElementById("increment-level"),
    price: document.getElementById("increment-price"),
  },
};

let data = JSON.parse(localStorage.getItem("data")) || {
  coin: 0,
  increment: 1,
};

// event
clickArea.addEventListener("pointerdown", () => {
  data.coin += data.increment;
  saveGame(data);
//   console.log(data);
  updateUI(uiElements, data);
});

upIncomeBtn.addEventListener("click", () => {
  let incrementPrice = getIncrementPrice(data);
  if (data.coin >= incrementPrice) {
    data.coin -= incrementPrice;
    data.increment++;
    saveGame(data);
    // console.log(data);
    updateUI(uiElements, data);
  }
});

// console.log(data);
updateUI(uiElements, data);
