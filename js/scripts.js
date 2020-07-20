const menuToggle = document.getElementById("menu-toggle");

function toggleMenu() {
  console.log("called toggleMenu");
  menuNav.classList.toggle("open");
}
menuToggle.addEventListener("click", toggleMenu);
const menuNav = document.getElementById("menu-nav");
