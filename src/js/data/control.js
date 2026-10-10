import { getIncrementPrice, rankRequirement } from "./config.js";

export const saveGame = (data) => {
  localStorage.setItem("data", JSON.stringify(data));
};

// check button disabled
export const checkBtnCondition = (data) => {
  const upIncomeBtn = document.getElementById("upgrade-income-button");
  const upRankBtn = document.getElementById("up-rank-button");

  data.coin >= getIncrementPrice(data)
    ? (upIncomeBtn.disabled = false)
    : (upIncomeBtn.disabled = true);

  let maxLevel = data.rankLevel === rankRequirement.length;
  let hasEnoughCoin = data.coin >= rankRequirement[data.rankLevel - 1].gold;
  let hasEnoughPower = data.power >= rankRequirement[data.rankLevel - 1].power;

  upRankBtn.disabled = maxLevel || !(hasEnoughCoin && hasEnoughPower)
};

export const resetGame = (data) => {
  return {
    playerName: "player",
    coin: 0,
    cps: 0,
    multiplier: 1,
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
};
