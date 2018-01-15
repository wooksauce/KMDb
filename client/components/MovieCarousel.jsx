import React, { Component } from 'react';

class MovieCarousel extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    const { carousel } = this.props;
    if (!carousel || !carousel.length) {
      return null
    }
    const carouselImgs = makeCarousels(carousel);
    return(
      <div className="carouselContainer">
        {carouselImgs}
      </div>
    )
  }
}

const makeCarousels = (carouselData = []) => {
  if (carouselData.length) {
    return carouselData.map((carousel) =>
      <div className="carouselImgContainer">
        <img className="carouselImg" src={carousel.poster} height="180px" />
      </div>
    )
  }
}

export default MovieCarousel;