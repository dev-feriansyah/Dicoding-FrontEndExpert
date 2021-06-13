import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';

const Detail = {
  async render() {
    return `
      <section class="content">
          <nongki-detail></nongki-detail>
      </section>
    `;
  },
  async afterRender() {
    const nongkiDetailContainer = document.querySelector('nongki-detail');
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const response = await RestaurantSource.show(url.id);
    nongkiDetailContainer.nongki = response.restaurant;
  },
};

export default Detail;
