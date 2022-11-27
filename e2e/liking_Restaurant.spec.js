Feature('Liking restaurant');

Scenario('liking a restaurant', async ({ I }) => {
  I.amOnPage('/');
  I.seeElement('.post-item');
  I.seeElement('.post-item__title');
  I.click(locate('.post-item__title').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.posts');
  const likedRestoTitle = await I.grabTextFrom('.post-item__title');
  I.click(likedRestoTitle);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.posts');
  I.seeElement('.not-found');
  I.see('Belum ada restaurant favorit anda ...', '.empty');
});
