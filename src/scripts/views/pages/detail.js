import UrlParser from "../../routes/url-parser";
import RestaurantSource from "../../data/restaurant-source";
import { createRestaurantDetailTemplate } from "../templates/template-creator";

const Detail = {
  async render() {
    return `
    <section class="content">
       <div id="detail" class="detail"></div>
    </section>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await RestaurantSource.detailRestaurant(url.id);
    console.log(resto);
    const detail = document.querySelector("#detail");
    detail.innerHTML = createRestaurantDetailTemplate(resto);
  },
};

export default Detail;
