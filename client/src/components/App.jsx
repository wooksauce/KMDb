import React, { Component } from 'react';
import MovieList from './MovieList';
import Search from './Search';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      allMovies: []
    };
  }

  componentDidMount() {
    axios.get('/api/getMovies')
    .then(({data}) => {
      console.log('movies', data)
      this.setState({
        allMovies: data
      });
      console.log('get', this.state.allMovies)
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
        <MovieList movies={this.state.allMovies} />
      </div>
    )
  }
}


export default App;