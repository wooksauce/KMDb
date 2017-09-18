const Sequelize = require('sequelize');

const db = new Sequelize('some url');

db.authenticate()
.then(data => {
  console.log('DB successfully connected');
})
.catch(err => {
  console.log('DB not connected');
})