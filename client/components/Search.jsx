import React, { Component } from 'react';
import { connect } from 'react-redux';
import { moviesIMDbSearchTitle, moviesFetchUDbSearch, moviesFetchIMDbSearch } from '../actions/moviesActions'
import classNames from 'classnames/bind';
import styles from './scss/search.scss'
import throttle from 'lodash.throttle';

const cx = classNames.bind(styles);

class Search extends Component {
  constructor(props) {
    super(props)
  }

  autoScrollTo(target, offset=0) {
    let targetDiv = document.getElementsByClassName(target)[0]
    let targetPos = targetDiv.getBoundingClientRect().bottom + window.pageYOffset + offset;
    console.log('??/', targetPos, offset)
    window.scroll({
      left: 0,
      top: targetPos,
      behavior: 'smooth',
    });
  }

  dockingSBThrottle() {
    let elSearchBar = document.getElementsByClassName('search-bar')[0];
    let osSearchBar = elSearchBar.getBoundingClientRect().top;
    return (
      throttle(() => {
        elSearchBar.style.top = 0;
        let screenTop = window.pageYOffset;
        if (screenTop >= osSearchBar) {
          this.props.dockSearchBar();
        } else {
          this.props.undockSearchBar();
        }
      }, 20)
    )
  }

  componentDidMount() {
    window.addEventListener('scroll', this.dockingSBThrottle());
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.dockingSBThrottle());
  }

  handleSearchTyping(e) {
    this.props.searchTitle(e.target.value);
  }

  searchForTitle() {
    this.props.fetchIMDbSearchResults(this.props.search);
    this.props.fetchUDbSearchResults(this.props.search);
  }

  keyPressEnter(e) {
    if (e.key === 'Enter' || e.which == 13 || e.keyCode == 13) {
      e.preventDefault();
      this.searchForTitle();
      this.autoScrollTo('main-poster-container', 10)
    }
  }

  render() {
    return (
      <div className={cx('search-bar')}>
        <form className={cx('search-form')}>
          <input
            className={cx('search-title-field')}
            type="text"
            placeholder="Find Movies or Users!"
            onChange={(e) => this.handleSearchTyping(e)}
            onKeyPress={(e) => this.keyPressEnter(e)}
          />
        </form>
        <button
          className={cx('search-button')}
          onClick={() => this.searchForTitle()}
        >
        Search
        </button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    searchTitle: (title) => {
      dispatch(moviesIMDbSearchTitle(title));
    },
    fetchIMDbSearchResults: (searchStr) => {
      dispatch(moviesFetchIMDbSearch(searchStr));
    },
    fetchUDbSearchResults: (searchStr) => {
      dispatch(moviesFetchUDbSearch(searchStr));
    },
  };
}

export default connect(null, mapDispatchToProps)(Search);