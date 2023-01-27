const { Game } = require("../models");

const gameData = [
  {
    name: "Super Mario 64",
    platform: 1,
    price: 10.99,
    url: null,
    user_id: 1,
  },
  {
    name: "BioShock",
    platform: 1,
    price: 22.99,
    url: null,
    user_id: 1,
  },
  {
    name: "The Legend of Zelda: Ocarina of Time",
    platform: 1,
    price: 10.99,
    url: null,
    user_id: 1,
  },
  {
    name: "The Legend of Zelda: Majora's Mask",
    platform: 1,
    price: 10.99,
    url: null,
    user_id: 1,
  },
  {
    name: "The Legend of Zelda: Twilight Princess",
    platform: 1,
    price: 10.99,
    url: null,
    user_id: 1,
  },
  {
    name: "The Legend of Zelda: Link's Awakening",
    platform: 11,
    price: 10.99,
    url: https://www.gamestop.com/video-games/nintendo-switch/products/the-legend-of-zelda-links-awakening---nintendo-switch/205958.html,
    user_id: 1,
  },
];

const seedGames = () => Game.bulkCreate(gameData);

module.exports = seedGames;
