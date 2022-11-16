import RestaurantSource from "../../data/restaurant-source";
import { createRestaurantItemTemplate } from "../templates/template-creator";

const Home = {
  async render() {
    return `
    <section class="content">
        <div class="restaurant">
          <h1 class="restaurant__label">Daftar Restaurant</h1>
             <div id="restaurants" class="posts">
        </div>
    </section>
    `;
  },

  async afterRender() {
    const resto = await RestaurantSource.listRestaurant();
    console.log(resto);
    const restaurantsContainer = document.querySelector("#restaurants");
    resto.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
