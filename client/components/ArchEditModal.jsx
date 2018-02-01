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
            width:'400px',
          }
        }
        }
        isOpen={this.props.showModal}
        contentLabel="onRequestClose Example"
        onRequestClose={this.props.handleCloseModal}
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
              defaultValue={this.props.userRating}
              // onChange={(e) => this.handleMyRating(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="userComment"></label>
            <textarea
              id="userComment"
              defaultValue={this.props.userComment}
              onChange={(e) => this.handleMyComment(e.target.value)}
            >
            </textarea>
          </div>
          <div>
            <button
              type="button"
              className="userInfoSaveButton"
              // onClick={this.handleSave}
            >
            Save
            </button>
          </div>
        </form>
        <button onClick={this.handleCloseModal}>Close Modal</button>
      </Modal>
    )
  }
}

export default ArchEditModal;