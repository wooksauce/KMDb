import React, { Component } from 'react';
import $ from 'jquery';
import axios from 'axios';

class MovieArchiveEntry extends Component{
  constructor(props) {
    super(props)
    this.state = {
      expanded: false,
    }
    this.handleExpand = this.handleExpand.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleExpand(el) {
    if (!this.state.expanded) {
      $(el).closest(".archEntryContainer").css({
        'height': 'auto',
      });
      $(el).closest(".archEntryContainer").find(".userCommentContainer").css({
        'max-height': '100%',
      });
      this.setState({expanded: true});
    } else {
      $(el).closest(".archEntryContainer").css({
        'height': '200px',
      });
      $(el).closest(".archEntryContainer").find(".userCommentContainer").css({
        'max-height': '7em',
      });
      this.setState({expanded: false});
    }
  }

  handleDelete(e, movieId) {
    if (!e) var e = window.event;
    // e.cancelBubble = true;
    if (e.stopPropagation) e.stopPropagation();
    axios.delete(`api/deleteMovie/${movieId}`)
  }

  render() {
    console.log('movie here', this.props.movie)
    const { title, posterUrl, year, genre, imdbRating, userRating, userComment, id } = this.props.movie
    if (!title) {
      return null;
    }
    return (
      <div className="archEntryContainer nth" onClick={(e)=>this.handleExpand(e.target)}>
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
          <div className="archButtonContainer" >
            <span className="far fa-edit archEditButton"></span>
            <div className="archEditButtonContainer" onClick={(e)=>this.handleDelete(e, id)}>
              <span className="far fa-trash-alt archEditButton"></span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MovieArchiveEntry;