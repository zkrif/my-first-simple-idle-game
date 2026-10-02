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