const galleryItems = document.querySelectorAll(".gallery-item");
const modal = document.querySelector("#modal");
const modalImage = document.querySelector("#modal-image");

galleryItems.forEach((item) => {
    item.addEventListener("click", () => {
        modalImage.src = item.querySelector("img").src;
        modal.style.display = "block";
    });
});

modal.addEventListener("click", () => {
    modal.style.display = "none";
});
