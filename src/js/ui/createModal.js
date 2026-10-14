export const createEditNameModal = () => {
  const editNameModal = document.createElement("div");
  editNameModal.className = "edit-name-modal";

  editNameModal.innerHTML = `
    <div class="input-area">
        <input type="text" id="input-name" autocomplete="off" maxlength="10" class="text-content">
    </div>
    <div class="confirm-edit">
        <button id="back-confirm">back</button>
        <button id="confirm">confirm</button>
    </div>
    `;
  document.querySelector(".container").appendChild(editNameModal);

  return editNameModal;
};

export const createConfirmResetModal = () => {
  const resetModal = document.createElement("div");
  resetModal.className = "reset-modal";

  resetModal.innerHTML = `
    <div class="text-content">
        are you sure to reset the game? (this action cannot be undo)
    </div>
    <div class="confirm-edit">
        <button id="back-reset">back</button>
        <button id="confirm-reset">confirm</button>
    </div>
    `;
  document.querySelector(".container").appendChild(resetModal);

  return resetModal;
};

export const createBuyModal = () => {
  const buyModal = document.createElement("div");
  buyModal.className = "buy-modal";

  buyModal.innerHTML = `
        <div class="buy-modal-top">
            <img src="" />
        </div>
        <div class="buy-modal-mid">
            <div class = "modal-shop-name"></div>
            <div class = "modal-shop-price"></div>
            <div class = "modal-shop-amount">intimacy: </div>
            <div class="input-item">
            <button class="remove-item">-</button>
            <input type="number" min="0" value="0" class="input-item-area"></input>
            <button class="add-item">+</button>
            </div>
        </div>
        <div class="buy-modal-bottom">
            <button class="back-buy">back</button>
            <button class="confirm-buy">buy</button>
        </div>
    `;

  document.querySelector(".container").appendChild(buyModal);
  return buyModal;
};
