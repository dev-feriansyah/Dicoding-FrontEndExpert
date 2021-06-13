const DrawerInitiator = {
  init({ button, drawer }) {
    this._button = button;
    this._drawer = drawer;

    this._button.addEventListener('click', (event) => {
      this._toggleDrawer(event);
    });
  },

  closeDrawer() {
    this._drawer.classList.remove('nav-open');
    this._drawerAccessibility();
  },

  _toggleDrawer(event) {
    event.stopPropagation();
    this._drawer.classList.toggle('nav-open');
    this._drawerAccessibility();
  },

  _isOpen() {
    return this._drawer.classList.contains('nav-open');
  },

  _drawerAccessibility() {
    this._button.setAttribute('aria-expanded', this._isOpen());

    // If open, focus on first a tag on navigation
    if (this._isOpen()) {
      setTimeout(() => {
        this._drawer.querySelector('a').focus();
      }, 500);
    }
  },
};

export default DrawerInitiator;
