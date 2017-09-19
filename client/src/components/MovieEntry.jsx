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
            <div className="info title"> Movie Title:  {this.props.title} </div>
            <div className="info year"> Release Year:  {this.props.year} </div>
            <div className="info genre"> Genre:  {this.props.genre} </div>
            <div className="info rating"> IMDb Rating:  {this.props.rating} </div>
          </div>
          <div className="myInfo">
            <div className="info myRating"> KMDb Rating:  {this.props.myRating} </div>
            <p className="info comments"> Comments:  {this.props.comments} </p>
          </div>
        </div>
      </div>
    )
  }
}

export default MovieEntry;