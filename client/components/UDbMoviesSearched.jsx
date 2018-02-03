import React, { Component } from 'react';
import MovieEntry from './MovieEntry';
import classNames from 'classnames/bind';
import styles from './scss/udbMoviesSearched.scss';

const cx = classNames.bind(this);

export default class UDbMoviesSearched extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { udbResults } = this.props;
    if (!udbResults || !udbResults.length) {
      return null;
    }
    const udbMovies = makeMovieEntry(udbResults);
    return (
      <div className={cx('udbResultsContainer', 'searchList')}>
        <div className={cx('udbResultsTitle')}>
          <p className={cx('udbResultsTitleText')}> From UDb </p>
        </div>
        {udbMovies}
      </div>
    );
  }
}

const makeMovieEntry = (movies = []) => {
  if (movies.length) {
    return movies.map((movie) =>
      <MovieEntry
        movie={movie}
        imdb={false}
        key={movie.id}
      />
    )
  }
}