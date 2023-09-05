const express = require('express');
const user = require('../controller/UserController');
const games = require('../controller/GamesController');
const plataforms = require('../controller/GamingPlatformController');
const category = require('../controller/CategoryController');
const score = require('../controller/ScoreController');
const routes = express();

routes.get('/user', user.get);
routes.get('/user/:id', user.getById);
routes.post('/user', user.post);
routes.put('/user/:id', user.put);
routes.delete('/user/:id', user.delet);

routes.get('/games', games.get);
routes.get('/games/:id', games.getById);
routes.post('/games', games.post);
routes.put('/games/:id', games.put);
routes.delete('/games/:id', games.delet);

routes.get('/plataforms', plataforms.get);
routes.get('/plataforms/:id', plataforms.getById);
routes.post('/plataforms', plataforms.post);
routes.put('/plataforms/:id', plataforms.put);
routes.delete('/plataforms/:id', plataforms.delet);

routes.get('/category', category.get);
routes.get('/category/:id', category.getById);
routes.post('/category', category.post);
routes.put('/category/:id', category.put);
routes.delete('/category/:id', category.delet);

routes.get('/score', score.get);
routes.get('/score/:id', score.getById);
routes.post('/score', score.post);
routes.put('/score/:id', score.put);
routes.delete('/score/:id', score.delet);

module.exports = routes;
