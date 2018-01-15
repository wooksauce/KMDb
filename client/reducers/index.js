import { combineReducers } from 'redux';
import movies from './moviesReducers';
import carousel from './carouselReducers'

const rootReducer = combineReducers({
  movies,
  carousel,
});

export default rootReducer;