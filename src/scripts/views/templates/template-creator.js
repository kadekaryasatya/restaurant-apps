import CONFIG from "../../global/config";

const createRestaurantDetailTemplate = (restaurant) => `
<h2 class="detail__title">${restaurant.name}</h2>
<div class="detail__header">
<img tabindex="0" class="detail__image" src="${CONFIG.BASE_IMAGE_URL_MD + restaurant.pictureId}" alt="${restaurant.name}" class="img__restaurant">
  <div class="detail__header-info">
    <p class="detail__item">Kota : ${restaurant.city}</p>
    <p class="detail__item">Alamat : ${restaurant.address}</p>
    <p class="detail__item">Rating : ⭐️${restaurant.rating}</p>
  </div>
</div>
  <div class="detail__info">
    <h3>Deskripsi</h3>
    <p>${restaurant.description}</p>
  </div>
  <div class="detail__categories">
    <div class="detail-food">
      <h3>Daftar Makanan :</h3>
      <p>${restaurant.menus.foods.map((food) => `<li>${food.name}</li>`).join("")}</p>
    </div>  
    <div class="detail-drink">
      <h3 class="detail__drink">Daftar Minuman:</h3>
      <p> ${restaurant.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join("")}</p>
     </div>
   </div>
  
  <h3 class="title-review">Review : </h3>
   <div class="detail__review">
       ${restaurant.customerReviews
         .map(
           (review) => `<div class="detail-review-item">
        <div class="review-header">
          <p class="review-name"><img src="/images/boy.png" alt="reviewer ${review.name}">&nbsp;${review.name}</p>
          <p class="review-date">${review.date}</p>
        </div>
       <div class="review-body">${review.review}
       </div>
    </div>`
         )
         .join("")}
  </div>`;

const createRestaurantItemTemplate = (restaurant) => `
<article class="post-item">
  <div class="post-item__header">
    <img class="post-item__thumbnail" src="${CONFIG.BASE_IMAGE_URL_MD + restaurant.pictureId}" alt="${restaurant.name}"/>
    <span class="post-item__rating"> ⭐️ ${restaurant.rating}</span>
  </div>
  <div class="post-item__content">
    <h1><a class="post-item__title" href="/#/detail/${restaurant.id}">${restaurant.name}</a></h1>
    <p class="post-item__city">Lokasi : ${restaurant.city}</p>
  </div>
</article> `;

export { createRestaurantItemTemplate, createRestaurantDetailTemplate };
