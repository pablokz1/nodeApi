const Plataform = require('../Models/PlataformModel')

async function get(req, res) {
    const plataforms = await Plataform.findAll();
    res.json(plataforms);
}

async function getById(req, res) {
    const paltaform = await Plataform.findByPk(req.params.id);
    res.json(paltaform);
}

async function post(req, res) {
    const paltaform = await Plataform.create(req.body);
    res.json(paltaform);
}

async function put(req, res) {
    const paltaform = await Plataform.findByPk(req.params.id);
    if (paltaform) {
        await paltaform.update(req.body);
        res.json(paltaform);
    } else {
        res.status(404).json({ message: 'Gaming Plataform not found' });
    }
}

async function delet(req, res) {
    const paltaform = await Plataform.findByPk(req.params.id);
    if (paltaform) {
        await paltaform.destroy();
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