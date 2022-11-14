import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";
import App from "./views/app";

const app = new App({
  button: document.querySelector(".hamburger"),
  drawer: document.querySelector(".nav__list"),
  content: document.querySelector("#mainContent"),
});

window.addEventListener("hashchange", () => {
  app.renderPage();
});

window.addEventListener("load", () => {
  app.renderPage();
});
