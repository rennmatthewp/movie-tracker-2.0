export const fetchApi = async (url) => {
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

export const getUserData = async (url, state) => {
  const { data } = await fetchApi(url)
  const { email, password } = state;
  const user = data.find(user => {
    return user.email === email && user.password === password;
  });
  const currentFavorites = await fetchApi(`${url}/${user.id}/favorites/`)
  user.favorites = [...currentFavorites.data]
  return user;
}

export const sendFavorite = async (user, film) => {
  const userId = user.id;
  const { id, title, overview, poster, date, rating } = film;
  const favoriteToStore = {
    movie_id: id,
    user_id: userId,
    title,
    poster_path: poster,
    release_date: date,
    vote_average: rating,
    overview,
  }
  postFetch('users/favorites/new', favoriteToStore)
    
}

export const postFetch = async (url, itemToStore) => {
  const rootURL = 'http://localhost:3000/api/';
  try {
    const initialFetch = await fetch(`${rootURL}${url}`, {
      method: 'POST',
      body: JSON.stringify(itemToStore),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
    console.log(initialFetch);
    if (initialFetch.status > 200) {
      throw new Error('Bad response stats')
    }
  } catch(error) {
    console.log(error)
  }
}

  
