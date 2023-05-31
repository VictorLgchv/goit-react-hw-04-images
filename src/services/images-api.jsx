import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const PERSONAL_KEY = '34737052-b22dcc77d23fc25c00a98711a';

export default function ImagesApi(search, page) {
  return axios({
    url: BASE_URL,
    params: {
      key: PERSONAL_KEY,
      q: search,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
      page: page,
    },
  });
}
