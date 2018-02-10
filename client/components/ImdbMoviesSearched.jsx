import React, { Component } from 'react';
import MovieCard from './MovieCard';
import classNames from 'classnames/bind';
import styles from './scss/imdbMoviesSearched.scss';

const cx = classNames.bind(styles);

export default class ImdbMoviesSearched extends Component {
  constructor(props) {
    super(props)
  }

  makeMovieEntry (movies = []) {
    if (movies.length) {
      return movies.map((movie) =>
        <MovieCard
          movie={movie}
          imdb={true}
          key={movie.imdbid}
          handleUserRating={this.props.handleUserRating}
          handleUserComment={this.props.handleUserComment}
        />)
    }
  }

  render() {
    const { imdbResults } = this.props;
    if (!imdbResults || !imdbResults.length) {
      return null;
    }
    const imdbMovies = this.makeMovieEntry(imdbResults);
    return(
      <div className={cx('imdb-results', {loading: this.props.imdbLoading})}>
        {imdbMovies}
      </div>
    )
  }
}