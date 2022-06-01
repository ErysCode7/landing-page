import * as intersection from "./intersection-observer.js"; 
import * as accordion from "./accordion.js";

const hamburger = document.querySelector("[data-hamburger]")
const menu = document.querySelector("[data-menu]")


hamburger.addEventListener("click", () => {
    menu.classList.toggle("show")
})