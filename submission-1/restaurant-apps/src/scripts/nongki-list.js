import './nongki-item'

class NongkiList extends HTMLElement {
 set nongkis(nongkis) {
   this._nongkis = nongkis;
   this.render();
 }
 
 
 render() {
   this._nongkis.forEach(nongki => {
     const nongkisItemElement = document.createElement('nongki-item');
     nongkisItemElement.nongki = nongki;
     this.appendChild(nongkisItemElement);
   })
 }
}
 
customElements.define("nongki-list", NongkiList);