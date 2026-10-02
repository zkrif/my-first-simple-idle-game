// feature that has been created
// 1. click for income
// 2. upgrade increment per click
// 3. navigation
// 4. upgrade power and automatic rendering power up card

import {
  getIncrementPrice,
  getPowerPrice,
  powerUpgrade,
} from "./data/config.js";
import { saveGame } from "./data/control.js";
import updateUI from "./ui/updateUI.js";
import renderUpgradeCard from "./ui/upgradeCard.js";

// Variable and DOM Declaration
const clickArea = document.getElementById("click-area");
const upIncomeBtn = document.getElementById("upgrade-income-button");
const navList = document.querySelectorAll(".nav-list");
const content = document.querySelectorAll(".content");
const powerUp = document.getElementById("power-up");

const uiElements = {
  coinAmount: document.getElementById("coin-amount"),
  increment: {
    amount: document.getElementById("increment-amount"),
    level: document.getElementById("increment-level"),
    price: document.getElementById("increment-price"),
  },
  powerAmount: document.getElementById("power-amount"),
};

let data = JSON.parse(localStorage.getItem("data")) || {
  coin: 0,
  increment: 1,
  power: 0,
  powerUpLevel: {
    1: 1,
    2: 1,
    3: 1,
  },
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

navList.forEach((element, index) => {
  element.addEventListener("click", () => {
    content.forEach((element) => {
      element.classList.remove("show-content");
    });

    content[index].classList.add("show-content");

    navList.forEach((element) => {
      element.classList.remove("nav-active");
    });

    navList[index].classList.add("nav-active");
  });
});

const renderedCards = renderUpgradeCard(powerUp, powerUpgrade, data); //renderedCards[...]

renderedCards.forEach((element, index) => {
  const powerUpBtn = element.querySelector(".upgrade-power-button");
  const powerUpLevel = element.querySelector(".power-level");
  const powerUpPrice = element.querySelector(".power-price");

  powerUpBtn.addEventListener("click", () => {
    let price = getPowerPrice(powerUpgrade[index], data);
    if (data.coin >= price) {
      data.coin -= price;
      data.powerUpLevel[powerUpgrade[index].id]++;
      powerUpLevel.textContent = data.powerUpLevel[powerUpgrade[index].id];
      powerUpPrice.textContent = getPowerPrice(powerUpgrade[index], data);
      data.power += powerUpgrade[index].amount
      saveGame(data);
      updateUI(uiElements, data);
    }
  });
});

// console.log(data);
updateUI(uiElements, data);
