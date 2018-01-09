import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { moviesIMDbSearchTitle, moviesFetchUDbSearch, moviesFetchIMDbSearch } from '../actions/moviesActions'

class Search extends Component {
  constructor(props) {
    super(props)
  }

  handleSearchTyping(e) {
    this.props.searchTitle(e.target.value);
  }

  searchIMDbResults() {
    this.props.fetchIMDbSearchResults(this.props.search);
  }

  searchUDbResults() {
    this.props.fetchUDbSearchResults(this.props.search);
  }

  keyPressEnter(e) {
    if (e.key === 'Enter' || e.which == 13 || e.keyCode == 13) {
      e.preventDefault();
      this.searchIMDbResults(this.props.search);
      this.searchUDbResults(this.props.search);
    }
  }

  searchKMDbResults(e) {
    if (e.key === 'Enter' || e.which == 13 || e.keyCode == 13) {
      e.preventDefault();
      // search UDb here
    }
  }

  render() {
    return (
      <div>
        <form>
          <input
            className="movieTitle"
            type="text"
            placeholder="Movie Title"
            onChange={(e) => this.handleSearchTyping(e)}
            onKeyPress={(e) => this.keyPressEnter(e)}
          />
        </form>
        <button className="searchButton" onClick={() => this.searchIMDbResults()}> Search </button>
      </div>
      // <div className="searchContainer">
      //   <div className="search">
      //     <form className="movieTitleForm">
      //       <input className="movieTitle" type="text" placeholder="Movie Title" name="title" value={this.state.title} onChange={this.handleChange} />
      //     </form>
      //     <button className="searchButton" onClick={() => this.onClick(this.state.title)}> Search </button>
      //   </div>
      //   {!this.state.monevieExist &&
      //     <div className="addInfo">
      //       <form className="addInfoForm">
      //         <input className="myRatingInput" type="number" min= "0" max="10" placeholder="My Own Rating" name="myRating" value={this.state.myRating} onChange={this.handleChange} />
      //         <textarea className="movieComments" type="text" placeholder="Comments" name="comments" value={this.state.comments} onChange={this.handleChange} />
      //       </form>
      //       <button className="addMovieButton" onClick={() => this.searchForMovie(this.state)}> Add </button>
      //     </div>
      //   }
      // </div>
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