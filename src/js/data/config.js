export const increment = {
  basePrice: 100,
  priceGrowth: 1.17,
};

export const getIncrementPrice = (data) => {
  return Math.round(
    increment.basePrice * Math.pow(increment.priceGrowth, data.increment - 1),
  );
};

export const powerUpgrade = [
  {
    id: "1",
    amount: 50,
    basePrice: 500,
    priceGrowth: 1.16,
  },
  {
    id: "2",
    amount: 150,
    basePrice: 1000,
    priceGrowth: 1.17,
  },
  {
    id: "3",
    amount: 5000,
    basePrice: 50000,
    priceGrowth: 1.18,
  },
];

export const getPowerPrice = (upgradeData, data) => {
  return Math.round(
    upgradeData.basePrice *
      Math.pow(upgradeData.priceGrowth, data.powerUpLevel[upgradeData.id] - 1),
  );
};

export const goldUpgrade = [
  {
    id: "1",
    amount: 5,
    basePrice: 2500,
  },
  {
    id: "2",
    amount: 25,
    basePrice: 12000,
  },
  {
    id: "3",
    amount: 150,
    basePrice: 70000,
  },
  {
    id: "4",
    amount: 1200,
    basePrice: 500000,
  },
];
export const getGoldPrice = (upgradeData, data) => {
  return Math.round(
    upgradeData.basePrice *
      Math.pow(1.17, data.goldUpLevel[upgradeData.id] - 1),
  );
};

export const rankRequirement = [
  {
    rank: "F (Novice)",
    rankImg: "src/assets/icons/novice-rank.png",
    gold: 10000,
    power: 2000,
    buffCpc: 1,
    buffCps: 0,
  },
  {
    rank: "E (Apprentice)",
    rankImg: "src/assets/icons/apprentice-rank.png",
    gold: 50000,
    power: 10000,
    buffCpc: 1.25,
    buffCps: 75,
  },
  {
    rank: "D (Adventurer)",
    rankImg: "src/assets/icons/adventurer-rank.png",
    gold: 500000,
    power: 100000,
    buffCpc: 1.50,
    buffCps: 125,
  },
  {
    rank: "C (Warrior)",
    rankImg: "src/assets/icons/warrior-rank.png",
    gold: 1500000,
    power: 300000,
    buffCpc: 1.75,
    buffCps: 150,
  },
  {
    rank: "B (Knight)",
    rankImg: "src/assets/icons/knight-rank.png",
    gold: 3000000,
    power: 500000,
    buffCpc: 2,
    buffCps: 150,
  },
  {
    rank: "A (Elite Knight)",
    rankImg: "src/assets/icons/elite-knight-rank.png",
    gold: 5000000,
    power: 1000000,
    buffCpc: 2.5,
    buffCps: 175,
  },
  {
    rank: "S (Champion)",
    rankImg: "src/assets/icons/champion-rank.png",
    gold: 10000000,
    power: 1200000,
    buffCpc: 3,
    buffCps: 200,
  },
  {
    rank: "SS (Legend)",
    rankImg: "src/assets/icons/legend-rank.png",
    gold: 15000000,
    power: 2000000,
    buffCpc: 4,
    buffCps: 250,
  },
  {
    rank: "SSS (Mythic)",
    rankImg: "src/assets/icons/mythic-rank.png",
    gold: 20000000,
    power: 3000000,
    buffCpc: 5,
    buffCps: 375,
  },
];

export const haremList = [
  {
    id: 1,
    name:"a",
    imgUrl: "src/assets/harems-pic/girl1.png",
    pointRequirement: 100,
    buff: "",
    coinRequirement: 250000,
    opened: false,
  },
  {
    id: 2,
    name:"b",
    imgUrl: "src/assets/harems-pic/girl2.png",
    pointRequirement: 100,
    buff: "",
    coinRequirement: 250000,
    opened: false,
  },
]