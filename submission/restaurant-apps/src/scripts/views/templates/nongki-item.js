import CONFIG from '../../globals/config';

const { BASE_IMAGE_URL } = CONFIG;

class NongkiItem extends HTMLElement {
  set nongki(nongki) {
    this._nongki = nongki;
    this._render();
  }

  _render() {
    this.innerHTML = `
    <img src="${BASE_IMAGE_URL}/small/${this._nongki.pictureId}" alt="${this._nongki.name}">
    <span>Kota ${this._nongki.city}</span>
    <div>
        <h3><a href="#/detail/${this._nongki.id}">${this._nongki.name}</a></h3>
        <div class="stars" style="--rating: ${this._nongki.rating};" role="img" aria-label="Rating tempat adalah ${this._nongki.rating} dari 5"></div>
        <p>${this._nongki.description}</p>
    </div>
  `;
  }
}

customElements.define('nongki-item', NongkiItem);
