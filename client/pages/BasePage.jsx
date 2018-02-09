import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { moviesFetchData, moviesCarousel } from '../actions/moviesActions';
import Header from '../components/Header'
import MainView from '../container/MainView'
import MoviesArea from '../container/MoviesArea'
import Footer from '../components/Footer';

import classNames from 'classnames/bind';
import styles from './scss/basePage.scss'
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
    const { imdbResults, udbResults, movies } = this.props;
    return(
      <div className={cx('base-page')}>
        <Header />
        <MainView
          search={search}
          carousel={this.props.carousel}
        />
        <MoviesArea
          movies={movies}
          imdbResults = {imdbResults}
          udbResults = {udbResults}
        />
        <Footer />
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