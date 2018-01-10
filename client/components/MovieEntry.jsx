import React, { Component } from 'react';

export default class MovieEntry extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { title, poster, year, genre, rating, myRating, comments, imdb } = this.props.movie;
    let resultSource = 'udb'
    if (imdb) {
      resultSource = 'imdb'
    }
    return(
      <div className={resultSource + "MovieEntry"}>
        <div className={resultSource + "MovieEntryContainer"}>
          <img className={resultSource + "MovieEntryPoster"} src={poster} width='140'/>
          <div className={resultSource + "MovieInfoContainer"}>
            <div className={resultSource + "ImdbInfo"}>
              <div className={resultSource + "Info title"}> {title} </div>
              <div className={resultSource + "Info year"}> {year} </div>
              <div className={resultSource + "Info genre"}> {genre} </div>
              <div className={resultSource + "Info rating"}> {rating} </div>
            </div>
            <div className={resultSource + "MyInfo"}>
              <div className={resultSource + "Info myRating"}> {myRating} </div>
              <div className={resultSource + "Info comments"}> {comments} </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}