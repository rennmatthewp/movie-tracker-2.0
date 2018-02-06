import fetchApi from '../helper/api.js';

export const storeFilms= (films) => ({
  type: 'STORE_FILMS',
  films
})

export const fetchFilms = (api) => {
  type: 'FETCH_FILMS',
  api
}