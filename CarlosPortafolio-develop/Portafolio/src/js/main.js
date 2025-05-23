console.log('Home JS cargado');

document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.querySelector(".gallery");
    const galleryItems = document.querySelectorAll(".gallery-item");

    galleryItems.forEach((item) => {
        item.addEventListener("mouseenter", () => {
            // Remover la clase 'active' de todos
            galleryItems.forEach((el) => el.classList.remove("active"));

            // Agregar 'active' al elemento actual
            item.classList.add("active");
            activeItem = item;
        });
    });

    // Cuando el mouse sale del carrusel, el primer elemento vuelve a expandirse
    gallery.addEventListener("mouseleave", () => {
        galleryItems.forEach((el) => el.classList.remove("active"));
        activeItem = galleryItems[0]; // Se restablece al primero
        activeItem.classList.add("active");
    });
});
