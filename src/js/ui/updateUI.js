import { getIncrementPrice } from "../data/config.js";

const updateUI = (uiElements, data) => {
    uiElements.coinAmount.textContent = `${data.coin}`;
    uiElements.powerAmount.textContent = `${data.power}`;

    const { increment } = uiElements;
    increment.amount.textContent = `(+${data.increment}/click)`;
    increment.level.textContent = `level ${data.increment}`;
    increment.price.textContent = getIncrementPrice(data);
}

export default updateUI