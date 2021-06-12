// import RestaurantSource from '../../data/restaurant-source';

const Detail = {
  async render() {
    return `
      <section class="content" id="nongki-container">
          <h2>Detail <span class="text-primary">Nongki</span></h2>
      </section>
    `;
  },
  async afterRender() {
    // const nongkisContainer = document.querySelector('nongki-list');
    // const response = await RestaurantSource.index();
    // nongkisContainer.nongkis = response.restaurants;
  },
};

export default Detail;
