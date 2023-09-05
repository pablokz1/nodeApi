const express = require('express');
const user = require('./controller/UserController');
const routes = require('./routes/routes');
const app = express();

app.use(express.json());
app.use(routes);


module.exports = app;