import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { moviesFetchData, moviesCarousel } from '../actions/moviesActions';
import Header from '../components/Header'
import MainArea from './MainArea'
import Carousel from '../components/MovieCarousel';
import MoviesArea from './MoviesArea'

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

  // handleUserRating(num) {
  //   this.setState({userRating: num})
  // }

  // handleUserComment(text) {
  //   this.setState({userComment: text})
  // }

  render() {
    const search = this.props.search;
    const { imdbResults, udbResults, movies } = this.props;
    return(
      <div className={cx('movieContainer')}>
        <Header />
        {/* <div className={cx('main-area')}> */}
        <MainArea search={search} />
        {/* </div> */}
        <div className={cx('poster-area')}>
          <Carousel carousel={this.props.carousel} />
        </div>
        <MoviesArea
          movies={movies}
          imdbResults = {imdbResults}
          udbResults = {udbResults}
        />
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