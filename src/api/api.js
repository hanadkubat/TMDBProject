import Request from './request';

const API_KEY = '20150557222f81836a438916efd1fc1c';
const BASE_URL = 'https://api.themoviedb.org/3';

const get = (url, body = {}, headers = {}) => new Request('get', url, body, headers);

export const movies = {
    getTopRated : () => get(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}`).execute().then(res => res.json()),
    searchMovies : (query) => get(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`).execute().then(res => res.json()),
}

export const tvShows = {
    getTopRated : () => get(`${BASE_URL}/tv/top_rated?api_key=${API_KEY}`).execute().then(res => res.json()),
    searchTV : (query) => get(`${BASE_URL}/search/tv?api_key=${API_KEY}&query=${query}`).execute().then(res => res.json()),
}

export const getDetails = (category, id) => get(`${BASE_URL}/${category}/${id}?api_key=${API_KEY}&append_to_response=videos`).execute().then(res => res.json());