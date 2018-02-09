import React, { Component } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import classNames from 'classnames/bind';
import styles from './scss/movieCard.scss';

const cx = classNames.bind(styles);

export default class MovieEntry extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false,
      userRating: '',
      userComment: '',
    }
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleUserRating = this.handleUserRating.bind(this);
    this.handleUserComment = this.handleUserComment.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleOpenModal (bool) {
    if (bool) {
      this.setState({showModal: true});
    }
  }

  handleCloseModal () {
    this.setState({showModal: false});
  }

  handleUserRating(num) {
    this.setState({userRating: num})
  }

  handleUserComment(text) {
    this.setState({userComment: text})
  }

  handleSave() {
    const { title, poster, year, imdbid } = this.props.movie;
    axios.get(`/api/getMovie/${imdbid}`)
      .then(({ data }) => {
        console.log('im here man', data)
        axios.post('/api/saveMovie', {
          title: data.title,
          posterUrl: data.poster,
          year: data.year,
          genres: data.genres,
          director: data.director,
          actors: data.actors,
          userRating: this.state.userRating,
          userComment: this.state.userComment,
        })
      })
      .catch(err => {
        console.log('an error occured while saving the movie', err);
      })
    this.handleCloseModal();
  }

  handleDelete(movieId) {
    axios.delete(`api/deleteMovie/${movieId}`)
  }

  render() {
    const { title, poster, posterUrl, year, userRating, userComment, id, imdbid } = this.props.movie;
    // const imdb = this.props.imdb;
    // const resultSource = imdb ? 'imdb' : 'udb'
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
        <Modal
           isOpen={this.state.showModal}r
           contentLabel="onRequestClose Example"
           onRequestClose={this.handleCloseModal}
           appElement={document.getElementById('app')}
        >
          <p className="entryModalTitle">Modal Title Goes Here</p>
          <form>
            <div>
              <label htmlFor="userMovieRating"> Your Rating: </label>
              <input
                id="userMovieRating"
                type="number"
                step="0.1"
                min="1"
                max="10"
                onChange={(e) => this.handleUserRating(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="userComment"></label>
              <textarea
                id="userComment"
                placeholder="write whatever you wanna say about the movie"
                onChange={(e) => this.handleUserComment(e.target.value)}
              >
              </textarea>
            </div>
            <div>
              <button
                type="button"
                className="userInfoSaveButton"
                onClick={this.handleSave}
              >
              Save
              </button>
            </div>
          </form>
          <button onClick={this.handleCloseModal}>Close Modal</button>
        </Modal>
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