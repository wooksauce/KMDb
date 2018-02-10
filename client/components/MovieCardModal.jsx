import React, { Component } from 'react';
import ReactModal from 'react-modal';
import classNames from 'classnames/bind';
import styles from './scss/movieCardModal.scss';
import axios from 'axios';

const cx = classNames.bind(styles);

class MovieCardModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userRating: '',
      userComment: '',
    }
    this.handleUserRating = this.props.handleUserRating.bind(this);
    this.handleUserComment = this.props.handleUserComment.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  handleSave() {
    const { title, poster, year, imdbid } = this.props.movie;
    axios.get(`/api/getMovie/${imdbid}`)
      .then(({ data }) => {
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
    this.props.handleCloseModal();
  }

  render() {
    return(
      <ReactModal
        isOpen={this.props.showInitModal}
        contentLabel="onRequestClose Example"
        onRequestClose={this.handleCloseModal}
        appElement={document.getElementById('app')}
        className="modal"
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
        <button onClick={this.props.handleCloseModal}>Close Modal</button>
      </ReactModal>
    )
  }
}

export default MovieCardModal;