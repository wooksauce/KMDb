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

class MovieContainer extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   mpLoading: this.props.mpLoading,
    // }
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
          // search={search}
          carousel={this.props.carousel}
        />
        {!this.props.mpLoading &&
          <MoviesArea
            movies={movies}
          />
        }
        {this.props.mpLoading &&
          <div className={cx('main-page-loading')}> Loading
          </div>
        }
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies.movies,
    // search: state.search.search,
    carousel: state.carousel.carouselData,
    mpLoading: state.movies.mpLoading,
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

export default connect(mapStateToProps, mapDispatchToProps)(MovieContainer);