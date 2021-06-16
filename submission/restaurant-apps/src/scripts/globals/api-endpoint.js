import CONFIG from './config';

const { BASE_URL } = CONFIG;

const API_ENDPOINT = {
  INDEX: `${BASE_URL}/list`,
  SHOW: (id) => `${BASE_URL}/detail/${id}`,
  CREATE_REVIEW: `${BASE_URL}/review`,
};
export default API_ENDPOINT;
