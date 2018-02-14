import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { moviesMPFetchMovies, moviesCarousel } from '../actions/moviesActions';
import Header from '../components/Header'
import MainView from '../container/MainView'
import MoviesArea from '../container/MoviesArea'
import Footer from '../components/Footer';

import classNames from 'classnames/bind';
import styles from './scss/basePage.scss'
const cx = classNames.bind(styles);

class BasePage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllMovies();
    this.props.fetchCarouselData();
  }

  render() {
    const search = this.props.search;
    const { imdbResults, udbResults, movies, mpLoading } = this.props;
    return(
      <div className={cx('base-page')}>
        <Header />
        <MainView
          carousel={this.props.carousel}
        />
        {(!!movies.length || !!udbResults.length || !!imdbResults.length) &&
          <MoviesArea
            movies={movies}
          />
        }
        {mpLoading &&
          <div className={cx('main-page-loading')}> Loading
          </div>
        }
        <Footer />
      </div>
    )
  }
}

BasePage.PropTypes = {
  movies: PropTypes.array,
  carousel: PropTypes.array,
  mpLoading: PropTypes.bool,
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies.movies,
    carousel: state.carousel.carouselData,
    mpLoading: state.movies.mpLoading,
    imdbResults: state.search.imdbResults,
    udbResults: state.search.udbResults,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllMovies: () => {
      dispatch(moviesMPFetchMovies());
    },
    fetchCarouselData: () => {
      dispatch(moviesCarousel());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BasePage);