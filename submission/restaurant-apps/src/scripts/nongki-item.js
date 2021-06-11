class NongkiItem extends HTMLElement {
  set nongki(nongki) {
    this._nongki = nongki;
    this.render();
  }

  render() {
    this.innerHTML = `
    <img src="${this._nongki.pictureId}" alt="${this._nongki.name}">
    <span>Kota ${this._nongki.city}</span>
    <div>
        <h3><a href="#${this._nongki.name}">${this._nongki.name}</a></h3>
        <div class="stars" style="--rating: ${this._nongki.rating};" role="img" aria-label="Rating tempat adalah ${this._nongki.rating} dari 5"></div>
        <p>${this._nongki.description}</p>
    </div>
  `;
  }
}

customElements.define('nongki-item', NongkiItem);
