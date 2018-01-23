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
    let slide = carousel[this.state.carouselPos];
    const imgStyles = {
      'backgroundImage': `url(${slide.posterUrl})`,
    }
    return(
      <div className="carouselContainer">
        <div className="carouselImgContainer">
          <div
            className="carouselImg"
            style={imgStyles}
          />
          <div className="prev" onClick={()=>this.clickPrev()}>
            <span className="arrows arrowLeft">&#8249;</span>
          </div>
          <div className="next" onClick={()=>this.clickNext()}>
            <span className="arrows arrowRight">&#8250;</span>
          </div>
        </div>
      </div>
    )
  }
}

export default MovieCarousel;