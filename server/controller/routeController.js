const Movie = require('../db/index');
const imdb = require('imdb-api');
var Sequelize = require('sequelize');
const Op = Sequelize.Op;

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

  searchIMDbMovies: (req, res) => {
    imdb.search({
      title: req.params.search}, {
        apiKey: process.env.IMDB_API_KEY
      }).then(() => {
        console.log('im in search ctroller');
      }).catch((err) => {
        console.log('server ctrl err', err);
      })
  },

  searchUDbMovies: (req, res) => {
    console.log('udb req params', req.params)
    let searchStr = req.params.search
    let modified = '[' + searchStr.split('').join('|') + ']';
    Movie.findAll({
      where: {
        title: {
          [Op.regexp]: modified,
        }
      }
    })
      .then((movie) => {
        console.log('im in udb search ctroller', movie);
      }).catch((err) => {
        console.log('server udb ctrl err', err);
      })
  },

  sortMovies: (req, res) => {
    let order = req.params.sortBy === 'title' ? 'ASC' : 'DESC';
    Movie.findAll({ limit: 10, order: [[req.params.sortBy, order]]})
    .then(movies => {
      res.status(200).send(movies);
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
    imdb.get(movieInfo.title, {apiKey: '629c12bf'})
    .then(movie => {
      console.log('here')
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
    .catch(err => {
      console.log('wrong name', err)
    })
  },

  deleteMovie: (req, res) => {
    Movie.destroy({where: {id: req.params.id}})
    .then(destroyed => {
      res.sendStatus(200).send(destroyed);
    })
    .catch(err => {
      res.sendStatus(404).send("an error occured", err);
    })
  }
}