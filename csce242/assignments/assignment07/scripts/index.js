const carsContainer = document.getElementById("cars");

const colors = [
    "#5b8394",
    "#6c63b5",
    "#ed8a73",
    "#3b1175",
    "#b074c4",
    "#bde7f4"
];

const createCar = (color, x, y) => {

    const car = document.createElement("div");
    car.classList.add("car");

    car.style.backgroundColor = color;
    car.style.left = x + "px";
    car.style.top = y + "px";
    carsContainer.append(car);
};

const loadCars = () => {

    const numberOfCars = 7;
    for (let i = 0; i < numberOfCars; i++) {
        const randomColor =
            colors[Math.floor(Math.random() * colors.length)];

    const randomSpeed =
        Math.floor(Math.random() * 5) + 3;

        const randomX =
            Math.floor(Math.random() * (window.innerWidth - 100));

        const lane =
            Math.floor(Math.random() * 2);

        let randomY;

        if (lane === 0) {
            randomY = 15;
        } else {
            randomY = 78;
        }

        createCar(
            randomColor,
            randomX,
            randomY,
        );
    }
};

loadCars();