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
      axios.get(`api/checkForMovie/${this.props.movie.imdbid}`)
        .then(({ data }) => {
          if (!data) {
            this.setState({showInitModal: true});
          } else {
            alert('You already have this movie!');
          }
        })
    }
  }

  handleCloseModal () {
    this.setState({showInitModal: false});
  }

  handleDelete(movieId) {
    axios.delete(`api/deleteMovie/${movieId}`)
  }

  render() {
    const { title, poster, posterUrl, year, userRating, userComment, id, imdbid, genres } = this.props.movie;
    const fromImdb = this.props.imdb;
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
        <div className={cx({fromImdb: fromImdb}, 'movie-card-container')}>
          <img className={cx({fromImdb: fromImdb}, 'movie-card-poster')} src={posterToDisplay} />
          <div className={cx({fromImdb: fromImdb}, 'movie-card-info-con')}>
            <div className={cx({fromImdb: fromImdb}, 'imdb-info')}>
              <div className={cx({fromImdb: fromImdb}, 'movie-card-title')}>
                <span className={cx({fromImdb: fromImdb}, 'movie-card-info', 'title')}> {title} </span>
              </div>
              <div className={cx({fromImdb: fromImdb}, 'movie-card-year')}>
                <p className={cx({fromImdb: fromImdb}, 'movie-card-info', 'year-text')}>Year:&nbsp;</p>
                <p className={cx({fromImdb: fromImdb}, 'movie-card-info', 'year')}> {year} </p>
              </div>
              <div className={cx({fromImdb: fromImdb}, 'movie-card-genres')}>
                <p className={cx({fromImdb: fromImdb}, 'movie-card-info', 'genres-text')}>Genres:&nbsp;</p>
                <p className={cx({fromImdb: fromImdb}, 'movie-card-info', 'genres')}> {genres} </p>
              </div>
            </div>
            <div className={cx({fromImdb: fromImdb}, 'movie-card-user-input')}>
              <div className={cx({fromImdb: fromImdb}, 'movie-card-info', 'userRating')}> {userRating} </div>
              <div className={cx({fromImdb: fromImdb}, 'movie-card-info', 'userComments')}> {userComment} </div>
            </div>
            <div className={cx({fromImdb: fromImdb}, 'movie-card-button-area')}>
              <div className={cx({fromUdb: !fromImdb}, 'other-reviews-button', 'movie-card-button')}>
                <p className={cx('movie-card-button-text')}> Other Reviews </p>
              </div>
              <div className={cx({fromUdb: !fromImdb}, 'add-button', 'movie-card-button')} onClick={() => this.handleOpenModal(fromImdb)}>
                <p className={cx('movie-card-button-text')}> Add </p>
                <MovieCardModal
                  showInitModal={this.state.showInitModal}
                  isOpen={this.state.showInitModal}r
                  contentLabel="onRequestClose Example"
                  onRequestClose={this.handleCloseModal}
                  appElement={document.getElementById('app')}
                  handleUserRating={this.props.handleUserRating}
                  handleUserComment={this.props.handleUserComment}
                  handleCloseModal={this.handleCloseModal}
                  imdbid={imdbid}
                />
              </div>
              <div
                className={cx({fromImdb: fromImdb}, 'del-button', 'movie-card-button')}
                onClick={() => this.handleDelete(id)}
              >
                <p className={cx('movie-card-button-text')}> Delete </p>
              </div>
            </div>
            {/* <div className={cx({fromImdb: fromImdb}, 'movie-card-del-button')} onClick={() => this.handleDelete(id)}>
              <p className={cx('movie-del-button-text')}> Delete </p>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}