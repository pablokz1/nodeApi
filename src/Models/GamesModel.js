const { Sequelize, Model, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
});

class Games extends Model {}
Games.init({
  name: DataTypes.STRING,
  plataform: DataTypes.STRING,
  category: DataTypes.STRING,
}, { sequelize, modelName: 'games' });

sequelize.sync();

module.exports = Games;