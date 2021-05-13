class NongkiItem extends HTMLElement {
 set nongki(nongki) {
   this._nongki = nongki;
   this.render();
 }
 
 
 render() {
   this.innerHTML = `
    <img src="${this._nongki.pictureId}" alt="Gambar tempat: ${this._nongki.name}">
    <span>Kota ${this._nongki.city}</span>
    <div>
        <h3>${this._nongki.name}</h3>
        <div class="stars" style="--rating: ${this._nongki.rating};" role="img" aria-label="Rating tempat adalah ${this._nongki.rating} dari 5"></div>
        <p>${this.trim(this._nongki.description)}</p>
    </div>
  `;
 }

 trim(description) {
     return description.trim().substr(0, 200) + '...';
 }
}
 
 
customElements.define("nongki-item", NongkiItem);