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
})