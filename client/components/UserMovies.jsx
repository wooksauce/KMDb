import React, { Component } from 'react';

class UserMovies extends Component {
  constructor(props) {
    super(props)
    // this.state = {
    //   userMovies: this.props.movies
    // }
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
    return movies.map((movie) => {
      return (
        <div key={movie.id}>
          {movie.title}
        </div>
      )
    })
  }
}

export default UserMovies;