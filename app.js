const express = require('express');
const routes = require('./src/routes/routes');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(routes);

module.exports = app;