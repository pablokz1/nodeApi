const User = require('../Models/UserModel')

async function get(req, res) {
    const users = await User.findAll();
    res.json(users);
}

async function getById(req, res) {
    const user = await User.findByPk(req.params.id);
    res.json(user);
}

async function post(req, res) {
    const user = await User.create(req.body);
    res.json(user);
}

async function put(req, res) {
    const user = await User.findByPk(req.params.id);
    if (user) {
        await user.update(req.body);
        res.json(user);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
}

async function delet(req, res) {
    const user = await User.findByPk(req.params.id);
    if (user) {
        await user.destroy();
        res.json({ message: 'User deleted' });
    } else {
        res.status(404).json({ message: 'User not found' });
    }
}

module.exports = {
    get,
    getById,
    post,
    put,
    delet
};