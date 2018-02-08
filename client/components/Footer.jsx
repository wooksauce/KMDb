import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './scss/footer.scss';

const cx = classNames.bind(styles);

class Footer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={cx('footer-area')}>
      </div>
    )
  }
}

export default Footer;