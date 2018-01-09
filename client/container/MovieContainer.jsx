import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { moviesFetchData } from '../actions/moviesActions';
import Search from '../components/Search';

class MovieContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllMovies();
  }

  render() {
    return(
      <div>
        <p> Hi </p>
        <Search search={this.props.search} udbResults={this.props.udbResults} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies.movies,
    search: state.movies.search,
    udbResults: state.movies.udbResults,
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