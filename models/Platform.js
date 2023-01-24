const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config");

class Platform extends Model {}

Platform.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    modelName: "platform",
  }
);

module.exports = Platform;
