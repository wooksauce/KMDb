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
      <div className={cx('header-tab-container')}>
        <div className={cx('Sign-up header-tab')}> Dummy 1 </div>
        <div className={cx('Log-in header-tab')}> Dummy 2 </div>
      </div>
    </div>
    )
  }
}

export default Header;