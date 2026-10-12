import { amountFormat } from "../data/control.js";

const createDynastyCard = (dynastyData, data) => {
  const card = document.createElement("div");
  card.className = "dynasty-card";

  card.innerHTML = `
    <img src="${dynastyData.imgUrl}" alt=""></img>
    <div class="dynasty-card-description">
        <div class="name-dynasty-data">${dynastyData.name}</div>
        <div class="dynasty-progress-info">
            <div class="text-content">intimacy <span class="point"></span>/${dynastyData.pointRequirement}</div>
            <progress max="${dynastyData.pointRequirement}"></progress>
            <div class="text-content">coin <span class="dynasty-coin">${data.coin}</span>/${amountFormat(dynastyData.coinRequirement)}</div>
            <progress max="${dynastyData.coinRequirement}"></progress>
        </div>
        <div class = "button-dynasty-card">
          <button>give item</button>
          <button>open</button>
        </div>
    </div>
  `;

  return card;
};

export const renderDynastyCard = (container, dynastyData, data) => {
  const cards = [];

  dynastyData.forEach((element) => {
    const createCard = createDynastyCard(element, data);
    container.appendChild(createCard);
    cards.push(createCard);
  });

  return cards;
};