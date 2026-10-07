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