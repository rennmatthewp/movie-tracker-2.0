import { combineReducers } from 'redux';
import { filmsReducer } from './filmsReducer';

export const rootReducer = combineReducers({
  films: filmsReducer
});