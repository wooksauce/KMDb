import React, { Component } from 'react'

class Search extends Component {
  constructor() {
    super()
    this.state = {
      movieSearched: {}
    }
  }

  searchForMovie({title}) {
    axios.get('/api/searchMovie' + title)
    .then(movie => {
      this.setState = {
        movieSearched: movie
      };
    })
    .catch(err => {
      console.log(err);
    })
  }

  render() {
    return (
      <div className="search">
        
      </div>
    )
  }
}

export default Search;