/*eslint-disable camelcase, id-blacklist*/
export const fetchApi = async url => {
  try {
    const initialFetch = await fetch(url);
    if (initialFetch.status <= 200) {
      const resolvedPromise = await initialFetch.json();
      return resolvedPromise;
    } else if (initialFetch.status > 200) {
      throw new Error('Bad response stats');
    }
  } catch (error) {
    return error;
  }
};

export const getFilms = async url => {
  const { results } = await fetchApi(url);
  return cleanFilms(results);
};

export const cleanFilms = films => {
  return films.map(film => ({
    backdrop: film.backdrop_path,
    title: film.title,
    overview: film.overview,
    poster_path: film.poster_path,
    release_date: film.release_date,
    vote_average: film.vote_average,
    movie_id: film.id
  }));
};

export const getUserData = async (url, state) => {
  const { data } = await fetchApi(url);
  const { email, password } = state;
  const user = data.find(user => {
    return user.email === email && user.password === password;
  });
  const currentFavorites = await fetchApi(`${url}/${user.id}/favorites/`);
  user.favorites = [...currentFavorites.data];
  return user;
};

export const sendToStorage = user => {
  localStorage.setItem('user', JSON.stringify(user) )
}

export const getFromStorage = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  return user
}

export const sendFavorite = async (user, film) => {
  const { id } = user;
  const {
    movie_id,
    title,
    poster_path,
    release_date,
    vote_average,
    overview
  } = film;
  const favoriteToStore = {
    movie_id,
    user_id: id,
    title,
    poster_path,
    release_date,
    vote_average,
    overview
  };
  postFetch('users/favorites/new', favoriteToStore, 'POST');
};

export const deleteFavorite = async (user, film) => {
  const { id } = user;
  const filmId = film.movie_id;
  const filmToDelete = { id, filmId };
  fetch(`http://localhost:3000/api/users/${id}/favorites/${filmId}`, {
    method: 'DELETE',
    body: JSON.stringify(filmToDelete)
  });
};

export const postFetch = async (url, itemToStore, method) => {
  const rootURL = 'http://localhost:3000/api/';
  try {
    const initialFetch = await fetch(`${rootURL}${url}`, {
      method,
      body: JSON.stringify(itemToStore),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    });
    if (initialFetch.status > 200) {
      throw new Error('Bad response stats');
    }
  } catch (error) {
    return error;
  }
};
