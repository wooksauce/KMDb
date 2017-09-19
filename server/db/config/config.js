const Sequelize = require('sequelize');

const db = new Sequelize('postgres://cbhxlajh:XGVIRslvugnCAHHGnRtmf1hbka9qi9T-@elmer.db.elephantsql.com:5432/cbhxlajh');

db.authenticate()
.then(data => {
  console.log('DB successfully connected');
})
.catch(err => {
  console.log('DB not connected');
})

module.exports = db;