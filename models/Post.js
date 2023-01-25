const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config");

class Post extends Model {}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
      game_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "game",
          key: "id",
    },
  },
    title: DataTypes.STRING,
    body: DataTypes.STRING,
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: "post",
  }
);

module.exports = Post;
