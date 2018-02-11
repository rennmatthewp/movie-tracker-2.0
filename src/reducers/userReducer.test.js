import { userReducer } from './userReducer';
import * as actions from '../actions/';

//test add favorite
//test remove favorite

describe('userReducer', () => {
  it('should default to returning an empty object as state', () => {
    const expected = {};
    const mockAction = {};

    expect(userReducer(undefined, {})).toEqual(expected);
  });

  it('should return our user object as the new state on LOG_IN', () => {
    const expected = {name: '', password: '', email: ''}
    const mockAction = {
      type: 'LOG_IN',
      user: expected
    }

    expect(userReducer(undefined, mockAction)).toEqual(expected)
  });

  it('should return an empty user object as the new state on SIGN_OUT', () => {
    const initialState = {name: '', password: '', email: ''}
    const expected = {}
    const mockAction = {
      type: 'SIGN_OUT',
      user: initialState
    }

    expect(userReducer(initialState, mockAction)).toEqual(expected)
  });
})