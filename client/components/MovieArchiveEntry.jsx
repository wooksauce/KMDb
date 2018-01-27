import React, { Component } from 'react';
import $ from 'jQuery';

class MovieArchiveEntry extends Component{
  constructor(props) {
    super(props)
    this.state = {
      expanded: false,
    }
    this.handleExpand = this.handleExpand.bind(this);
  }

  handleExpand(e) {
    $(e.target).closest(".archEntryContainer").css({
      'height': 'auto',
    })
    $(e.target).closest(".archEntryContainer").find(".userCommentContainer").css({
      'max-height': '100%',
    })
    // console.log('expanded', this.state.expanded)
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
      <div className="archEntryContainer nth" onClick={(e) => this.handleExpand(e)}>
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