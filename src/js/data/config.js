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
    upgradeData.basePrice * Math.pow(upgradeData.priceGrowth, data.powerUpLevel[upgradeData.id] - 1),
  );
};

export const goldUpgrade = [
  {
    id : "1",
    amount: 5,
    basePrice: 2500,
  },
  {
    id : "2",
    amount: 25,
    basePrice: 12000,
  },
  {
    id : "3",
    amount: 150,
    basePrice: 70000,
  },
  {
    id : "4",
    amount: 1200,
    basePrice: 500000,
  }
]
export const getGoldPrice = (upgradeData, data) => {
  return Math.round(
    upgradeData.basePrice * Math.pow(1.17, data.goldUpLevel[upgradeData.id] - 1),
  );
};

export const rankRequirement = [
  {
    gold: 10000,
    power: 2000,
  },
  {
    gold: 50000,
    power: 10000,
  },
  {
    gold: 500000,
    power: 100000,
  },
  {
    gold: 1500000,
    power: 300000,
  }
]

