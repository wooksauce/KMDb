import React, { Component } from 'react';
import Search from '../components/Search';
import MovieContainer from '../container/MovieContainer';
import axios from 'axios';
import classNames from 'classnames/bind'
import styles from './app.scss'
const cx = classNames.bind(styles);

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className={cx('appGrid')}>
        <div className={cx('topHeader')}>
          <a href="/" className={cx('siteLogo')}>
            <img src='https://image.ibb.co/jprur5/KMDb.png' width="130" />
          </a>
          <h1 className={cx('mainTitle')}>Kiwook's Movie Database</h1>
        </div>
        <MovieContainer />
      </div>
    )
  }
}


export default App;