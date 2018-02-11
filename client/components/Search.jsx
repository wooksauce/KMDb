import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchIMDbSearchTitle, searchFetchUDbResults, searchFetchIMDbResults } from '../actions/searchActions'
import classNames from 'classnames/bind';
import styles from './scss/search.scss'
import throttle from 'lodash.throttle';

const cx = classNames.bind(styles);

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchStr: '',
    }
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
    this.setState({searchStr: e.target.value});
  }

  searchForTitle() {
    this.props.fetchIMDbSearchResults(this.state.searchStr);
    this.props.fetchUDbSearchResults(this.state.searchStr);
  }

  keyPressEnter(e) {
    if (e.key === 'Enter' || e.which == 13 || e.keyCode == 13) {
      e.preventDefault();
      this.searchForTitle();
      autoScrollTo('main-poster-container', 10)
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
          onClick={() => {
            this.searchForTitle();
            autoScrollTo('main-poster-container', 10)
          }}
        >
        Search
        </button>
      </div>
    )
  }
}

const autoScrollTo = (target, offset=0) => {
  let targetDiv = document.getElementsByClassName(target)[0]
  let targetPos = targetDiv.getBoundingClientRect().bottom + window.pageYOffset + offset;
  window.scroll({
    left: 0,
    top: targetPos,
    behavior: 'smooth',
  });
}

const mapDispatchToProps = (dispatch) => {
  return {
    searchTitle: (title) => {
      dispatch(searchIMDbSearchTitle(title));
    },
    fetchIMDbSearchResults: (searchStr) => {
      dispatch(searchFetchIMDbResults(searchStr));
    },
    fetchUDbSearchResults: (searchStr) => {
      dispatch(searchFetchUDbResults(searchStr));
    },
  };
}

export default connect(null, mapDispatchToProps)(Search);