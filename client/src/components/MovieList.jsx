import React, {Component} from 'react';
import MovieEntry from './MovieEntry';


const MovieList = ({movies}) => (
  <div className="movieList">
    {console.log(movies)}
    {movies.map((movie, i) => {
      console.log(movie);
      <MovieEntry poster={movie.poster} title={movie.title} year={movie.year} 
        genre={movie.genre} rating={movie.rating} myRating={movie.myRating} 
        comments={movie.comments} key={i}/>
    })}
  </div>
)

export default MovieList;