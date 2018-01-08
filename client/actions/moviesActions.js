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
    axios.get('/api/searchMovies/' + searchStr)
      .then(() => {
        console.log('im in search action')
      })
      .catch((err) => {
        console.log('search action err', err)
      })
  }
}