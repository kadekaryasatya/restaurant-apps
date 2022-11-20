// const hamburger = document.querySelector(".hamburger");
// const navMenu = document.querySelector(".nav__list");

// function mobileMenu() {
//   hamburger.classList.toggle("active");
//   navMenu.classList.toggle("active");
// }

// hamburger.addEventListener("click", mobileMenu);

// const navLink = document.querySelectorAll(".nav__item");

// function closeMenu() {
//   hamburger.classList.remove("active");
//   navMenu.classList.remove("active");
// }

// navLink.forEach((n) => n.addEventListener("click", closeMenu));

const DrawerInitiator = {
  init({ button, drawer, content }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer, button);
    });

    drawer.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer, button);
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer, button);
    });
  },

  _toggleDrawer(event, drawer, button) {
    event.stopPropagation();
    drawer.classList.toggle('active');
    button.classList.toggle('active');
  },

  _closeDrawer(event, drawer, button) {
    event.stopPropagation();
    drawer.classList.remove('active');
    button.classList.remove('active');
  },
};

export default DrawerInitiator;
