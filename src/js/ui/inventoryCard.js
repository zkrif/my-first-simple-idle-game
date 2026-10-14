import { intimacyItem } from "../data/config.js";

export const createInventoryCard = (shopData) => {
  const card = document.createElement("div");
  card.className = "inventory-card";

  card.innerHTML = `
    <img src="${shopData.imgUrl}"></img>
    <div class="inventory-amount-name">${shopData.name}</div>
    <div class="inventory-amount-item"></div>
    `;

  return card;
};

export const renderInventoryCard = (container, shopData, data) => {
  const cards = [];
  shopData.forEach((element, index) => {
    const card = createInventoryCard(shopData[index]);
    const amount = card.querySelector(".inventory-amount-item");
    (data.itemShopAmount.intimacy[index + 1] == 0)
      ? (card.style.display = "none")
      : (amount.textContent = data.itemShopAmount.intimacy[index + 1]);
    container.appendChild(card);
    cards.push(card);
  });

  return cards;
};
