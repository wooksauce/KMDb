import React, { Component } from 'react';
import Modal from 'react-modal';

class ArchEditModal extends Component {
  constructor(props) {
    super(props)

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
          <div className="modalMovieRating">
            <label htmlFor="userMovieRating"> Your Rating: </label>
            <input
              id="userMovieRating"
              type="number"
              step="0.1"
              min="1"
              max="10"
              defaultValue={this.props.userRating}
              // onChange={(e) => this.handleMyRating(e.target.value)}
              required
            />
          </div>
          <div className="modalUserComment">
            <label className="modalCommentText" htmlFor="userComment"> Your Comment: </label>
            <textarea
              id="userComment"
              defaultValue={this.props.userComment}
              // onChange={(e) => this.handleMyComment(e.target.value)}
            >
            </textarea>
          </div>
          <div className="modalSaveButton">
            <button
              className="modalButton"
              type="button"
              // className="modalSaveButton"
              // onClick={this.handleSave}
            >
            Save
            </button>
          </div>
        </form>
        <div className="modalCloseButton">
          <button className="modalButton" onClick={this.props.handleCloseModal}>Close</button>
        </div>
      </Modal>
    )
  }
}

export default ArchEditModal;