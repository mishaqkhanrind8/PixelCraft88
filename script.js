// Scroll effect
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 100) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Mobile menu toggle
function toggleMobileMenu() {
  const menu = document.getElementById("mobileMenu");
  menu.style.display = menu.style.display === "flex" ? "none" : "flex";
  menu.style.flexDirection = "column";
}

// Modal image display
function openModal(img) {
  const modal = document.getElementById("modal01");
  const modalImg = document.getElementById("img01");
  const caption = document.getElementById("caption");

  modal.style.display = "flex";
  modalImg.src = img.src;
  caption.innerText = img.alt;
}
document.getElementById("img01").src = clickedImg.src;
