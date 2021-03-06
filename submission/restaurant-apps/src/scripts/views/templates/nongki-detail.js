import CONFIG from '../../globals/config';

const { BASE_IMAGE_URL } = CONFIG;

class NongkiDetail extends HTMLElement {
  set nongki(nongki) {
    this._nongki = nongki;
    this._render();
  }

  set reviews(reviews) {
    this.querySelector('#reviews').remove();
    this.innerHTML += this._renderReviews(reviews);
    this._sendDataToLikeButton();
  }

  _render() {
    this.innerHTML = `
      <figure>
        <img src="${BASE_IMAGE_URL}/large/${this._nongki.pictureId}" alt="${this._nongki.name}">
        <nongki-like-button></nongki-like-button>
      </figure>
      <div class="nongki-detail__header">
        <div>
          <h2>${this._nongki.name}</h2>
          <span>Kota ${this._nongki.city}, ${this._nongki.address}</span>
        </div>
        <div class="stars" style="--rating: ${this._nongki.rating};" role="img" aria-label="Rating tempat adalah ${this._nongki.rating} dari 5"></div>
      </div>
      ${this._renderCategory()}
      <div>
          <h3>Deskripsi</h3>
          <p class="text-gray">${this._nongki.description}</p>
      </div>
      ${this._renderMenu()}
      ${this._renderReviews(this._nongki.customerReviews)}
    `;
    this._sendDataToLikeButton();
  }

  _sendDataToLikeButton() {
    const likeButtonElement = this.querySelector('nongki-like-button');
    likeButtonElement.nongki = {
      id: this._nongki.id,
      name: this._nongki.name,
      city: this._nongki.city,
      pictureId: this._nongki.pictureId,
      rating: this._nongki.rating,
      description: this._nongki.description,
    };
  }

  _renderCategory() {
    const categoryList = this._nongki.categories
      .map((category) => `<span role="listitem">${category.name}</span>`)
      .join('');
    return `
      <div class="nongki-detail__category" role="list">
        <h3 class="sr-only">Kategori</h3>
        ${categoryList}
      </div>`;
  }

  _renderMenu() {
    const foodList = this._nongki.menus.foods
      .map((food) => `<li>${food.name}</li>`)
      .join('');
    const drinkList = this._nongki.menus.drinks
      .map((drink) => `<li>${drink.name}</li>`)
      .join('');
    return `
      <div class="nongki-detail__menu">
        <h3>Menu</h3>
        <div>
          <h4>Makanan</h4>
          <ul>
            ${foodList}
          </ul>
        </div>
        <div>
          <h4>Minuman</h4>
          <ul>
            ${drinkList}
          </ul>
        </div>
      </div>
    `;
  }

  _renderReviews(reviews) {
    const reviewList = reviews
      .reverse()
      .map(
        (review) => `
        <li class="nongki-detail__review">
          <span class="nongki-detail__review__title">${review.name}</span>
          <span class="nongki-detail__review__date">${review.date}</span>
          <p>${review.review}</p>
        </li>
      `,
      )
      .join('');
    return `
      <div id="reviews">
          <div>
            <h3>Review</h3>
          </div>
          <div class="nongki-detail__reviews">
            <add-review-form data-restaurant-id="${this._nongki.id}"></add-review-form>
            <div>
              <h4 class="sr-only">List Review</h4>
              <ul>
                ${reviewList}
              </ul>
            </div>
          </div>
      </div>
    `;
  }
}
customElements.define('nongki-detail', NongkiDetail);
