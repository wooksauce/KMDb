import React, { Component } from 'react';

class MovieCarousel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      carouselPos: 0,
    }
    this.clickPrev=this.clickPrev.bind(this);
    this.clickNext=this.clickNext.bind(this);
  }

  clickPrev() {
    if (this.state.carouselPos > 0) {
      this.setState({carouselPos: this.state.carouselPos - 1})
    } else {
      this.setState({carouselPos: 2});
    }
  };

  clickNext() {
    if (this.state.carouselPos < 2) {
      this.setState({carouselPos: this.state.carouselPos + 1})
    } else {
      this.setState({carouselPos: 0});
    }
  };

  render() {
    const { carousel } = this.props;
    if (!carousel || !carousel.length) {
      return null
    }
    console.log('pos', this.state.carouselPos)
    let slide = carousel[this.state.carouselPos];
    return(
      <div className="carouselContainer">
        <div onClick={()=>this.clickPrev()}> Prev </div>
        <div className="carouselImgContainer">
          <img className="carouselImg" src={slide.poster} height="180px" />
        </div>
        <div onClick={()=>this.clickNext()}> Next </div>
      </div>
    )
  }
}

export default MovieCarousel;