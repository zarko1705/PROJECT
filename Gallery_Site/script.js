const galleryItem = document.querySelectorAll(".gallery-item");
const modal = document.querySelector("#modal");
const modalImage = document.querySelector("#modal-image");

galleryItem.forEach((item) => {
    item.addEventListener("click", () => {
        modalImage.src = item.querySelector("img").src;
        modal.style.displey = "block";
    });
});

modal.addEventListener("click", () => {
    modal.style.display = "none";
});
