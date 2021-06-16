class AppHeader extends HTMLElement {
  constructor() {
    super();
    this._render();
    this._button = this.querySelector('#navigation-btn');
    this._drawer = this.querySelector('#navigation');

    this._button.addEventListener('click', (event) => {
      this._toggleDrawer(event);
    });
  }

  closeDrawer() {
    this._drawer.classList.remove('nav-open');
    this._drawerAccessibility();
  }

  _toggleDrawer(event) {
    event.stopPropagation();
    this._drawer.classList.toggle('nav-open');
    this._drawerAccessibility();
  }

  _isOpen() {
    return this._drawer.classList.contains('nav-open');
  }

  _drawerAccessibility() {
    this._button.setAttribute('aria-expanded', this._isOpen());

    // If open, focus on first a tag on navigation
    if (this._isOpen()) {
      setTimeout(() => {
        this._drawer.querySelector('a').focus();
      }, 500);
    }
  }

  _render() {
    this.innerHTML = `
    <header class="header">
        <div class="header__container">
            <h1 class="header__title">
                <a href="#/">
                    <span class="text-primary">Nongki</span>.Id
                </a>
            </h1>
            <button type="button" class="nav-btn" aria-label="Tombol Navigasi" aria-expanded="false" id="navigation-btn"
                aria-haspopup="true">
                <span></span>
            </button>
            <nav class="nav" id="navigation" aria-label="Navigasi">
                <header>
                    <h2 class="nav__title">Navigasi</h2>
                </header>
                <ul class="nav__list">
                    <li><a href="#/">Home</a></li>
                    <li><a href="#/favorite">Favorite</a></li>
                    <li><a href="https://github.com/dev-feriansyah">About Us</a></li>
                </ul>
            </nav>
        </div>
    </header>`;
  }
}

customElements.define('app-header', AppHeader);
