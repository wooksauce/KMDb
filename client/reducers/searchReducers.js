const initialState = {
  imdbLoading: false,
  udbLoading: false,
  search: '',
  udbResults: [],
  imdbResults: [],
}

export default function searchReducer(state=initialState, action) {
  switch (action.type) {
    case 'SEARCH_IMDB_SEARCH_TITLE': {
      return {...state,
        imdbLoading: false,
        search: action.search
      };
    }
    case 'SEARCH_UDB_SEARCH_RESULTS': {
      return {
        ...state,
        udbLoading:false,
        udbResults: action.udbResults
      };
    }
    case 'SEARCH_IMDB_SEARCH_RESULTS': {
      return {...state, imdbResults: action.imdbResults};
    }
    case 'SEARCH_IMDB_MOVIES_LOADING': {
      return {...state, imdbLoading: true};
    }
    case 'SEARCH_UDB_MOVIES_LOADING': {
      return {...state, udbLoading: true};
    }
  }
  return state;
}