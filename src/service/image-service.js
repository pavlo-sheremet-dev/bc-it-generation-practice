import axios from 'axios';

const API_KEY = '563492ad6f91700001000001639cabac73c74accb94b7bf7858095a0';
axios.defaults.baseURL = 'https://api.pexels.com/v1/';
axios.defaults.headers.common['Authorization'] = API_KEY;
axios.defaults.params = {
  orientation: 'landscape',
  per_page: 15,
};

export const getImages = async (query, page) => {
  const response = await axios.get(
    `https://api.pexels.com/v1/search?query=${query}&per_page=${page}`
  );
  return {
    photos: response.data.photos,
    totalPhotos: response.data.total_results,
  };
};
