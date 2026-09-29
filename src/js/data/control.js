export const saveGame = (data) => {
    localStorage.setItem("data", JSON.stringify(data));
}