import React, { Component } from 'react';
import Search from '../components/Search';
import MovieContainer from '../container/MovieContainer';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="basePage appGrid">
        <div className="topHeader">
          <a href="/" className="siteLogo">
            <img src='https://image.ibb.co/jprur5/KMDb.png' width="130" />
          </a>
          <h1 className="mainTitle">Kiwook's Movie Database</h1>
        </div>
        <MovieContainer />
      </div>
    )
  }
}


export default App;