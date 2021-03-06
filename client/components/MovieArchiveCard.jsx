import React, { Component } from 'react';
import PropTypes from 'prop-types';

import $ from 'jquery';
import axios from 'axios';
import { connect } from 'react-redux';
import { moviesMPFetchMovies } from '../actions/moviesActions';
import ArchEditModal from './ArchEditModal';
import classNames from 'classnames/bind';
import styles from './scss/movieArchiveCard.scss';

const cx = classNames.bind(styles);

class MovieArchiveCard extends Component{
  constructor(props) {
    super(props)
    this.state = {
      expanded: false,
      showEditModal: false,
    }
    this.handleExpand = this.handleExpand.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleExpand(el) {
    if (!this.state.expanded) {
      $(el).closest(".archEntryContainer").css({
        'height': 'auto'
      })
      $(el).closest(".archEntryContainer").find(".userCommentContainer").css({
        'max-height': '100%',
      });
      this.setState({expanded: true});
    } else {
      $(el).closest(".archEntryContainer").find(".userCommentContainer").css({
        'max-height': '2.4em',
      });
      this.setState({expanded: false});
    }
  }

  handleEdit(e) {
    document.getElementsByClassName('search-bar')[0].style.display = 'none';
    this.setState({showEditModal: true})
  }

  handleCloseModal() {
    document.getElementsByClassName('search-bar')[0].style.display = '';
    this.setState({showEditModal: false});
  }

  handleDelete(e, movieId) {
    if (!e) var e = window.event;
    if (e.stopPropagation) e.stopPropagation();
    let t = this;
    if (confirm('You sure?')) {
      axios.delete(`api/deleteMovie/${movieId}`)
        .then(() => {
          this.props.fetchAllMovies();
        })
    }
  }


  render() {
    const { title, posterUrl, year, genres, director, actors, userRating, userComment, id } = this.props.movie
    if (!title) {
      return null;
    }
    return (
      <div className={cx('archEntryContainer')} onClick={(e)=>this.handleExpand(e.target)}>
        <div className={cx('archEntry', 'posterContainer')}>
          <div
            className={cx('archPoster')}
            style= {{
              'backgroundImage': `url(${posterUrl})`
            }}
          />
        </div>
        <div className={cx('archEntry', 'fieldContainer')}>
          <div className={cx('archEntry', 'titleContainer')}>
            <p className={cx('field', 'archTitle', 'archValue')}> {title} </p>
          </div>
          <div className={cx('no-title-container')}>
            <div className={cx('archEntry', 'userRatingContainer')}>
              <p className={cx('field', 'archText')}>User Rating:&nbsp;</p>
              <p className={cx('field', 'archUserRating', 'archValue')}> {userRating} </p>
            </div>
            <div className={cx('archEntry', 'yearContainer')}>
              <p className={cx('field', 'archText')}>Year:&nbsp;</p>
              <p className={cx('field', 'archYear', 'archValue')}> {year} </p>
            </div>
            <div className={cx('archEntry', 'genreContainer')}>
              <p className={cx('field', 'archText')}>Genres:&nbsp;</p>
              <p className={cx('field', 'archGenre', 'archValue')}> {genres} </p>
            </div>
            <div className={cx('archEntry', 'directorContainer')}>
              <p className={cx('field', 'archText')}>Director:&nbsp;</p>
              <p className={cx('field', 'archDirector', 'archValue')}> {director} </p>
            </div>
            <div className={cx('archEntry', 'actorsContainer')}>
              <p className={cx('field', 'archText')}>Actors:&nbsp;</p>
              <p className={cx('field', 'archActors', 'archValue')}> {actors} </p>
            </div>
            <div className={cx('archButtonContainer')} >
              <div className={cx('archEditButtonContainer')} onClick={(e)=>this.handleEdit(e)}>
                <span className="far fa-edit archEditButton"></span>
              </div>
              <ArchEditModal
                showModal={this.state.showEditModal}
                userRating={userRating}
                userComment={userComment}
                movieId={id}
                handleCloseModal={this.handleCloseModal}
                handleUserRating={this.props.handleUserRating}
                handleUserComment={this.props.handleUserComment}
                fetchAllMovies={this.props.fetchAllMovies}
                fromArchive={true}
              />
              <div className={cx('archDelButtonContainer')} onClick={(e)=>this.handleDelete(e, id)}>
                <span className="far fa-trash-alt archDelButton"></span>
              </div>
            </div>
          </div>
        </div>
        <div className={cx('commentContainer')}>
          <div className={cx('archEntry', 'userCommentContainer')}>
            <p className={cx('field', 'archUserComment', 'archValue')}>
              <span className={cx('field', 'archText')}>User Comment:&nbsp;</span>
              {userComment}
            </p>
          </div>
        </div>
      </div>
    )
  }
}

MovieArchiveCard.PropTypes = {
  title: PropTypes.string,
  posterUrl: PropTypes.string,
  year: PropTypes.string,
  genres: PropTypes.string,
  director: PropTypes.string,
  actors: PropTypes.sting,
  userRating: PropTypes.number,
  userComment: PropTypes.string,
  movies: PropTypes.array,
  handleUserRating: PropTypes.func,
  handleUserComment: PropTypes.func,
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllMovies: () => {
      dispatch(moviesMPFetchMovies());
    },
  }
}

export default connect(null, mapDispatchToProps) (MovieArchiveCard);