import { getPowerPrice } from "../data/config.js";

const createUpgradeCards = (upgradeData, data, getPrice) => {
  const card = document.createElement("div");
  card.className = "upgrade-card-container";

  card.innerHTML = `
    <div class="left">
        <div class="heading">upgrade</div>
            <div class="text-content">
                <span>increase income</span>
                <span class="up-level">${data.powerUpLevel[upgradeData.id]}</span>
                <span class="up-amount">${upgradeData.amount}</span>
            </div>
        </div>
    <div class="right">
        <button class="upgrade-up-button">
            <span>upgrade</span>
            <span class="up-price">${getPrice(upgradeData, data)}</span>
        </button>
    </div>
    `;

  return card;
};

const renderUpgradeCard = (container, upgradeData, data, getPrice) => {
    const cards = [];

    const goldInfo = document.createElement("div")
    goldInfo.className = "gold-info-for-up"
    goldInfo.innerHTML = `
    <img src="src/assets/icons/coin.png" alt="coin.png">
    <div class="gold-info-for-up">${data.coin}</div>`;
    container.appendChild(goldInfo);

    upgradeData.forEach(element => {
        const card = createUpgradeCards(element, data, getPrice);
        container.appendChild(card);
        cards.push(card);
    });

    // console.log(cards);

    return {cards, goldInfo};
}

export default renderUpgradeCard;
