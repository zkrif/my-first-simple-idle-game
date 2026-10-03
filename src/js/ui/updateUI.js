import { getIncrementPrice, rankRequirement } from "../data/config.js";

export const updateCoin = (uiElements, data) => {
  uiElements.coinAmount.textContent = `${data.coin}`;
//   localStorage.clear();
};

export const updatePower = (uiElements, data) => {
  uiElements.powerAmount.textContent = `${data.power}`;
};

export const updateIncrement = (uiElements, data) => {
  const { increment } = uiElements;
  increment.amount.textContent = `(+${data.increment}/click)`;
  increment.level.textContent = `level ${data.increment}`;
  increment.price.textContent = getIncrementPrice(data);
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
};

export const updateUI = (uiElements, data) => {
    updateCoin(uiElements, data);
    updatePower(uiElements, data);
    updateIncrement(uiElements, data);
    updateCoinPerSec(uiElements, data);
    updateRankProgress(uiElements, data);
};
