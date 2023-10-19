const Category = require('../Models/CategoryModel');

async function get(req, res) {
    const categories = await Category.findAll();
    res.json(categories);
}

async function getById(req, res) {
    const category = await Category.findByPk(req.params.id);
    res.json(category);
}

async function post(req, res) {
    const category = await Category.create(req.body);
    res.json(category);
}

async function put(req, res) {
    const category = await Category.findByPk(req.params.id);
    if (category) {
        await category.update(req.body);
        res.json(category);
    } else {
        res.status(404).json({ message: 'Category not found' });
    }
}

async function delet(req, res) {
    const category = await Category.findByPk(req.params.id);
    if (category) {
        await category.destroy();
        res.json({ message: 'Category deleted' });
    } else {
        res.status(404).json({ message: 'Category  not found' });
    }
}

module.exports = {
    get,
    getById,
    post,
    put,
    delet
};