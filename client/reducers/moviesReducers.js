const initialState = {
  errored: false,
  loading: false,
  movies: [],
  search: '',
}

export default function moviesReducer(state=initialState, action) {
  switch (action.type) {
    case 'MOVIES_IMDB_SEARCH': {
      return {...state, search: action.search};
    }
    case 'MOVIES_ERRORED': {
      return {...state, errored: true}
    }
    case 'MOVIES_LOADING': {
      return {...state, loading: true}
    }
    case 'MOVIES_FETCH_SUCCESS': {
      return {
        ...state,
        errored: false,
        loading: false,
        movies: action.movies,
      }
    }
  }
  return state;
}