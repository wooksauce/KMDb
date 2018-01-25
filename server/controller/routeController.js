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
      }).then((movies) => {
        // console.log('im in search ctroller', movies);
        res.status(200).send(movies);
      }).catch((err) => {
        // console.log('server ctrl err', err);
      })
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
    const { title, posterUrl, year, genre, userRating, userComment } = req.body;
    const movieInfo = {
      title: title,
      posterUrl: posterUrl,
      year: year,
      genre: genre,
      // rating: imdbRating,
      userRating: userRating,
      userComment: userComment,
    };

    Movie.create(movieInfo)
      .then(data => {
        res.status(200).send(data);
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
  }
}