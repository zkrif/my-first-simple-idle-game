// feature that has been created
// 1. click for income
// 2. upgrade increment per click
// 3. navigation
// 4. automatic rendering power up card
// 5. upgrade power
// 6. gold upgrade, gold increment per sec

import {
  getGoldPrice,
  getIncrementPrice,
  getPowerPrice,
  goldUpgrade,
  powerUpgrade,
  rankRequirement,
} from "./data/config.js";
import { checkBtnCondition, saveGame } from "./data/control.js";
import { createEditNameModal } from "./ui/createModal.js";
import {
  updateUI,
  updateCoin,
  updateCoinPerSec,
  updateIncrement,
  updatePower,
  updateRankProgress,
} from "./ui/updateUI.js";
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
const upRankButton = document.getElementById("up-rank-button");
const name = document.getElementById("name");
const editNameBtn = document.getElementById("edit-name-button");

const uiElements = {
  coinAmount: document.getElementById("coin-amount"),
  coinPerSec: document.getElementById("coin-per-sec"),
  increment: {
    amount: document.getElementById("increment-amount"),
    level: document.getElementById("increment-level"),
    price: document.getElementById("increment-price"),
  },
  powerAmount: document.getElementById("power-amount"),
  goldRequirement: document.getElementById("gold-requirement"),
  powerRequirement: document.getElementById("power-requirement"),
  progress: {
    gold: document.getElementById("gold-progress"),
    power: document.getElementById("power-progress"),
  },
};

let data = JSON.parse(localStorage.getItem("data")) || {
  playerName: "player",
  coin: 0,
  cps: 0,
  increment: 1,
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
  rankLevel: 1,
};

// event
clickArea.addEventListener("pointerdown", (e) => {
  checkBtnCondition(data);
  let positionX = e.clientX;
  let positionY = e.clientY;

  const createClickEffect = document.createElement("div");
  createClickEffect.classList.add("click-effect");
  createClickEffect.style.position = "fixed";
  createClickEffect.style.top = `${positionY}px`;
  createClickEffect.style.left = `${positionX}px`;
  createClickEffect.textContent = `+${data.increment}`;
  // console.log(createClickEffect);
  clickArea.appendChild(createClickEffect);

  setTimeout(() => {
    clickArea.removeChild(createClickEffect);
  }, 500);

  data.coin += data.increment;

  renderedPowerCards.goldInfo.querySelector(".gold-info-for-up").textContent =
    data.coin;
  renderedGoldCards.goldInfo.querySelector(".gold-info-for-up").textContent =
    data.coin;

  saveGame(data);
  //   console.log(data);
  updateCoin(uiElements, data);
  updateRankProgress(uiElements, data);
  checkBtnCondition(data);
});

upIncomeBtn.addEventListener("click", () => {
  let incrementPrice = getIncrementPrice(data);
  if (data.coin >= incrementPrice) {
    data.coin -= incrementPrice;
    checkBtnCondition(data);
    data.increment++;
    saveGame(data);
    // console.log(data);
    updateIncrement(uiElements, data);
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
      updatePower(uiElements, data);
      updateCoinPerSec(uiElements, data);
      updateRankProgress(uiElements, data);
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
  const goldLevel = element.querySelector(".up-level");
  const goldUpPrice = element.querySelector(".up-price");

  goldUpBtn.addEventListener("click", () => {
    let price = getGoldPrice(goldUpgrade[index], data);
    if (data.coin >= price) {
      data.coin -= price;
      // console.log(`goldUpBtn[${index}] di klik`);
      data.goldUpLevel[goldUpgrade[index].id]++;
      goldLevel.textContent = data.goldUpLevel[goldUpgrade[index].id];
      goldUpPrice.textContent = getGoldPrice(goldUpgrade[index], data);
      renderedPowerCards.goldInfo.querySelector(
        ".gold-info-for-up",
      ).textContent = data.coin;
      renderedGoldCards.goldInfo.querySelector(
        ".gold-info-for-up",
      ).textContent = data.coin;
      data.cps += goldUpgrade[index].amount;
      saveGame(data);
      updateCoinPerSec(uiElements, data);
      updateRankProgress(uiElements, data);
    }
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

upRankButton.addEventListener("click", () => {
  if (
    data.coin >= rankRequirement[data.rankLevel - 1].gold &&
    data.power >= rankRequirement[data.rankLevel - 1].power
  ) {
    data.coin -= rankRequirement[data.rankLevel - 1].gold;
    data.rankLevel++;
    saveGame(data);
    updateRankProgress(uiElements, data);
    checkBtnCondition(data);
  }
});

// console.log(data);

const editNameModal = createEditNameModal();
// console.log(editNameModal)
const backEditNameBtn = document.getElementById("back-confirm");
const inputName = document.getElementById("input-name");
const confirmButton = document.getElementById("confirm");

editNameBtn.addEventListener("click", () => {
  editNameModal.classList.toggle("show-content");
});

backEditNameBtn.addEventListener("click", () => {
  editNameModal.classList.toggle("show-content");
});

confirmButton.addEventListener("click", () => {
  editNameModal.classList.toggle("show-content");

  data.playerName = inputName.value == "" ? "player" : inputName.value;
  inputName.value = "";
  name.textContent = data.playerName;
});

setInterval(() => {
  data.coin += data.cps;
  saveGame(data);
  updateCoin(uiElements, data);
  renderedPowerCards.goldInfo.querySelector(".gold-info-for-up").textContent =
    data.coin;
  renderedGoldCards.goldInfo.querySelector(".gold-info-for-up").textContent =
    data.coin;
  updateRankProgress(uiElements, data);
  checkBtnCondition(data);
}, 1000);

updateUI(uiElements, data);
