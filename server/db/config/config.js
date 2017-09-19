const Sequelize = require('sequelize');

const db = new Sequelize(process.env.DB_URL);

db.authenticate()
.then(data => {
  console.log('DB successfully connected');
})
.catch(err => {
  console.log('DB not connected');
})

module.exports = db;