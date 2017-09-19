import React, { Component } from 'react'
import axios from 'axios'

class Search extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      myRating: '',
      comments: '',
      movieExist: true
    }
    this.handleChange = this.handleChange.bind(this);
    this.searchForMovie = this.searchForMovie.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  searchForMovie(obj) {
    axios.post('/api/postMovie/' + obj.title, obj)
    .then(({data}) => {
      if (data)
      this.props.getAllMovies();
      this.setState({
        title: '',
        myRating: '',
        comments: ''
      })
    })
    .catch(err => {
      console.log('wrong name', err);
    })
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  onClick(title) {
    for (var i = 0; i < this.props.archive.length; i++) {
      if (this.props.archive[i].title.includes(title)) {
        this.setState({movieExist: true});
        this.props.submitHandler(this.props.archive[i]);
        break;
      } else {
        this.setState({movieExist: false});
      }
    }
    if (this.props.archive.length === 0) {
      this.setState({movieExist: false});
    }
  }

  render() {
    return (
      <div className="searchContainer">
        <div className="search">
          <form className="movieTitleForm">
            <input className="movieTitle" type="text" placeholder="Movie Title" name="title" value={this.state.title} onChange={this.handleChange} />
          </form>
          <button className="searchButton" onClick={() => this.onClick(this.state.title)}> Search </button>
        </div>
        {!this.state.movieExist &&
          <div className="addInfo">
            <form className="addInfoForm">
              <input className="myRatingInput" type="number" min= "0" max="10" placeholder="My Own Rating" name="myRating" value={this.state.myRating} onChange={this.handleChange} />
              <textarea className="movieComments" type="text" placeholder="Comments" name="comments" value={this.state.comments} onChange={this.handleChange} />
            </form>
            <button className="addMovieButton" onClick={() => this.searchForMovie(this.state)}> Add </button>
          </div>
        }
      </div>
    )
  }
}

export default Search;