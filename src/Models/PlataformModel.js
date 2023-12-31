const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Plataform extends Model {}

Plataform.init({
  name: {
    type: DataTypes.STRING
  }
}, { 
  sequelize, 
  modelName: 'Plataform',
  tableName: 'plataforms',
  timestamps: false
});

module.exports = Plataform;