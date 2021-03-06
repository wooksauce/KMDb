import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Search from '../components/Search';
import PosterArea from '../components/PosterArea';

import classNames from 'classnames/bind';
import styles from './scss/mainView.scss'
const cx = classNames.bind(styles);

class MainView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dockSB: false,
    }
    this.dockSearchBar = this.dockSearchBar.bind(this);
    this.undockSearchBar = this.undockSearchBar.bind(this);
  }

  dockSearchBar() {
    this.setState({
      dockSB: true,
    })
  }

  undockSearchBar() {
    this.setState({
      dockSB: false,
    })
  }

  render() {
    const search = this.props.search;
    return (
      <div className={cx('main-view-container', {dock: this.state.dockSB})}>
        <div className={cx('main-view-top')}>
          <div className={cx('main-area-text')}>
            <p className={cx('bold-message')}> KMDb </p>
            <div className={cx('message-bar')} />
            <p className={cx('regular-message')}>
              This is your movie archive.
            </p>
          </div>
          <Search
            dockSearchBar={this.dockSearchBar}
            undockSearchBar={this.undockSearchBar}
          />
        </div>
        <div className={cx('main-view-bottom')}>
          <PosterArea
            carousel={this.props.carousel}
          />
        </div>
      </div>
    )
  }
}

MainView.PropTypes = {
  carousel: PropTypes.array,
}

export default MainView;