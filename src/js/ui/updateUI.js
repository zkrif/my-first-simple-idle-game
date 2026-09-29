import { getIncrementPrice } from "../data/config.js";

const updateUI = (uiElements, data) => {
    uiElements.coinAmount.textContent = `${data.coin}`;

    const { increment } = uiElements;
    increment.amount.textContent = `(+${data.increment}/click)`;
    increment.level.textContent = `level ${data.increment}`;
    increment.price.textContent = getIncrementPrice(data);
}

export default updateUI