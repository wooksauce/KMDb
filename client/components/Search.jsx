import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { moviesIMDbSearchTitle, moviesFetchIMDbSearch } from '../actions/moviesActions'

class Search extends Component {
  constructor(props) {
    super(props)
    // this.state = {
    //   title: '',
    //   myRating: '',
    //   comments: '',
    //   movieExist: true
    // }
    this.handleSearchTyping = this.handleSearchTyping.bind(this);
    // this.searchForMovie = this.searchForMovie.bind(this);
    // this.onClick = this.onClick.bind(this);
  }

  // searchMovie(obj) {
  //   axios.post('/api/postMovie/' + obj.title, obj)
  //   .then(({data}) => {
  //     if (data)
  //     this.props.getAllMovies();
  //     this.setState({
  //       title: '',
  //       myRating: '',
  //       comments: ''
  //     })
  //   })
  //   .catch(err => {
  //     console.log('wrong name', err);
  //   })
  // }

  handleSearchTyping(e) {
    this.props.searchTitle(e.target.value);
  }

  searchIMDbResults() {
    this.props.fetchIMDbSearchResults(this.props.search);
    console.log('i clicked')
  }

  searchKMDbResults(e) {

  }

  // onClick(title) {
  //   for (var i = 0; i < this.props.archive.length; i++) {
  //     if (this.props.archive[i].title.includes(title)) {
  //       this.setState({movieExist: true});
  //       this.props.submitHandler(this.props.archive[i]);
  //       break;
  //     } else {
  //       this.setState({movieExist: false});
  //     }
  //   }
  //   if (this.props.archive.length === 0) {
  //     this.setState({movieExist: false});
  //   }
  // }

  render() {
    return (
      <div>
        <form>
          <input className="movieTitle" type="text" placeholder="Movie Title" onChange={(e) => this.handleSearchTyping(e)} />
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
      //   {!this.state.movieExist &&
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

// const mapStateToProps = (state) => {
//   return {
//     search: state.movies.search,
//   }
// }

const mapDispatchToProps = (dispatch) => {
  return {
    searchTitle: (title) => {
      dispatch(moviesIMDbSearchTitle(title));
    },
    fetchIMDbSearchResults: (searchStr) => {
      dispatch(moviesFetchIMDbSearch(searchStr));
    },
  };
}

export default connect(null, mapDispatchToProps)(Search);