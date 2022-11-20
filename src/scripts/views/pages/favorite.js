import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate, loader, emptyData } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
      <section id="content" class="content">
          <div class="restaurant">
            <h1 class="restaurant__label">Restaurant Favorit</h1>
               <div id="restaurants" class="posts">
          </div>
          ${loader.show()}
      </section>
    `;
  },

  async afterRender() {
    const resto = await FavoriteRestaurantIdb.getAllRestaurant();
    const restaurantsContainer = document.querySelector('#restaurants');
    loader.hide();
    if (resto.length === 0) {
      restaurantsContainer.innerHTML = emptyData();
    } else {
      resto.forEach((restaurant) => {
        restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
    }
  },
};

export default Favorite;
