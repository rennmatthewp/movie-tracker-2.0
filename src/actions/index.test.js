import * as actions from "./index";

describe('all actions', () => {
  it('should return a type of STORE_FILMS', () => {
    const films = [{}, {}, {}];
    const expected = {
      type: 'STORE_FILMS',
      films
    }

    expect(actions.storeFilms(films)).toEqual(expected);
  })

  it('should return a type of LOG_IN', () => {
    const user = {};
    const expected = {
      type: 'LOG_IN',
      user
    }

    expect(actions.logIn(user)).toEqual(expected);
  })

  it('should return a type of SIGN_OUT', () => {
    const user = {};
    const expected = {
      type: 'SIGN_OUT',
      user
    }

    expect(actions.signOut(user)).toEqual(expected);
  })
})