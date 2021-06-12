class NongkiList extends HTMLElement {
  set nongkis(nongkis) {
    this._nongkis = nongkis;
    this._render();
  }

  _render() {
    this._nongkis.forEach((nongki) => {
      const nongkisItemElement = document.createElement('nongki-item');
      nongkisItemElement.nongki = nongki;
      this.appendChild(nongkisItemElement);
    });
  }
}

customElements.define('nongki-list', NongkiList);
