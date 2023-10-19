const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/database");

class CategoryGame extends Model {}

CategoryGame.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    GameId: {
      type: DataTypes.INTEGER,
    },
    CategoryId: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    modelName: "CategoryGame",
    tableName: "categories_games",
    timestamps: false,
  }
);

module.exports = CategoryGame;
