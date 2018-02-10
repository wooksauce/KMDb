import { combineReducers } from 'redux';
import movies from './moviesReducers';
import carousel from './carouselReducers'
import search from './searchReducers'

const rootReducer = combineReducers({
  movies,
  search,
  carousel,
});

export default rootReducer;