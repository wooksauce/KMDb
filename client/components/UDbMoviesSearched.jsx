import React, { Component } from 'react';
import MovieEntry from './MovieEntry';

export default class UDbMoviesSearched extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { udbResults } = this.props;
    if (!udbResults || !udbResults.length) {
      return null;
    }
    const udbMovies = makeMovieEntry(udbResults);
    return (
      <div className="udbResultsContainer searchList">
        {udbMovies}
      </div>
    );
  }
}

const makeMovieEntry = (movies = []) => {
  if (movies) {
    return movies.map((movie) => <MovieEntry movie={movie} imdb={false} key={movie.id} />)
  }
}