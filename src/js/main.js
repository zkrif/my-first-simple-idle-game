// feature that has been created
// 1. click for income
// 2. upgrade increment per click
// 3. navigation
// 4. upgrade power and automatic rendering power up card

import {
  getGoldPrice,
  getIncrementPrice,
  getPowerPrice,
  goldUpgrade,
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
const goldUp = document.getElementById("gold-up");
const navUpList = document.querySelectorAll(".nav-upgrade-list");
const upContent = document.querySelectorAll(".upgrade-content");

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
  increment: 200,
  power: 0,
  powerUpLevel: {
    1: 1,
    2: 1,
    3: 1,
  },
  goldUpLevel: {
    1: 1,
    2: 1,
    3: 1,
    4: 1,
  },
};

// event
clickArea.addEventListener("pointerdown", () => {
  data.coin += data.increment;

  renderedPowerCards.goldInfo.querySelector(".gold-info-for-up").textContent =
    data.coin;
  renderedGoldCards.goldInfo.querySelector(".gold-info-for-up").textContent =
    data.coin;

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

const renderedPowerCards = renderUpgradeCard(
  powerUp,
  powerUpgrade,
  data,
  getPowerPrice,
); //renderedPowerCards[...]

renderedPowerCards.cards.forEach((element, index) => {
  const powerUpBtn = element.querySelector(".upgrade-up-button");
  const powerUpLevel = element.querySelector(".up-level");
  const powerUpPrice = element.querySelector(".up-price");

  powerUpBtn.addEventListener("click", () => {
    let price = getPowerPrice(powerUpgrade[index], data);
    if (data.coin >= price) {
      data.coin -= price;
      data.powerUpLevel[powerUpgrade[index].id]++;
      powerUpLevel.textContent = data.powerUpLevel[powerUpgrade[index].id];
      powerUpPrice.textContent = getPowerPrice(powerUpgrade[index], data);
      data.power += powerUpgrade[index].amount;
      renderedPowerCards.goldInfo.querySelector(
        ".gold-info-for-up",
      ).textContent = data.coin;
      renderedGoldCards.goldInfo.querySelector(
        ".gold-info-for-up",
      ).textContent = data.coin;
      saveGame(data);
      updateUI(uiElements, data);
    }
  });
});

const renderedGoldCards = renderUpgradeCard(
  goldUp,
  goldUpgrade,
  data,
  getGoldPrice,
);

renderedGoldCards.cards.forEach((element, index) => {
  const goldUpBtn = element.querySelector(".upgrade-up-button");
  const goldUpLevel = element.querySelector(".up-level");
  const goldUpPrice = element.querySelector(".up-price");

  goldUpBtn.addEventListener("click", () => {
    console.log(`goldUpBtn[${index}] di klik`);
    data.goldUpLevel[goldUpgrade[index].id]++;
    goldUpLevel.textContent = data.goldUpLevel[goldUpgrade[index].id];
    goldUpPrice.textContent = getGoldPrice(goldUpgrade[index], data);
  });
});

navUpList.forEach((element, index) => {
  element.addEventListener("click", () => {
    upContent.forEach((element) => {
      element.classList.remove("show-content");
    });
    upContent[index].classList.add("show-content");
  });
});

// console.log(data);
updateUI(uiElements, data);
