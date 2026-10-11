const dropdownHeaders = document.querySelectorAll(".dropdown-header");

dropdownHeaders.forEach((header) => {

    header.onclick = () => {

        const links = header.nextElementSibling;
        const arrow = header.querySelector(".dropdown-arrow");

        links.classList.toggle("show");

        if (links.classList.contains("show")) {
            arrow.innerHTML = "▲";
        } else {
            arrow.innerHTML = "▼";
        }
    };

});