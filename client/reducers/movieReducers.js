const initialState = {
  search: '',
}

export default function movieReducer(state=initialState, action) {
  switch (action.type) {
    case 'MOVIE_SEARCH_PHRASE': {
      return {...state, search: action.search};
    }
  }
  return state;
}