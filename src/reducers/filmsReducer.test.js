import { filmsReducer } from './filmsReducer';
import * as actions from '../actions/';

describe('filmsReducer', () => {
  it('should return the default state', () => {
    const expected = [];

    expect(filmsReducer(undefined, {})).toEqual(expected);
  });

  it('should return the new state with the new films', () => {
    const expected = [{}, {}, {}];
    const currentState = []

    expect(filmsReducer(currentState, actions.storeFilms(expected))).toEqual(expected);
  })
});
