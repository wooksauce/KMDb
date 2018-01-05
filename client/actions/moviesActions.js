import axios from 'axios';

export const moviesSearch = (search) => {
  return {
    type: 'MOVIES_SEARCH_PHRASE',
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