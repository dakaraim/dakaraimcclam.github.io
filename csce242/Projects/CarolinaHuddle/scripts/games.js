const viewScheduleButton = document.getElementById("view-schedule-button");
const extraGames = document.querySelectorAll(".extra-game");

if (viewScheduleButton) {

    viewScheduleButton.onclick = () => {

        extraGames.forEach((game) => {
            game.classList.toggle("show");
        });

        if (viewScheduleButton.innerHTML.includes("FULL")) {
            viewScheduleButton.innerHTML = "SHOW LESS ↑";
        } else {
            viewScheduleButton.innerHTML = "VIEW FULL SCHEDULE →";
        }

    };

}