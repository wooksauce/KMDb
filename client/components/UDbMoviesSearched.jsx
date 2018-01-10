import React, { Component } from 'react';
import MovieEntry from './UDbSearchMovieEntry';

export default class UserMoviesSearched extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { udbResults } = this.props;
    if (!udbResults || !udbResults.length) {
      return null;
    }
    const udbMovies = makeMovieEntry(udbResults);
    console.log('udbResults', this.props.udbResults)
    return (
      <div>
        {udbMovies}
      </div>
    );
  }
}

const makeMovieEntry = (movies = []) => {
  if (movies) {
    return movies.map((movie) => <MovieEntry movie={movie} key={movie.id} />)
  }
}

// const mapStateToProps = (state) => {
//   return {
//     udbResults: state.movies.udbResults,
//   }
// }

// export default connect(mapStateToProps, null) (UserMoviesSearched);