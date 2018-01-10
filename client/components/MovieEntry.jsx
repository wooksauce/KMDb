import React, { Component } from 'react';

export default class MovieEntry extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { title, poster, year, genre, rating, myRating, comments, imdb } = this.props.movie;
    const resultSource = imdb ? 'imdb' : 'udb'
    const displayPoster = displayPosterImage(poster, resultSource);
    return(
      <div className={resultSource + "MovieEntry"}>
        <div className={resultSource + "MovieEntryContainer"}>
          {/* <img className={resultSource + "MovieEntryPoster"} src={poster} width='140'/> */}
          {displayPoster}
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

const displayPosterImage = (posterUrl, dataSource) => {
  if (!posterUrl || posterUrl === 'N/A') {
    return(
      <div className={dataSource + "NoPoster"}>
        <p> No poster </p>
      </div>
    );
  }
  return(
    <img className={dataSource + "MovieEntryPoster"} src={posterUrl} width='140'/>
  );
}