import React, { Component } from 'react';

export default class udbSearchMovieEntry extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { title, poster, year, genre, rating, myRating, comments } = this.props.movie;
    return(
      <div className="udbMovieEntry">
        <div className="udbMovieEntryContainer">
          <img className="udbMovieEntryPoster" src={poster} />
          <div className="udbMovieInfoContainer">
            <div className="udbImdbInfo">
              <div className="udbInfo title"> {title} </div>
              <div className="udbInfo year"> {year} </div>
              <div className="udbInfo genre"> {genre} </div>
              <div className="udbInfo rating"> {rating} </div>
            </div>
            <div className="udbMyInfo">
              <div className="udbInfo myRating"> {myRating} </div>
              <div className="udbInfo comments"> {comments} </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}