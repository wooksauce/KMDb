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
    this.state = {

    }
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
          <div className={cx('imdb-res-con', 'searchList')}>
            {(this.props.imdbLoading || this.props.imdbResults.length) &&
              <div className={cx('imdb-results-title')}>
                <p className={cx('imdb-results-title-text')}> From IMDb </p>
              </div>
            }
            {!this.props.imdbResults.length &&
            <IMDbSearchResults
              imdbResults={imdbResults}
              handleUserRating={this.handleUserRating}
              handleUserComment={this.handleUserComment}
            />
            }
          </div>
          <UDbSearchResults
            udbResults={udbResults}
            handleUserRating={this.handleUserRating}
            handleUserComment={this.handleUserComment}
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    search: state.search.search,
    imdbLoading: state.search.imdbLoading,
    imdbResults: state.search.imdbResults,
    udbLoading: state.search.udbLoading,
    udbResults: state.search.udbResults
  }
}
export default connect(mapStateToProps, null)(MoviesArea);