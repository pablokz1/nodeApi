const Plataform = require('../Models/PlataformModel')

async function get(req, res) {
    const users = await Plataform.findAll();
    res.json(users);
}

async function getById(req, res) {
    const user = await Plataform.findByPk(req.params.id);
    res.json(user);
}

async function post(req, res) {
    const user = await Plataform.create(req.body);
    res.json(user);
}

async function put(req, res) {
    const user = await Plataform.findByPk(req.params.id);
    if (user) {
        await user.update(req.body);
        res.json(user);
    } else {
        res.status(404).json({ message: 'Gaming Plataform not found' });
    }
}

async function delet(req, res) {
    const user = await Plataform.findByPk(req.params.id);
    if (user) {
        await user.destroy();
        res.json({ message: 'Gaming Plataform  deleted' });
    } else {
        res.status(404).json({ message: 'Gaming Plataform  not found' });
    }
}

module.exports = {
    get,
    getById,
    post,
    put,
    delet
};