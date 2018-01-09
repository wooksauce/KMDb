import React, { Component } from 'react';
import MovieList from '../components/MovieList';
import Search from '../components/Search';
import MovieContainer from '../container/MovieContainer';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      allMovies: [],
      movieArchive: [],
    };
    this.submitHandler = this.submitHandler.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
    this.sortThem = this.sortThem.bind(this);
  }

  deleteMovie(id) {
    axios.delete('/api/deleteMovie/' + id)
    .then(({data}) => {
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
        <MovieContainer />
        <a href="/">
          <img src='https://image.ibb.co/jprur5/KMDb.png' width="130" />
        </a>
        <h1 className="mainTitle">Kiwook's Movie Database</h1>
        <div className="filmPic"></div> 
        {/* <Search movies={this.state.allMovies} getAllMovies={this.getAllMovies} submitHandler={this.submitHandler} archive={this.state.movieArchive} /> */}
        <div className="sortButtons">
          <label>Sort by: </label>
          <button className="sortTitle" onClick={() => {this.sortThem('title')}}> Title </button>
          <button className="sortIMDBrating" onClick={() => {this.sortThem('rating')}}> IMDB Rating </button>
          <button className="sortRating" onClick={() => {this.sortThem('myRating')}}> My Rating </button>
        </div>
        <MovieList movies={this.state.allMovies} deleteMovie={this.deleteMovie} />
      </div>
    )
  }
}


export default App;