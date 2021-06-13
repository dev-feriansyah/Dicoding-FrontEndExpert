import CONFIG from './config';

const { BASE_URL } = CONFIG;

const API_ENDPOINT = {
  INDEX: `${BASE_URL}/list`,
  SHOW: (id) => `${BASE_URL}/detail/${id}`,
};
export default API_ENDPOINT;
