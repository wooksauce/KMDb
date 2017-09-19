import React, {Component} from 'react';

class MovieEntry extends Component {

  render() {
    return (
      <div className="movieEntry">
        <div className="container">
          <div className="poster"> {poster} </div>
          <div className="title"> {title} </div>
        </div>
      </div>
    )
  }
}

export default MovieEntry