const btnMenu = document.querySelector(".header__icon__menu");
const btnCloseMenu = document.querySelector(".header__item__list__close");
const headerItemsList = document.querySelectorAll(".header__item__list");

btnMenu.addEventListener("click", () => {
    const nav = document.querySelector(".header__list");
    nav.classList.add("header__list__active");
});

btnCloseMenu.addEventListener("click", () => {
    const nav = document.querySelector(".header__list");
    nav.classList.remove("header__list__active");
});

headerItemsList.forEach(element => {
    element.addEventListener("click", () => {
        const nav = document.querySelector(".header__list");
        nav.classList.remove("header__list__active");
    });
});
