import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav__list");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav__item");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}
