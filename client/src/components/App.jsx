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

  submitHandler(movie) {
    this.setState({allMovies: [movie]})
  }

  render() {
    return (
      <div>
        <a href="/">
          <img src='https://image.ibb.co/jprur5/KMDb.png' width="100" />
        </a>
        <Search movies={this.state.allMovies} getAllMovies={this.getAllMovies} submitHandler={this.submitHandler} archive={this.state.movieArchive} />
        <MovieList movies={this.state.allMovies} />
      </div>
    )
  }
}


export default App;