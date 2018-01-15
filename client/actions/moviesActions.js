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

export const moviesCarousel = () => {
  //in the future, it will get some useful movie data
  const carouselData = [
    {
      title: 'Room',
      poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjE4NzgzNzEwMl5BMl5BanBnXkFtZTgwMTMzMDE0NjE@._V1_SY1000_SX675_AL_.jpg',
      rating: 8.2,
    },
    {
      title: 'Whiplash',
      poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BOTVhMWQ5MDktMGE3OS00MjVlLWExZWYtMzY2MTg4ZGFiZDQ5L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_SX675_AL_.jpg',
      rating: 8.5,
    },
    {
      title: 'Spotlight',
      poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjIyOTM5OTIzNV5BMl5BanBnXkFtZTgwMDkzODE2NjE@._V1_SY1000_CR0,0,676,1000_AL_.jpg',
      rating: 8.1,
    },
  ]
  return {
    type: 'MOVIES_CAROUSEL',
    data: carouselData,
  }
}