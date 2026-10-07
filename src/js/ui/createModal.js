export const createEditNameModal = () => {
    const editNameModal = document.createElement("div");
    editNameModal.className = "edit-name-modal";

    editNameModal.innerHTML = `
    <div class="input-area">
        <input type="text" id="input-name" autocomplete="off">
    </div>
    <div class="confirm-edit">
        <button id="back-confirm">back</button>
        <button id="confirm">confirm</button>
    </div>
    `
    document.querySelector(".container").appendChild(editNameModal);

    return editNameModal;
}

export const createConfirmResetModal = () => {
    const resetModal = document.createElement("div");
    resetModal.className = "reset-modal"

    resetModal.innerHTML = `
    <div class="text-content">
        are you sure to reset the game? (this action cannot be undo)
    </div>
    <div class="confirm-edit">
        <button id="back-reset">back</button>
        <button id="confirm-reset">confirm</button>
    </div>
    `
    document.querySelector(".container").appendChild(resetModal);

    return resetModal;
}