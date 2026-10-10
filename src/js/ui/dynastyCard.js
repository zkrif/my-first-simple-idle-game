const createHaremCard = (haremList) => {
  const card = document.createElement("div");
  card.className = "harem-card";

  card.innerHTML = `
    <img src="${haremList.imgUrl}" alt=""></img>
    <div class="harem-description">
        <div class="name-harem">${haremList.name}</div>
        <div class="harem-progress-info">
            <div class="text-content">intimacy 0/${haremList.pointRequirement}</div>
            <progress max="${haremList.pointRequirement}"></progress>
        </div>
    </div>
  `;

  return card;
};

export const renderHaremCard = (container, haremList) => {
  const cards = [];

  haremList.forEach((element) => {
    const createCard = createHaremCard(element);
    container.appendChild(createCard);
    cards.push(createCard);
  });

  return cards;
};