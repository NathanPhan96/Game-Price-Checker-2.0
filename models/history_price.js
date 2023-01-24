const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../config");

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
        post_date: {
            type: DataTypes.DATE,
            allowNull: false,
            unique: false,
        },
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        modelName: "history_price",
    }
);
