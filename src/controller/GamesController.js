const Games = require('../Models/GamesModel')

async function get(req, res) {
    const users = await Games.findAll();
    res.json(users);
}

async function getById(req, res) {
    const user = await Games.findByPk(req.params.id);
    res.json(user);
}

async function post(req, res) {
    const user = await Games.create(req.body);
    res.json(user);
}

async function put(req, res) {
    const user = await Games.findByPk(req.params.id);
    if (user) {
        await user.update(req.body);
        res.json(user);
    } else {
        res.status(404).json({ message: 'Game not found' });
    }
}

async function delet(req, res) {
    const user = await Games.findByPk(req.params.id);
    if (user) {
        await user.destroy();
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