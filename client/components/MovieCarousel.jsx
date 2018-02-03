import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './scss/movieCarousel.scss'

const cx = classNames.bind(styles);

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
      <div className={cx('carouselContainer')}>
        <div className={cx('carouselImgContainer')}>
          <div
            className={cx('carouselImg')}
            style={imgStyles}
          />
          <div className={cx('prev')} onClick={()=>this.clickPrev()}>
            <span className={cx('arrowLeft', 'arrows')}>&#8249;</span>
          </div>
          <div className={cx('next')} onClick={()=>this.clickNext()}>
            <span className={cx('arrowRight', 'arrows')}>&#8250;</span>
          </div>
        </div>
      </div>
    )
  }
}

export default MovieCarousel;