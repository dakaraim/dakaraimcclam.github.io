const hofGrid = document.getElementById("hof-grid");

const playerModal = document.getElementById("player-modal");
const closePlayerModal = document.getElementById("close-player-modal");

const modalPlayerImage = document.getElementById("modal-player-image");
const modalPlayerName = document.getElementById("modal-player-name");
const modalPlayerNumber = document.getElementById("modal-player-number");
const modalPlayerPosition = document.getElementById("modal-player-position");
const modalPlayerYears = document.getElementById("modal-player-years");
const modalPlayerDescription = document.getElementById("modal-player-description");


const getHofMembers = async () => {

const url = "https://dakaraim.github.io/dakaraimcclam.github.io/csce242/Projects/CarolinaHuddle/json/hof.json";
    try {

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Could not load Hall of Fame members");
        }

        const members = await response.json();

        members.forEach((member) => {

            const card = document.createElement("article");
            card.classList.add("hof-card");

            card.innerHTML = `
                <div class="hof-number">
                    ${member.number}
                </div>

                <img src="${member.img_name}"
                     alt="${member.name}">

                <div class="hof-info">

                    <h3>
                        ${member.name.toUpperCase()}
                    </h3>

                    <p>
                        ${member.years}
                    </p>

                    <span>
                        ${member.position.toUpperCase()}
                    </span>

                </div>
            `;


            card.onclick = () => {

                modalPlayerImage.src = member.img_name;
                modalPlayerImage.alt = member.name;

                modalPlayerName.innerHTML = member.name;
                modalPlayerNumber.innerHTML = `#${member.number}`;
                modalPlayerPosition.innerHTML = member.position;
                modalPlayerYears.innerHTML = member.years;
                modalPlayerDescription.innerHTML = member.description;

                playerModal.classList.add("show");

            };


            hofGrid.append(card);

        });

    } catch (error) {

        console.log(error);

        hofGrid.innerHTML = `
            <p>Hall of Fame members could not be loaded.</p>
        `;

    }

};


closePlayerModal.onclick = () => {

    playerModal.classList.remove("show");

};


playerModal.onclick = (event) => {

    if (event.target === playerModal) {

        playerModal.classList.remove("show");

    }

};


getHofMembers();