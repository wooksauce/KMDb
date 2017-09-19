import React, { Component } from 'react'
import axios from 'axios'

class Search extends Component {
  constructor() {
    super()
    this.state = {
      movieSearched: '',
      myRating: '',
      comments: '',
      movieExist: true
    }
    this.handleChange = this.handleChange.bind(this);
    // this.searchForMovie = this.searchForMovie.bind(this);
  }

  // searchForMovie(title) {
  //   axios.get('/api/searchMovie/' + title)
  //   .then(data => {
  //     console.log('search data',data)
  //     this.setState({
  //       movieSearched: data
  //     });
  //     console.log('client search', data)
  //   })
  //   .catch(err => {
  //     console.log('wrong name', err);
  //   })
  // }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  onClick(title) {
    for (var i = 0; i < this.props.movies.length; i++) {
      if (title === this.props.movies[i].title) {
        console.log('im here')
        this.props.submitHandler(this.props.movies[i]);
        this.setState({movieExist: true});
      } else {
        this.setState({movieExist: false});
      }
    }
  }

  render() {
    return (
      <div className="search">
        <form>
          <input className="movieName" type="text" placeholder="Movie Title" name="movieSearched" value={this.state.movieSearched} onChange={this.handleChange} />
        </form>
        <button id="search" onClick={() => this.onClick(this.state.movieSearched)}> Search </button>
        {!this.state.movieExist &&
          <div>
            <form>
              <input className="myRating" type="number" min= "0" max="10" placeholder="My Own Rating" name="myRating" value={this.state.myRating} onChange={this.handleChange.bind(this)} />
              <input className="movieComments" type="text" placeholder="Comments" name="comments" value={this.state.comments} onChange={this.handleChange.bind(this)} />
            </form>
            <button id="addMovie" onClick={() => this.onClick(this.state.movieSearched)}> Add </button>
          </div>
        }
      </div>
    )
  }
}

export default Search;