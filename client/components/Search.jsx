import React, { Component } from 'react';
import { connect } from 'react-redux';

import { moviesIMDbSearchTitle, moviesFetchUDbSearch, moviesFetchIMDbSearch } from '../actions/moviesActions'

class Search extends Component {
  constructor(props) {
    super(props)
  }

  handleSearchTyping(e) {
    this.props.searchTitle(e.target.value);
  }

  searchForTitle() {
    this.props.fetchIMDbSearchResults(this.props.search);
    this.props.fetchUDbSearchResults(this.props.search);
  }

  keyPressEnter(e) {
    if (e.key === 'Enter' || e.which == 13 || e.keyCode == 13) {
      e.preventDefault();
      this.searchForTitle();
    }
  }

  render() {
    return (
      <div className="searchBar">
        <form className="searchForm">
          <input
            className="movieTitle"
            type="text"
            placeholder="Movie Title"
            onChange={(e) => this.handleSearchTyping(e)}
            onKeyPress={(e) => this.keyPressEnter(e)}
          />
        </form>
        <button className="searchButton" onClick={() => this.searchForTitle()}> Search </button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    searchTitle: (title) => {
      dispatch(moviesIMDbSearchTitle(title));
    },
    fetchIMDbSearchResults: (searchStr) => {
      dispatch(moviesFetchIMDbSearch(searchStr));
    },
    fetchUDbSearchResults: (searchStr) => {
      dispatch(moviesFetchUDbSearch(searchStr));
    },
  };
}

export default connect(null, mapDispatchToProps)(Search);