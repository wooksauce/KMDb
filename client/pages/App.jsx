import React, { Component } from 'react';
import Search from '../components/Search';
import MovieContainer from '../container/MovieContainer';
import axios from 'axios';
import classNames from 'classnames/bind'
import styles from './scss/app.scss'
const cx = classNames.bind(styles);

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className={cx('appGrid')}>
        <MovieContainer />
      </div>
    )
  }
}


export default App;