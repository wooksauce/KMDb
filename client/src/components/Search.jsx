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
    console.log('title', obj)
    axios.post('/api/postMovie/' + obj.title, obj)
    .then(({data}) => {
      if (data)
      console.log('client search', data)
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
      if (title === this.props.archive[i].title) {
        this.setState({movieExist: true});
        this.props.submitHandler(this.props.archive[i]);
        console.log('im here', this.state.movieExist)
      } else {
        this.setState({movieExist: false});
      }
    }
  }

  render() {
    return (
      <div className="search">
        <form>
          <input className="movieTitle" type="text" placeholder="Movie Title" name="title" value={this.state.title} onChange={this.handleChange} />
        </form>
        <button id="search" onClick={() => this.onClick(this.state.title)}> Search </button>
        {!this.state.movieExist &&
          <div>
            <form>
              <input className="myRating" type="number" min= "0" max="10" placeholder="My Own Rating" name="myRating" value={this.state.myRating} onChange={this.handleChange} />
              <input className="movieComments" type="text" placeholder="Comments" name="comments" value={this.state.comments} onChange={this.handleChange} />
            </form>
            <button id="addMovie" onClick={() => this.searchForMovie(this.state)}> Add </button>
          </div>
        }
      </div>
    )
  }
}

export default Search;