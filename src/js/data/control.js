import {
  getGoldPrice,
  getPowerPrice,
  getIncrementPrice,
  goldUpgrade,
  powerUpgrade,
  rankRequirement,
} from "./config.js";

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

  upRankBtn.disabled = maxLevel || !(hasEnoughCoin && hasEnoughPower);

  const goldUpContainer = document.getElementById("gold-up");
  const goldUpBtn = goldUpContainer.querySelectorAll(".upgrade-up-button");

  goldUpBtn.forEach((element, index) => {
    let hasEnoughGoldPrice =
      data.coin >= getGoldPrice(goldUpgrade[index], data);
    element.disabled = !hasEnoughGoldPrice;
  });

  const powerUpContainer = document.getElementById("power-up");
  const powerUpBtn = powerUpContainer.querySelectorAll(".upgrade-up-button");

  powerUpBtn.forEach((element, index) => {
    let hasEnoughPowerPrice =
      data.coin >= getPowerPrice(powerUpgrade[index], data);
    element.disabled = !hasEnoughPowerPrice;
  });
};

export const resetGame = (data) => {
  return {
    playerName: "player",
    coin: 20000,
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
        2: 5,
        3: 0,
        4: 0,
        5: 0,
      },
      booster: {
        1: 0,
      },
    },
  };
};

export const amountFormat = (coin) => {
  const formatNum = (num, suffix) => {
    return parseFloat(num.toFixed(2)) + suffix;
  };

  if (coin >= 1e33) return formatNum(coin / 1e33, "Dc");
  if (coin >= 1e30) return formatNum(coin / 1e30, "No");
  if (coin >= 1e27) return formatNum(coin / 1e27, "Oc");
  if (coin >= 1e24) return formatNum(coin / 1e24, "Sp");
  if (coin >= 1e21) return formatNum(coin / 1e21, "Sx");
  if (coin >= 1e18) return formatNum(coin / 1e18, "Qi");
  if (coin >= 1e15) return formatNum(coin / 1e15, "Qa");
  if (coin >= 1e12) return formatNum(coin / 1e12, "T");
  if (coin >= 1e9) return formatNum(coin / 1e9, "B");
  if (coin >= 1e6) return formatNum(coin / 1e6, "M");
  if (coin >= 1e3) return formatNum(coin / 1e3, "k");

  return coin;
};
