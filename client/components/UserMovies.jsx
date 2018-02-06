import React, { Component } from 'react';
import MovieArchiveEntry from '../components/MovieArchiveEntry'
import classNames from 'classnames/bind';
import styles from './scss/userMovies.scss';

const cx = classNames.bind(this);

class UserMovies extends Component {
  constructor(props) {
    super(props)
  }

  makeMovieEntry(movies = []) {
    if (movies.length) {
      return movies.map((movie) => {
        return (
          <MovieArchiveEntry
            key={movie.id}
            movie={movie}
            handleUserRating={this.props.handleUserRating}
            handleUserComment={this.props.handleUserComment}
          />
        )
      })
    }
  }

  render() {
    const userMovies = this.props.movies;
    if (!userMovies || !userMovies.length) {
      return null;
    }
    const archiveMovies = this.makeMovieEntry(userMovies);
    return (
      <div className={cx('arch-movies-container')}>
        {archiveMovies}
      </div>
    )
  }
}

// const makeMovieEntry = (movies = []) => {
//   if (movies.length) {
//     return movies.map((movie) => {
//       return (
//         <MovieArchiveEntry
//           key={movie.id}
//           movie={movie}
//           handleUserRating={this.props.handleUserRating}
//           handleUserComment={this.props.handleUserComment}
//         />
//       )
//     })
//   }
// }

export default UserMovies;