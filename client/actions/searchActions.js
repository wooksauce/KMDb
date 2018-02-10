import axios from 'axios';

export const searchIMDbSearchTitle = (search) => {
  return {
    type: 'SEARCH_IMDB_SEARCH_TITLE',
    search: search,
  }
}

export const searchIMDbMoviesLoading = (bool) => {
  return {
    type: 'SEARCH_IMDB_MOVIES_LOADING',
    imdbLoading: bool,
  }
}

export const searchIMDbSearchResult = (movies) => {
  return {
    type: 'SEARCH_IMDB_SEARCH_RESULTS',
    imdbResults: movies,
  }
}

export const searchFetchIMDbResults = (searchStr) => {
  return (dispatch) => {
    dispatch(searchIMDbMoviesLoading(true));
    axios.get('/api/searchIMDbMovies/' + searchStr)
      .then(({ data }) => {
        dispatch(searchIMDbSearchResult(data.results));
      })
      .catch((err) => {
        console.log('search action err', err);
      })
  }
}

export const searchUDbMoviesLoading = (bool) => {
  return {
    type: 'SEARCH_UDB_MOVIES_LOADING',
    udbLoading: bool,
  }
}

export const searchUDbSearchResult = (movies) => {
  return {
    type: 'SEARCH_UDB_SEARCH_RESULTS',
    udbResults: movies,
  }
}


export const searchFetchUDbResults = (searchStr) => {
  return (dispatch) => {
    dispatch(searchUDbMoviesLoading(true));
    axios.get('/api/searchUserMovies/' + searchStr)
      .then(({ data }) => {
        dispatch(searchUDbSearchResult(data));
      })
      .catch((err) => {
        console.log('search udb action err', err);
      })
  }
}