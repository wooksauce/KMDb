import React, { Component } from 'react';
import ReactModal from 'react-modal';

export default class MovieEntry extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false,
    }
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal () {
    this.setState({ showModal: true });
  }

  handleCloseModal () {
    this.setState({ showModal: false });
  }

  render() {
    const { title, poster, year, genre, rating, myRating, comments, imdb } = this.props.movie;
    const resultSource = imdb ? 'imdb' : 'udb'
    const posterUrl = (!poster || poster === 'N/A') ? 'https://i5.walmartimages.com/asr/f752abb3-1b49-4f99-b68a-7c4d77b45b40_1.39d6c524f6033c7c58bd073db1b99786.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF' : poster;
    return(
      <div className={resultSource + "MovieEntry"}>
        <div className={resultSource + "MovieEntryContainer"} onClick={this.handleOpenModal}>
        <ReactModal
           isOpen={this.state.showModal}
           contentLabel="onRequestClose Example"
           onRequestClose={this.handleCloseModal}
        >
          <p>Modal text!</p>
          <button onClick={this.handleCloseModal}>Close Modal</button>
        </ReactModal>
          <img className={resultSource + "MovieEntryPoster"} src={posterUrl} width='140'/>
          <div className={resultSource + "MovieInfoContainer"}>
            <div className={resultSource + "ImdbInfo"}>
              <div className={resultSource + "Info title"}> {title} </div>
              <div className={resultSource + "Info year"}> {year} </div>
              <div className={resultSource + "Info genre"}> {genre} </div>
              <div className={resultSource + "Info rating"}> {rating} </div>
            </div>
            <div className={resultSource + "MyInfo"}>
              <div className={resultSource + "Info myRating"}> {myRating} </div>
              <div className={resultSource + "Info comments"}> {comments} </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}