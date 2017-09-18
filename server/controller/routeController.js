const Movie = require('../db/index');

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

  postMovie: (req, res) => {
    Movie.create(req.body)
    .then(data => {
      res.status(200).send(data);
    })
    .catch(err => {
      res.status(404).send("an error occured", err);
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