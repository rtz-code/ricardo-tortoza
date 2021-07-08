const botonHamburgesa = document.querySelector("#hamburger button")
const menuResponsive = document.querySelector(".menu")

botonHamburgesa.addEventListener("click", e =>{
    botonHamburgesa.classList.toggle("open")
    menuResponsive.classList.toggle("show-menu")
})

const loader = document.querySelector(".loading")
const page = document.querySelector(".body")

window.addEventListener("load",(e)=>{
    loader.classList.add("remover")
    page.classList.remove("overflow")

    // Trancisiones

        window.sr = ScrollReveal();

            sr.reveal(".nav", {
                duration: 3000,
                origin: "bottom",
                distance: "-100%"
            });
            sr.reveal(".reveal-right", {
                duration: 3000,
                origin: "right",
                distance: "-70px"
            });
            sr.reveal(".reveal-left", {
                duration: 3000,
                origin: "left",
                distance: "-70px"
            });
            sr.reveal(".section__title", {
                duration: 3000,
                origin: "top",
                distance: "-70px"
            });
            sr.reveal(".reveal-top", {
                duration: 3000,
                origin: "top",
                distance: "-70px"
            });
            sr.reveal(".reveal-bottom", {
                duration: 3000,
                origin: "bottom",
                distance: "-70px"
            });
})

const secciones = document.querySelectorAll(".section")
const menuItems = document.querySelectorAll(".item__link")

const functionObserver = entries =>{
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const itemsActual = Array.from(menuItems).find(item => item.dataset.url === entry.target.id)
            itemsActual.classList.add("link--")
            for (const item of menuItems) {
                if (item != itemsActual) {
                    item.classList.remove("link--")
                }
            }
        }
    })

}

const observer = new IntersectionObserver(functionObserver, {
    root: null,
    rootMargin: "0px",
    threshold: 0.8
})

secciones.forEach(seccion => observer.observe(seccion))