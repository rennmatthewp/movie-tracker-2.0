import { key } from './.api-key'

export const fetchApi = async (url) => {
  const initalFetch = await fetch(url);
  const fetchedFilms = await initalFetch.json();
  const { results } = fetchedFilms;
  return cleaner(results);
}

const cleaner = (films) => {
  console.log(films)
}