import axios from 'axios';

export const moviesIMDbSearchTitle = (search) => {
  return {
    type: 'MOVIES_IMDB_SEARCH_TITLE',
    search: search,
  }
}

export const moviesErrored = (err) => {
  return {
    type: 'MOVIES_ERRORED',
    error: err,
  }
}

export const moviesLoading = (bool) => {
  return {
    type: 'MOVIES_LOADING',
    loading: bool,
  }
}

export const moviesFetchSuccess = (movies) => {
  return {
    type: 'MOVIES_FETCH_SUCCESS',
    movies: movies,
  }
}

export const moviesFetchData = () => {
  return (dispatch) => {
    dispatch(moviesLoading(true))
    axios.get('/api/getMovies')
      .then(({ data }) => {
        dispatch(moviesLoading(false))
        dispatch(moviesFetchSuccess(data))
      })
      .catch((err) => {
        dispatch(moviesErrored(err))
      })
  }
}

export const moviesFetchIMDbSearch = (searchStr) => {
  return (dispatch) => {
    axios.get('/api/searchIMDbMovies/' + searchStr)
      .then(({ data }) => {
        console.log('im in search imdb action');
        dispatch(moviesIMDbSearchResult(data.results));
      })
      .catch((err) => {
        console.log('search action err', err)
      })
  }
}

export const moviesUDbSearchResult = (movies) => {
  return {
    type: 'MOVIES_UDB_SEARCH_RESULTS',
    udbResults: movies,
  }
}

export const moviesIMDbSearchResult = (movies) => {
  return {
    type: 'MOVIES_IMDB_SEARCH_RESULTS',
    imdbResults: movies,
  }
}

export const moviesFetchUDbSearch = (searchStr) => {
  return (dispatch) => {
    axios.get('/api/searchUserMovies/' + searchStr)
      .then(({ data }) => {
        console.log('data', data)
        dispatch(moviesUDbSearchResult(data));
      })
      .catch((err) => {
        console.log('search udb action err', err);
      })
  }
}