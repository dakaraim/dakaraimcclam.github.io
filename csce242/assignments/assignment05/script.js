const speechColumn = document.getElementById("speech-column");
const speechBubble = document.getElementById("speech-bubble");

const showSpeech = () =>{
    speechBubble.classList.toggle("hidden");
};

const drinkSelect = document.getElementById("beverage");
const drinkResult = document.getElementById("drink-result");

const showDrink = () => {
    const selectedDrink = drinkSelect.value;
    if (selectedDrink === "") {
        drinkResult.innerHTML = "";
        } else {
        drinkResult.innerHTML = `You selected: ${selectedDrink} Great Choice!`;
        }
    }; 

    speechColumn.onclick = showSpeech;
    drinkSelect.onchange = showDrink;