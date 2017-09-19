import React, { Component } from 'react';
import MovieList from './MovieList';
import Search from './Search';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      allMovies: [],
      movieArchive: []
    };
    this.submitHandler = this.submitHandler.bind(this);
    this.getAllMovies = this.getAllMovies.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
    this.sortThem = this.sortThem.bind(this);
  }

  componentDidMount() {
    this.getAllMovies();
  }

  getAllMovies() {
    axios.get('/api/getMovies')
    .then(({data}) => {
      this.setState({
        allMovies: data,
        movieArchive: data
      });
      console.log('app movies', this.state.allMovies, 'movie arch', this.state.movieArchive)
    })
    .catch(err => {
      console.log(err);
    })
  }

  deleteMovie(id) {
    axios.delete('/api/deleteMovie/' + id)
    .then(({data}) => {
      console.log('movie deleted successfully', data)
      this.getAllMovies();
    })
    .catch(err => {
      console.log('error occured', err)
    })
  }

  submitHandler(movie) {
    this.setState({allMovies: [movie]})
  }

  sortThem(sortBy) {
    axios.get('/api/sortMovies/' + sortBy)
    .then(({data}) => {
      console.log('movies sorted successfully', data)
      this.setState({allMovies: data});
    })
    .catch(err => {
      console.log('sorting error occured', err)
    })
  }

  render() {
    return (
      <div>
        <a href="/">
          <img src='https://image.ibb.co/jprur5/KMDb.png' width="100" />
        </a>
        <Search movies={this.state.allMovies} getAllMovies={this.getAllMovies} submitHandler={this.submitHandler} archive={this.state.movieArchive} />
        <div>
          <label>Sort by:</label>
          <button onClick={() => {this.sortThem('title')}}> Title </button>
          <button onClick={() => {this.sortThem('rating')}}> IMDB Rating </button>
          <button onClick={() => {this.sortThem('myRating')}}> My Rating </button>
        </div>
        <MovieList movies={this.state.allMovies} deleteMovie={this.deleteMovie} />
      </div>
    )
  }
}


export default App;