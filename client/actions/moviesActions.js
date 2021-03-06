import axios from 'axios';

// export const moviesIMDbSearchTitle = (search) => {
//   return {
//     type: 'MOVIES_IMDB_SEARCH_TITLE',
//     search: search,
//   }
// }

export const moviesErrored = (err) => {
  return {
    type: 'MOVIES_ERRORED',
    error: err,
  }
}

export const moviesMPLoading = (bool) => {
  return {
    type: 'MOVIES_MP_MOVIES_LOADING',
    mpLoading: bool,
  }
}

export const moviesMPFetchSuccess = (movies) => {
  return {
    type: 'MOVIES_MP_MOVIES_FETCH_SUCCESS',
    movies: movies,
  }
}

export const moviesMPFetchMovies = () => {
  return (dispatch) => {
    dispatch(moviesMPLoading(true));
    axios.get('/api/getMovies')
      .then(({ data }) => {
        dispatch(moviesMPFetchSuccess(data));
      })
      .catch((err) => {
        dispatch(moviesErrored(err));
      })
  }
}

export const moviesCarousel = () => {
  //in the future, it will get some useful movie data
  const carouselData = [
    //dummy posters
    {
      title: 'Room',
      posterUrl: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjE4NzgzNzEwMl5BMl5BanBnXkFtZTgwMTMzMDE0NjE@._V1_SY1000_SX675_AL_.jpg',
      imdbRating: 8.2,
    },
    {
      title: 'Whiplash',
      posterUrl: 'https://images-na.ssl-images-amazon.com/images/M/MV5BOTVhMWQ5MDktMGE3OS00MjVlLWExZWYtMzY2MTg4ZGFiZDQ5L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_SX675_AL_.jpg',
      imdbRating: 8.5,
    },
    {
      title: 'Spotlight',
      posterUrl: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjIyOTM5OTIzNV5BMl5BanBnXkFtZTgwMDkzODE2NjE@._V1_SY1000_CR0,0,676,1000_AL_.jpg',
      imdbRating: 8.1,
    },
  ]
  return {
    type: 'MOVIES_CAROUSEL',
    data: carouselData,
  }
}