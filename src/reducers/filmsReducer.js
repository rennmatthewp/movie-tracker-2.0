export const filmsReducer = (state = [], action) => {
  switch (action.type) {
    case 'STORE_FILMS':
      return [...state, ...action.films];
    default:
      return state;
  }
};
