import React, {Component} from 'react';

class MovieEntry extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="movieEntry">
        <div className="container">
          <img className="poster" src={this.props.poster} width="180" />
          <div className="title"> {this.props.title} </div>
          <div className="year"> {this.props.year} </div>
          <div className="genre"> {this.props.genre} </div>
          <div className="rating"> {this.props.rating} </div>
          <div className="myRating"> {this.props.myRating} </div>
          <div className="comments"> {this.props.comments} </div>
        </div>
        <button id="deleteButton" onClick={() => this.props.deleteMovie(this.props.id)}> x </button>
      </div>
    )
  }
}

export default MovieEntry;