import React, { Component } from 'react';
import MovieCard from './MovieCard';
import classNames from 'classnames/bind';
import styles from './scss/udbMoviesSearched.scss';

const cx = classNames.bind(styles);

export default class UDbMoviesSearched extends Component {
  constructor(props) {
    super(props)
  }

  makeMovieEntry (movies = []) {
    if (movies.length) {
      return movies.map((movie) =>
        <MovieCard
          movie={movie}
          imdb={false}
          key={movie.imdbid}
          handleUserRating={this.props.handleUserRating}
          handleUserComment={this.props.handleUserComment}
        />)
    }
  }

  render() {
    const { udbResults } = this.props;
    console.log('udb', udbResults.length)
    if (!udbResults || !udbResults.length) {
      return null;
    }
    const udbMovies = this.makeMovieEntry(udbResults);
    return (
      <div className={cx('udb-results')}>
        {udbMovies}
      </div>
    );
  }
}