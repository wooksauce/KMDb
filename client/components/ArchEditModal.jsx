import React, { Component } from 'react';
import Modal from 'react-modal';
import classNames from 'classnames/bind';
import styles from './scss/archEditModal.scss';
import axios from 'axios';

const cx = classNames.bind(this);

class ArchEditModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userRating: this.props.userRating,
      userComment: this.props.userComment,
    }
    this.handleSave = this.handleSave.bind(this);
  }

  handleSave(id) {
    console.log('im here', this.state.userRating)
    axios.put(`/api/updateMovie/${id}`, {
      userRating: this.state.userRating,
      userComment: this.state.userComment,
    })
    this.props.handleCloseModal();
  }

  render() {
    return (
      <Modal
        style={
          {
          content:{
            background: 'white',
            border: '0',
            borderRadius: '4px',
            minHeight: '200px',
            maxHeight: '280px',
            width: '50%',
            height: '40%',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)', // adjust top "up" based on height
          }
        }
        }
        isOpen={this.props.showModal}
        contentLabel="onRequestClose Example"
        onRequestClose={this.props.handleCloseModal}
        appElement={document.getElementById('app')}
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
              onChange={(e) => this.props.handleUserRating.bind(this, e.target.value)}
              required
            />
          </div>
          <div className={cx('modalUserComment')}>
            <label className={cx('modalCommentText')} htmlFor="userComment"> Your Comment: </label>
            <textarea
              id="userComment"
              defaultValue={this.state.userComment}
              // onChange={(e) => this.handleMyComment(e.target.value)}
            >
            </textarea>
          </div>
          <div className={cx('modalSaveButton')}>
            <button
              onClick={() => {this.handleSave(this.props.movieId)}}
              className={cx('modalButton')}
              type="button"
              // className="modalSaveButton"
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