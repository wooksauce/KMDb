import React, { Component } from 'react';

class MovieArchiveEntry extends Component{
  constructor(props) {
    super(props)
  }

  render() {
    console.log('movie here', this.props.movie)
    const { title, posterUrl, year, genre, imdbRating, userRating, userComment } = this.props.movie
    if (!title) {
      return null;
    }
    return (
      <div className="userArchEntryContainer">
        <div className="userArchEntry posterContainer">
          <img className="userArchPoster" src={posterUrl} width="180px" />
        </div>
        <div className="userArchEntry titleContainer">
          <span className="userArchText titleText">
          </span>
          <span className="userArchText title">
            <p> {title} </p>
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