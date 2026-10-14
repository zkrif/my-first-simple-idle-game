import { amountFormat } from "../data/control.js";

export const createShopCard = (shopData, data) => {
  // const { intimacy } = data.itemShopAmount;

  const card = document.createElement("div");
  card.className = "shop-card";

  
  card.innerHTML = `
        <div class="shop-left-card">
            <img src="${shopData.imgUrl}" />
            <div class="shop-card-description">
                <div class = "item-shop-name">${amountFormat(shopData.name)}</div>
                <div class = "item-shop-price">${amountFormat(shopData.price)}</div>
                <div class = "item-shop-price">intimacy: ${amountFormat(shopData.intimacyPoint)}</div>
                <div class = "item-shop-amount"></div>
            </div>
        </div>
        <div class="shop-right-card">
                <button class="item-shop-button">buy</button>
        </div>
    `;

  return card;
};

export const renderShopCard = (container, shopData, data) => {
  const cards = [];

  const goldInfo = document.createElement("div");
  goldInfo.className = "gold-info-for-upgrades";
  goldInfo.innerHTML = `
    <img src="src/assets/icons/coin.png" alt="coin.png">
    <div class="gold-info-shop">${amountFormat(data.coin)}</div>
    `;
  container.appendChild(goldInfo);

  shopData.forEach((element, index) => {
    const card = createShopCard(element, data);
    const itemShopAmount = card.querySelector(".item-shop-amount");
    itemShopAmount.textContent = `${data.itemShopAmount.intimacy[index + 1]}`;
    container.appendChild(card);
    cards.push(card);
  });

  return { cards, goldInfo };
};
