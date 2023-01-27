const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config");

class history_price extends Model {}
history_price.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        game_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: false,
            references: {
                model: "game",
                key: "id",
            },
        },
        price: {
            type: DataTypes.DECIMAL(5, 2),
            allowNull: false,
            unique: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            unique: false,
            references: {
                model: "user",
                key: "id",
            },
        },
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        modelName: "history_price",
    }
);

module.exports = history_price;
