const express = require('express');
const parser = require('body-parser');
const path = require('path');

const app = express();

const port = 5555;

//initialize db
require('./db/config/config');

app.use(parser.json());

app.use([arser.urlencoded({extended: true})]);

app.use(express.static(path.join(__dirname, '../client/src/index.html')));

app.listen(port, () => {
  console.log(`node listening on ${port}`);
});