const db = require('./config/config');
const Sequelize = require('sequelize');

const Movie = db.define('Movie', {
  posterUrl: {
    type: Sequelize.STRING,
    allowNull: true
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  year: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  genre: {
    type: Sequelize.STRING,
    allowNull: true
  },
  imdbRating: {
    type: Sequelize.FLOAT,
    allowNull: true
  },
  userRating: {
    type: Sequelize.FLOAT,
    allowNull: true
  },
  userComment: {
    type: Sequelize.STRING,
    allowNull: true
  }
}, {
  timestamps: false
})

db.sync();

module.exports = Movie;