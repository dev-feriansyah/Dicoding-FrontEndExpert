class AppFooter extends HTMLElement {
  constructor() {
    super();
    this._render();
  }

  _render() {
    this.innerHTML = `
    <footer>
        <p>Copyright © 2021 - Nongki.Id Apps</p>
    </footer>`;
  }
}

customElements.define('app-footer', AppFooter);
