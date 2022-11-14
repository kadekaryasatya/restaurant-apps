import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav__list");

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

hamburger.addEventListener("click", mobileMenu);

const navLink = document.querySelectorAll(".nav__item");

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

navLink.forEach((n) => n.addEventListener("click", closeMenu));
