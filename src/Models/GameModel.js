const { Model, DataTypes, Deferrable } = require('sequelize');
const sequelize = require('../config/database');
const Plataform = require('./PlataformModel');
const Category = require('./CategoryModel');

class Game extends Model {}

Game.init({
  name: {
    type: DataTypes.STRING
  },
  plataform_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Plataform,
      key: 'id',
      deferrable: Deferrable.INITIALLY_IMMEDIATE
    }
  },
}, { 
  sequelize, 
  modelName: 'Game',
  tableName: 'games',
  timestamps: false
});

Game.belongsToMany(Category, {through: 'categories_games'});
Category.belongsToMany(Game, {through: 'categories_games'});

module.exports = Game;