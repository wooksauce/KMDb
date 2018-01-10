import React, { Component } from 'react';
import MovieEntry from './MovieEntry';

export default class ImdbMoviesSearched extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { imdbResults } = this.props;
    if (!imdbResults || !imdbResults.length) {
      return null;
    }
    const imdbMovies = makeMovieEntry(imdbResults);
    return(
      <div className="imdbResultsContainer searchList">
        {imdbMovies}
      </div>
    )
  }
}

//same as the one in UDbMoviesSearched. Should I have this in container level? or import it?
const makeMovieEntry = (movies = []) => {
  if (movies) {
    return movies.map((movie) => <MovieEntry movie={movie} imdb={true} key={movie.id} />)
  }
}