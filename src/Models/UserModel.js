const { Sequelize, Model, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
});

class User extends Model {}
User.init({
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  dateOfBirth: DataTypes.STRING,
  password: DataTypes.STRING,
  confirmPassword: DataTypes.STRING,
}, { sequelize, modelName: 'user' });

sequelize.sync();

module.exports = User;