import {
  getIncrementPrice,
  rankRequirement,
  goldUpgrade,
  powerUpgrade,
  getGoldPrice,
  getPowerPrice,
  haremList,
} from "../data/config.js";
import { checkBtnCondition, amountFormat } from "../data/control.js";

export const updateCoin = (uiElements, data) => {
  uiElements.coinAmount.textContent = `${amountFormat(data.coin)}`;
};

export const updatePower = (uiElements, data) => {
  uiElements.powerAmount.textContent = `${amountFormat(data.power)}`;
};

export const updateIncrement = (uiElements, data) => {
  const { increment } = uiElements;
  increment.amount.textContent = `(+${amountFormat(data.increment)}/click)`;
  increment.level.textContent = `level ${amountFormat(data.increment)}`;
  increment.price.textContent = `(${amountFormat(getIncrementPrice(data))})`;
};

export const updateCoinPerSec = (uiElements, data) => {
  uiElements.coinPerSec.textContent = `+${amountFormat(data.cps)} coin/s`;
};

export const updateRankProgress = (uiElements, data) => {
  const { progress } = uiElements;
  uiElements.goldRequirement.textContent = `${amountFormat(data.coin)}/${amountFormat(rankRequirement[data.rankLevel - 1].gold)}`;
  uiElements.powerRequirement.textContent = `${amountFormat(data.power)}/${amountFormat(rankRequirement[data.rankLevel - 1].power)}`;
  progress.gold.value = data.coin;
  progress.gold.max = rankRequirement[data.rankLevel - 1].gold;
  progress.power.value = data.power;
  progress.power.max = rankRequirement[data.rankLevel - 1].power;

  if (data.rankLevel === rankRequirement.length) {
    uiElements.goldRequirement.textContent = `Max Level`;
    uiElements.powerRequirement.textContent = `Max Level`;
    progress.gold.value = data.coin;
    progress.gold.max = 0;
    progress.power.value = data.power;
    progress.power.max = 0;
  }
};

export const updateRank = (uiElements, data) => {
  const { rank } = uiElements;
  rank.rankName.textContent = rankRequirement[data.rankLevel - 1].rank;
  rank.rankImg.src = rankRequirement[data.rankLevel - 1].rankImg;
};

export const updateProfile = (data) => {
  const name = document.getElementById("name");
  const inputName = document.getElementById("input-name");
  data.playerName = inputName.value == "" ? "player" : inputName.value;
  inputName.value = "";
  name.textContent = data.playerName;
};

export const updateUpgrades = (uiElements, data) => {
  const { upgrades } = uiElements;
  const goldInfoForGold = upgrades.goldUpContainer.querySelector(".gold-info-for-up");
  const goldInfoForPower = upgrades.powerUpContainer.querySelector(".gold-info-for-up");
  const upGoldCardContainer = upgrades.goldUpContainer.querySelectorAll(".upgrade-card-container");
  const upPowerCardContainer = upgrades.powerUpContainer.querySelectorAll(".upgrade-card-container");

  upGoldCardContainer.forEach((element, index) => {
    const goldLevel = element.querySelector(".up-level");
    const goldUpPrice = element.querySelector(".up-price");
    goldLevel.textContent = `level ${data.goldUpLevel[goldUpgrade[index].id]}`;
    goldUpPrice.textContent = amountFormat(getGoldPrice(goldUpgrade[index], data));
    goldInfoForPower.textContent = amountFormat(data.coin);
    goldInfoForGold.textContent = amountFormat(data.coin);
  });

  upPowerCardContainer.forEach((element, index) => {
    const powerUpLevel = element.querySelector(".up-level");
    const powerUpPrice = element.querySelector(".up-price");
    powerUpLevel.textContent = `level ${data.powerUpLevel[powerUpgrade[index].id]}`;
    powerUpPrice.textContent = amountFormat(getPowerPrice(powerUpgrade[index], data));
    goldInfoForPower.textContent = amountFormat(data.coin);
    goldInfoForGold.textContent = amountFormat(data.coin);
  });
}; 

export const updateHaremProgress = (data) => {
  const haremSection = document.getElementById("harem")

  const haremCard = haremSection.querySelectorAll(".dynasty-card");

  
  haremCard.forEach((element, index) => {
    const haremPoint = element.querySelector(".point");
    const haremCoin = element.querySelector(".dynasty-coin");
    
    const progress = element.querySelectorAll("progress");
    
    progress[1].value = data.coin;
    progress[0].value = data.haremIntimacy[haremList[index].id];

    haremPoint.textContent = amountFormat(data.haremIntimacy[haremList[index].id]);
    haremCoin.textContent = amountFormat(data.coin);
  });
}

export const updateUI = (uiElements, data) => {
  updateProfile(data);
  updateCoin(uiElements, data);
  updatePower(uiElements, data);
  updateIncrement(uiElements, data);
  updateCoinPerSec(uiElements, data);
  updateUpgrades(uiElements, data)
  updateRankProgress(uiElements, data);
  updateRank(uiElements, data);
  checkBtnCondition(data);
  updateHaremProgress(data);
};