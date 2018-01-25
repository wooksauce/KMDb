import React, { Component } from 'react';

class MovieArchiveEntry extends Component{
  constructor(props) {
    super(props)
  }

  render() {
    const { title, posterUrl, year, genre, imdbRating, userRating, userComment } = this.props.movie
    if (!title) {
      return null;
    }
    return (
      <div className="userArchEntryContainer">
        <div className="userArchEntry posterContainer">
          <img className="userArchPoster" />
        </div>
        <div className="userArchEntry titleContainer">
          <span className="userArchText titleText">
          </span>
          <span className="userArchText title">
            <p> {movie.title} </p>
          </span>
        </div>
        <div className="userArchEntry yearContainer">
        </div>
        <div className="userArchEntry genreContainer">
        </div>
        <div className="userArchEntry userRatingContainer">
        </div>
        <div className="userArchEntry userCommentContainer">
        </div>
      </div>
    )
  }
}

export default MovieArchiveEntry;