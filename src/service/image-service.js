import axios from 'axios';

const API_KEY = '563492ad6f91700001000001639cabac73c74accb94b7bf7858095a0';
axios.defaults.baseURL = 'https://api.pexels.com/v1';
axios.defaults.headers.common['Authorization'] = API_KEY;

export const getImages = async (query, page) => {
  const params = {
    query,
    page,
    orientation: 'landscape',
    per_page: 15,
  };

  const { data } = await axios.get('/search', { params });

  const normalizedImages = data.photos.map(({ id, alt, src }) => ({
    id,
    alt,
    src: src.medium,
  }));

  const totalPages = Math.ceil(data.total_results / params.per_page);

  return {
    photos: normalizedImages,
    totalPages,
  };
};
