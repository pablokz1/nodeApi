const { Sequelize, Model, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
});

class Plataform extends Model {}
Plataform.init({
  name: DataTypes.STRING
}, { sequelize, modelName: 'Plataform' });

sequelize.sync();

module.exports = Plataform;