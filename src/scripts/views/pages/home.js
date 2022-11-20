import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate, loader, notFoundData } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <div class="hero">
      <div class="hero__inner">
        <h1 class="hero__title">Selamat Datang di Umah <span>Makan</span></h1>
        <p class="hero__tagline">Kumpulan Restaurant terbaik di Indonesia</p>
      </div>
    </div>
    <section class="content" id="/content">
        <div class="restaurant">
          <h1 class="restaurant__label">Daftar Restaurant</h1>
             <div id="restaurants" class="posts">
        </div>
      ${loader.show()}
    </section>
    `;
  },

  async afterRender() {
    const resto = await RestaurantSource.listRestaurant();
    const restaurantsContainer = document.querySelector('#restaurants');

    if (resto.error) {
      restaurantsContainer.innerHTML = notFoundData();
    } else {
      resto.forEach((restaurant) => {
        restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
      loader.hide();
    }
  },
};

export default Home;
