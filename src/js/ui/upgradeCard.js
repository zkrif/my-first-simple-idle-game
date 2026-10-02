import { getPowerPrice } from "../data/config.js";

const createUpgradeCards = (upgradeData, data) => {
  const card = document.createElement("div");
  card.className = "upgrade-power";

  card.innerHTML = `
    <div class="left">
        <div class="heading">upgrade power</div>
            <div class="text-content">
                <span>increase income</span>
                <span class="power-level">${data.powerUpLevel[upgradeData.id]}</span>
                <span class="power-amount">${upgradeData.amount}</span>
            </div>
        </div>
    <div class="right">
        <button class="upgrade-power-button">
            <span>upgrade</span>
            <span class="power-price">${getPowerPrice(upgradeData, data)}</span>
        </button>
    </div>
    `;

  return card;
};

const renderUpgradeCard = (container, upgradeData, data) => {
    const cards = [];

    upgradeData.forEach(element => {
        const card = createUpgradeCards(element, data);
        container.appendChild(card);
        cards.push(card);
    });

    console.log(cards);

    return cards;
}

export default renderUpgradeCard;
