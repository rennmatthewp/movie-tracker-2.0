export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return action.user;
    case 'SIGN_OUT':
      return {}
    case 'ADD_FAVORITE':
      return {...state, favorites: [...state.favorites, action.film]}
    default:
      return state;
  }
};
