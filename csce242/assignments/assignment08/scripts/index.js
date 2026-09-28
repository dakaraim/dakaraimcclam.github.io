const mountains = {
    "Grandfather Mountain": "https://www.google.com/maps?q=Grandfather+Mountain,NC&output=embed",
    "Mount Mitchell": "https://www.google.com/maps?q=Mount+Mitchell,NC&output=embed",
    "Chimney Rock": "https://www.google.com/maps?q=Chimney+Rock,NC&output=embed",
    "Great Smoky Mountains": "https://www.google.com/maps?q=Great+Smoky+Mountains,TN&output=embed"
};

const beaches = {
    "Myrtle Beach": "https://www.google.com/maps?q=Myrtle+Beach,SC&output=embed",
    "Hilton Head": "https://www.google.com/maps?q=Hilton+Head,SC&output=embed",
    "Folly Beach": "https://www.google.com/maps?q=Folly+Beach,SC&output=embed",
    "Isle of Palms": "https://www.google.com/maps?q=Isle+of+Palms,SC&output=embed"
};


const destinationType = document.getElementById("destination-type");
const destinationList = document.getElementById("destination-list");
const mapContainer = document.getElementById("map-container");
const destinationMap = document.getElementById("destination-map");


const showMap = (mapURL) => {
    destinationMap.src = mapURL;
    mapContainer.classList.remove("hidden");
};


const showDestinations = () => {

    destinationList.innerHTML = "";
    destinationMap.src = "";
    mapContainer.classList.add("hidden");

    let destinations;
    if (destinationType.value === "mountains") {
        destinations = mountains;
    } 
    else if (destinationType.value === "beaches") {
        destinations = beaches;
    } 
    else {
        return;
    }

    for (const destination in destinations) {

        const link = document.createElement("a");
        link.innerHTML = destination;
        link.href = "#";
        link.classList.add("destination-link");

        link.onclick = (event) => {
         event.preventDefault();
            showMap(destinations[destination]);
        };
        destinationList.appendChild(link);
    }
};

destinationType.onchange = showDestinations;