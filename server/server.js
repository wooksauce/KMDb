const express = require('express');
const parser = require('body-parser');
const path = require('path');
const routes = require('./routes')

const app = express();

const port = 5555;

//initialize db
require('./db/config/config');

app.use(parser.json());

app.use([arser.urlencoded({extended: true})]);

app.use(express.static(path.join(__dirname, '../client/static')));

app.use('/api', routes)

app.listen(port, () => {
  console.log(`node listening on ${port}`);
});