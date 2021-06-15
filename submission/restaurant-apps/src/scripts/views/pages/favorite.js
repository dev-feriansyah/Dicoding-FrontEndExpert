import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

const Favorite = {
  async render() {
    return `
      <section class="content" id="nongki-container">
          <h2>Tempat <span class="text-primary">Nongki</span> Favorite</h2>
          <nongki-list></nongki-list>
      </section>
    `;
  },
  async afterRender() {
    const nongkisContainer = document.querySelector('nongki-list');
    const restaurants = await FavoriteRestaurantIdb.index();
    nongkisContainer.nongkis = restaurants;
  },
};

export default Favorite;
