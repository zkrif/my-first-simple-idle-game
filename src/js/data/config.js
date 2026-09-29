export const increment =  {
    basePrice : 100,
    priceGrowth : 1.17,
}

export const getIncrementPrice = (data) => {
    return Math.round(increment.basePrice * Math.pow(increment.priceGrowth, data.increment - 1))
}

