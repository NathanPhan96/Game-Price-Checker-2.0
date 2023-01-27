const { Game } = require("../models");

const gameData = [
  {
    id: 0,
    name: "Super Mario 64",
    platform: 1,
    price: 10.99,
    url: null,
    user_id: null,
    post_date: "2021-01-01",
  },
];

const seedGames = () => Game.bulkCreate(gameData);

module.exports = seedGames;
