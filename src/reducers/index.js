import { combineReducers } from 'redux';
import { filmsReducer } from './filmsReducer';
import { userReducer } from './userReducer';

export const rootReducer = combineReducers({
  user: userReducer,
  films: filmsReducer
});
