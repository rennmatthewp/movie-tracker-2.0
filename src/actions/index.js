export const storeFilms = films => ({
  type: 'STORE_FILMS',
  films
});

export const logIn = user => ({
  type: 'LOG_IN',
  user
});

export const signOut = user => ({
  type: 'SIGN_OUT',
  user
})
