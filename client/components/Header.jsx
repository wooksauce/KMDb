import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './scss/header.scss';

const cx = classNames.bind(styles);

class Header extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={cx('header-area')}>
        <a href="/" className={cx('site-logo')}>
          <img
            className={cx('logo-img')}
            src='https://image.ibb.co/jprur5/KMDb.png'
          />
        </a>
        {/* <h1 className={cx('mainTitle')}>Kiwook's Movie Database</h1> */}
    </div>
    )
  }
}

export default Header;