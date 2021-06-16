import API_ENDPOINT from '../globals/api-endpoint';
import CONFIG from '../globals/config';

class RestaurantSource {
  static async index() {
    const response = await fetch(API_ENDPOINT.INDEX);
    return response.json();
  }

  static async show(id) {
    const response = await fetch(API_ENDPOINT.SHOW(id));
    return response.json();
  }

  static async createReview({ id, name, review }) {
    const response = await fetch(API_ENDPOINT.CREATE_REVIEW, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': CONFIG.API_KEY,
      },
      body: JSON.stringify({ id, name, review }),
    });
    return response.json();
  }
}

export default RestaurantSource;
