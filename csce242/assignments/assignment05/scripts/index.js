const speechColumn = document.getElementById("speech-column");
const speechBubble = document.getElementById("speech-bubble");

const drinkSelect = document.getElementById("beverage");
const drinkResult = document.getElementById("drink-result");

const sun = document.getElementById("sun");
const stickerContainer = document.getElementById("sticker-container");

const showSpeech = () =>{
    speechBubble.classList.toggle("hidden");
};

const showDrink = () => {
    const selectedDrink = drinkSelect.value;

    if (selectedDrink === "") {
        drinkResult.innerHTML = "";
        } else {
        drinkResult.innerHTML = `You selected: ${selectedDrink}. Great Choice!`;
        }
    }; 

    const addSticker = () => {
        const sticker = document.createElement("span");
        sticker.innerHTML = "😊";
        sticker.style.left = "30px";
        sticker.style.top = "30px";

    stickerContainer.append(sticker);

    }

   speechColumn.onclick = showSpeech;
   drinkSelect.onchange = showDrink;
   sun.onclick = addSticker;