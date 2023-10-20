const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Game = require('./GameModel');
const User = require('./UserModel');

class Score extends Model {}

Score.init({
  note: {
    type: DataTypes.FLOAT,
    validate: {
        min: 0.0,
        max: 10.0
    }
  },
  game_id: {
    type: DataTypes.INTEGER,
    references: {
        model: 'games',
        key: 'id',
      }
  }, 
  user_id: {
    type: DataTypes.INTEGER,
    references: {
        model: User,
        key: 'id',
      }
  }
}, { 
  sequelize, 
  modelName: 'Score',
  tableName: 'scores',
  timestamps: false
});

module.exports = Score;