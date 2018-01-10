import React, { Component } from 'react';

export default class udbSearchMovieEntry extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { title, poster, year, genre, rating, myRating, comments } = this.props.movie;
    return(
      <div>
        <h2> {title} </h2>
      </div>
    );
  }
}