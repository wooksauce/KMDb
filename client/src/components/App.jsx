import React, { Component } from 'react';
import MovieList from './MovieList';
import Search from './Search';
import axios from 'axios';

class App extends Component {
  constructor() {
    super()
    this.state = {
      allMovies: []
    }
  }

  componentDidMount() {
    axios.get('/api/getMovies')
    .then(movies => {
      this.setState = {
        allMovies: movies
      }
    })
  }

  submitHandler() {
    axios.post('/api/postMovie')
    .then(movie => {

    })
  }

  render() {
    return (
      <div>
        <Search />
        {console.log('App all movies', this.state.allMovies)}
        <MovieList movies={this.state.allMovies} />
      </div>
    )
  }
}


export default App;