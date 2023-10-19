const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class User extends Model {}

User.init({
  name: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  },
  dateOfBirth: {
    type: DataTypes.STRING
  },
  password: {
    type: DataTypes.STRING
  },
  confirmPassword: {
    type: DataTypes.STRING
  },
}, { 
  sequelize, 
  modelName: 'User',
  tableName: 'users',
  timestamps: false
});

module.exports = User;