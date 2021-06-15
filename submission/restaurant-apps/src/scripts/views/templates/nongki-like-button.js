import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

class NongkiLikeButton extends HTMLElement {
  set nongki(nongki) {
    this._nongki = nongki;
    this._render();
  }

  async _isRestaurantExist() {
    const restaurant = await FavoriteRestaurantIdb.findById(this._nongki.id);
    return !!restaurant;
  }

  async _render() {
    const { id } = this._nongki;

    if (await this._isRestaurantExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  }

  _renderLike() {
    this.innerHTML = `
    <button aria-label="Sukai tempat nongki" class="like" id="like-button">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    </button>`;

    const likeButton = document.querySelector('#like-button');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.update(this._nongki);
      this._render();
    });
  }

  _renderLiked() {
    this.innerHTML = `
    <button aria-label="Sukai tempat nongki" class="like" id="like-button">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
      </svg>
    </button>`;

    const likeButton = document.querySelector('#like-button');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.destroyById(this._nongki.id);
      this._render();
    });
  }
}

customElements.define('nongki-like-button', NongkiLikeButton);
