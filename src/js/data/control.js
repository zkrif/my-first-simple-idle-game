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

  data.coin >= rankRequirement[data.rankLevel-1].gold && data.power >= rankRequirement[data.rankLevel-1].power
    ? (upRankBtn.disabled = false)
    : (upRankBtn.disabled = true);
};
