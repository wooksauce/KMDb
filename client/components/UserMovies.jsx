import React, { Component } from 'react';
import MovieArchiveEntry from '../components/MovieArchiveEntry'

class UserMovies extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const userMovies = this.props.movies;
    if (!userMovies || !userMovies.length) {
      return null;
    }
    const archiveMovies = makeMovieEntry(userMovies);
    return (
      <div>
        {archiveMovies}
      </div>
    )
  }
}

const makeMovieEntry = (movies = []) => {
  if (movies.length) {
    return movies.map((movie) => {
      return (
        <MovieArchiveEntry
          key={movie.id}
          movie={movie}
        />
      )
    })
  }
}

export default UserMovies;