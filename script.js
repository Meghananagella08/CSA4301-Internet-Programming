// ===============================
// Web Standards Portal
// ===============================

// Highlight the active page in the navigation bar
const currentPage = window.location.pathname.split("/").pop();

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
    }
});

// Registration Form
const registerForm = document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", function (event) {

        // Prevent actual form submission
        event.preventDefault();

        // Redirect to the next page
        window.location.href = "video.html";

    });

}

// Smooth scrolling (if needed)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});

// Button hover animation
const buttons = document.querySelectorAll(".start-btn");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {
        button.style.transform = "scale(1.05)";
    });

    button.addEventListener("mouseleave", () => {
        button.style.transform = "scale(1)";
    });

});

// Fade-in animation
const cards = document.querySelectorAll(
    ".hero-content, .register-card, .video-card, .xml-card, .protocol-card"
);

cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";

    setTimeout(() => {
        card.style.transition = "all 0.8s ease";
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
    }, 200);

});