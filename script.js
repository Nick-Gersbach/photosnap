const openMobileNav = document.querySelector(".open-menu");
const navMenu = document.querySelector(".nav-menu");

openMobileNav.addEventListener("click", openMobileNavNow);

function openMobileNavNow() {
  openMobileNav.classList.toggle("hide");
  navMenu.classList.toggle("show");
}
