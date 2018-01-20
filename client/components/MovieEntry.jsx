import React, { Component } from 'react';
import Modal from 'react-modal';

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
        <Modal
           isOpen={this.state.showModal}
           contentLabel="onRequestClose Example"
           onRequestClose={this.handleCloseModal}
        >
          <p className="modalTitle">Modal Title Goes Here</p>
          <form>
            <div>
              <label htmlFor="userMovieRating"> Your Rating: </label>
              <input
                id="userMovieRating"
                type="number"
                step="0.1"
                min="1"
                max="10"
                required
                // onChange={(e) => this.handleSearchTyping(e)}
                // onKeyPress={(e) => this.keyPressEnter(e)}
              />
            </div>
            <div>
              <label htmlFor="userComment"></label>
              <textarea
                id="userComment"
                placeholder="write how you feel about the movie here"
              >
              </textarea>
            </div>
            <div>
              <input type="submit"/>
            </div>
          </form>
          <button onClick={this.handleCloseModal}>Close Modal</button>
        </Modal>
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