const openbtn = document.querySelector("#openbtn");
const closebtn = document.querySelector("#closebtn");
const open = document.querySelector(".open");
const close = document.querySelector(".close");
const navMenu = document.querySelector(".nav-menu");

openbtn.addEventListener("click", () => {
    open.classList.toggle("dn");
    close.classList.toggle("show");
    navMenu.classList.toggle("show");
});

closebtn.addEventListener("click", () => {
    open.classList.toggle("dn");
    close.classList.toggle("show");
    navMenu.classList.toggle("show");
});