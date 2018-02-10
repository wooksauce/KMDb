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

export const moviesIMDbSearchResult = (movies) => {
  return {
    type: 'SEARCH_IMDB_SEARCH_RESULTS',
    imdbResults: movies,
  }
}

export const searchFetchIMDbResults = (searchStr) => {
  return (dispatch) => {
    dispatch(moviesIMDbMoviesLoading(true));
    axios.get('/api/searchIMDbMovies/' + searchStr)
      .then(({ data }) => {
        dispatch(moviesIMDbSearchResult(data.results));
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

export const moviesUDbSearchResult = (movies) => {
  return {
    type: 'SEARCH_UDB_SEARCH_RESULTS',
    udbResults: movies,
  }
}


export const moviesFetchUDbSearch = (searchStr) => {
  return (dispatch) => {
    dispatch(searchUDbMoviesLoading(true));
    axios.get('/api/searchUserMovies/' + searchStr)
      .then(({ data }) => {
        dispatch(searchUDbMoviesLoading(false));
        dispatch(moviesUDbSearchResult(data));
      })
      .catch((err) => {
        console.log('search udb action err', err);
      })
  }
}