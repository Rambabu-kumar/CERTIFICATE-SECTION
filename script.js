const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const caption = document.getElementById("caption");
const closeBtn = document.getElementById("close");

document.querySelectorAll(".card img").forEach((img) => {
  img.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImg.src = img.src;
    caption.innerText = img.alt;
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});