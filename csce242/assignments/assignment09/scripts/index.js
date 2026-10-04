class Vacation {

    constructor(title, type, description, thingsToDo, image, mapSrc) {
        this.title = title;
        this.type = type;
        this.description = description;
        this.thingsToDo = thingsToDo;
        this.image = image;
        this.mapSrc = mapSrc;
    }

    getCard() {
        const section = document.createElement("section");
        section.classList.add("vacation-card");

        section.innerHTML = `
            <h3>${this.title}</h3>
            <p>${this.type} Vacation</p>
            <img src="${this.image}" alt="${this.title}">
        `;

        section.onclick = () => {
            this.showModal();
        };

        return section;
    }

    showModal() {
        document.getElementById("modal-title").textContent = this.title;
        document.getElementById("modal-type").textContent = this.type;
        document.getElementById("modal-description").textContent = this.description;
        document.getElementById("modal-things").textContent = this.thingsToDo;
        document.getElementById("modal-map").innerHTML = `
            <iframe
                src="${this.mapSrc}"
                loading="lazy"
                allowfullscreen>
            </iframe>
        `;
        document.getElementById("vacation-modal").classList.remove("hidden");
    }
}
const vacations = [

    new Vacation(
        "Gatlinburg",
        "Mountain",
        "A popular mountain town located next to the Great Smoky Mountains.",
        "Hike in the Smoky Mountains, visit downtown Gatlinburg, and ride the mountain coaster.",
        "images/gatlinburg.jpg",
        "https://www.google.com/maps?q=Gatlinburg,TN&output=embed"
    ),

    new Vacation(
        "Blowing Rock",
        "Mountain",
        "A small North Carolina mountain town known for scenic views and outdoor activities.",
        "Visit The Blowing Rock, hike nearby trails, and explore downtown.",
        "images/blowingrock.jpg",
        "https://www.google.com/maps?q=Blowing+Rock,NC&output=embed"
    ),

    new Vacation(
        "Chimney Rock",
        "Mountain",
        "A scenic mountain destination in North Carolina with impressive views.",
        "Hike Chimney Rock, visit the waterfall, and explore Chimney Rock Village.",
        "images/chimneyrock.jpg",
        "https://www.google.com/maps?q=Chimney+Rock,NC&output=embed"
    ),

    new Vacation(
        "Helen",
        "Mountain",
        "A small Georgia mountain town designed with a unique Bavarian style.",
        "Explore downtown Helen, hike nearby trails, and visit Anna Ruby Falls.",
        "images/helen.jpg",
        "https://www.google.com/maps?q=Helen,GA&output=embed"
    ),

    new Vacation(
        "Folly Beach",
        "Beach",
        "A popular South Carolina beach located near Charleston.",
        "Relax on the beach, visit the pier, surf, and explore local restaurants.",
        "images/follybeach.jpg",
        "https://www.google.com/maps?q=Folly+Beach,SC&output=embed"
    ),

    new Vacation(
        "Hilton Head Island",
        "Beach",
        "A South Carolina island known for beaches, golf courses, and resorts.",
        "Swim at the beach, ride bikes, play golf, and visit Harbour Town.",
        "images/hiltonhead.jpg",
        "https://www.google.com/maps?q=Hilton+Head+Island,SC&output=embed"
    ),

    new Vacation(
        "Tybee Island",
        "Beach",
        "A Georgia barrier island with sandy beaches and historic attractions.",
        "Visit the lighthouse, swim, fish, and explore the island.",
        "images/tybeeisland.jpg",
        "https://www.google.com/maps?q=Tybee+Island,GA&output=embed"
    ),

    new Vacation(
        "Wrightsville Beach",
        "Beach",
        "A North Carolina coastal destination known for clear water and water sports.",
        "Go swimming, paddleboarding, surfing, and walk along the beach.",
        "images/wrightsville.jpg",
        "https://www.google.com/maps?q=Wrightsville+Beach,NC&output=embed"
    )

];


const vacationGallery = document.getElementById("vacation-gallery");
const displayVacations = () => {

    vacations.forEach((vacation) => {
        vacationGallery.append(vacation.getCard());
    });

};


const closeModal = () => {
    document
        .getElementById("vacation-modal")
        .classList.add("hidden");

};


document.getElementById("close-modal").onclick = closeModal;
document.getElementById("vacation-modal").onclick = (event) => {

    if (event.target.id === "vacation-modal") {
        closeModal();
    }

};

displayVacations();