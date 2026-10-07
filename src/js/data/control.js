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

  data.coin >= rankRequirement[data.rankLevel - 1].gold &&
  data.power >= rankRequirement[data.rankLevel - 1].power
    ? (upRankBtn.disabled = false)
    : (upRankBtn.disabled = true);
};

export const resetGame = (data) => {
  localStorage.removeItem("data");
  return {
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
};
