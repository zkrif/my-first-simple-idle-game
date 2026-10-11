import {
  getIncrementPrice,
  rankRequirement,
  goldUpgrade,
  powerUpgrade,
  getGoldPrice,
  getPowerPrice,
} from "../data/config.js";
import { checkBtnCondition } from "../data/control.js";

export const updateCoin = (uiElements, data) => {
  uiElements.coinAmount.textContent = `${data.coin}`;
};

export const updatePower = (uiElements, data) => {
  uiElements.powerAmount.textContent = `${data.power}`;
};

export const updateIncrement = (uiElements, data) => {
  const { increment } = uiElements;
  increment.amount.textContent = `(+${data.increment}/click)`;
  increment.level.textContent = `level ${data.increment}`;
  increment.price.textContent = `(${getIncrementPrice(data)})`;
};

export const updateCoinPerSec = (uiElements, data) => {
  uiElements.coinPerSec.textContent = `+${data.cps} coin/s`;
};

export const updateRankProgress = (uiElements, data) => {
  const { progress } = uiElements;
  uiElements.goldRequirement.textContent = `${data.coin}/${rankRequirement[data.rankLevel - 1].gold}`;
  uiElements.powerRequirement.textContent = `${data.power}/${rankRequirement[data.rankLevel - 1].power}`;
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
    goldLevel.textContent = data.goldUpLevel[goldUpgrade[index].id];
    goldUpPrice.textContent = getGoldPrice(goldUpgrade[index], data);
    goldInfoForPower.textContent = data.coin;
    goldInfoForGold.textContent = data.coin;
  });

  upPowerCardContainer.forEach((element, index) => {
    const powerUpLevel = element.querySelector(".up-level");
    const powerUpPrice = element.querySelector(".up-price");
    powerUpLevel.textContent = data.powerUpLevel[powerUpgrade[index].id];
    powerUpPrice.textContent = getPowerPrice(powerUpgrade[index], data);
    goldInfoForPower.textContent = data.coin;
    goldInfoForGold.textContent = data.coin;
  });
};

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
};
