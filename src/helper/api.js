export const fetchApi = async url => {
  const initalFetch = await fetch(url);
  const fetchedFilms = await initalFetch.json();
  const { results } = fetchedFilms;
  return cleaner(results);
};

const cleaner = films => {
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
