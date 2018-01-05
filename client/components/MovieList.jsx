import React, {Component} from 'react';
import MovieEntry from './MovieEntry';


const MovieList = ({ movies, deleteMovie }) => (
  <div className="movieList">
    {movies.map((movie, i) => (
      <MovieEntry movie={movie} id={movie.id} poster={movie.poster} title={movie.title} year={movie.year} 
        genre={movie.genre} rating={movie.rating} myRating={movie.myRating} 
        comments={movie.comments} key={i} deleteMovie={deleteMovie} />
    ))}
  </div>
)

export default MovieList;