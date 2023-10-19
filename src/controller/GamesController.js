const Category = require('../Models/CategoryModel');
const Game = require('../Models/GameModel');

async function get(req, res) {
    const games = await Game.findAll({include: Category});
    res.json(games);
}

async function getById(req, res) {
    const game = await Game.findByPk(req.params.id);
    res.json(game);
}

async function post(req, res) { 
    const game = await Game.create(req.body, {include: Category});
    res.json(game);
}

async function put(req, res) {
    const game = await Game.findByPk(req.params.id);
    if (game) {
        await game.update(req.body);
        res.json(game);
    } else {
        res.status(404).json({ message: 'Game not found' });
    }
}

async function delet(req, res) {
    const game = await Game.findByPk(req.params.id);
    if (game) {
        await game.destroy();
        res.json({ message: 'Game deleted' });
    } else {
        res.status(404).json({ message: 'Game  not found' });
    }
}

module.exports = {
    get,
    getById,
    post,
    put,
    delet
};