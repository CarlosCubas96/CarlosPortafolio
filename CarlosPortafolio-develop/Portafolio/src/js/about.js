console.log('About JS cargado');


const container = document.querySelector(".main-proyect");
const sections = container.querySelectorAll("section");
const navLinks = document.querySelectorAll(".sidebar-menu li a");

function activateMenu() {
    let index = sections.length;
    while (--index && container.scrollTop + 100 < sections[index].offsetTop) { }

    navLinks.forEach(link => link.classList.remove("active"));
    if (navLinks[index]) navLinks[index].classList.add("active");
}

container.addEventListener("scroll", activateMenu);
window.addEventListener("load", activateMenu);

navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").slice(1);
        const target = document.getElementById(targetId);
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".main-proyect");
    const sections = container.querySelectorAll(".section");
    const menuItems = document.querySelectorAll(".sidebar-menu li a");
    const indicator = document.querySelector(".sidebar-indicator");
    const sidebar = document.querySelector(".sidebar");

    function updateIndicator() {
        let currentIndex = 0;

        sections.forEach((section, index) => {
            const rect = section.getBoundingClientRect();
            const containerRect = container.getBoundingClientRect();
            const top = rect.top - containerRect.top;

            if (
                top <= container.clientHeight / 2 &&
                top + rect.height >= container.clientHeight / 2
            ) {
                currentIndex = index;
            }
        });

        const activeLink = menuItems[currentIndex];
        const linkRect = activeLink.getBoundingClientRect();
        const sidebarRect = sidebar.getBoundingClientRect();

        indicator.style.top = `${linkRect.top - sidebarRect.top + linkRect.height / 2 - 20}px`;

        menuItems.forEach(item => item.classList.remove("active"));
        activeLink.classList.add("active");
    }

    container.addEventListener("scroll", updateIndicator);
    window.addEventListener("resize", updateIndicator);
    updateIndicator();
});





