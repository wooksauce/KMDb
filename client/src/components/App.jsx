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
    this.submitHandler = this.submitHandler.bind(this);
  }

  componentDidMount() {
    axios.get('/api/getMovies')
    .then(({data}) => {
      this.setState({
        allMovies: data
      });
    })
  }

  searchForMovie(title) {
    axios.get('/api/searchMovie/' + title)
    .then(data => {
      console.log('search data',data)
      this.setState({
        movieSearched: data
      });
      console.log('client search', data)
    })
    .catch(err => {
      console.log('wrong name', err);
    })
  }

  submitHandler(movie) {
    this.setState({allMovies: [movie]})
  }

  render() {
    return (
      <div>
        <a href="/">
          <img src='https://image.ibb.co/jprur5/KMDb.png' width="120" />
        </a>
        <Search movies={this.state.allMovies} submitHandler={this.submitHandler} />
        <MovieList movies={this.state.allMovies} />
      </div>
    )
  }
}


export default App;