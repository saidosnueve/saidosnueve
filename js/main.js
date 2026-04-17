/* =====================================================
  PARTICLES BACKGROUND
===================================================== */

particlesJS('particles-js', {
    particles: {
        number: { value: 70, density: { enable: true, value_area: 700 } },
        color: { value: "#ffffff" },
        shape: { type: "circle" },
        opacity: { value: 1 },
        size: { value: 4, random: true },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: .9,
            width: 2
        },
        move: {
            enable: true,
            speed: 2,
            out_mode: "out",
            attract: { enable: true, rotateX: 600, rotateY: 1200 }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: { enable: true, mode: "grab" },
            onclick: { enable: true, mode: "push" },
            resize: true
        },
        modes: {
            grab: { distance: 200, line_linked: { opacity: .5 } },
            push: { particles_nb: 4 }
        }
    },
    retina_detect: true
});


/* =====================================================
   DOM ELEMENTS
===================================================== */

const hamburger = document.getElementById("hamburger");
const nav = document.querySelector("nav");


/* =====================================================
   HAMBURGER MENU
===================================================== */

if (hamburger && nav) {
    hamburger.addEventListener("click", () => {
        nav.classList.toggle("active");
        hamburger.classList.toggle("open");
        hamburger.textContent = nav.classList.contains("active") ? "✕" : "☰";
    });
}


/* =====================================================
   CLOSE MENU ON LINK CLICK + PAGE FADE
===================================================== */

document.querySelectorAll("nav a, header h1 a").forEach(link => {
    link.addEventListener("click", function (e) {

        e.preventDefault();

        nav.classList.remove("active");
        hamburger.classList.remove("open");
        hamburger.textContent = "☰";

        document.body.classList.add("fade-out");

        setTimeout(() => {
            window.location.href = this.href;
        }, 400);

    });
});


/* =====================================================
   RESPONSIVE RESET
===================================================== */

window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
        nav.classList.remove("active");
        hamburger.classList.remove("open");
        hamburger.textContent = "☰";
    }
});