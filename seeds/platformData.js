const { Platform } = require("../models");

const platformData = [
  {
    name: "Nintendo 64",
  },
  {
    name: "Playstation",
  },
  {
    name: "Playstation 2",
  },
  {
    name: "Playstation 3",
  },
  {
    name: "Playstation 4",
  },
  {
    name: "Playstation 5",
  },
  {
    name: "Xbox",
  },
  {
    name: "Xbox 360",
  },
  {
    name: "Xbox One",
  },
  {
    name: "Xbox Series X",
  },
  {
    name: "Nintendo Switch",
  },
  {
    name: "PC",
  },
];

const seedPlatform = () => Platform.bulkCreate(platformData);

module.exports = seedPlatform;
