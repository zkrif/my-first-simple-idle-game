// feature that has been created
// 1. click for income
// 2. upgrade increment per click
// 3. navigation
// 4. automatic rendering power up card
// 5. upgrade power
// 6. gold upgrade, gold increment per sec
// 7. profile
// 8. reset game

import {
  getGoldPrice,
  getIncrementPrice,
  getPowerPrice,
  goldUpgrade,
  haremList,
  intimacyItem,
  powerUpgrade,
  rankRequirement,
} from "./data/config.js";
import {
  amountFormat,
  checkBtnCondition,
  resetGame,
  saveGame,
} from "./data/control.js";
import {
  createConfirmResetModal,
  createEditNameModal,
  createBuyModal,
} from "./ui/createModal.js";
import { renderDynastyCard } from "./ui/dynastyCard.js";
import { renderInventoryCard } from "./ui/inventoryCard.js";
import { renderShopCard } from "./ui/shopCard.js";
import {
  updateUI,
  updateCoin,
  updateCoinPerSec,
  updateIncrement,
  updatePower,
  updateRankProgress,
  updateProfile,
  updateRank,
  updateUpgrades,
  updateHaremProgress,
  updateShop,
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
const editNameBtn = document.getElementById("edit-name-button");
const resetBtn = document.getElementById("reset-button");
const haremContainer = document.getElementById("harem");
const navDynastyList = document.querySelectorAll(".nav-dynasty-list");
const dynastyContent = document.querySelectorAll(".dynasty-content");
const navShopList = document.querySelectorAll(".nav-shop-list");
const shopContent = document.querySelectorAll(".shop-content");
const intimacyContainer = document.getElementById("intimacy");
const inventoryContent = document.querySelector(".inventory-content");

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
  rank: {
    rankName: document.getElementById("rank-name"),
    rankImg: document.getElementById("rank-img"),
  },
  upgrades: {
    goldUpContainer: document.getElementById("gold-up"),
    powerUpContainer: document.getElementById("power-up"),
  },
  shop: {
    goldShopIntContainer: document.getElementById("intimacy"),
  },
};

let data = JSON.parse(localStorage.getItem("data")) || {
  playerName: "player",
  coin: 0,
  cps: 0,
  increment: 1,
  multiplier: 1,
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
    5: 1,
    6: 1,
  },
  rankLevel: 1,
  haremIntimacy: {
    1: 0,
    2: 0,
    3: 0,
  },
  itemShopAmount: {
    intimacy: {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
    },
    booster: {
      1: 0,
    },
  },
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
  createClickEffect.textContent = `+${Math.round(data.increment * data.multiplier)}`;
  // console.log(createClickEffect);
  clickArea.appendChild(createClickEffect);

  setTimeout(() => {
    clickArea.removeChild(createClickEffect);
  }, 500);

  data.coin += Math.round(data.increment * data.multiplier);

  renderedPowerCards.goldInfo.querySelector(".gold-info-for-up").textContent =
    data.coin;
  renderedGoldCards.goldInfo.querySelector(".gold-info-for-up").textContent =
    data.coin;

  saveGame(data);
  //   console.log(data);
  updateCoin(uiElements, data);
  updateRankProgress(uiElements, data);
  updateHaremProgress(data);
  updateShop(uiElements, data);
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

  powerUpBtn.addEventListener("click", () => {
    let price = getPowerPrice(powerUpgrade[index], data);
    if (data.coin >= price) {
      data.coin -= price;
      data.powerUpLevel[powerUpgrade[index].id]++;
      updateUpgrades(uiElements, data);
      data.power += powerUpgrade[index].amount;
      saveGame(data);
      updatePower(uiElements, data);
      updateCoinPerSec(uiElements, data);
      updateRankProgress(uiElements, data);
      updateHaremProgress(data);
      updateShop(uiElements, data);
      checkBtnCondition(data);
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

  goldUpBtn.addEventListener("click", () => {
    let price = getGoldPrice(goldUpgrade[index], data);
    if (data.coin >= price) {
      data.coin -= price;
      data.goldUpLevel[goldUpgrade[index].id]++;
      updateUpgrades(uiElements, data);
      data.cps += goldUpgrade[index].amount;
      saveGame(data);
      updateCoinPerSec(uiElements, data);
      updateRankProgress(uiElements, data);
      updateHaremProgress(data);
      updateShop(uiElements, data);
      checkBtnCondition(data);
    }
  });
});

navUpList.forEach((element, index) => {
  element.addEventListener("click", () => {
    navUpList.forEach((element) => {
      element.classList.remove("nav-active");
    });

    upContent.forEach((element) => {
      element.classList.remove("show-content");
    });
    upContent[index].classList.add("show-content");
    element.classList.add("nav-active");
  });
});

upRankButton.addEventListener("click", () => {
  if (
    data.coin >= rankRequirement[data.rankLevel - 1].gold &&
    data.power >= rankRequirement[data.rankLevel - 1].power
  ) {
    data.coin -= rankRequirement[data.rankLevel - 1].gold;
    data.rankLevel++;
    data.multiplier = rankRequirement[data.rankLevel - 1].buffCpc;
    data.cps += rankRequirement[data.rankLevel - 1].buffCps;
    checkBtnCondition(data);
    updateRank(uiElements, data);
    saveGame(data);
    updateRankProgress(uiElements, data);
    updateHaremProgress(data);
    updateShop(uiElements, data);
    updateCoinPerSec(uiElements, data);
  }
});

// console.log(data);
const editNameModal = createEditNameModal();
// console.log(editNameModal)
const backEditNameBtn = document.getElementById("back-confirm");
const confirmButton = document.getElementById("confirm");
const inputName = document.getElementById("input-name");

editNameBtn.addEventListener("click", () => {
  editNameModal.classList.toggle("show-content");
});

backEditNameBtn.addEventListener("click", () => {
  editNameModal.classList.toggle("show-content");
});

confirmButton.addEventListener("click", () => {
  editNameModal.classList.toggle("show-content");
  updateProfile(data);
});

inputName.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    editNameModal.classList.toggle("show-content");
    updateProfile(data);
  }
});

const confirmResetModal = createConfirmResetModal();
const backResetBtn = document.getElementById("back-reset");
const confirmResetBtn = document.getElementById("confirm-reset");

resetBtn.addEventListener("click", () => {
  confirmResetModal.classList.toggle("show-content");
});

backResetBtn.addEventListener("click", () => {
  confirmResetModal.classList.toggle("show-content");
});

confirmResetBtn.addEventListener("click", () => {
  data = resetGame(data);
  saveGame(data);
  updateUI(uiElements, data);
  confirmResetModal.classList.toggle("show-content");
});

// next feature for development is harem section first.
navDynastyList.forEach((element, index) => {
  element.addEventListener("click", () => {
    navDynastyList.forEach((element) => {
      element.classList.remove("nav-active");
    });

    dynastyContent.forEach((element) => {
      element.classList.remove("show-content-grid");
    });

    dynastyContent[index].classList.add("show-content-grid");
    element.classList.add("nav-active");
  });
});

const renderedHaremCard = renderDynastyCard(haremContainer, haremList, data);
// console.log(renderedHaremCard);

navShopList.forEach((element, index) => {
  element.addEventListener("click", () => {
    navShopList.forEach((element) => {
      element.classList.remove("nav-active");
    });

    shopContent.forEach((element) => {
      element.classList.remove("show-content");
    });

    shopContent[index].classList.add("show-content");
    element.classList.add("nav-active");
  });
});

const renderedShopCard = renderShopCard(intimacyContainer, intimacyItem, data);

navShopList.forEach((element, index) => {
  element.addEventListener("click", () => {
    navShopList.forEach((element) => {
      element.classList.remove("nav-active");
    });

    shopContent.forEach((element) => {
      element.classList.remove("show-content");
    });

    shopContent[index].classList.add("show-content");
    element.classList.add("nav-active");
  });
});

const renderedInventoryCard = renderInventoryCard(
  inventoryContent,
  intimacyItem,
  data,
);

const buyModal = createBuyModal();
const confirmBuyBtn = document.querySelector(".confirm-buy");
const backBuyBtn = document.querySelector(".back-buy");
const addItemBtn = document.querySelector(".add-item");
const removeItemBtn = document.querySelector(".remove-item");
const inputItem = document.querySelector(".input-item-area");
// console.log(backBuyBtn)
// console.log(confirmBuyBtn)
// console.log(renderedShopCard);

renderedShopCard.cards.forEach((element, index) => {
  const itemShopBtn = element.querySelector(".item-shop-button");
  // console.log(buyModal)
  // console.log(itemShopBtn);
  const img = buyModal.querySelector(".buy-modal-top img");
  const name = buyModal.querySelector(".modal-shop-name");
  const price = buyModal.querySelector(".modal-shop-price");
  const amount = buyModal.querySelector(".modal-shop-amount");

  // console.log(name)
  // console.log(price)
  // console.log(amount)

  itemShopBtn.addEventListener("click", () => {
    buyModal.classList.toggle("show-content");

    confirmBuyBtn.addEventListener("click", () => {
      data.itemShopAmount.intimacy[index + 1] += parseInt(inputItem.value);
      inputItem.value = 0;
      console.log(inputItem.value);
    });
    
    img.src = intimacyItem[index].imgUrl;
    name.textContent = intimacyItem[index].name;
    price.textContent = intimacyItem[index].price;
    amount.textContent = intimacyItem[index].intimacyPoint;
  });
});

backBuyBtn.addEventListener("click", () => {
  buyModal.classList.toggle("show-content");
});

confirmBuyBtn.addEventListener("click", () => {
  buyModal.classList.toggle("show-content");
});

addItemBtn.addEventListener("click", () => {
  // console.log(inputItem.value);
  const value = inputItem.value++;
  inputItem.textContent = value;
});

removeItemBtn.addEventListener("click", () => {
  // console.log(inputItem.value);
  if (inputItem.value == 0) return;
  const value = inputItem.value--;
  inputItem.textContent = value;
});

setInterval(() => {
  data.coin += data.cps;
  saveGame(data);
  updateCoin(uiElements, data);
  renderedPowerCards.goldInfo.querySelector(".gold-info-for-up").textContent =
    amountFormat(data.coin);
  renderedGoldCards.goldInfo.querySelector(".gold-info-for-up").textContent =
    amountFormat(data.coin);
  updateRankProgress(uiElements, data);
  updateHaremProgress(data);
  updateShop(uiElements, data);
  checkBtnCondition(data);
}, 1000);

updateUI(uiElements, data);
