// import { setTimeout } from 'timers';

const Movie = require('../db/index');
const imdb = require('imdb-api');
var Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = {
  getMovie: (req, res) => {
    imdb.getById(req.params.imdbid, {
      apiKey: process.env.IMDB_API_KEY,
      timeout: 30000
    })
    .then(movie => {
      res.status(200).send(movie);
    })
    .catch(err => {
      res.status(404).send("an error occured getting a movie by imdbid", err);
    })
  },

  getMovies: (req, res) => {
    Movie.findAll({order: [['userRating', 'DESC']]})
    .then(movies => {
      res.status(200).send(movies);
    })
    .catch(err => {
      res.status(404).send("an error occured while fetching movies", err);
    })
  },

  searchIMDbMovies: (req, res) => {
    setTimeout(()=>
    imdb.search({
      title: req.params.search}, {
        apiKey: process.env.IMDB_API_KEY
      }).then((movies) => {
        console.log('movies', movies)
        res.status(200).send(movies);
      }).catch((err) => {
        res.status(404).send("an error occured while searcing for a movie", err);
      })
    , 3000)
  },

  searchUDbMovies: (req, res) => {
    let searchStr = req.params.search
    let modified = '^[' + searchStr.split('').join('|') + ']';
    Movie.findAll({
      where: {
        title: {
          [Op.iRegexp]: searchStr,
        }
      }
    })
      .then((movies) => {
        res.status(200).send(movies);
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

  saveMovie: (req, res) => {
    const { title, posterUrl, year, genres, userRating, userComment, director, actors } = req.body;
    const movieInfo = {
      title: title,
      posterUrl: posterUrl,
      year: year,
      genres: genres,
      director: director,
      actors: actors,
      userRating: userRating,
      userComment: userComment,
    };

    Movie.create(movieInfo)
      .then(movie => {
        res.status(200).send(movie);
      })
      .catch(err => {
        res.status(404).send(err);
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
  },

  updateMovie: (req, res) => {
    Movie.update({
      userRating: req.body.userRating,
      userComment: req.body.userComment,
    }, {
      where: {id: req.params.id}
    })
    .then((data) => {
      res.status(200).send(data);
    })
    .catch(err => {
      res.status(404).send(err);
    })
  }
}