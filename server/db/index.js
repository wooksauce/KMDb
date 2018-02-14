const db = require('./config/config');
const Sequelize = require('sequelize');

const Movie = db.define('Movie', {
  posterUrl: {
    type: Sequelize.STRING,
    allowNull: true
  },
  imdbid: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  year: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  genres: {
    type: Sequelize.STRING,
    allowNull: true
  },
  director: {
    type: Sequelize.STRING,
    allowNull: true
  },
  actors: {
    type: Sequelize.STRING,
    allowNull: true
  },
  imdbRating: {
    type: Sequelize.FLOAT,
    allowNull: true
  },
  userRating: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  userComment: {
    type: Sequelize.TEXT,
    allowNull: true
  }
}, {
  timestamps: false
})

db.sync();

module.exports = Movie;