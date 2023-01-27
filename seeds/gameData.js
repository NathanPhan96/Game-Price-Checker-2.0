const { Game } = require("../models");

const gameData = [
  {
    id: 0,
    name: "Super Mario 64",
    platform: 1,
    price: 10.99,
    url: null,
    user_id: 1,
    post_date: "2021-01-01",
  },
  {
    name: "BioShock",
    platform: 1,
    price: 22.99,
    url: null,
    user_id: 1,
    post_date: "2021-01-02",
  },
  {
    name: "The Legend of Zelda: Ocarina of Time",
    platform: 1,
    price: 10.99,
    url: null,
    user_id: 1,
    post_date: "2021-01-03",
  },
  {
    name: "The Legend of Zelda: Majora's Mask",
    platform: 1,
    price: 10.99,
    url: null,
    user_id: 1,
    post_date: "2021-01-04",
  },
  {
    name: "The Legend of Zelda: Twilight Princess",
    platform: 1,
    price: 10.99,
    url: null,
    user_id: 1,
    post_date: "2021-01-05",
  },
];

const seedGames = () => Game.bulkCreate(gameData);

module.exports = seedGames;
