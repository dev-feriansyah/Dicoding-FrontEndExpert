import RestaurantSource from '../../data/restaurant-source';

class AddReviewForm extends HTMLElement {
  constructor() {
    super();
    this._render();

    const formElement = this.querySelector('form');
    formElement.addEventListener('submit', (event) => {
      this._addReview(event);
    });
  }

  async _addReview(event) {
    event.preventDefault();
    const response = await RestaurantSource.createReview({
      id: this.dataset.restaurantId,
      name: event.target.name.value,
      review: event.target.review.value,
    });
    const { customerReviews } = response;
    const nongkiDetailElement = document.querySelector('nongki-detail');
    nongkiDetailElement.reviews = customerReviews;
  }

  _render() {
    this.innerHTML = `
      <form>
        <h4>Tambah Review</h4>
        <label for="name">
          <span>Nama</span>
          <input id="name" name="name" type="text" placeholder="Nama anda"/>
        </label>
        <label for="review">
          <span>Review</span>
          <textarea id="review" name="review" placeholder="Review anda"></textarea>
        </label>
        <button type="submit">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" title="Icon Pensil">
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
            </span>
            Tulis Review
        </button>
      </form>
    `;
  }
}

customElements.define('add-review-form', AddReviewForm);
