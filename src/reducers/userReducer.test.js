/*eslint-disable camelcase, max-len*/
import { userReducer } from './userReducer';
import LocalStorageMock from '../mockData';

describe('userReducer', () => {
  window.localStorage = new LocalStorageMock;

  it('should default to returning an empty object as state', () => {
    const expected = {};

    expect(userReducer(undefined, {})).toEqual(expected);
  });

  it('should return our user object as the new state on LOG_IN', () => {
    const expected = { name: '', password: '', email: '' };
    const mockAction = {
      type: 'LOG_IN',
      user: expected
    };

    expect(userReducer(undefined, mockAction)).toEqual(expected);
  });

  it('should return an empty user object as the new state on SIGN_OUT', () => {
    const initialState = { name: '', password: '', email: '' };
    const expected = {};
    const mockAction = {
      type: 'SIGN_OUT',
      user: initialState
    };

    expect(userReducer(initialState, mockAction)).toEqual(expected);
  });

  it('should return an updated favorites array on ADD_FAVORITE', () => {
    const initialState = {
      name: 'Gandalf',
      password: 'pointyhat',
      email: 'whitewizard@gmail.com',
      favorites: []
    };
    const mockAction = {
      type: 'ADD_FAVORITE',
      film: {
        backdrop: '/lkOZcsXcOLZYeJ2YxJd3vSldvU4.jpg',
        title: 'The Maze Runner',
        overview:
          "Set in a post-apocalyptic world, young Thomas is deposited in a community of boys after his memory is erased, soon learning they're all trapped in a maze that will require him to join forces with fellow “runners” for a shot at escape.",
        poster_path: '/coss7RgL0NH6g4fC2s5atvf3dFO.jpg',
        release_date: '2014-09-10',
        vote_average: 7,
        movie_id: 198663
      }
    };

    const expected = { ...initialState, favorites: [mockAction.film] };
    expect(userReducer(initialState, mockAction)).toEqual(expected);
  });

  it('should return a favorites array without the film being removed on REMOVE_FAVORITE', () => {
    const initialState = {
      name: 'Gandalf',
      password: 'pointyhat',
      email: 'whitewizard@gmail.com',
      favorites: [
        {
          backdrop: '/lkOZcsXcOLZYeJ2YxJd3vSldvU4.jpg',
          title: 'The Maze Runner',
          overview:
            "Set in a post-apocalyptic world, young Thomas is deposited in a community of boys after his memory is erased, soon learning they're all trapped in a maze that will require him to join forces with fellow “runners” for a shot at escape.",
          poster_path: '/coss7RgL0NH6g4fC2s5atvf3dFO.jpg',
          release_date: '2014-09-10',
          vote_average: 7,
          movie_id: 198663
        }
      ]
    };
    const mockAction = {
      type: 'REMOVE_FAVORITE',
      film: {
        backdrop: '/lkOZcsXcOLZYeJ2YxJd3vSldvU4.jpg',
        title: 'The Maze Runner',
        overview:
          "Set in a post-apocalyptic world, young Thomas is deposited in a community of boys after his memory is erased, soon learning they're all trapped in a maze that will require him to join forces with fellow “runners” for a shot at escape.",
        poster_path: '/coss7RgL0NH6g4fC2s5atvf3dFO.jpg',
        release_date: '2014-09-10',
        vote_average: 7,
        movie_id: 198663
      }
    };
    const expected = {
      name: 'Gandalf',
      password: 'pointyhat',
      email: 'whitewizard@gmail.com',
      favorites: []
    };
    expect(userReducer(initialState, mockAction)).toEqual(expected);
  });
});
