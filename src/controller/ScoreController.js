const Score = require('../Models/ScoreModel');

async function get(req, res) {
    const scores = await Score.findAll();
    res.json(scores);
}

async function getById(req, res) {
    const score = await Score.findByPk(req.params.id);
    res.json(score);
}

async function post(req, res) {
    const note = req.body.note;
    if (note < 0.0 || note > 10.0) {
        res.status(400).json({ message: 'The grade must be between 0.0 and 10.0' });
    } else {
        const score = await Score.create(req.body);
        res.json(score);
    }
}

async function put(req, res) {
    const score = await Score.findByPk(req.params.id);
    const note = req.body.note;
    if (score) {
        if (note < 0.0 || note > 10.0) {
            res.status(400).json({ message: 'The grade must be between 0.0 and 10.0' });
        } else {
            await score.update(req.body);
            res.json(score);
        }
    } else {
        res.status(404).json({ message: 'Score not found' });
    }
}

async function delet(req, res) {
    const score = await Score.findByPk(req.params.id);
    if (score) {
        await score.destroy();
        res.json({ message: 'Score deleted' });
    } else {
        res.status(404).json({ message: 'Score  not found' });
    }
}

module.exports = {
    get,
    getById,
    post,
    put,
    delet
};