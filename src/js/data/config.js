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
    name: "Endurance",
    amount: 50,
    basePrice: 500,
    priceGrowth: 1.16,
  },
  {
    id: "2",
    name: "Intelligence",
    amount: 150,
    basePrice: 1000,
    priceGrowth: 1.17,
  },
  {
    id: "3",
    name: "Agility",
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
    name: "Royal Wheat Field",
    amount: 5,
    basePrice: 2500,
  },
  {
    id: "2",
    name: "Royal Gold Mine",
    amount: 25,
    basePrice: 12000,
  },
  {
    id: "3",
    name: "Town Bazaar",
    amount: 150,
    basePrice: 70000,
  },
  {
    id: "4",
    name: "Imperial Seaport",
    amount: 500,
    basePrice: 200000,
  },
  {
    id: "5",
    name: "Imperial Blacksmith",
    amount: 1000,
    basePrice: 375000,
  },
  {
    id: "6",
    name: "Eternal Treasury",
    amount: 2000,
    basePrice: 700000,
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
    id: "1",
    name:"alexandra adeline",
    imgUrl: "src/assets/harems-pic/girl1.png",
    pointRequirement: 100,
    buff: {
      multiplier : 1.25,
      cps : 1000,
    },
    coinRequirement: 250000,
    opened: false,
  },
  {
    id: "2",
    name:"nisha narayana",
    imgUrl: "src/assets/harems-pic/girl2.png",
    pointRequirement: 100,
    buff: {
      multiplier : 2,
      cps : 500,
    },
    coinRequirement: 350000,
    opened: false,
  },
  {
    id: "3",
    name:"victoria claudia",
    imgUrl: "src/assets/harems-pic/girl3.png",
    pointRequirement: 100,
    buff: {
      multiplier : 1.5,
      cps : 5000,
    },
    coinRequirement: 600000,
    opened: false,
  },
]

export const intimacyItem = [
  {
    id : "1",
    name : "sweet chocolate",
    imgUrl : "src/assets/icons/sweet-choco.png",
    intimacyPoint : 2,
    price: 5000,
  },
  {
    id : "2",
    name : "flower bouquet",
    imgUrl : "src/assets/icons/flower-bucket.png",
    intimacyPoint : 2,
    price: 5000,
  },
  {
    id : "3",
    name : "enchanted parfume",
    imgUrl : "src/assets/icons/parfume.png",
    intimacyPoint : 2,
    price: 5000,
  },
  {
    id : "4",
    name : "royal jewelry",
    imgUrl : "src/assets/icons/jewelry.png",
    intimacyPoint : 2,
    price: 5000,
  },
  {
    id : "5",
    name : "imperial treasury",
    imgUrl : "src/assets/icons/imperial-treasury.png",
    intimacyPoint : 2,
    price: 5000,
  }
]