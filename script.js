
const reveals = document.querySelectorAll(
    ".project-card, .project-row, .about-card, .contact a"
);

function revealElements(){
    reveals.forEach(element=>{
        const windowHeight = window.innerHeight;
        const top = element.getBoundingClientRect().top;
        if(top < windowHeight - 100){
            element.classList.add("reveal");
            element.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealElements);
revealElements();

function redirectToProject(url) {
    window.open(url, "_blank");
}

const projectCards = document.querySelectorAll(".project-row, .project-card");
projectCards.forEach(card => {
    card.addEventListener("click", () => {
        const url = card.getAttribute("data-url");
        redirectToProject(url);
    });
});