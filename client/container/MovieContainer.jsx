import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { moviesFetchData, moviesCarousel } from '../actions/moviesActions';
import Search from '../components/Search';
import UDbSearchResults from '../components/UDbMoviesSearched';
import IMDbSearchResults from '../components/IMDbMoviesSearched';
import Carousel from '../components/MovieCarousel';
import UserMovies from '../components/UserMovies';
import classNames from 'classnames/bind';
import styles from './scss/movieContainer.scss'

const cx = classNames.bind(styles);

class MovieContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllMovies();
    this.props.fetchCarouselData();
  }

  render() {
    const search = this.props.search;
    return(
      <div className={cx('movieContainer')}>
        <div className={cx('searchContainer')}>
          <Search search={search} />
        </div>
        <div className={cx('posterArea')}>
          <Carousel carousel={this.props.carousel} />
        </div>
        {!search &&
          <div className={cx('userMoviesContainer')}>
            <UserMovies movies={this.props.movies}/>
          </div>
        }
        <div className={cx('searchResultsArea')}>
          <UDbSearchResults udbResults={this.props.udbResults} />
          <IMDbSearchResults imdbResults={this.props.imdbResults} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies.movies,
    search: state.movies.search,
    udbResults: state.movies.udbResults,
    imdbResults: state.movies.imdbResults,
    carousel: state.carousel.carouselData,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllMovies: () => {
      dispatch(moviesFetchData());
    },
    fetchCarouselData: () => {
      dispatch(moviesCarousel());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieContainer);