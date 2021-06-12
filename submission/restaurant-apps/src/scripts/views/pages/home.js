import RestaurantSource from '../../data/restaurant-source';

const Home = {
  async render() {
    return `
      <div class="hero">
          <div class="hero__inner">
              <h2 class="hero__title">Cari tempat nongki andalan Anda dengan mudah</h2>
              <p class="hero__tagline">Kumpulan tempat nongki yang ada di Indonesia</p>
          </div>
      </div>
      <section class="content" id="nongki-container">
          <h2>Tempat <span class="text-primary">Nongki</span></h2>
          <nongki-list></nongki-list>
      </section>
    `;
  },
  async afterRender() {
    const nongkisContainer = document.querySelector('nongki-list');
    const response = await RestaurantSource.index();
    nongkisContainer.nongkis = response.restaurants;
  },
};

export default Home;
