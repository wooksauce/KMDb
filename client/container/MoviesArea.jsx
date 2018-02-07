import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import UserMovies from '../components/UserMovies';
import UDbSearchResults from '../components/UDbMoviesSearched';
import IMDbSearchResults from '../components/IMDbMoviesSearched';

import classNames from 'classnames/bind';
import styles from './scss/moviesArea.scss'
const cx = classNames.bind(styles);

class MoviesArea extends Component {
  constructor(props) {
    super(props)
  }

  handleUserRating(num) {
    this.setState({userRating: num});
  }

  handleUserComment(text) {
    this.setState({userComment: text});
  }

  render() {
    const { imdbResults, udbResults, movies } = this.props;
    return (
      <div className={cx('movies-area')}>
        {(!imdbResults.length && !udbResults.length) &&
          <div className={cx('userMoviesContainer')}>
            <UserMovies
              movies={movies}
              handleUserRating={this.handleUserRating}
              handleUserComment={this.handleUserComment}
            />
          </div>
        }
        <div className={cx('searchResultsArea')}>
          <UDbSearchResults udbResults={udbResults} />
          <IMDbSearchResults imdbResults={imdbResults} />
        </div>
      </div>
    )
  }
}

export default MoviesArea;