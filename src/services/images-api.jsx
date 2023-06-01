import axios from 'axios';

import PropTypes from 'prop-types'

const BASE_URL = 'https://pixabay.com/api/';
const PERSONAL_KEY = '34737052-b22dcc77d23fc25c00a98711a';

axios.defaults.baseURL = `${BASE_URL}?key=${PERSONAL_KEY}&image_type=photo&orientation=horizontal`

export const imagesApi = async (search, page) => {
  try {
    const response = await axios.get(`&per_page=12&page=${page}&q=${search}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

imagesApi.propTypes = {
  search: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
}
