import UrlParser from "../../routes/url-parser";
import RestaurantSource from "../../data/restaurant-source";
import { createRestaurantDetailTemplate, loader } from "../templates/template-creator";
import LikeButtonInitiator from "../../utils/like-button-initiator";

const Detail = {
  async render() {
    return `
    <section class="content">
       <div id="detail" class="detail"></div>
       <div id="likeButtonContainer"></div>
       ${loader.show()}
       <div class="back-button"> <a class="back" href="#/home">List Restaurants</a></div>
    </section>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detailRestaurant(url.id);
    const detail = document.querySelector("#detail");
    detail.innerHTML = createRestaurantDetailTemplate(restaurant);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector("#likeButtonContainer"),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        pictureId: restaurant.pictureId,
        rating: restaurant.rating,
        address: restaurant.address,
        city: restaurant.city,
        menus: restaurant.menus,
        categories: restaurant.categories,
        customerReviews: restaurant.customerReviews,
      },
    });
    loader.hide();
  },
};

export default Detail;
