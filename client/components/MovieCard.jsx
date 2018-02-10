import React, { Component } from 'react';
import MovieCardModal from './MovieCardModal';
import axios from 'axios';
import classNames from 'classnames/bind';
import styles from './scss/movieCard.scss';

const cx = classNames.bind(styles);

export default class MovieCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showInitModal: false,
      userRating: '',
      userComment: '',
    }
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleOpenModal (bool) {
    if (bool) {
      this.setState({showInitModal: true});
    }
  }

  handleCloseModal () {
    this.setState({showInitModal: false});
  }

  handleDelete(movieId) {
    axios.delete(`api/deleteMovie/${movieId}`)
  }

  render() {
    const { title, poster, posterUrl, year, userRating, userComment, id, imdbid } = this.props.movie;
    const fromImdb = this.props.imdb;;
    let posterToDisplay
    if (posterUrl) {
      posterToDisplay = posterUrl;
    } else if (poster !== 'N/A') {
      posterToDisplay = poster;
    } else {
      posterToDisplay = 'https://i5.walmartimages.com/asr/f752abb3-1b49-4f99-b68a-7c4d77b45b40_1.39d6c524f6033c7c58bd073db1b99786.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF';
    }
    return(
      <div className={cx({fromImdb: fromImdb}, 'movie-entry')}>
        <div className={cx({fromImdb: fromImdb}, 'movie-entry-container')} onClick={() => this.handleOpenModal(fromImdb)}>
        <MovieCardModal
          isOpen={this.state.showInitModal}r
          contentLabel="onRequestClose Example"
          onRequestClose={this.handleCloseModal}
          appElement={document.getElementById('app')}
          handleUserRating={this.props.handleUserRating}
          handleUserComment={this.props.handleUserComment}
          handleCloseModal={this.handleCloseModal}
        />
          <img className={cx({fromImdb: fromImdb}, 'movie-entry-poster')} src={posterToDisplay} />
          <div className={cx({fromImdb: fromImdb}, 'movie-info-container')}>
            <div className={cx({fromImdb: fromImdb}, 'imdb-info')}>
              <span className={cx({fromImdb: fromImdb}, 'movie-entry-title')}> Title: </span>
              <span className={cx({fromImdb: fromImdb}, 'info', 'title')}> {title} </span>
              <div className={cx({fromImdb: fromImdb}, 'info', 'year')}> {year} </div>
              <div className={cx({fromImdb: fromImdb}, 'info', 'genre')}> genre </div>
              {/* <div className={resultSource + "Info rating"}> {imdbRating} </div> */}
            </div>
            <div className={cx({fromImdb: fromImdb}, 'userInfo')}>
              <div className={cx({fromImdb: fromImdb}, 'info', 'userRating')}> {userRating} </div>
              <div className={cx({fromImdb: fromImdb}, 'info', 'userComments')}> {userComment} </div>
            </div>
            <button
              className={cx({fromImdb: fromImdb}, 'delButton')}
              onClick={() => this.handleDelete(id)}
            >
            x
            </button>
          </div>
        </div>
      </div>
    );
  }
}