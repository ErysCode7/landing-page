const accordionBtn = document.querySelectorAll("[data-accordion-btn]")

accordionBtn.forEach(btn => {
    btn.addEventListener("click", (e) => {
        if (btn.classList.contains("click")) {
            btn.classList.remove("click")
        } else {
            btn.classList.add("click")
        }
    })
})