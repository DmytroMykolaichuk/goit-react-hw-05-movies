import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '352708f90836dd2b75b209ae082e91df';

export async function fetchTrendMovies() {
  const res = await axios.get(`trending/all/day?api_key=${API_KEY}`);
  return res.data.results;
}

export async function fetchQueryMovies(query) {
  const res = await axios.get(
    `search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`
  );
  return res.data.results;
}

export async function fetchDetailsMovie(movieId) {
  const res = await axios.get(
    `movie/${movieId}?api_key=${API_KEY}&language=en-US&external_source=imdb_id`
  );
  return res.data;
}

export async function fetchCastMovie(movieId) {
  const res = await axios.get(`movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`);
  return res.data.cast;
}

export async function fetchReviewMovie(movieId) {
  const res = await axios.get(`movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`);
  return res.data.results;
}
