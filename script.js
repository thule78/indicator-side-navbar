const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => {
    nav.classList.toggle("open");
});

navLinks.forEach((navLink) => {
    navLink.addEventListener("click", () => {
        nav.classList.toggle("open");
    })
});
