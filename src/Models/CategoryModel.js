const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Category extends Model {}

Category.init({
  name: {
    type: DataTypes.STRING
  }
}, { 
  sequelize, 
  modelName: 'Category',
  tableName: 'categories',
  timestamps: false
});

module.exports = Category;