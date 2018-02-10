import React, { Component } from 'react';
import Modal from 'react-modal';
import classNames from 'classnames/bind';
import styles from './scss/archEditModal.scss';
import axios from 'axios';

const cx = classNames.bind(styles);

class ArchEditModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userRating: this.props.userRating,
      userComment: this.props.userComment,
    }
    this.handleSave = this.handleSave.bind(this);
    this.handleUserRating = this.props.handleUserRating.bind(this);
    this.handleUserComment = this.props.handleUserComment.bind(this);
  }

  handleSave(id) {
    axios.put(`/api/updateMovie/${id}`, {
      userRating: this.state.userRating,
      userComment: this.state.userComment,
    })
      .then(() => {
        this.props.fetchAllMovies();
      })
      .catch(err => {
        console.log('error saving', err);
      })
    this.props.handleCloseModal();
  }

  render() {
    return (
      <Modal
        isOpen={this.props.showModal}
        contentLabel="onRequestClose Example"
        onRequestClose={this.props.handleCloseModal}
        appElement={document.getElementById('app')}
        className="modal"
        // overlayClassName="overlay"
      >
        <p className="entryModalTitle">Modal Title Goes Here</p>
        <br />
        <form>
          <div className={cx('modalMovieRating')}>
            <label htmlFor="userMovieRating"> Your Rating: </label>
            <input
              id={cx('userMovieRating')}
              type="number"
              step="0.1"
              min="1"
              max="10"
              defaultValue={this.state.userRating}
              onChange={(e) => this.handleUserRating(e.target.value)}
              // onChange = {() => console.log('onchange', this.props.handleUserRating)}
              required
            />
          </div>
          <div className={cx('modalUserComment')}>
            <label className={cx('modalCommentText')} htmlFor="userComment"> Your Comment: </label>
            <textarea
              id="userComment"
              defaultValue={this.state.userComment}
              onChange={(e) => this.handleUserComment(e.target.value)}
              // onChange={(e) => this.handleMyComment(e.target.value)}
            >
            </textarea>
          </div>
          <div className={cx('modalSaveButton')}>
            <button
              onClick={() => {this.handleSave(this.props.movieId)}}
              className={cx('modalButton')}
              type="button"
              // onClick={this.handleSave}
            >
            Save
            </button>
          </div>
        </form>
        <div className={cx('modalCloseButton')}>
          <button className={cx('modalButton')} onClick={this.props.handleCloseModal}>Close</button>
        </div>
      </Modal>
    )
  }
}

export default ArchEditModal;