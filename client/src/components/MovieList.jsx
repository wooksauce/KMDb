import {Component} from 'react'


const MovieList = ({movies}) => (
  <div>
    {movies.map((movie, i) => {
      console.log(movie);
      <MovieEntry movie={movie} key={i}/>
    })}
  </div>
)

export default MovieList;