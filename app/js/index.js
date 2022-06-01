
const hamburger = document.querySelector("[data-hamburger]")
const hamburgerSpan = document.querySelectorAll("[data-hamburger-span]")
const menu = document.querySelector("[data-menu]")


hamburger.addEventListener("click", () => {
    menu.classList.toggle("show")
    hamburger.classList.toggle("not-active")
    hamburger.classList.toggle("active")
    hamburgerSpan.forEach(span => {
        span.classList.toggle("active")
    })
})
