import {Component} from 'react'


const Movies = ({movies}) => {
  render() (
    <div>
      {movies.map((movie, i) => {
        <MovieEntry movie={movie} key={i}/>
      })}
    </div>
  )
}