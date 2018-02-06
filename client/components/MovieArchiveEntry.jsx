import React, { Component } from 'react';
import $ from 'jquery';
import axios from 'axios';
import { connect } from 'react-redux';
import { moviesFetchData } from '../actions/moviesActions';
import ArchEditModal from './ArchEditModal';
import classNames from 'classnames/bind';
import styles from './scss/movieArchiveEntry.scss';

const cx = classNames.bind(styles);

class MovieArchiveEntry extends Component{
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
      $(el).closest(".archEntryContainer").find(".fieldContainer").css({
        'height': 'auto',
        'padding': '16 0',
      });
      $(el).closest(".archEntryContainer").css({
        'height': 'auto',
      });
      $(el).closest(".archEntryContainer").find(".userCommentContainer").css({
        'max-height': '100%',
      });
      this.setState({expanded: true});
    } else {
      $(el).closest(".archEntryContainer").find(".fieldContainer").css({
        'height': '145px',
        'padding': '16 0 0',
      });
      this.setState({expanded: false});
    }
  }

  handleEdit(e) {
    this.setState({showEditModal: true})
  }

  handleCloseModal() {
    this.setState({showEditModal: false});
  }

  handleDelete(e, movieId) {
    if (!e) var e = window.event;
    // e.cancelBubble = true;
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
    const { title, posterUrl, year, genre, imdbRating, userRating, userComment, id } = this.props.movie
    if (!title) {
      return null;
    }
    return (
      <div className={cx('archEntryContainer')} onClick={(e)=>this.handleExpand(e.target)}>
        <div className={cx('archEntry', 'posterContainer')}>
          <img className={cx('archPoster')} src={posterUrl} />
        </div>
        <div className={cx('archEntry', 'fieldContainer')}>
          <div className={cx('archEntry', 'titleContainer')}>
            <p className={cx('field', 'archText')}>Title:&nbsp;</p>
            <p className={cx('field', 'archTitle', 'archValue')}> {title} </p>
          </div>
          <div className={cx('archEntry', 'yearContainer')}>
            <p className={cx('field', 'archText')}>Year:&nbsp;</p>
            <p className={cx('field', 'archYear', 'archValue')}> {year} </p>
          </div>
          <div className={cx('archEntry', 'genreContainer')}>
            <p className={cx('field', 'archText')}>Genre:&nbsp;</p>
            <p className={cx('field', 'archGenre', 'archValue')}> {genre} </p>
          </div>
          <div className={cx('archEntry', 'userRatingContainer')}>
            <p className={cx('field', 'archText')}>My Rating:&nbsp;</p>
            <p className={cx('field', 'archUserRating', 'archValue')}> {userRating} </p>
          </div>
          <div className={cx('archEntry', 'userCommentContainer')}>
            <p className={cx('field', 'archUserComment', 'archValue')}>
              <span className={cx('field', 'archText')}>My Comment:&nbsp;</span>
              {userComment}
            </p>
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
            />
            <div className={cx('archDelButtonContainer')} onClick={(e)=>this.handleDelete(e, id)}>
              <span className="far fa-trash-alt archDelButton"></span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllMovies: () => {
      dispatch(moviesFetchData());
    },
  }
}

export default connect(null, mapDispatchToProps) (MovieArchiveEntry);