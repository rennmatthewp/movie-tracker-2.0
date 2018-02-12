/*eslint-disable no-case-declarations*/
export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return action.user;
    case 'SIGN_OUT':
      localStorage.removeItem('user');
      return {};
    case 'ADD_FAVORITE':
      return { ...state, favorites: [...state.favorites, action.film] };
    case 'REMOVE_FAVORITE':
      const newFavorites = state.favorites.filter(
        film => film.movie_id !== action.film.movie_id
      );
      return { ...state, favorites: [...newFavorites] };
    default:
      return state;
  }
};
