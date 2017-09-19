const Movie = require('../db/index');
const imdb = require('imdb-api');

module.exports = {
  getMovies: (req, res) => {
    Movie.findAll()
    .then(movies => {
      res.status(200).send(movies);
    })
    .catch(err => {
      res.status(404).send("an error occured", err);
    })
  },

  searchMovie: (req, res) => {
    Movie.findOne({where: {title: req.params.title}})
    .then(movie => {
      res.status(200).send(movie);
    })
    .catch(err => {
      res.status(404).send("an error occured", err);
    })
  },

  postMovie: (req, res) => {
    const movieInfo = {};
    movieInfo.title = req.body.title;
    movieInfo.myRating = req.body.myRating;
    movieInfo.comments = req.body.comments;
    imdb.get(movieInfo.title, {apiKey: process.env.IMDB_API_KEY})
    .then(movie => {
      console.log(movie)
      movieInfo.poster = movie.poster
      movieInfo.year = movie.year
      movieInfo.genre = movie.genres
      movieInfo.rating = movie.rating
    })
    .then(() => {
      Movie.create(movieInfo)
      .then(data => {
        res.status(200).send(data);
      })
      .catch(err => {
        res.status(404).send("an error occured", err);
      })
    })
  },

  deleteMovie: (req, res) => {
    Movie.destroy({where: {id: req.params.id}})
    .then(destroyed => {
      res.status(200).send(destroyed);
    })
    .catch(err => {
      res.status(404).send("an error occured", err);
    })
  }
}