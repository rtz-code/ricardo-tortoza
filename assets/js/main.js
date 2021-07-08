window.addEventListener("scroll", e=>{
    const navbar = document.querySelector(".nav")
    navbar.classList.toggle("sticky", window.scrollY > 0)
})

let posicion = window.pageYOffset
const nav = document.querySelector(".nav")
window.addEventListener("scroll", ()=>{
    let desplazamiento = window.pageYOffset
    if (posicion >= desplazamiento) {
        nav.style.top = "0";
    } else {
        nav.style.top = "-70px";
    }
    posicion = desplazamiento
})

const loader = document.querySelector(".loading")
const page = document.querySelector(".body")

window.addEventListener("load",(e)=>{
    loader.classList.add("hidden")
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