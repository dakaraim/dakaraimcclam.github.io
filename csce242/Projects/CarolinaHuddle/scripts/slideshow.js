const heroImage = document.getElementById("hero-image");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

const heroImages = [
    "images/hero.png",
    "images/hero2.png",
    "images/hero3.png"
];

let currentImage = 0;

const showHeroImage = () => {
    heroImage.src = heroImages[currentImage];
};

rightArrow.onclick = () => {

    currentImage++;

    if (currentImage >= heroImages.length) {
        currentImage = 0;
    }

    showHeroImage();
};

leftArrow.onclick = () => {

    currentImage--;
    if (currentImage < 0) {
        currentImage = heroImages.length - 1;
    }

    showHeroImage();
};