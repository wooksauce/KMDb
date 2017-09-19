import React, {Component} from 'react';

class MovieEntry extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="movieEntry">
        <div className="entryContainer">
          <button className="deleteButton" onClick={() => this.props.deleteMovie(this.props.id)}> x </button>
          <img className="poster" src={this.props.poster} width="140" />
          <div className="imdbInfo">
            <div className="title"> Movie Title:  {this.props.title} </div>
            <div className="year"> Release Year:  {this.props.year} </div>
            <div className="genre"> Genre:  {this.props.genre} </div>
            <div className="rating"> IMDb Rating:  {this.props.rating} </div>
          </div>
          <div className="myInfo">
            <div className="myRating"> KMDb Rating:  {this.props.myRating} </div>
            <p className="comments"> Comments:  {this.props.comments} </p>
          </div>
        </div>
      </div>
    )
  }
}

export default MovieEntry;