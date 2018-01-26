import React, { Component } from 'react';
import MovieArchiveEntry from '../components/MovieArchiveEntry'

class UserMovies extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const userMovies = this.props.movies;
    console.log('archive', userMovies)
    if (!userMovies || !userMovies.length) {
      console.log('why am i here')
      return null;
    }
    const archiveMovies = makeMovieEntry(userMovies);
    console.log('im here')
    return (
      <div>
        {archiveMovies}
      </div>
    )
  }
}

const makeMovieEntry = (movies = []) => {
  if (movies.length) {
    return movies.map((movie, idx) => {
      return (
        <MovieArchiveEntry
          key={movie.id}
          movie={movie}
          nth={idx + 1}
        />
      )
    })
  }
}

export default UserMovies;