const db = require('./config/config');
const Sequelize = require('sequelize');

const Movie = db.define('Movie', {
  poster: {
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
  rating: {
    type: Sequelize.FLOAT,
    allowNull: true
  },
  myRating: {
    type: Sequelize.FLOAT,
    allowNull: true
  },
  comments: {
    type: Sequelize.STRING,
    allowNull: true
  }
}, {
  timestamps: false
})

db.sync();

module.exports = Movie;