const Category = require('../Models/CategoryModel');
const Game = require('../Models/GameModel');
const CategoryGame = require('../Models/CategoryGameModel');
const Plataform = require('../Models/PlataformModel');

async function get(req, res) {
    const games = await Game.findAll({include: Category});
    res.json(games);
}

async function getById(req, res) {
    const game = await Game.findByPk(req.params.id);
    res.json(game);
}

async function post(req, res) { 
    const categoryId = req.body.categories[0].id;
    const game = await Game.create(req.body);
    const category = await Category.findByPk(categoryId);
    await CategoryGame.create({GameId: game.id, CategoryId: category.id})
    res.json(await Game.findByPk(game.id, {include: Category}));
}

async function put(req, res) {
    const game = await Game.findByPk(req.params.id, {include: Category});
    if (game) {
        await game.update(req.body);
        const categoryId = req.body.categories[0].id;
        const existingCategory = game.Categories.find(c => c.id == categoryId);
        if(existingCategory == null){
            const category = await Category.findByPk(categoryId);
            await CategoryGame.create({GameId: game.id, CategoryId: category.id});
        }
        res.json(await Game.findByPk(game.id, {include: Category}));
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