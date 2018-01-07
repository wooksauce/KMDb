import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { moviesFetchData } from '../actions/moviesActions';

class MovieContainer extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   allMovies: [],
    //   movieArchive: []
    // };
  }

  componentDidMount() {
    this.props.fetchAllMovies();
  }
  render() {
    return(
      <div>
        <p> Hi </p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies.movies
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllMovies: () => {
      dispatch(moviesFetchData());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieContainer);