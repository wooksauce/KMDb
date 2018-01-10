import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { moviesFetchData } from '../actions/moviesActions';
import Search from '../components/Search';
import UDbSearchResults from '../components/UDbMoviesSearched'
import IMDbSearchResults from '../components/IMDbMoviesSearched'

class MovieContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllMovies();
  }

  render() {
    return(
      <div className="movieContainer">
        <Search search={this.props.search} />
        <UDbSearchResults udbResults={this.props.udbResults} />
        <IMDbSearchResults imdbResults={this.props.imdbResults} />
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
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllMovies: () => {
      dispatch(moviesFetchData());
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieContainer);