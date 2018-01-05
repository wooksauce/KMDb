import axios from 'axios';

export const movieSearch = (search) => {
  return {
    type: 'MOVIE_SEARCH_PHRASE',
    search: search,
  }
}