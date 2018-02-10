export const favoriteReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      const favorites = [...state.favorites, action.film]
      return {...state, favorites}
    default:
      return state;
  }
}