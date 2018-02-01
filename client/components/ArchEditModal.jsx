import React, { Component } from 'react';
import Modal from 'react-modal';

class ArchEditModal extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <Modal
        isOpen={this.props.showModal}
        contentLabel="onRequestClose Example"
        onRequestClose={this.props.handleCloseModal}
        appElement={document.getElementById('app')}
      >
      </Modal>
    )
  }
}

export default ArchEditModal;