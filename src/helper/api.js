export const fetchApi = async url => {
  const initalFetch = await fetch(url);
  const resolvedPromise = await initalFetch.json();
  return resolvedPromise
};

export const getFilms = async (url) => {
  const { results } = await fetchApi(url);
  return cleanFilms(results)
}

const cleanFilms = films => {
  return films.map(film => ({
    backdrop: film.backdrop_path,
    title: film.title,
    overview: film.overview,
    poster: film.poster_path,
    date: film.release_date,
    rating: film.vote_average,
    id: film.id
  }));
};
