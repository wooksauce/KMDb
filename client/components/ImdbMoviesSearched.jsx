import React, { Component } from 'react';
import MovieCard from './MovieCard';
import classNames from 'classnames/bind';
import styles from './scss/imdbMoviesSearched.scss';

const cx = classNames.bind(this);

export default class ImdbMoviesSearched extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { imdbResults } = this.props;
    if (!imdbResults || !imdbResults.length) {
      return null;
    }
    const imdbMovies = makeMovieEntry(imdbResults);
    return(
      <div className={cx('imdbResultsContainer', 'searchList')}>
        <div className={cx('imdb-results-title')}>
          <p className={cx('imdb-results-title-text')}> From IMDb </p>
        </div>
        {imdbMovies}
      </div>
    )
  }
}

//same as the one in UDbMoviesSearched. Should I have this in container level? or import it?
const makeMovieEntry = (movies = []) => {
  if (movies.length) {
    return movies.map((movie) =>
      <MovieCard
        movie={movie}
        imdb={true}
        key={movie.imdbid}
      />)
  }
}