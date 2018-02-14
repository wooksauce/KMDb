import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieCard from './MovieCard';
import classNames from 'classnames/bind';
import styles from './scss/udbMoviesSearched.scss';

const cx = classNames.bind(styles);

class UDbMoviesSearched extends Component {
  constructor(props) {
    super(props)
  }

  makeMovieEntry (movies = []) {
    if (movies.length) {
      return movies.map((movie) =>
        <MovieCard
          movie={movie}
          imdb={false}
          key={`${movie.imdbid}+udb`}
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

const mapStateToProps = (state) => {
  return {
    udbResults: state.search.udbResults,
  }
}

export default connect(mapStateToProps, null) (UDbMoviesSearched);