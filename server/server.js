require('dotenv').config();
const express = require('express');
const parser = require('body-parser');
const path = require('path');
const routes = require('./routes/serverRouter')

const app = express();

const port = 3334;

//initialize db
require('./db/config/config');

app.use(parser.json());

app.use(parser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, '../client/static')));

app.use('/api', routes)

app.listen(port, () => {
  console.log(`node listening on ${port}`);
});