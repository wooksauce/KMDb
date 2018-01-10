const initialState = {
  errored: false,
  loading: false,
  movies: [],
  search: '',
  udbResults: [],
  imdbResults: [],
}

export default function moviesReducer(state=initialState, action) {
  switch (action.type) {
    case 'MOVIES_IMDB_SEARCH_TITLE': {
      return {...state, search: action.search};
    }
    case 'MOVIES_UDB_SEARCH_RESULTS': {
      return {...state, udbResults: action.udbResults};
    }
    case 'MOVIES_IMDB_SEARCH_RESULTS': {
      return {...state, imdbResults: action.imdbResults};
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