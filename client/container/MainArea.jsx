import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Search from '../components/Search';

import classNames from 'classnames/bind';
import styles from './scss/mainArea.scss'
const cx = classNames.bind(styles);

class MainArea extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const search = this.props.search;
    return (
      <div className={cx('main-area-container')}>
        <div className={cx('main-area-text')}>
          <p className={cx('bold-message')}> KMDB </p>
          <p className={cx('regular-message')}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          </p>
        </div>
        <div className={cx('search-area')}>
          <Search search={search} />
        </div>
      </div>
    )
  }
}

export default MainArea;