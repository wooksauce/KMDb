import React, { Component } from 'react';

class MovieArchiveEntry extends Component{
  constructor(props) {
    super(props)
  }

  handleExpand(n) {
    //change nth-child's style here
  }

  handleCollapse () {

  }

  render() {
    console.log('movie here', this.props.movie)
    const { title, posterUrl, year, genre, imdbRating, userRating, userComment } = this.props.movie
    if (!title) {
      return null;
    }
    const nth = this.props.nth;
    // console.log('nth',nth)
    return (
      <div className="archEntryContainer nth">
        <div className="archEntry posterContainer">
          <img className="userArchPoster" src={posterUrl} height="170px" />
        </div>
        <div className="archEntry fieldContainer">
          <div className="archEntry titleContainer">
            <p className="field archText">Title:&nbsp;</p>
            <p className="field archTitle archValue"> {title} </p>
          </div>
          <div className="archEntry yearContainer">
            <p className="field archText">Year:&nbsp;</p>
            <p className="field archYear archValue"> {year} </p>
          </div>
          <div className="archEntry genreContainer">
            <p className="field archText">Genre:&nbsp;</p>
            <p className="field archGenre archValue"> {genre} </p>
          </div>
          <div className="archEntry userRatingContainer">
            <p className="field archText">My Rating:&nbsp;</p>
            <p className="field archUserRating archValue"> {userRating} </p>
          </div>
          <div className="archEntry userCommentContainer">
            <p className="field archUserComment archValue">
              <span className="field archText">My Comment:&nbsp;</span>
              {userComment}
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default MovieArchiveEntry;