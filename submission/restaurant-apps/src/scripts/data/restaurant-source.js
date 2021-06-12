import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantSource {
  static async index() {
    const response = await fetch(API_ENDPOINT.INDEX);
    return response.json();
  }
}

export default RestaurantSource;
