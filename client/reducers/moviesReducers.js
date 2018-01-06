// const initialState = {
//   errored: false,
//   loading: false,
//   movies: [],
//   search: '',
// }

export default function moviesReducer(state={
  errored: false,
  loading: false,
  movies: [],
  search: '',
}, action) {
  switch (action.type) {
    case 'MOVIES_SEARCH_PHRASE': {
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