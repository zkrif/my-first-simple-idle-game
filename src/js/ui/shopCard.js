export const createShopCard = (shopData, data) => {

    // const { intimacy } = data.itemShopAmount;

    const card = document.createElement("div");
    card.className = "shop-card"

    card.innerHTML = `
        <div class="shop-left-card">
            <img src="${shopData.imgUrl}" />
            <div class="shop-card-description">
                <div class = "item-shop-name">${shopData.name}</div>
                <div class = "item-shop-price">${shopData.price}</div>
                <div class = "item-shop-amount"></div>
            </div>
        </div>
        <div class="shop-right-card">
                <button class="item-shop-button">buy</button>
        </div>
    `;

    return card;
}

export const renderShopCard = (container, shopData, data) => {
    const cards = []

    shopData.forEach(element => {
        const card = createShopCard(element, data);
        container.appendChild(card);
        cards.push(card);
    });

    return cards;
}