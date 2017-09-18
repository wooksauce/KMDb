import React, { Component } from 'react';
import Movies from './Movies';
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
    axios.get('api/getMovies')
    .then(movies => {
      this.setState = {
        allMovies: movies
      }
    })
  }

  render() {
    return (
      <div>
        <Search />
        <Movies movies={this.state}/>
      </div>
    )
  }
}


export default App;